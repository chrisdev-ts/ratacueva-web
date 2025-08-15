import { Subheading, BodySmall } from "@/components/atoms/Typography";
import type React from "react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  LightBulbIcon,
  ScaleIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import { legalBadgeMap } from "./InfoCardTypes"; // <-- IMPORTADO
// Eliminado palettes

const legalBadgeIcons: Record<keyof typeof legalBadgeMap, React.ReactElement> =
  {
    mandatory: <ScaleIcon className="h-4 w-4" />,
    optional: <ClipboardDocumentListIcon className="h-4 w-4" />,
    recommendation: <LightBulbIcon className="h-4 w-4" />,
  };

const legalBadgeLabels: Record<keyof typeof legalBadgeMap, string> = {
  mandatory: "Obligatorio por ley",
  optional: "Opcional",
  recommendation: "Recomendado",
};

type InfoCardHeaderProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  basicDescription?: string;
  legalBadge?: {
    type: keyof typeof legalBadgeMap;
    lawReference?: string;
    tooltip?: string;
  };
  collapsible: boolean;
  isCardExpanded: boolean;
  showDetailed: boolean;
  onToggleCard: () => void;
  onToggleDetailed: () => void;
};

export function InfoCardHeader({
  icon,
  title,
  description,
  basicDescription,
  legalBadge,
  collapsible,
  isCardExpanded,
  showDetailed,
  onToggleCard,
  onToggleDetailed,
}: InfoCardHeaderProps) {
  // badge minimalista
  let badgeClass = "bg-gray-700 text-white border border-gray-600";
  if (legalBadge?.type === "mandatory")
    badgeClass = "bg-danger/10 text-white border-danger";
  if (legalBadge?.type === "optional")
    badgeClass = "bg-secondary/10 text-secondary border-secondary";
  if (legalBadge?.type === "recommendation")
    badgeClass = "bg-success/10 text-success border-success";
  return (
    <div
      className={`flex flex-col gap-4 ${
        collapsible ? "cursor-pointer group" : ""
      }`}
      onClick={collapsible ? onToggleCard : undefined}>
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">{icon}</div>
        <Subheading className={`flex-1 transition-colors`}>{title}</Subheading>
        {collapsible && (
          <button className="p-1">
            {isCardExpanded ? (
              <ChevronDownIcon className="h-5 w-5" />
            ) : (
              <ChevronRightIcon className="h-5 w-5" />
            )}
          </button>
        )}
      </div>

      {legalBadge && (
        <div
          className={`border inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium w-fit ${badgeClass}`}
          title={legalBadge.tooltip}>
          <span>{legalBadgeIcons[legalBadge.type]}</span>
          <span>{legalBadgeLabels[legalBadge.type]}</span>
          {legalBadge.lawReference && (
            <span className="text-xs opacity-80">
              ({legalBadge.lawReference})
            </span>
          )}
        </div>
      )}

      <BodySmall className="leading-relaxed">
        {collapsible && !isCardExpanded
          ? basicDescription || description
          : showDetailed
          ? description
          : basicDescription || description}
      </BodySmall>

      {collapsible &&
        isCardExpanded &&
        basicDescription &&
        basicDescription !== description && (
          <BodySmall
            as="button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              onToggleDetailed();
            }}
            className={`transition-colors hover:text-white mt-2 self-start`}>
            {showDetailed
              ? "Ver versión simplificada"
              : "Ver versión detallada"}
          </BodySmall>
        )}
    </div>
  );
}
