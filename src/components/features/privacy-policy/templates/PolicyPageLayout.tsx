"use client";

import React from "react";
import { HighlightBox } from "@/components/features/privacy-policy/atoms/HighlightBox";
import { QuickAccessCard } from "@/components/features/privacy-policy/organisms/QuickAccessCard";
import { PrivacyNavigation } from "@/components/features/privacy-policy/organisms/PrivacyNavigation";
import { FAQSection } from "@/components/features/privacy-policy/molecules/FAQSection";
import { Body, Display } from '@/components/atoms/Typography';

interface QuickAccessItem {
  title: string;
  description: string;
  href: string;
  category: "importante" | "informativo" | "contacto" | "derechos";
}

interface HighlightBoxProps {
  icon: React.ReactNode;
  title: string;
  type: "warning" | "info" | "success" | "urgent" | "legal";
  content: string | string[]; // Acepta texto simple o array de textos
}

interface FAQ {
  question: string;
  answer: string;
}

interface PolicyPageLayoutProps {
  // Page metadata
  title: string;
  subtitle: string;
  currentPageNumber: number;

  // Content sections
  highlightBox: HighlightBoxProps;
  quickAccessCards: QuickAccessItem[];
  children: React.ReactNode; // InfoCard components go here
  faqs: FAQ[];

  // Footer
  showFooter?: boolean;
}

export function PolicyPageLayout({
  title,
  subtitle,
  currentPageNumber,
  highlightBox,
  quickAccessCards,
  children,
  faqs,
}: PolicyPageLayoutProps) {
  return (
    <div className="max-w-4xl space-y-8">
      {/* Page Header */}
      <div>
        <Display className="mb-4">{title}</Display>
        <Body>{subtitle}</Body>
      </div>

      {/* Highlight Box - Summary */}
      <section>
        <HighlightBox
          icon={highlightBox.icon}
          title={highlightBox.title}
          type={highlightBox.type}
          content={highlightBox.content}
        />
      </section>

      {/* Quick Access Cards */}
      {quickAccessCards && quickAccessCards.length > 0 && (
        <section>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
            {quickAccessCards.map((card, index) => (
              <QuickAccessCard
                key={index}
                title={card.title}
                description={card.description}
                href={card.href}
                category={card.category}
              />
            ))}
          </div>
        </section>
      )}

      {/* Main Content - InfoCard Components */}
      <section className="space-y-6">{children}</section>

      {/* FAQs Section */}
      <FAQSection faqs={faqs} />

      {/* Privacy Navigation */}
      <PrivacyNavigation currentPage={currentPageNumber} />
    </div>
  );
}
