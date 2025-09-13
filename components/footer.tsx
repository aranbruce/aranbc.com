import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer
      className={cn(
        // Layout
        "z-10 flex w-full flex-col items-center gap-y-6 px-6 py-8 md:px-12 lg:px-16",
        // Visual
      )}
    >
      <div className="flex w-full max-w-5xl flex-row items-start justify-between gap-y-4 md:items-center">
        <div className="flex flex-col gap-y-2">
          <p className="text-foreground text-sm font-medium">
            Aran Bruce-Caddick
          </p>
          <p className="text-muted-foreground text-xs">
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
