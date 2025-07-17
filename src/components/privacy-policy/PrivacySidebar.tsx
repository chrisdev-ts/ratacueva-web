import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { H3, Body, BodySmall } from "../common/Typography";

interface SidebarSection {
  id: string;
  title: string;
  href: string;
  subsections?: SidebarSection[];
}

interface PrivacySidebarProps {
  className?: string;
}

const privacySections: SidebarSection[] = [
  {
    id: "overview",
    title: "Aviso de Privacidad",
    href: "/privacy-policy",
  },
  {
    id: "identidad-responsable",
    title: "¿Quién es responsable de tus datos?",
    href: "/privacy-policy/quien-es-responsable",
  },
  {
    id: "datos-recopilamos",
    title: "¿Qué datos personales recopilamos?",
    href: "/privacy-policy/que-datos-recopilamos",
  },
  {
    id: "finalidades-tratamiento",
    title: "¿Para qué usamos tus datos?",
    href: "/privacy-policy/para-que-usamos-datos",
  },
  {
    id: "transferencia-datos",
    title: "¿Con quién compartimos tus datos?",
    href: "/privacy-policy/con-quien-compartimos-datos",
  },
  {
    id: "medidas-seguridad",
    title: "¿Cómo protegemos tus datos?",
    href: "/privacy-policy/como-protegemos-datos",
  },
  {
    id: "politica-cookies",
    title: "Cookies y tecnologías similares",
    href: "/privacy-policy/cookies-tecnologias",
  },
  {
    id: "derechos-usuarios",
    title: "Tus derechos sobre tus datos (ARCO)",
    href: "/privacy-policy/tus-derechos-arco",
  },
  {
    id: "proteccion-menores",
    title: "Privacidad de menores de edad",
    href: "/privacy-policy/privacidad-menores",
  },
  {
    id: "tiempo-retencion",
    title: "¿Cuánto tiempo conservamos tus datos?",
    href: "/privacy-policy/cuanto-tiempo-conservamos",
  },
  {
    id: "cambios-politica",
    title: "Cambios a este aviso de privacidad",
    href: "/privacy-policy/cambios-aviso-privacidad",
  },
  {
    id: "denuncias",
    title: "¿Dónde presentar quejas o denuncias?",
    href: "/privacy-policy/donde-presentar-quejas",
  },
];

export const PrivacySidebar: React.FC<PrivacySidebarProps> = ({
  className = "",
}) => {
  const pathname = usePathname();

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
      className={`bg-[hsl(var(--medium))] border border-neutral-700 rounded-lg p-6 sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto ${className}`}
    >
      {/* Header */}
      <div className="mb-6">
        <BodySmall className="text-neutral-400">
          Sección {getCurrentSectionIndex()} de {privacySections.length}
        </BodySmall>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
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

      {/* Navigation */}
      <nav className="space-y-1">
        {privacySections.map((section, index) => (
          <Link
            key={section.id}
            href={section.href}
            className={`
              group flex items-center px-3 py-2 rounded-lg transition-all duration-200
              ${
                isActive(section.href)
                  ? "bg-[hsl(var(--primary))] text-black font-medium"
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
                  ? "bg-black text-[hsl(var(--primary))]"
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

            {/* Active indicator */}
            {isActive(section.href) && (
              <div className="ml-auto">
                <svg
                  className="w-4 h-4 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </Link>
        ))}
      </nav>

      {/* Footer info */}
      <div className="mt-8 pt-6 border-t border-neutral-600">
        <BodySmall className="text-neutral-400 mb-3">
          ¿Necesitas ayuda?
        </BodySmall>
        <Link
          href="/contact"
          className="inline-flex items-center text-[hsl(var(--primary))] hover:text-[hsl(var(--accent))] transition-colors"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.405L3 21l2.595-5.094A8.959 8.959 0 013 12a8 8 0 018-8c4.418 0 8 3.582 8 8z"
            />
          </svg>
          <BodySmall className="font-medium">Contactar soporte</BodySmall>
        </Link>
      </div>
    </aside>
  );
};
