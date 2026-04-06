"use client";

import type React from "react";
import { useCopyToast } from "@/components/copy-toast";

type HeadingAnchorProps = {
  slug: string;
};

export function HeadingAnchor({ slug }: HeadingAnchorProps) {
  const showToast = useCopyToast();

  async function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    const url = `${window.location.origin}${window.location.pathname}#${slug}`;
    try {
      await navigator.clipboard.writeText(url);
      showToast();
      window.history.replaceState(null, "", `#${slug}`);
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      document.getElementById(slug)?.scrollIntoView({
        block: "start",
        behavior: prefersReducedMotion ? "instant" : "smooth",
      });
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
