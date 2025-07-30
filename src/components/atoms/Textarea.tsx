import React from "react";
import clsx from "clsx";

export type TextareaVariant = "default" | "error" | "success" | "disabled";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant?: TextareaVariant;
    className?: string;
    label?: string;
    labelClassName?: string;
}

const variantClasses: Record<TextareaVariant, string> = {
    default: "border border-border bg-gray text-text placeholder-placeholder focus:ring-primary focus:border-primary",
    error: "border border-danger bg-gray text-danger placeholder-danger focus:ring-danger focus:border-danger",
    success: "border border-success bg-gray text-success placeholder-success focus:ring-success focus:border-success",
    disabled: "border border-border bg-gray text-placeholder placeholder-placeholder opacity-60 cursor-not-allowed"
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ variant = "default", className = "", label, labelClassName = "", ...props }, ref) => (
        <div className="space-y-2 w-full">
            {label && <label className={clsx("block text-text", labelClassName)}>{label}</label>}
            <textarea
                ref={ref}
                className={clsx(
                    "w-full min-w-[240px] px-4 py-3 rounded-lg border border-border bg-gray placeholder-placeholder transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark box-border text-text text-body resize-none h-[88px]",
                    className
                )} {...props}/>
        </div>
    )
);

export default Textarea;
