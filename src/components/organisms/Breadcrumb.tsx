import React from "react";
import Link from "next/link";
import { BodySmall } from "@/components/atoms/Typography";

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
            <span className="mx-2">&gt;</span>
          )}
          {item.href && index < items.length - 1 ? (
            <Link
              href={item.href}
              className="hover:underline"
            >
              <BodySmall>{item.label}</BodySmall>
            </Link>
          ) : (
            <BodySmall className="font-bold">
              {item.label}
            </BodySmall>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
