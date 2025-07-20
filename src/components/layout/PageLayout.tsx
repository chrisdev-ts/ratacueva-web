"use client";

import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * PageLayout - Componente principal de página
 *
 * Especificaciones de Figma:
 * - Padding horizontal: 80px
 * - Máximo total: 1440px
 * - Background: --dark (establecido globalmente en CSS)
 */
export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`min-h-screen px-20 max-w-[1440px] mx-auto ${className}`}>
      {children}
    </div>
  );
};
