import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer
      className={cn(
        // Layout
        "z-10 flex w-full flex-col items-center gap-y-6 py-8",
        // Visual
      )}
    >
      <div className="flex w-full max-w-5xl flex-col items-start justify-between gap-x-2 gap-y-4 px-6 sm:flex-row md:items-center md:px-12 lg:px-24">
        <div className="flex flex-col gap-y-1">
          <p className="text-sm font-medium text-foreground">
            Aran Bruce-Caddick
          </p>
          <p className="text-sm text-muted-foreground">
            Product builder, code enthusiast, and data nerd
          </p>
        </div>

        <div className="flex items-center gap-x-6">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
