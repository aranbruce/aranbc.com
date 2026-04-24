import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CompanyBadgeProps {
  href: string;
  icon: ReactNode;
  name: string;
}

export function CompanyBadge({ href, icon, name }: CompanyBadgeProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border-translucent bg-muted px-2 py-0.5 whitespace-nowrap backdrop-blur-sm transition hover:bg-muted/40",
      )}
    >
      {icon}
      <span className="text-sm font-medium text-foreground">{name}</span>
    </Link>
  );
}
