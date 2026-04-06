import Link from "next/link";
import { getBlogPosts } from "@/app/blog/utils";
import { cn } from "@/lib/utils";

export function BlogPosts() {
  const posts = [...getBlogPosts()].sort((a, b) =>
    b.metadata.publishedAt.localeCompare(a.metadata.publishedAt),
  );

  return (
    <ul className="m-0 -mx-2.5 flex w-full list-none flex-col gap-y-2">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="group flex w-full items-baseline justify-between gap-6 rounded-full border-0 bg-transparent no-underline"
          >
            <h3 className="m-0 max-w-[min(100%,42rem)] min-w-0 text-base leading-snug">
              <span
                className={cn(
                  "inline-block w-fit max-w-full rounded-full px-2.5 py-1 text-pretty text-foreground",
                  "bg-transparent transition-colors duration-200 ease-out",
                  "border border-transparent group-hover:border-border group-hover:bg-card group-hover:shadow-card group-focus-visible:bg-muted",
                )}
              >
                {post.metadata.title}
              </span>
            </h3>
            <time
              dateTime={post.metadata.publishedAt}
              className="shrink-0 pr-2 text-sm text-muted-foreground tabular-nums"
            >
              {new Date(post.metadata.publishedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  );
}
