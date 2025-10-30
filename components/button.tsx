import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type ButtonBaseProps = {
  variant?: "primary" | "secondary";
  size?: "small" | "medium";
  children: ReactNode;
  openInNewTab?: boolean;
  className?: string;
};

type ButtonProps =
  | (ButtonBaseProps &
      Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
        href?: undefined;
      })
  | (ButtonBaseProps &
      Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
        href: string;
      });

const Button = ({
  variant = "primary",
  size = "medium",
  href,
  openInNewTab,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const baseClasses = cn(
    "flex flex-row items-center gap-x-1 rounded-full font-semibold transition-all duration-200 ease-in-out",
    {
      // Variants
      "bg-[linear-gradient(to_bottom,var(--primary-400)_0%,var(--primary-500)_24%)] hover:bg-[linear-gradient(to_bottom,var(--primary-300)_0%,var(--primary-400)_24%)] text-primary-foreground shadow-[inset_0_1px_0_var(--highlight-primary)]":
        variant === "primary",
      "bg-[linear-gradient(to_bottom,var(--secondary-400)_0%,var(--secondary-500)_24%)] hover:bg-[linear-gradient(to_bottom,var(--secondary-500)_0%,var(--secondary-600)_24%)] text-primary-600 border border-border shadow-[inset_0_2px_1px_0_var(--highlight-secondary)]":
        variant === "secondary",
    },
    {
      "text-sm px-4 py-2.5": size === "small",
      "text-base px-6 py-2.5": size === "medium",
    },
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        target={openInNewTab ? "_blank" : "_self"}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        className={baseClasses}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;