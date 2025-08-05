import React from "react";
import clsx from "clsx";

export type TextareaVariant = "default" | "error" | "success" | "disabled";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextareaVariant;
  className?: string;
  label?: string;
  labelClassName?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", label, labelClassName = "", ...props }, ref) => (
    <div className="space-y-2 w-full">
      {label && (
        <label className={clsx("block text-text", labelClassName)}>
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={clsx(
          "w-full min-w-[240px] px-4 py-3 rounded-lg border border-border bg-gray placeholder-placeholder transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark box-border text-text text-body resize-none h-[88px]",
          className
        )}
        {...props}
      />
    </div>
  )
);

Textarea.displayName = "Textarea";

export default Textarea;
