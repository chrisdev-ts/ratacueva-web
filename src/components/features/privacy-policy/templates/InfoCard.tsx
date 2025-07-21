"use client";

import { useState } from "react";
import type { InfoCardProps } from "../molecules/InfoCardTypes";
import { accentColors } from "../molecules/InfoCardStyles";
import { InfoCardHeader } from "../molecules/InfoCardHeader";
import { InfoCardSection } from "../organisms/InfoCardSection";
import { InfoCardActionGuide } from "../molecules/InfoCardActionGuide";
import { InfoCardFooterNote } from "../molecules/InfoCardFooterNote";

export function InfoCard({
  icon,
  title,
  description,
  sections = [],
  footerNote,
  id,
  accentColor = "blue",
  legalBadge,
  actionGuide,
  basicDescription,
  collapsible = true,
  defaultExpanded = true,
}: InfoCardProps) {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(
    new Set()
  );
  const [showDetailed, setShowDetailed] = useState(false);
  const [isCardExpanded, setIsCardExpanded] = useState(defaultExpanded);

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSections(newExpanded);
  };

  const toggleCard = () => {
    setIsCardExpanded(!isCardExpanded);
    if (isCardExpanded) {
      setShowDetailed(false);
    }
  };

  const toggleDetailed = () => {
    setShowDetailed(!showDetailed);
  };

  const colorScheme = accentColors[accentColor];

  return (
    <div
      className={`
        bg-[hsl(var(--medium))] rounded-xl p-6
        border ${colorScheme.border} ${colorScheme.hover}
        transition-all duration-300 ease-out
        hover:shadow-lg hover:scale-[1.01]
        hover:bg-[hsl(var(--medium))]/90
      `}
      id={id}
    >
      <InfoCardHeader
        icon={icon}
        title={title}
        description={description}
        basicDescription={basicDescription}
        legalBadge={legalBadge}
        collapsible={collapsible}
        isCardExpanded={isCardExpanded}
        showDetailed={showDetailed}
        colorScheme={colorScheme}
        onToggleCard={toggleCard}
        onToggleDetailed={toggleDetailed}
      />

      {/* Collapsible Content Wrapper */}
      <div
        className={`
          grid transition-all duration-300 ease-out
          ${
            isCardExpanded
              ? "grid-rows-[1fr] opacity-100 mt-4"
              : "grid-rows-[0fr] opacity-0 mt-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <div className="space-y-4">
            {/* Sections */}
            {sections.length > 0 && (
              <div className="space-y-4">
                {sections.map((section, index) => (
                  <InfoCardSection
                    key={index}
                    section={section}
                    index={index}
                    isExpanded={expandedSections.has(index)}
                    isDetailedExpanded={expandedSections.has(index + 1000)}
                    colorScheme={colorScheme}
                    onToggleSection={toggleSection}
                    onToggleDetailed={(idx) => toggleSection(idx + 1000)}
                  />
                ))}
              </div>
            )}

            {/* Action Guide */}
            {actionGuide && <InfoCardActionGuide actionGuide={actionGuide} />}

            {/* Footer Note */}
            {footerNote && <InfoCardFooterNote footerNote={footerNote} />}
          </div>
        </div>
      </div>
    </div>
  );
}
