import Link, { type LinkProps } from "next/link";
import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  variant?: "primary" | "secondary";
  size?: "small" | "medium";
  children: ReactNode;
  className?: string;
  openInNewTab?: boolean;
};

// Link-style button
type AnchorButtonProps = BaseProps &
  LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    href: string;
  };

// Native button
type NativeButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonProps = AnchorButtonProps | NativeButtonProps;

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "medium", children } = props;

  const classes = cn(
    "flex flex-row items-center gap-x-1 rounded-full font-semibold transition-all duration-200 ease-in-out",
    {
      "bg-[linear-gradient(to_bottom,var(--primary-400)_0%,var(--primary-500)_24%)] hover:bg-[linear-gradient(to_bottom,var(--primary-300)_0%,var(--primary-400)_24%)] text-primary-foreground shadow-[inset_0_1px_0_var(--highlight-primary)]":
        variant === "primary",
      "bg-[linear-gradient(to_bottom,var(--secondary-400)_0%,var(--secondary-500)_24%)] hover:bg-[linear-gradient(to_bottom,var(--secondary-500)_0%,var(--secondary-600)_24%)] text-primary-600 border border-border shadow-[inset_0_2px_1px_0_var(--highlight-secondary)]":
        variant === "secondary",
    },
    {
      "text-sm px-4 py-2.5": size === "small",
      "text-base px-6 py-2.5": size === "medium",
    },
    props.className
  );

  // Branch 1: Link variant
  if ("href" in props && props.href) {
    const { href, openInNewTab, ...linkProps } = props as AnchorButtonProps;

    return (
      <Link
        href={href}
        className={classes}
        target={openInNewTab ? "_blank" : linkProps.target}
        rel={
          openInNewTab
            ? "noopener noreferrer"
            : linkProps.rel
        }
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  // Branch 2: Button variant
  const { ...buttonProps } = props as NativeButtonProps;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}