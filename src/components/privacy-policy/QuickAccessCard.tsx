"use client";

import Link from "next/link";
import { BodySmall, Subtitle } from "@/components/common/Typography";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface QuickAccessCardProps {
  title: string;
  description: string;
  href: string;
  category: "importante" | "informativo" | "contacto" | "derechos";
}

const categoryStyles = {
  importante: "bg-yellow-900/30 border-yellow-700 hover:bg-yellow-900/50",
  informativo: "bg-blue-900/30 border-blue-700 hover:bg-blue-900/50",
  contacto: "bg-green-900/30 border-green-700 hover:bg-green-900/50",
  derechos: "bg-purple-900/30 border-purple-700 hover:bg-purple-900/50",
};

const categoryTextColors = {
  importante: "text-yellow-100",
  informativo: "text-blue-100",
  contacto: "text-green-100",
  derechos: "text-purple-100",
};

export function QuickAccessCard({
  title,
  description,
  href,
  category,
}: QuickAccessCardProps) {
  return (
    <Link href={href}>
      <div
        className={`
        ${categoryStyles[category]} text-white
        border rounded-lg p-4 transition-all duration-300 
        hover:scale-[1.02] cursor-pointer group h-full
      `}
      >
        <div className="flex flex-col h-full space-y-2">
          {/* Header con icono y título */}
          <div className="flex items-start gap-3">
            <div className="flex-1 min-w-0">
              <Subtitle
                className={`${categoryTextColors[category]} font-bold leading-tight group-hover:text-white transition-colors`}
              >
                {title}
              </Subtitle>
              <span
                className={`text-xs ${categoryTextColors[category]} bg-current/20 px-2 py-1 rounded mt-1 inline-block capitalize`}
              >
                {category}
              </span>
            </div>
            <ChevronRightIcon className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
          </div>

          {/* Descripción */}
          <div className="flex-1">
            <BodySmall
              className={`${categoryTextColors[category]} opacity-90 leading-relaxed line-clamp-3`}
            >
              {description}
            </BodySmall>
          </div>
        </div>
      </div>
    </Link>
  );
}
