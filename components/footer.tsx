import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import Button from "@/components/button";

export function Footer() {
  return (
    <footer className="footer-bg flex w-full flex-col">
      {/* CTA band */}
      <div className="relative flex w-full flex-col items-center overflow-hidden px-12 py-28 text-center">
        <h2 className="max-w-2xl text-[clamp(2rem,4vw,3.5rem)] leading-none font-heading tracking-tighter text-balance">
          <span className="gradient-text-foreground">
            Working on something interesting?
          </span>
        </h2>
        <div className="flex flex-col items-center gap-6">
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Send me an email at aranbruce@gmail.com
          </p>
          <Button asChild variant="primary">
            <a href="mailto:aranbruce@gmail.com">Get in touch</a>
          </Button>
        </div>
      </div>

      {/* Footer bar */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between bg-background/20 px-12 py-5">
        <span className="text-muted-xs">
          © {new Date().getFullYear()} Aran Bruce-Caddick
        </span>

        <div className="flex items-center gap-5">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
