import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: "small" | "medium";
  href?: string;
  openInNewTab?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = ({
  variant = "primary",
  size = "medium",
  href,
  openInNewTab = false,
  onClick,
  children,
}: ButtonProps) => {
  const className = cn(
    // Base classes
    "items-center flex flex-row gap-x-1 no-wrap rounded-full font-semibold transition duration-150",
    // Variant classes
    {
      "bg-primary text-primary-foreground hover:bg-primary/80 border border-ring/20":
        variant === "primary",
      "bg-card text-foreground border border-border hover:bg-muted":
        variant === "secondary",
    },
    // Size classes
    {
      "text-sm px-4 py-2.5": size === "small",
      "text-base px-6 py-2.5": size === "medium",
    },
  );

  return href ? (
    <Link
      href={href}
      target={openInNewTab ? "_blank" : "_self"}
      className={className}
    >
      {children}
    </Link>
  ) : (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
