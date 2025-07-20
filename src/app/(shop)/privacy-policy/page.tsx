"use client";

import {
  H1,
  H2,
  Body,
  BodySmall,
  Subtitle,
} from "@/components/common/Typography";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PrivacyLayout, PrivacyPolicyCard } from "@/components/privacy-policy";
import { PRIVACY_SECTIONS } from "@/constants/privacySections";

export default function PrivacyPolicyPage() {
  const privacySections = PRIVACY_SECTIONS;
  const breadcrumbItems = [
    { label: "Configuración", href: "/settings" },
    { label: "Aviso de privacidad", href: "/privacy-policy" },
  ];

  return (
    <PrivacyLayout>
      <div className="max-w-6xl space-y-8">
        {/* Breadcrumb */}
        <div>
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Header */}
        <div className="space-y-4">
          <H1 className="text-white mb-6">
            Declaración de privacidad y confidencialidad de la información de
            RataCueva
          </H1>
          <Body className="text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            En RataCueva (en adelante, "nosotros", "nuestro" o "la Plataforma"),
            valoramos profundamente su privacidad y nos comprometemos firmemente
            a proteger la integridad y confidencialidad de sus datos personales.
            Este aviso de privacidad ha sido diseñado para informarle de manera
            clara y transparente sobre cómo recopilamos, utilizamos,
            almacenamos, divulgamos y protegemos la información personal que
            usted nos proporciona al interactuar con nuestro sitio web
            [www.ratacueva.com] (en adelante, el "Sitio") y al hacer uso de
            nuestros servicios.
          </Body>
          <Body className="text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Al acceder, navegar y utilizar nuestros servicios, usted reconoce
            haber leído y comprendido este Aviso de privacidad, y acepta las
            prácticas de tratamiento de datos personales aquí descritas. Su
            confianza es fundamental para nosotros, y este documento es una
            muestra de nuestro compromiso con la protección de su información.
          </Body>
          <div className="mt-6 text-neutral-400">
            <BodySmall>
              <strong>Última actualización:</strong> 2 de julio de 2025
            </BodySmall>
          </div>
        </div>

        {/* Sections Grid - 2 columnas en pantallas medianas y grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {privacySections.map((section) => (
            <PrivacyPolicyCard
              key={section.id}
              id={section.id}
              title={section.title}
              description={section.description}
              href={section.href}
              icon={section.icon}
            />
          ))}
        </div>
      </div>
    </PrivacyLayout>
  );
}
