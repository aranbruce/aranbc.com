"use client";

import type React from "react";
import { useCopyToast } from "@/components/copy-toast";
import { cn } from "@/lib/utils";

type CopyArticleTitleProps = {
  className?: string;
  children: React.ReactNode;
};

export function CopyArticleTitle({ className, children }: CopyArticleTitleProps) {
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

  function handleKeyDown(event: React.KeyboardEvent<HTMLHeadingElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      void copyUrl();
    }
  }

  return (
    <h1
      className={cn(className, "cursor-pointer")}
      onClick={() => void copyUrl()}
      onKeyDown={handleKeyDown}
      title="Click to copy link"
      tabIndex={0}
    >
      {children}
    </h1>
  );
}
