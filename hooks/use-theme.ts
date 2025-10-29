"use client";

import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  // This effect is necessary to prevent hydration mismatches.
  // The mounted state ensures server and client render the same initial HTML.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Required for hydration safety
    setMounted(true);
  }, []);

  if (!mounted) {
    return {
      theme: undefined,
      setTheme,
      resolvedTheme: undefined,
      mounted: false,
    };
  }

  return {
    theme,
    setTheme,
    resolvedTheme,
    mounted: true,
  };
}
