"use client";

import type { ReactNode } from "react";
import { useCopyToast } from "@/components/copy-toast";
import { cn } from "@/lib/utils";

type CopyArticleTitleProps = {
  className?: string;
  children: ReactNode;
};

export function CopyArticleTitle({
  className,
  children,
}: CopyArticleTitleProps) {
  const showToast = useCopyToast();

  async function copyUrl() {
    const url = `${window.location.origin}${window.location.pathname}`;
    try {
      await navigator.clipboard.writeText(url);
      showToast();
    } catch {
      showToast("Could not copy link");
    }
  }

  return (
    <h1
      className={cn(
        "mb-6 text-[clamp(1.75rem,4vw,2.5rem)] font-heading text-foreground",
        className,
      )}
    >
      <button
        type="button"
        className="w-full cursor-pointer rounded-sm border-0 bg-transparent p-0 text-left text-inherit"
        onClick={() => void copyUrl()}
        aria-label="Copy link to this article"
      >
        {children}
      </button>
    </h1>
  );
}
