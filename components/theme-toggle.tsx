"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "focus-visible:ring-ring focus-visible:ring-offset-background relative inline-flex h-7 w-12 items-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        theme === "dark" ? "bg-primary" : "bg-muted",
      )}
      role="switch"
      aria-checked={theme === "dark"}
      aria-label="Toggle theme"
    >
      <span
        className={cn(
          "bg-background inline-block size-5 transform rounded-full transition-transform",
          theme === "dark" ? "translate-x-6" : "translate-x-1",
        )}
      />
    </button>
  );
}
