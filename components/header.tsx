"use client";

import Link from "next/link";
import GithubIcon from "@/app/images/github";
import LinkedInIcon from "@/app/images/linkedin";
import Button from "@/components/button";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-100 mx-auto mt-3 flex items-start justify-center *:mx-5 *:max-w-5xl md:*:mx-12 lg:*:mx-24">
      <div className="flex h-12 w-full items-center rounded-full border border-border-subtle bg-background/60 px-3 backdrop-blur-xl">
        {/* Left: logo */}
        <div className="flex flex-1 items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium tracking-normal text-foreground"
          >
            <span className="logo-gradient flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-md shadow-logo-glow" />
            <span>aranbc</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="primary" size="small" className="h-8.5">
            <a
              href="https://www.linkedin.com/in/aranbc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon width={14} height={14} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="small"
            className="inline-flex"
          >
            <a
              href="https://github.com/aranbruce"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon width={14} height={14} />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
