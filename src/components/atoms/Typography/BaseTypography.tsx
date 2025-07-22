// src/components/atoms/Typography/BaseTypography.tsx
"use client";

import React from "react";
import { BaseTypographyInternalProps } from "./types";

/**
 * BaseTypography - Componente base para aplicar estilos de tipografía definidos en CSS variables.
 * Este componente es interno y no debe ser usado directamente, sino a través de los componentes exportados (Display, Body, etc.).
 */
export const BaseTypography: React.FC<BaseTypographyInternalProps> = ({
  children,
  className = "",
  variant,
  defaultElement,
  as: Component = defaultElement,
}) => {
  // Clases de Tailwind CSS que utilizan las variables CSS definidas globalmente.
  // La intención es usar clases de Tailwind.
  // donde `fontSize` extiende con los nombres de tus variantes (`display`, `heading`, etc.)
  // para que se generen clases como `text-display`, `font-bold` (si mapeas font-weight).

  // Agrega font-bold por defecto para display, heading y subheading
  const isBold = ["display", "heading", "subheading"].includes(variant);
  const baseClasses = `font-body text-${variant}${isBold ? " font-bold" : ""}`;

  return (
    <Component className={`${baseClasses} ${className}`.trim()}>
      {children}
    </Component>
  );
};
