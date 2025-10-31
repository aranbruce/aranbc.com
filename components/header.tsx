import Link from "next/link";
import Button from "./button";
import Logo from "@/app/images/logo";
import LinkedInIcon from "@/app/images/linkedin";
import GithubIcon from "@/app/images/github";

export function Header() {
  return (
    <nav className="fixed left-1/2 z-20 mt-2 flex w-full max-w-5xl -translate-x-1/2 flex-col items-center px-6 py-2 md:px-12 lg:px-24">
      <div className="bg-card/40 border-border flex w-full flex-row items-center justify-between rounded-2xl border px-2 py-2 backdrop-blur-sm md:px-4">
        <Link
          href="/"
          aria-label="Aran Bruce-Caddick logo"
          className="text-foreground"
        >
          <Logo />
        </Link>

        <div className="flex flex-row items-stretch gap-x-2">
          <Button
            variant="secondary"
            size="small"
            href="https://www.linkedin.com/in/aranbc/"
            openInNewTab
            aria-lbel="LinkedIn"
          >
            <LinkedInIcon />
            <span className="hidden sm:inline">LinkedIn</span>
          </Button>

          <Button
            variant="primary"
            size="small"
            href="https://github.com/aranbruce"
            openInNewTab
          >
            <GithubIcon />
            <span>GitHub</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
