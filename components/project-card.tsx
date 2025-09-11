import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ProjectCardProps {
  href: string;
  title: string;
  description: string;
  image: ReactNode;
  className?: string;
}

export function ProjectCard({
  href,
  title,
  description,
  image,
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        // Base styles
        "group grid w-full transform grid-cols-1 overflow-hidden rounded-xl transition hover:scale-102",
        // Layout & visual
        "border-border bg-background/70 border drop-shadow-card backdrop-blur-sm",
        // Responsive
        "md:grid-cols-5",
        // Custom className override
        className,
      )}
    >
      <div className="col-span-2 flex flex-col gap-y-2 p-6">
        <h3 className="text-foreground text-2xl font-semibold">{title}</h3>
        <p className="text-secondary">{description}</p>
      </div>
      <div className="col-span-3 mt-auto flex flex-col items-end pl-4 pt-4 drop-shadow-card">
        {image}
      </div>
    </Link>
  );
}
