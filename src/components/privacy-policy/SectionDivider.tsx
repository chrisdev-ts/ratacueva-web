import React from "react";

interface SectionDividerProps {
  subtitle: string;
  className?: string;
}

export function SectionDivider({
  subtitle,
  className = "",
}: SectionDividerProps) {
  return (
    <div className={`my-8 ${className}`}>
      <h2 className="text-xl font-bold text-[hsl(var(--primary))]">
        {subtitle}
      </h2>
    </div>
  );
}
