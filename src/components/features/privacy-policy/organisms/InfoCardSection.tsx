import { Body } from "@/components/atoms/Typography";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import type {
  InfoCardSection as InfoCardSectionType,
  ColorScheme,
} from "../molecules/InfoCardTypes";

interface InfoCardSectionProps {
  section: InfoCardSectionType;
  index: number;
  isExpanded: boolean;
  isDetailedExpanded: boolean;
  colorScheme: ColorScheme;
  onToggleSection: (index: number) => void;
  onToggleDetailed: (index: number) => void;
}

export function InfoCardSection({
  section,
  index,
  isExpanded,
  isDetailedExpanded,
  colorScheme,
  onToggleSection,
  onToggleDetailed,
}: InfoCardSectionProps) {
  return (
    <div
      className={`
        border border-gray-600/50 rounded-lg p-4 
        transition-all duration-200
        ${
          section.variant === "highlight"
            ? `${colorScheme.bg} ${colorScheme.border}`
            : "bg-gray-800/30 hover:bg-gray-800/50"
        }
      `}
    >
      {/* Section Header */}
      <div
        className={`
          flex items-center justify-between 
          ${section.collapsible ? "cursor-pointer" : ""}
        `}
        onClick={section.collapsible ? () => onToggleSection(index) : undefined}
      >
        <div className="flex items-center gap-2 flex-1">
          <Body className={`font-semibold text-sm ${colorScheme.text}`}>
            {section.subtitle}
          </Body>
        </div>

        {section.collapsible && (
          <button className="text-gray-400 hover:text-white transition-colors">
            {isExpanded ? (
              <ChevronDownIcon className="h-4 w-4" />
            ) : (
              <ChevronRightIcon className="h-4 w-4" />
            )}
          </button>
        )}
      </div>

      {/* Section Content */}
      <div
        className={`
          grid transition-all duration-300 ease-out overflow-hidden
          ${
            section.collapsible && !isExpanded
              ? "grid-rows-[0fr] opacity-0"
              : "grid-rows-[1fr] opacity-100 mt-2"
          }
        `}
      >
        <div className="overflow-hidden">
          {/* Basic content */}
          {section.basicContent && (
            <div className="my-3">
              <Body className="bg-gray-800/30 p-3 rounded-lg border border-gray-600/30">
                {section.basicContent}
              </Body>
            </div>
          )}

          {/* Detailed content section */}
          <div
            className={
              section.basicContent && section.detailedContent ? "space-y-2" : ""
            }
          >
            {section.basicContent && section.detailedContent && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleDetailed(index);
                }}
                className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                {isDetailedExpanded ? (
                  <ChevronDownIcon className="h-3 w-3" />
                ) : (
                  <ChevronRightIcon className="h-3 w-3" />
                )}
                <span>Ver detalles técnicos/legales</span>
              </button>
            )}

            <div
              className={`
                grid transition-all duration-300 ease-out overflow-hidden
                ${
                  section.basicContent &&
                  section.detailedContent &&
                  !isDetailedExpanded
                    ? "grid-rows-[0fr] opacity-0"
                    : "grid-rows-[1fr] opacity-100"
                }
              `}
            >
              <div className="overflow-hidden">
                {/* Original list content */}
                {section.list && (
                  <ul className="space-y-2 mt-2">
                    {section.list.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="text-[hsl(var(--primary))] mt-1 text-sm font-bold">
                          ▸
                        </span>
                        <Body className="text-sm text-gray-200 leading-relaxed">
                          {item}
                        </Body>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Original plain text content */}
                {section.plainText && (
                  <Body className="text-sm text-gray-200 leading-relaxed mt-2">
                    {section.plainText}
                  </Body>
                )}

                {/* New detailed content */}
                {section.detailedContent && (
                  <div className="bg-gray-800/30 p-3 rounded-lg border border-gray-600/30 mt-2">
                    {Array.isArray(section.detailedContent) ? (
                      <ul className="space-y-2">
                        {section.detailedContent.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3"
                          >
                            <span className="text-[hsl(var(--primary))] mt-1.5 text-xs">
                              •
                            </span>
                            <Body className="text-sm text-gray-300 leading-relaxed">
                              {item}
                            </Body>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <Body className="text-sm text-gray-300 leading-relaxed">
                        {section.detailedContent}
                      </Body>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
