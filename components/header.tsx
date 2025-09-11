import Link from "next/link";
import Button from "./button";
import Logo from "@/app/images/logo";
import LinkedInIcon from "@/app/images/linkedin";
import GithubIcon from "@/app/images/github";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <nav
      className={cn(
        // Base layout
        "fixed z-10 flex w-full flex-col items-center px-6 py-2 md:px-12 lg:px-16",
        // Visual effects
        "backdrop-blur-[1px]",
      )}
    >
      <div className="flex w-full max-w-5xl flex-row items-center justify-between">
        <Link
          href="/"
          aria-label="Aran Bruce-Caddick logo"
          className="text-foreground"
        >
          <Logo />
        </Link>
        <div className="flex flex-row items-center gap-x-3">
          <Button
            variant="secondary"
            size="small"
            href="https://www.linkedin.com/in/aranbc/"
            openInNewTab
          >
            <LinkedInIcon />
            <div className="hidden sm:block">LinkedIn</div>
          </Button>
          <Button
            variant="primary"
            size="small"
            href="https://github.com/aranbruce"
            openInNewTab
          >
            <GithubIcon />
            Github
          </Button>
        </div>
      </div>
    </nav>
  );
}
