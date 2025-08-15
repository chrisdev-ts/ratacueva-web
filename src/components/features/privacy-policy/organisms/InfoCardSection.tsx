import { Body, BodySmall, Caption } from "@/components/atoms/Typography";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import type { InfoCardSection as InfoCardSectionType } from "../molecules/InfoCardTypes";
// Eliminado palettes

type InfoCardSectionProps = {
  section: InfoCardSectionType;
  index: number;
  isExpanded: boolean;
  isDetailedExpanded: boolean;
  onToggleSection: (index: number) => void;
  onToggleDetailed: (index: number) => void;
};

export function InfoCardSection({
  section,
  index,
  isExpanded,
  isDetailedExpanded,
  onToggleSection,
  onToggleDetailed,
}: InfoCardSectionProps) {
  return (
    <div
      className={`border rounded-lg p-4 transition-all duration-200 bg-gray-800/30 hover:bg-gray-800/50 border-gray-600/50`}>
      {/* Section Header */}
      <div
        className={`
          flex items-center justify-between 
          ${section.collapsible ? "cursor-pointer" : ""}
        `}
        onClick={section.collapsible ? () => onToggleSection(index) : undefined}>
        <div className="flex items-center gap-2 flex-1">
          <BodySmall className={`font-semibold`}>{section.subtitle}</BodySmall>
        </div>

        {section.collapsible && (
          <button className="hover:text-white transition-colors">
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
        `}>
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
            }>
            {section.basicContent && section.detailedContent && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleDetailed(index);
                }}
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
                {isDetailedExpanded ? (
                  <ChevronDownIcon className="h-3 w-3" />
                ) : (
                  <ChevronRightIcon className="h-3 w-3" />
                )}
                <Caption>Ver detalles técnicos/legales</Caption>
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
              `}>
              <div className="overflow-hidden">
                {/* Original list content */}
                {section.list && (
                  <ul className="space-y-2 mt-2">
                    {section.list.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <ChevronRightIcon className="text-success mt-1 h-4 w-4" />
                        <BodySmall className="leading-relaxed">
                          {item}
                        </BodySmall>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Original plain text content */}
                {section.plainText && (
                  <BodySmall className="leading-relaxed mt-2">
                    {section.plainText}
                  </BodySmall>
                )}

                {/* New detailed content */}
                {section.detailedContent && (
                  <div className="bg-gray-800/30 p-3 rounded-lg border border-gray-600/30 mt-2">
                    {Array.isArray(section.detailedContent) ? (
                      <ul className="space-y-2">
                        {section.detailedContent.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3">
                            <ChevronRightIcon className="text-success mt-1.5 h-3 w-3" />
                            <BodySmall className="leading-relaxed">
                              {item}
                            </BodySmall>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <BodySmall className="leading-relaxed">
                        {section.detailedContent}
                      </BodySmall>
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
