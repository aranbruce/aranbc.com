import Link, { type LinkProps as NextLinkProps } from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  variant?: "primary" | "secondary";
  size?: "small" | "medium";
  children: ReactNode;
  className?: string;
  openInNewTab?: boolean;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkButtonProps = BaseProps &
  NextLinkProps & {
    href: string;
    target?: string;
    rel?: string;
  };

type Props = ButtonProps | LinkButtonProps;

const variantStyles = {
  primary:
    "bg-[image:var(--button-primary-default)] hover:bg-[image:var(--button-primary-hover)] text-primary-foreground shadow-[inset_0_1px_0_var(--highlight-primary)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[image:var(--button-primary-default)]",
  secondary:
    "bg-[image:var(--button-secondary-default)] hover:bg-[image:var(--button-secondary-hover)] text-primary-600 border border-border shadow-[inset_0_2px_1px_0_var(--highlight-secondary)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[image:var(--button-secondary-default)]",
};

const sizeStyles = {
  small: "text-sm px-4 py-2.5",
  medium: "text-base px-6 py-2.5",
};

export default function Button({
  variant = "primary",
  size = "medium",
  children,
  className,
  openInNewTab,
  ...props
}: Props) {
  const classes = cn(
    "flex flex-row items-center gap-x-1 rounded-full font-semibold transition-all duration-200 ease-in-out",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, target, rel, ...linkProps } = props as LinkButtonProps;

    return (
      <Link
        href={href}
        className={classes}
        target={openInNewTab ? "_blank" : target}
        rel={openInNewTab ? "noopener noreferrer" : rel}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
