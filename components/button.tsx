import { Slot } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: "small" | "medium";
  children: ReactNode;
  className?: string;
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses = {
  primary: "btn-primary-glow shadow-lift",
  secondary:
    "border bg-button-secondary text-button-secondary-foreground hover:bg-button-secondary-hover",
};

const sizeClasses = {
  small: "px-3.5 py-1.5 text-sm",
  medium: "px-4 py-2 text-sm",
};

export default function Button({
  variant = "primary",
  size = "medium",
  children,
  className,
  asChild = false,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center gap-1 rounded-full font-medium tracking-normal transition-colors duration-100",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (asChild) {
    return <Slot className={classes}>{children}</Slot>;
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
