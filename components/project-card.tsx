import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Badge } from "@/components/badge";

interface ProjectCardProps {
  href: string;
  title: string;
  description: string;
  image: ReactNode;
  layout?: "horizontal" | "vertical";
  status?: string;
  statusColor?: string;
  year?: string;
  className?: string;
}

export function ProjectCard({
  href,
  title,
  description,
  image,
  layout = "horizontal",
  year,
  className,
}: ProjectCardProps) {
  const isHorizontal = layout === "horizontal";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group shadow-lift w-full overflow-hidden rounded-xl border border-border-translucent bg-card transition-colors",
        isHorizontal ? "grid grid-cols-1 md:grid-cols-3" : "flex flex-col",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-3 p-6",
          isHorizontal ? "col-span-2" : "",
        )}
      >
        {/* Status badge */}
        {year && (
          <Badge variant="status" dotColor={"#27a644"}>
            {year}
          </Badge>
        )}

        {/* Title */}
        <h3
          className={cn(
            "leading-none font-heading tracking-tight text-foreground",
            isHorizontal ? "text-xl" : "text-lg",
          )}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-normal text-muted-foreground">
          {description}
        </p>

        {/* Link */}
        <span className="text-caption mt-auto text-accent-light transition-colors">
          {href.replace(/^https?:\/\//, "")} ↗
        </span>
      </div>

      <div
        className={cn(
          "col-span-3 mt-auto flex flex-col items-end overflow-hidden pt-4 pl-4 transition-transform duration-300 ease-out group-hover:scale-[1.015]",
        )}
      >
        {image}
      </div>
    </Link>
  );
}
