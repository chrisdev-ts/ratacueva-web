"use client";

import Link from "next/link";
import { Body } from "@/components/common/Typography";

interface PrivacyNavigationProps {
  currentPage: number;
}

const pages = [
  {
    number: 1,
    title: "¿Quién es responsable?",
    href: "/privacy-policy/quien-es-responsable",
  },
  {
    number: 2,
    title: "¿Qué datos recopilamos?",
    href: "/privacy-policy/que-datos-recopilamos",
  },
  {
    number: 3,
    title: "¿Para qué usamos tus datos?",
    href: "/privacy-policy/para-que-usamos-datos",
  },
  {
    number: 4,
    title: "¿Con quién compartimos datos?",
    href: "/privacy-policy/con-quien-compartimos-datos",
  },
  {
    number: 5,
    title: "¿Cómo protegemos tus datos?",
    href: "/privacy-policy/como-protegemos-datos",
  },
  {
    number: 6,
    title: "Cookies y tecnologías",
    href: "/privacy-policy/cookies-tecnologias",
  },
  {
    number: 7,
    title: "Tus derechos (ARCO)",
    href: "/privacy-policy/tus-derechos-arco",
  },
  {
    number: 8,
    title: "Privacidad de menores",
    href: "/privacy-policy/privacidad-menores",
  },
  {
    number: 9,
    title: "¿Cuánto tiempo conservamos datos?",
    href: "/privacy-policy/cuanto-tiempo-conservamos",
  },
  {
    number: 10,
    title: "Cambios al aviso",
    href: "/privacy-policy/cambios-aviso-privacidad",
  },
  {
    number: 11,
    title: "¿Dónde presentar quejas?",
    href: "/privacy-policy/donde-presentar-quejas",
  },
];

export function PrivacyNavigation({ currentPage }: PrivacyNavigationProps) {
  const currentIndex = pages.findIndex((page) => page.number === currentPage);
  const previousPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage =
    currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <div className="mt-12 pt-8 border-t border-neutral-700">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Botón anterior */}
        {previousPage ? (
          <Link
            href={previousPage.href}
            className="inline-flex items-center px-6 py-3 border border-[hsl(var(--primary))] text-[hsl(var(--primary))] rounded-lg hover:bg-[hsl(var(--primary))] hover:text-black transition-colors"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <Body className="font-bold">Anterior: {previousPage.title}</Body>
          </Link>
        ) : (
          <div></div> // Espacio vacío para mantener el layout
        )}

        {/* Botón siguiente */}
        {nextPage ? (
          <Link
            href={nextPage.href}
            className="inline-flex items-center px-6 py-3 bg-[hsl(var(--primary))] text-black rounded-lg hover:bg-[hsl(var(--accent))] transition-colors"
          >
            <Body className="font-bold">Siguiente: {nextPage.title}</Body>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        ) : (
          <Link
            href="/privacy-policy"
            className="inline-flex items-center px-6 py-3 bg-[hsl(var(--primary))] text-black rounded-lg hover:bg-[hsl(var(--accent))] transition-colors"
          >
            <Body className="font-bold">Volver al índice</Body>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
