// src/components/atoms/Typography/types.ts
import React from "react";

/**
 * Propiedades base para los componentes de tipografía.
 * @param children - El contenido a renderizar dentro del componente.
 * @param className - Clases CSS adicionales para aplicar (ej. de Tailwind CSS).
 * @param as - Opcional. Permite renderizar el componente como un elemento HTML diferente (ej. 'span' en lugar de 'p').
 */
export interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  [key: string]: any; // Permite props HTML arbitrarios como htmlFor
}

/**
 * Propiedades internas para el componente BaseTypography.
 * @param variant - Define el estilo de tipografía (ej. 'display', 'body', 'caption').
 * @param defaultElement - El elemento HTML por defecto para renderizar (ej. 'h1', 'p', 'span').
 */
export interface BaseTypographyInternalProps extends TypographyProps {
  variant:
    | "display"
    | "heading"
    | "subheading"
    | "body"
    | "body-small"
    | "caption";
  defaultElement: React.ElementType;
}
