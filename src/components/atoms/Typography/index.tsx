
// src/components/atoms/Typography/index.ts
"use client";

import React from "react";
import { BaseTypography } from "./BaseTypography";
import { TypographyProps } from "./types";

/**
 * Display - Para títulos de página grandes
 * Usos: Títulos principales de páginas, secciones hero.
 * Semántica: <h1>
 */
export const Display: React.FC<TypographyProps> = (props) => {
  return <BaseTypography variant="display" defaultElement="h1" {...props} />;
};

/**
 * Heading - Para encabezados de sección principales
 * Usos: Subtítulos de secciones, nombres de características importantes.
 * Semántica: <h2>
 */
export const Heading: React.FC<TypographyProps> = (props) => {
  return <BaseTypography variant="heading" defaultElement="h2" {...props} />;
};

/**
 * Subheading - Para subencabezados dentro de secciones
 * Usos: Títulos de tarjetas, elementos de lista principales.
 * Semántica: <h3>
 */
export const Subheading: React.FC<TypographyProps> = (props) => {
  return <BaseTypography variant="subheading" defaultElement="h3" {...props} />;
};

/**
 * Body - Para el texto de párrafo general
 * Usos: Contenido principal de artículos, descripciones largas.
 * Semántica: <p>
 */
export const Body: React.FC<TypographyProps> = (props) => {
  return <BaseTypography variant="body" defaultElement="p" {...props} />;
};

/**
 * BodySmall - Para texto de párrafo secundario o más compacto
 * Usos: Descripciones breves, notas al pie, texto de interfaz pequeño.
 * Semántica: <p>
 */
export const BodySmall: React.FC<TypographyProps> = (props) => {
  return <BaseTypography variant="body-small" defaultElement="p" {...props} />;
};

/**
 * Caption - Para texto muy pequeño o auxiliar
 * Usos: Etiquetas de formularios, pies de imagen, derechos de autor.
 * Semántica: <span>
 */
export const Caption: React.FC<TypographyProps> = (props) => {
  return <BaseTypography variant="caption" defaultElement="span" {...props} />;
};

// Re-exportar las interfaces si es necesario para otros módulos que las usen.
export type { TypographyProps } from "./types";
