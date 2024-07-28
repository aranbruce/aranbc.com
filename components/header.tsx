import Link from "next/link";
import Button from "./button";
import Logo from "@/app/images/logo";
import LinkedInIcon from "@/app/images/linkedin";
import GithubIcon from "@/app/images/github";

export function Header() {
  return (
    <nav className="to-transparent fixed z-10 flex w-full flex-col bg-gradient-to-b from-gray-100 px-6 py-2 backdrop-blur-[1px] md:px-12 lg:px-16 dark:from-primary">
      <div className="flex flex-row items-center justify-between">
        <Link
          href="/"
          aria-label="Aran Bruce-Caddick logo"
          className="text-primary dark:text-white"
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
