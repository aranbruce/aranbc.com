import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  variant?: "status" | "category";
  dotColor?: string;
  children: ReactNode;
  className?: string;
}

export function Badge({
  variant = "status",
  dotColor,
  children,
  className,
}: BadgeProps) {
  if (variant === "category") {
    return (
      <span
        className={cn(
          "inline-flex w-fit items-center rounded-full border border-[color-mix(in_srgb,transparent_70%,#5e6ad2)] bg-[color-mix(in_srgb,transparent_90%,#5e6ad2)] px-2.5 py-0.5 text-xs text-accent-light",
          className,
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1.5 rounded-full border border-border-translucent bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground",
        className,
      )}
    >
      {dotColor && (
        <span
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{
            background: dotColor,
            boxShadow: `0 0 6px ${dotColor}80`,
          }}
        />
      )}
      {children}
    </span>
  );
}
