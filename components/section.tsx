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
          "flex w-full max-w-5xl flex-col items-start gap-y-6 px-6 pb-4 pt-48 md:px-12 lg:px-24",
          contentClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
