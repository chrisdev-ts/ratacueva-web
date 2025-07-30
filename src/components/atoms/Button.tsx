import React from "react";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "accent" | "outlineSecondary" | "icon" | "pagination" | "quickAction";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children: React.ReactNode;
    className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-primary hover:bg-primary/90 focus:ring-primary",
    secondary: "bg-secondary text-secondary-dark hover:bg-secondary/90 focus:ring-secondary",
    success: "bg-success text-success-dark hover:bg-success/90 focus:ring-success",
    danger: "bg-danger text-white px-4 py-2.5 rounded-full font-bold text-body hover:bg-danger-dark transition-colors cursor-pointer",
    warning: "bg-warning text-dark px-4 py-2.5 rounded-full font-bold text-body hover:bg-warning-dark transition-colors cursor-pointer",
    accent: "bg-accent text-accent-dark hover:bg-accent/90 focus:ring-accent",
    outlineSecondary: "border border-secondary bg-transparent text-secondary font-bold hover:bg-secondary/10 focus:ring-secondary",
    icon: "p-1 hover:bg-dark rounded transition-colors",
    pagination: "w-[42px] h-[42px] flex items-center justify-center border border-gray rounded-lg text-text hover:bg-gray transition-colors cursor-pointer",
    quickAction: "flex p-6 justify-center items-center gap-4 flex-1 self-stretch rounded-2xl bg-dark hover:bg-white/10 transition-all text-text"
};

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, className = "", ...props }) => (
    <button
        className={clsx(
            variant === "quickAction"
                ? "flex justify-center items-center w-full h-full gap-4 flex-1 self-stretch rounded-2xl bg-dark hover:bg-white/10 transition-all text-text font-bold"
                : "h-11 rounded-full flex items-center justify-center px-4 py-2.5 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark font-bold",
            variantClasses[variant],
            className
        )}
        {...props}>
        {children}
    </button>
);

export default Button;
