import Link from "next/link";

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
  const baseClasses = "rounded-full font-semibold transition duration-150";
  const primaryClasses = "bg-primary text-white hover:bg-primary/80";
  const secondaryClasses =
    "bg-white text-primary border border-tertiary hover:bg-gray-100";
  const smallClasses = "text-sm px-4 py-2.5";
  const mediumClasses = "text-base px-6 py-2.5";
  return href ? (
    <Link
      href={href}
      target={openInNewTab ? "_blank" : "_self"}
      className={`${baseClasses} ${variant === "primary" ? primaryClasses : secondaryClasses} ${size === "small" ? smallClasses : mediumClasses}`}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`${baseClasses} ${variant === "primary" ? primaryClasses : secondaryClasses} ${size === "small" ? smallClasses : mediumClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
