import React from "react";
import clsx from "clsx";

export type InputVariant = "default" | "error" | "success" | "disabled" | "searchbar";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: InputVariant;
    className?: string;
    label?: string;
    labelClassName?: string;
}

const variantClasses: Record<InputVariant, string> = {
    default: "border border-border bg-gray text-text placeholder-placeholder focus:ring-primary focus:border-primary rounded-lg",
    error: "border border-danger bg-gray text-danger placeholder-danger focus:ring-danger focus:border-danger rounded-lg",
    success: "border border-success bg-gray text-success placeholder-success focus:ring-success focus:border-success rounded-lg",
    disabled: "border border-border bg-gray text-placeholder placeholder-placeholder opacity-60 cursor-not-allowed rounded-lg",
    searchbar: "border border-border bg-transparent text-text placeholder-placeholder focus:outline-none focus:ring-0 rounded-2xl",
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ variant = "default", className = "", label, labelClassName = "", ...props }, ref) => (
        <div className="space-y-2 w-full">
            {label && <label className={clsx("block text-text", labelClassName)}>{label}</label>}
            <input
                ref={ref}
                className={clsx(
                    "w-full h-[44px] px-4 py-3 transition-all box-border text-body",
                    variantClasses[variant],
                    className
                )}
                {...props}
            />
        </div>
    )
);

export default Input;
