import { ThemeToggle } from "./theme-toggle";
import Button from "@/components/button";

export function Footer() {
  return (
    <footer className="flex w-full flex-col *:mx-auto *:max-w-5xl *:px-6 md:*:px-12 lg:*:px-24">
      <div className="flex w-full items-center justify-between bg-background/20 py-5">
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
