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
    "bg-button-primary hover:bg-button-primary-hover text-button-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-button-primary",
  secondary:
    "bg-button-secondary text-button-secondary-foreground border border-border hover:bg-button-secondary-hover disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-button-secondary",
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
    "flex flex-row items-center gap-x-1 rounded-full font-medium transition-all duration-200 ease-in-out",
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
