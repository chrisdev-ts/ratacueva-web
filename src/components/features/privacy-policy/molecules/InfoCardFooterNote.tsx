import { Body } from "@/components/atoms/Typography";
import {
  LightBulbIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import type { FooterNote } from "./InfoCardTypes";
import { footerNoteStyles } from "./InfoCardStyles";

const footerNoteIcons = {
  tip: <LightBulbIcon className="h-4 w-4" />,
  warning: <ExclamationTriangleIcon className="h-4 w-4" />,
};

interface InfoCardFooterNoteProps {
  footerNote: FooterNote;
}

export function InfoCardFooterNote({ footerNote }: InfoCardFooterNoteProps) {
  return (
    <div
      className={`
        p-4 rounded-lg border
        ${footerNoteStyles[footerNote.type].bg} 
        ${footerNoteStyles[footerNote.type].border}
        transition-all duration-200
      `}
    >
      <Body className={`text-sm ${footerNoteStyles[footerNote.type].text}`}>
        <span className="mr-2 inline-flex">
          {footerNoteIcons[footerNote.type]}
        </span>
        <strong>{footerNoteStyles[footerNote.type].label}</strong>{" "}
        {footerNote.text}
      </Body>
    </div>
  );
}
