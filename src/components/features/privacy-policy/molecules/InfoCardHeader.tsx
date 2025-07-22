import { Subheading, Body, BodySmall } from "@/components/atoms/Typography";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  LightBulbIcon,
  ScaleIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import type { LegalBadge, ColorScheme } from "./InfoCardTypes";
import { legalBadgeStyles } from "./InfoCardStyles";

const legalBadgeIcons = {
  mandatory: <ScaleIcon className="h-4 w-4" />,
  optional: <ClipboardDocumentListIcon className="h-4 w-4" />,
  recommendation: <LightBulbIcon className="h-4 w-4" />,
};

interface InfoCardHeaderProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  basicDescription?: string;
  legalBadge?: LegalBadge;
  collapsible: boolean;
  isCardExpanded: boolean;
  showDetailed: boolean;
  colorScheme: ColorScheme;
  onToggleCard: () => void;
  onToggleDetailed: () => void;
}

export function InfoCardHeader({
  icon,
  title,
  description,
  basicDescription,
  legalBadge,
  collapsible,
  isCardExpanded,
  showDetailed,
  colorScheme,
  onToggleCard,
  onToggleDetailed,
}: InfoCardHeaderProps) {
  return (
    <div
      className={`flex flex-col gap-2 ${
        collapsible ? "cursor-pointer group" : ""
      }`}
      onClick={collapsible ? onToggleCard : undefined}
    >
      {/* Title row with icon and expand/collapse button */}
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">{icon}</div>
        <Subheading
          className={`flex-1 ${
            collapsible ? "group-hover:text-white transition-colors" : ""
          }`}
        >
          {title}
        </Subheading>
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

      {/* Legal Badge */}
      {legalBadge && (
        <div
          className={`
            inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium w-fit
            border ${legalBadgeStyles[legalBadge.type].bg} 
            ${legalBadgeStyles[legalBadge.type].border}
            ${legalBadgeStyles[legalBadge.type].text}
          `}
          title={legalBadge.tooltip}
        >
          <span>{legalBadgeIcons[legalBadge.type]}</span>
          <span>{legalBadgeStyles[legalBadge.type].label}</span>
          {legalBadge.lawReference && (
            <span className="text-xs opacity-80">
              ({legalBadge.lawReference})
            </span>
          )}
        </div>
      )}

      {/* Description */}
      <BodySmall className="leading-relaxed">
        {collapsible && !isCardExpanded
          ? basicDescription || description
          : showDetailed
          ? description
          : basicDescription || description}
      </BodySmall>

      {/* Toggle detailed button */}
      {collapsible &&
        isCardExpanded &&
        basicDescription &&
        basicDescription !== description && (
          <BodySmall as="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleDetailed();
            }}
            className={`transition-colors hover:text-white mt-2 self-start
              ${colorScheme.text}
            `}
          >
            {showDetailed
              ? "Ver versión simplificada"
              : "Ver versión detallada"}
          </BodySmall>
        )}
    </div>
  );
}
