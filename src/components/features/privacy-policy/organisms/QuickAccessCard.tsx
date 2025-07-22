"use client";

import Link from "next/link";
import { BodySmall, Subheading } from "@/components/atoms/Typography";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

// Mapeo de categorías a variantes sobrias
const categoryMap = {
  importante: "success",
  informativo: "secondary",
  contacto: "success",
  derechos: "secondary",
};

interface QuickAccessCardProps {
  title: string;
  description: string;
  href: string;
  category: keyof typeof categoryMap;
}

export function QuickAccessCard({
  title,
  description,
  href,
  category,
}: QuickAccessCardProps) {
  // Solo dos variantes visuales: success y gray, success solo para contacto
  let base = "bg-gray";
  let accent = "";
  if (categoryMap[category] === "success") {
    base = "bg-success/10 border-success/25 text-success";
    accent = "group-hover:text-white";
  }
  if (categoryMap[category] === "secondary") {
    base = "bg-secondary/10 border-secondary/25 text-secondary";
    accent = "group-hover:text-white";
  }

  return (
    <Link href={href}>
      <div
        className={`
          ${base} border rounded-lg p-4 transition-all duration-300
          hover:scale-[1.02] cursor-pointer group h-full
        `}
      >
        <div className="flex flex-col h-full space-y-2">
          <div className="flex items-start gap-3">
            <div className="flex-1 min-w-0">
              <Subheading
                className={`font-bold leading-tight transition-colors ${accent}`}
              >
                {title}
              </Subheading>
              <BodySmall
                className={`bg-current/20 px-2 py-1 rounded mt-1 inline-block capitalize ${accent}`}
              >
                {category}
              </BodySmall>
            </div>
            <ChevronRightIcon className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
          </div>

          <div className="flex-1">
            <BodySmall className={`opacity-90 leading-relaxed line-clamp-3 ${accent}`}>
              {description}
            </BodySmall>
          </div>
        </div>
      </div>
    </Link>
  );
}
