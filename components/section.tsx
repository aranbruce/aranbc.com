import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export default function Section({
  children,
  className,
  contentClassName,
}: SectionProps) {
  return (
    <section className={cn("flex flex-col items-center", className)}>
      <div
        className={cn(
          "flex w-full max-w-5xl flex-col items-start gap-y-6 px-6 pt-28 pb-4 md:px-12 md:pt-48 lg:px-24",
          contentClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
