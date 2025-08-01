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
    <div className="pt-8 border-t border-gray">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Botón anterior */}
        {previousPage ? (
          <Link
            href={previousPage.href}
            className="inline-flex items-center px-6 py-3 bg-success/10 border border-success text-success rounded-lg hover:bg-success hover:text-dark transition-colors"
          >
            <ChevronLeftIcon className="mr-2 w-4 h-4" />
            <Body className="font-bold">Anterior: {previousPage.title}</Body>
          </Link>
        ) : (
          <div></div>
        )}

        {/* Botón siguiente */}
        {nextPage ? (
          <Link
            href={nextPage.href}
            className="inline-flex items-center px-6 py-3 bg-success/10 border border-success text-success rounded-lg hover:bg-success hover:text-dark transition-colors"
          >
            <Body className="font-bold">Siguiente: {nextPage.title}</Body>
            <ChevronRightIcon className="ml-2 w-4 h-4" />
          </Link>
        ) : (
          <Link
            href="/privacy-policy"
            className="inline-flex items-center px-6 py-3 bg-success/10 border border-success text-success rounded-lg hover:bg-success hover:text-dark transition-colors"
          >
            <Body className="font-bold">Volver al índice</Body>
            <ChevronRightIcon className="ml-2 w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
