import { BodySmall } from "@/components/atoms/Typography";
import React from "react";
import {
  LightBulbIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { footerNoteMap } from "./InfoCardTypes";

const footerNoteIcons: Record<keyof typeof footerNoteMap, React.ReactElement> =
  {
    tip: <LightBulbIcon className="h-4 w-4" />,
    warning: <ExclamationTriangleIcon className="h-4 w-4" />,
  };

// Mapeo de etiquetas para mantener la consistencia
const footerNoteLabels: Record<keyof typeof footerNoteMap, string> = {
  tip: "Consejo:",
  warning: "Importante:",
};

type InfoCardFooterNoteProps = {
  footerNote: {
    type: keyof typeof footerNoteMap;
    text: string;
  };
};

export function InfoCardFooterNote({ footerNote }: InfoCardFooterNoteProps) {
  const label = footerNoteLabels[footerNote.type];
  let base = "bg-gray-800 text-white border-gray-600";
  if (footerNote.type === "tip")
    base = "bg-success/10 text-success border-success";
  if (footerNote.type === "warning")
    base = "bg-danger/10 text-white border-danger";
  return (
    <div
      className={`p-4 rounded-lg border ${base} transition-all duration-200`}>
      <BodySmall>
        <span className="mr-2 inline-flex">
          {footerNoteIcons[footerNote.type]}
        </span>
        <strong>{label}</strong> {footerNote.text}
      </BodySmall>
    </div>
  );
}
