import Link from "next/link";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { cn } from "@/lib/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div className="flex w-full flex-col gap-y-4">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className={cn(
              // Base layout
              "flex w-full transform flex-row items-center gap-x-8 overflow-hidden rounded-xl p-4 transition hover:scale-102",
              // Visual styling
              "border-border bg-card drop-shadow-card border backdrop-blur-xs",
            )}
            href={`/blog/${post.slug}`}
          >
            <div className="flex w-full flex-col gap-y-2">
              <h4 className="text-foreground font-semibold">
                {post.metadata.title}
              </h4>
              <p className="text-secondary-foreground text-sm">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-secondary-foreground size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        ))}
    </div>
  );
}
