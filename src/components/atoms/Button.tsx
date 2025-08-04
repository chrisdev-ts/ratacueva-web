import React from "react";
import clsx from "clsx";
import Link from "next/link";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "accent"
  | "outlineSecondary"
  | "icon"
  | "pagination"
  | "quickAction";
export type ButtonSize = "sm" | "md" | "lg" | "xl";
export type ButtonShape = "rounded" | "pill" | "circle";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  href?: string;
  target?: string;
}

const baseClasses =
  "inline-flex items-center justify-center font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark cursor-pointer";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
  secondary:
    "bg-secondary text-secondary-dark hover:bg-secondary/90 focus:ring-secondary",
  success: "bg-success text-white hover:bg-success/90 focus:ring-success",
  danger: "bg-danger text-white hover:bg-danger/90 focus:ring-danger",
  warning: "bg-warning text-dark hover:bg-warning/90 focus:ring-warning",
  accent: "bg-accent text-white hover:bg-accent/90 focus:ring-accent",
  outlineSecondary:
    "border border-secondary bg-transparent text-secondary hover:bg-secondary/10 focus:ring-secondary",
  icon: "bg-transparent text-text hover:bg-gray/20 focus:ring-gray",
  pagination:
    "border border-gray bg-transparent text-text hover:bg-gray/20 focus:ring-gray",
  quickAction: "bg-dark text-text hover:bg-white/10 focus:ring-white/20",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 py-1.5 text-sm gap-1.5",
  md: "h-10 px-4 py-2 text-sm gap-2",
  lg: "h-11 px-4 py-2.5 text-base gap-3",
  xl: "h-12 px-6 py-3 text-lg gap-3",
};

const shapeClasses: Record<ButtonShape, string> = {
  rounded: "rounded-lg",
  pill: "rounded-full",
  circle: "rounded-full aspect-square p-0",
};

const getVariantSpecificClasses = (
  variant: ButtonVariant,
  size: ButtonSize,
  shape: ButtonShape
): string => {
  switch (variant) {
    case "icon":
      return sizeClasses[size].replace(/px-\d+\s+py-[\d.]+/, "p-2");
    case "pagination":
      return "w-[42px] h-[42px] p-0";
    case "quickAction":
      return "p-6 flex-1 self-stretch rounded-2xl";
    default:
      return "";
  }
};

const getSizeClasses = (size: ButtonSize, shape: ButtonShape): string => {
  if (shape === "circle") {
    // Para botones circulares, solo aplicamos altura y gap, sin paddings
    const baseSize = sizeClasses[size];
    return baseSize.replace(/px-\d+\s+py-[\d.]+/, "").trim();
  }
  return sizeClasses[size];
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "lg",
  shape = "pill",
  children,
  className = "",
  fullWidth = false,
  href,
  target,
  ...props
}) => {
  const variantSpecificClasses = getVariantSpecificClasses(
    variant,
    size,
    shape
  );
  const sizeSpecificClasses = getSizeClasses(size, shape);

  const buttonClasses = clsx(
    baseClasses,
    variantClasses[variant],
    variant === "quickAction" ? "" : sizeSpecificClasses,
    variant === "pagination" ? shapeClasses.rounded : shapeClasses[shape],
    variantSpecificClasses,
    fullWidth && "w-full",
    className
  );

  // Si tiene href, renderizar como Link
  if (href) {
    return (
      <Link href={href} target={target} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  // Si no tiene href, renderizar como button normal
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
