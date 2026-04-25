import { notFound } from "next/navigation";
import { CopyArticleTitle } from "@/components/copy-article-title";
import { CustomMDX } from "@/components/mdx";
import { getBlogPosts } from "@/app/blog/utils";
import { baseUrl } from "@/app/sitemap";
import { Badge } from "@/components/badge";
import Section from "@/components/section";

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<Params> }) {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog(props: { params: Promise<Params> }) {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Section className="*:max-w-2xl pb-24 md:px-8 lg:px-8">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: "Aran Bruce-Caddick",
              },
            }),
          }}
        />

        {/* Category + date eyebrow */}
        <div className="text-caption mb-6 flex items-center gap-3">
          {post.metadata.category && (
            <>
              <Badge variant="category">{post.metadata.category}</Badge>
              <span className="text-border">·</span>
            </>
          )}
          <time dateTime={post.metadata.publishedAt}>
            {new Date(post.metadata.publishedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "UTC",
            })}
          </time>
        </div>

        <CopyArticleTitle>{post.metadata.title}</CopyArticleTitle>

        <article className="prose w-full">
          <CustomMDX source={post.content} />
        </article>
    </Section>
  );
}
