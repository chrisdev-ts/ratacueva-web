"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Body, Subtitle } from "@/components/atoms/Typography";
import { getSidebarSections } from "@/constants/privacySectionsData";

interface PrivacySidebarProps {
  className?: string;
}

export const PrivacySidebar: React.FC<PrivacySidebarProps> = ({
  className = "",
}) => {
  const pathname = usePathname();
  const privacySections = getSidebarSections();

  const isActive = (href: string) => {
    if (href === "/privacy-policy") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const getCurrentSectionIndex = () => {
    const currentIndex = privacySections.findIndex((section) =>
      isActive(section.href)
    );
    return currentIndex >= 0 ? currentIndex + 1 : 0;
  };

  return (
    <aside
      className={`bg-[hsl(var(--medium))] space-y-8 rounded-lg p-6 sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto ${className}`}
    >
      {/* Header */}
      <div className="space-y-6">
        <Subtitle className="text-neutral-400 font-bold">
          Sección {getCurrentSectionIndex()} de {privacySections.length}
        </Subtitle>

        {/* Progress bar */}
        <div className="w-full bg-neutral-700 rounded-full h-2">
          <div
            className="bg-[hsl(var(--primary))] h-2 rounded-full transition-all duration-300"
            style={{
              width: `${
                (getCurrentSectionIndex() / privacySections.length) * 100
              }%`,
            }}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-white rounded-full"></div>

      {/* Navigation */}
      <nav>
        {privacySections.map((section, index) => (
          <Link
            key={section.id}
            href={section.href}
            className={`
              group flex items-center p-4 rounded-lg transition-all duration-200
              ${
                isActive(section.href)
                  ? "bg-[hsl(var(--dark))] text-white font-bold"
                  : "text-neutral-300 hover:text-white hover:bg-neutral-700"
              }
            `}
          >
            {/* Number indicator */}
            <span
              className={`
              flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3
              ${
                isActive(section.href)
                  ? "bg-white text-[hsl(var(--dark))]"
                  : "bg-neutral-600 text-neutral-300 group-hover:bg-neutral-500"
              }
            `}
            >
              {index + 1}
            </span>

            {/* Title */}
            <Body
              className={`text-sm leading-tight ${
                isActive(section.href) ? "text-black" : ""
              }`}
            >
              {section.title}
            </Body>
          </Link>
        ))}
      </nav>

      {/* Divider */}
      <div className="border-b border-white rounded-full"></div>

      {/* Footer info */}
      <div>
        <Body className="text-sm text-white font-normal">
          ¿Necesitas ayuda?{" "}
          <a
            href="/support"
            className="font-bold hover:text-[hsl(var(--accent))] transition-colors"
          >
            Contactar soporte
          </a>
        </Body>
      </div>
    </aside>
  );
};
