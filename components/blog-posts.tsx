import Link from "next/link";
import { formatDate, getBlogPosts } from "@/app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div className="w-full">
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
            className="drop-shadow-card hover:scale-102 flex w-full transform flex-row items-center gap-x-8 overflow-hidden rounded-xl border border-gray-200 bg-white/70 p-4 backdrop-blur-sm transition"
            href={`/blog/${post.slug}`}
          >
            <div className="flex w-full flex-col gap-y-2">
              <h4 className="font-semibold">{post.metadata.title}</h4>
              <p className="text-secondary text-sm">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-secondary size-6"
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
