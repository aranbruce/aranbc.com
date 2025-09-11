"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Use resolvedTheme to get the actual theme being applied (handles system theme)
  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "focus-visible:ring-ring focus-visible:ring-offset-background relative inline-flex h-7 w-12 items-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        isDark ? "bg-primary" : "bg-muted",
      )}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
    >
      <span
        className={cn(
          "bg-background inline-block size-5 transform rounded-full transition-transform",
          isDark ? "translate-x-6" : "translate-x-1",
        )}
      />
    </button>
  );
}
