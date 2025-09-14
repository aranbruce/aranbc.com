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
    "items-center flex flex-row gap-x-1 no-wrap rounded-full font-semibold transition-all duration-200 ease-in-out",
    // Variant classes
    {
      "bg-[linear-gradient(to_bottom,var(--primary-400)_0%,var(--primary-500)_24%)] hover:bg-[linear-gradient(to_bottom,var(--primary-300)_0%,var(--primary-400)_24%)] text-primary-foreground shadow-[inset_0_1px_0_var(--highlight-primary)]":
        variant === "primary",
      "bg-[linear-gradient(to_bottom,var(--secondary-400)_0%,var(--secondary-500)_24%)] hover:bg-[linear-gradient(to_bottom,var(--secondary-500)_0%,var(--secondary-600)_24%)] text-primary-600 border border-border  shadow-[inset_0_2px_1px_0_var(--highlight-secondary)]":
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
      rel={openInNewTab ? "noopener noreferrer" : undefined}
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
