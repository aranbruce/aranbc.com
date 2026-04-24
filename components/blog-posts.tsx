import Link from "next/link";
import { getBlogPosts } from "@/app/blog/utils";

export function BlogPosts() {
  const posts = [...getBlogPosts()].sort((a, b) =>
    b.metadata.publishedAt.localeCompare(a.metadata.publishedAt),
  );

  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group grid items-center gap-4 py-4 transition-colors sm:grid-cols-[160px_1fr_20px] border-t border-border-translucent"
        >
          {/* Date */}
          <time
            dateTime={post.metadata.publishedAt}
            className="text-caption hidden [font-variant-numeric:tabular-nums] sm:block"
          >
            {new Date(post.metadata.publishedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
              timeZone: "UTC",
            })}
          </time>

          {/* Title */}
          <span className="col-span-2 text-sm leading-snug tracking-tight text-secondary-foreground sm:col-span-1">
            {post.metadata.title}
            {/* Mobile date */}
            <time
              dateTime={post.metadata.publishedAt}
              className="text-muted-xs ml-2 font-normal sm:hidden"
            >
              {new Date(post.metadata.publishedAt).toLocaleDateString("en-GB", {
                month: "short",
                year: "numeric",
                timeZone: "UTC",
              })}
            </time>
          </span>

          {/* Arrow */}
          <span className="text-caption hidden text-sm transition-colors group-hover:text-foreground sm:block">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}
