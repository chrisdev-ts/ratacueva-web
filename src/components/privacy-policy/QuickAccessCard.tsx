"use client";

import Link from "next/link";
import { H2, Body, BodySmall } from "@/components/common/Typography";

interface QuickAccessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  category: "importante" | "informativo" | "contacto" | "derechos";
  estimatedTime?: string;
}

const categoryStyles = {
  importante: "bg-red-900/30 border-red-700 hover:bg-red-900/50",
  informativo: "bg-blue-900/30 border-blue-700 hover:bg-blue-900/50",
  contacto: "bg-green-900/30 border-green-700 hover:bg-green-900/50",
  derechos: "bg-purple-900/30 border-purple-700 hover:bg-purple-900/50",
};

const categoryTextColors = {
  importante: "text-red-100",
  informativo: "text-blue-100",
  contacto: "text-green-100",
  derechos: "text-purple-100",
};

export function QuickAccessCard({
  icon,
  title,
  description,
  href,
  category,
  estimatedTime,
}: QuickAccessCardProps) {
  return (
    <Link href={href}>
      <div
        className={`
        ${categoryStyles[category]} 
        border rounded-lg p-6 transition-all duration-300 
        hover:scale-105 cursor-pointer group
      `}
      >
        <div className="flex items-start gap-4">
          <div className="text-3xl">{icon}</div>
          <div className="flex-1">
            <H2
              className={`${categoryTextColors[category]} mb-2 group-hover:text-white transition-colors`}
            >
              {title}
            </H2>
            <Body
              className={`${categoryTextColors[category]} opacity-90 leading-relaxed`}
            >
              {description}
            </Body>
            {estimatedTime && (
              <BodySmall
                className={`${categoryTextColors[category]} opacity-70 mt-2`}
              >
                ⏱️ Lectura: {estimatedTime}
              </BodySmall>
            )}
          </div>
          <div className="text-xl opacity-50 group-hover:opacity-100 transition-opacity">
            →
          </div>
        </div>
      </div>
    </Link>
  );
}
