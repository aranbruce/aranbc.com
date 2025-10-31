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
        "border-border hover:bg-background bg-muted rounded-md border px-1 pb-0.5 whitespace-nowrap transition",
      )}
    >
      {icon}
      <span className="text-sm font-semibold">{name}</span>
    </Link>
  );
}
