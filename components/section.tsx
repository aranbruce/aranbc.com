import React from "react";
import { cn } from "@/lib/utils";

export default function Section({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"section">) {
  return (
    <section
      className={cn(
        "flex flex-col items-center px-6 py-12 *:mx-auto *:max-w-5xl md:px-12 md:py-12 lg:px-24",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
