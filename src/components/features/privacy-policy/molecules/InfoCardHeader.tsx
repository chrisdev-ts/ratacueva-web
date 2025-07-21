import { H3, Body } from "@/components/atoms/Typography";
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
        <div className="text-2xl text-white flex-shrink-0">{icon}</div>
        <H3
          className={`text-[hsl(var(--accent))] font-semibold flex-1 ${
            collapsible ? "group-hover:text-white transition-colors" : ""
          }`}
        >
          {title}
        </H3>
        {collapsible && (
          <button className="text-gray-400 hover:text-white transition-colors p-1">
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
      <Body className="text-gray-300 leading-relaxed text-sm">
        {collapsible && !isCardExpanded
          ? basicDescription || description
          : showDetailed
          ? description
          : basicDescription || description}
      </Body>

      {/* Toggle detailed button */}
      {collapsible &&
        isCardExpanded &&
        basicDescription &&
        basicDescription !== description && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleDetailed();
            }}
            className={`
              text-sm font-medium transition-colors hover:text-white mt-2 self-start
              ${colorScheme.text}
            `}
          >
            {showDetailed
              ? "Ver versión simplificada"
              : "Ver versión detallada"}
          </button>
        )}
    </div>
  );
}
