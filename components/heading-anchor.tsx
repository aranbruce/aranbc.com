"use client";

import type React from "react";
import { useCopyToast } from "@/components/copy-toast";

type HeadingAnchorProps = {
  slug: string;
};

export function HeadingAnchor({ slug }: HeadingAnchorProps) {
  const showToast = useCopyToast();

  async function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const url = `${window.location.origin}${window.location.pathname}#${slug}`;
    try {
      await navigator.clipboard.writeText(url);
      showToast();
    } catch {
      showToast("Could not copy link");
    }
  }

  return (
    <a
      href={`#${slug}`}
      className="anchor"
      onClick={handleClick}
      aria-label="Copy link to this section"
    />
  );
}
