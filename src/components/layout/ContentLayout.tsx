"use client";

import React from "react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { H1, H3 } from "@/components/common/Typography";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface ContentLayoutProps {
  children: React.ReactNode;
  title?: string;
  breadcrumbs?: BreadcrumbItem[];
  hasNavbar?: boolean;
  className?: string;
}

/**
 * ContentLayout - Componente de contenido principal
 *
 * Especificaciones de Figma:
 * - Sin padding horizontal (ya manejado por PageLayout)
 * - Padding vertical: 32px
 * - Spacing vertical: 32px
 * - Máximo ancho: 1280px
 */
export const ContentLayout: React.FC<ContentLayoutProps> = ({
  children,
  title,
  breadcrumbs,
  hasNavbar = true,
  className = "",
}) => {
  return (
    <div className={`py-8 space-y-8 max-w-[1280px] mx-auto ${className}`}>
      {/* Breadcrumbs */}
      {breadcrumbs && (
        <div>
          <Breadcrumb items={breadcrumbs} />
        </div>
      )}

      {/* Page Title */}
      {title && (
        <div>
          <H3 className="text-white font-bold">{title}</H3>
        </div>
      )}

      {/* Main Content */}
      {children}
    </div>
  );
};
