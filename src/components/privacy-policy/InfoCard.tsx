"use client";

import { useState } from "react";
import { H3, Body } from "@/components/common/Typography";

interface InfoCardSection {
  subtitle: string;
  list?: string[];
  plainText?: string;
  variant?: "normal" | "highlight";
  collapsible?: boolean;
}

interface FooterNote {
  type: "tip" | "warning";
  text: string;
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  sections?: InfoCardSection[];
  footerNote?: FooterNote;
  id?: string;
  accentColor?: "blue" | "green" | "purple" | "orange" | "red";
}

export function InfoCard({
  icon,
  title,
  description,
  sections = [],
  footerNote,
  id,
  accentColor = "blue",
}: InfoCardProps) {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(
    new Set()
  );

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSections(newExpanded);
  };

  const accentColors = {
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

  const footerNoteStyles = {
    tip: {
      bg: "bg-blue-900/30",
      border: "border-blue-700",
      text: "text-blue-100",
      icon: "💡",
      label: "Consejo:",
    },
    warning: {
      bg: "bg-yellow-900/30",
      border: "border-yellow-700",
      text: "text-yellow-100",
      icon: "⚠️",
      label: "Importante:",
    },
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
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="text-2xl flex-shrink-0 mt-1">{icon}</div>
        <div>
          <H3 className="text-[hsl(var(--accent))] mb-2 font-semibold">
            {title}
          </H3>
          <Body className="text-gray-300 leading-relaxed">{description}</Body>
        </div>
      </div>

      {/* Sections */}
      {sections.length > 0 && (
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
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
                onClick={
                  section.collapsible ? () => toggleSection(index) : undefined
                }
              >
                <Body
                  className={`font-semibold text-sm ${colorScheme.text} mb-2`}
                >
                  {section.subtitle}
                </Body>
                {section.collapsible && (
                  <button className="text-gray-400 hover:text-white transition-colors">
                    {expandedSections.has(index) ? "▼" : "▶"}
                  </button>
                )}
              </div>

              {/* Section Content */}
              <div
                className={`
                transition-all duration-300 ease-out overflow-hidden
                ${
                  section.collapsible && !expandedSections.has(index)
                    ? "max-h-0 opacity-0"
                    : "max-h-none opacity-100"
                }
              `}
              >
                {section.list && (
                  <ul className="space-y-2">
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

                {section.plainText && (
                  <Body className="text-sm text-gray-200 leading-relaxed">
                    {section.plainText}
                  </Body>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer Note */}
      {footerNote && (
        <div
          className={`
          mt-6 p-4 rounded-lg border
          ${footerNoteStyles[footerNote.type].bg} 
          ${footerNoteStyles[footerNote.type].border}
          transition-all duration-200 hover:scale-[1.01]
        `}
        >
          <Body className={`text-sm ${footerNoteStyles[footerNote.type].text}`}>
            <span className="mr-2">
              {footerNoteStyles[footerNote.type].icon}
            </span>
            <strong>{footerNoteStyles[footerNote.type].label}</strong>{" "}
            {footerNote.text}
          </Body>
        </div>
      )}
    </div>
  );
}
