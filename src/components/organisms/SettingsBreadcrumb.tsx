import React from "react";
import Link from "next/link";
import { Subheading, Heading } from "@/components/atoms/Typography";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SettingsBreadcrumbProps {
  items: BreadcrumbItem[];
  title?: string;
  size?: "sm" | "base" | "lg";
  color?: string; // Tailwind color class, e.g. 'text-white'
  className?: string;
}

export const SettingsBreadcrumb: React.FC<SettingsBreadcrumbProps> = ({
  items,
  title,
  color = "text-white",
  className = "",
}) => {
  // El breadcrumb usa Subheading por defecto
  const BreadcrumbTypography = Subheading;
  // El título usa Heading por defecto
  const TitleTypography = Heading;

  return (
    <div className={className}>
      <nav aria-label="Breadcrumb" className={`flex items-center gap-4`}>
        {items.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {index > 0 && <span className={`mx-2 ${color}`}>{">"}</span>}
              {item.href && index < items.length - 1 ? (
                <Link href={item.href} className={`${color} hover:text-primary transition-colors`}>
                  <BreadcrumbTypography>{item.label}</BreadcrumbTypography>
                </Link>
              ) : (
                <BreadcrumbTypography className={`font-bold ${color}`}>{item.label}</BreadcrumbTypography>
              )}
            </React.Fragment>
          );
        })}
      </nav>
      {title && (
        <div className="flex items-center gap-4 mt-8">
          <TitleTypography className={color}>{title}</TitleTypography>
        </div>
      )}
    </div>
  );
};