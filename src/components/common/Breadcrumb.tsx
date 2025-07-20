import React from "react";
import Link from "next/link";
import { Body, BodySmall } from "./Typography";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className = "",
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center space-x-2 ${className}`}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="text-neutral-400 text-sm mx-2">&gt;</span>
          )}
          {item.href && index < items.length - 1 ? (
            <Link
              href={item.href}
              className="text-[hsl(var(--primary))] hover:text-[hsl(var(--accent))] transition-colors"
            >
              <BodySmall className="text-sm">{item.label}</BodySmall>
            </Link>
          ) : (
            <BodySmall
              className={`text-sm ${
                index === items.length - 1
                  ? "text-white font-bold"
                  : "text-neutral-300"
              }`}
            >
              {item.label}
            </BodySmall>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
