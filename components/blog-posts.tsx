import Link from "next/link";
import { formatDate, getBlogPosts } from "@/app/blog/utils";

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
            className="flex w-full transform flex-row items-center gap-x-8 overflow-hidden rounded-xl border border-gray-200 p-4 drop-shadow-card backdrop-blur-sm transition hover:scale-102 dark:border-secondary/10 dark:bg-gray-900"
            href={`/blog/${post.slug}`}
          >
            <div className="flex w-full flex-col gap-y-2">
              <h4 className="font-semibold text-primary dark:text-white">
                {post.metadata.title}
              </h4>
              <p className="text-sm text-secondary dark:text-gray-400">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-secondary dark:text-gray-400"
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
