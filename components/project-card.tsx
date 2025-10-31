import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ProjectCardProps {
  href: string;
  title: string;
  description: string;
  image: ReactNode;
  layout?: "horizontal" | "vertical";
  className?: string;
}

export function ProjectCard({
  href,
  title,
  description,
  image,
  layout = "horizontal",
  className,
}: ProjectCardProps) {
  const isHorizontal = layout === "horizontal";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        // Base styles
        "group w-full transform overflow-hidden rounded-xl transition-all duration-200 ease-in-out hover:scale-102",
        // Layout & visual
        "border-border bg-card drop-shadow-card border backdrop-blur-xs",
        // Layout-specific styles
        isHorizontal ? "grid grid-cols-1 md:grid-cols-3" : "flex flex-col",
        // Custom className override
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-y-2 p-6",
          isHorizontal ? "col-span-2" : "",
        )}
      >
        <h3 className="text-foreground font-semibold">{title}</h3>
        <p className="text-secondary-foreground">{description}</p>
      </div>
      <div
        className={cn(
          "drop-shadow-card col-span-3 mt-auto flex flex-col items-end pt-4 pl-4 transition-all duration-200 ease-in-out group-hover:scale-104",
        )}
      >
        {image}
      </div>
    </Link>
  );
}
