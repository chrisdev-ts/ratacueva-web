import type { AccentColor, ColorScheme } from "./types";

export const accentColors: Record<AccentColor, ColorScheme> = {
  blue: {
    border: "border-blue-500/30",
    bg: "bg-blue-900/20",
    text: "text-blue-300",
    hover: "hover:border-blue-400/50",
  },
  green: {
    border: "border-green-500/30",
    bg: "bg-green-900/20",
    text: "text-green-300",
    hover: "hover:border-green-400/50",
  },
  purple: {
    border: "border-purple-500/30",
    bg: "bg-purple-900/20",
    text: "text-purple-300",
    hover: "hover:border-purple-400/50",
  },
  orange: {
    border: "border-orange-500/30",
    bg: "bg-orange-900/20",
    text: "text-orange-300",
    hover: "hover:border-orange-400/50",
  },
  red: {
    border: "border-red-500/30",
    bg: "bg-red-900/20",
    text: "text-red-300",
    hover: "hover:border-red-400/50",
  },
};

export const footerNoteStyles = {
  tip: {
    bg: "bg-blue-900/30",
    border: "border-blue-700",
    text: "text-blue-100",
    label: "Consejo:",
  },
  warning: {
    bg: "bg-yellow-900/30",
    border: "border-yellow-700",
    text: "text-yellow-100",
    label: "Importante:",
  },
};

export const legalBadgeStyles = {
  mandatory: {
    bg: "bg-red-900/30",
    border: "border-red-600",
    text: "text-red-200",
    label: "Obligatorio por ley",
  },
  optional: {
    bg: "bg-gray-700/30",
    border: "border-gray-600",
    text: "text-gray-300",
    label: "Opcional",
  },
  recommendation: {
    bg: "bg-blue-900/30",
    border: "border-blue-600",
    text: "text-blue-200",
    label: "Recomendado",
  },
};
