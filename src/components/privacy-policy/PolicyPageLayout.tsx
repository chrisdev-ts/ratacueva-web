"use client";

import React from "react";
import { H1, BodySmall } from "@/components/common/Typography";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PrivacyLayout } from "@/components/privacy-policy/PrivacyLayout";
import {
  HighlightBox,
  QuickAccessCard,
  PrivacyNavigation,
  FAQItem,
  SectionDivider,
} from "@/components/privacy-policy";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface QuickAccessItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  category: "importante" | "informativo" | "contacto" | "derechos";
}

interface HighlightBoxProps {
  icon: React.ReactNode;
  title: string;
  type: "warning" | "info" | "success" | "urgent" | "legal";
  children: React.ReactNode;
}

interface FAQ {
  question: string;
  answer: string;
}

interface PolicyPageLayoutProps {
  // Page metadata
  title: string;
  subtitle: string;
  breadcrumbItems: BreadcrumbItem[];
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
  breadcrumbItems,
  currentPageNumber,
  highlightBox,
  quickAccessCards,
  children,
  faqs,
  showFooter = true,
}: PolicyPageLayoutProps) {
  // Helper: detect SectionDivider marker
  const isSectionDivider = (child: any) => {
    return (
      child &&
      child.type &&
      (child.type.displayName === "PolicyPageLayoutSectionDivider" ||
        child.type === PolicyPageLayout.SectionDivider)
    );
  };

  return (
    <PrivacyLayout>
      <div className="max-w-4xl">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <H1 className="text-white mb-4">{title}</H1>
          <BodySmall className="text-neutral-300">{subtitle}</BodySmall>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-white">
          {/* Highlight Box - Summary */}
          <section>
            <HighlightBox
              icon={highlightBox.icon}
              title={highlightBox.title}
              type={highlightBox.type}
            >
              {highlightBox.children}
            </HighlightBox>
          </section>

          {/* Quick Access Cards */}
          {quickAccessCards && quickAccessCards.length > 0 && (
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickAccessCards.map((card, index) => (
                  <QuickAccessCard
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                    href={card.href}
                    category={card.category}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Main Content - InfoCard Components con soporte para SectionDivider */}
          <section>
            {Array.isArray(children)
              ? children.map((child, idx) =>
                  isSectionDivider(child) ? (
                    <div key={`divider-${idx}`}>{child}</div>
                  ) : (
                    <div key={idx}>{child}</div>
                  )
                )
              : children}
          </section>

          {/* FAQs Section */}
          {faqs && faqs.length > 0 && (
            <section>
              <h2 className="text-[hsl(var(--primary))] text-2xl font-bold mb-6">
                Preguntas frecuentes
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Privacy Navigation */}
        <PrivacyNavigation currentPage={currentPageNumber} />

        {/* Footer */}
        {showFooter && (
          <div className="mt-8 text-center">
            <BodySmall className="text-neutral-400">
              © 2025 RataCueva. Todos los derechos reservados.
            </BodySmall>
          </div>
        )}
      </div>
    </PrivacyLayout>
  );
}

// Componente marcador para divisores de sección
function PolicyPageLayoutSectionDivider({ subtitle }: { subtitle: string }) {
  return <SectionDivider subtitle={subtitle} />;
}
PolicyPageLayoutSectionDivider.displayName = "PolicyPageLayoutSectionDivider";

// Asignar el componente marcador como propiedad del layout
PolicyPageLayout.SectionDivider = PolicyPageLayoutSectionDivider;
