"use client";

import Link from "next/link";
import { Body } from "@/components/atoms/Typography";
import { PRIVACY_POLICY_SECTIONS } from "@/constants/privacySectionsData";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface PrivacyNavigationProps {
  currentPage: number;
}

export function PrivacyNavigation({ currentPage }: PrivacyNavigationProps) {
  // Transformar los datos de las constantes al formato que necesita la navegación
  const pages = PRIVACY_POLICY_SECTIONS.map((section) => ({
    number: section.currentPageNumber,
    title: section.title,
    href: section.path,
  }));

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
            <ChevronLeftIcon className="mr-2 w-4 h-4" />
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
            <ChevronRightIcon className="ml-2 w-4 h-4" />
          </Link>
        ) : (
          <Link
            href="/privacy-policy"
            className="inline-flex items-center px-6 py-3 bg-[hsl(var(--accent))] text-white rounded-lg hover:bg-[hsl(var(--accent))] transition-colors"
          >
            <Body className="font-bold">Volver al índice</Body>
            <ChevronRightIcon className="ml-2 w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
