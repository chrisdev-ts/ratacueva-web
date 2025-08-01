import React from "react";
import clsx from "clsx";

export type InputVariant = "default" | "error" | "success" | "disabled";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: InputVariant;
    className?: string;
    label?: string;
    labelClassName?: string;
}

const variantClasses: Record<InputVariant, string> = {
    default: "border border-border bg-gray text-text placeholder-placeholder focus:ring-primary focus:border-primary",
    error: "border border-danger bg-gray text-danger placeholder-danger focus:ring-danger focus:border-danger",
    success: "border border-success bg-gray text-success placeholder-success focus:ring-success focus:border-success",
    disabled: "border border-border bg-gray text-placeholder placeholder-placeholder opacity-60 cursor-not-allowed"
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ variant = "default", className = "", label, labelClassName = "", ...props }, ref) => (
        <div className="space-y-2 w-full">
            {label && <label className={clsx("block text-text", labelClassName)}>{label}</label>}
            <input
                ref={ref}
                className={clsx(
                    "w-full h-[44px] px-4 py-3 rounded-lg border border-border bg-gray placeholder-placeholder transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark box-border text-text text-body",
                    className
                )}
                {...props} />
        </div>
    )
);

export default Input;