"use client";

import { Body, BodySmall } from "@/components/atoms/Typography";
import {
  PrivacyLayout,
  PrivacyPolicyCard,
} from "@/components/features/privacy-policy";
import { getPrivacySections } from "@/constants/privacySectionsData";

export default function PrivacyPolicyPage() {
  const privacySections = getPrivacySections();
  const breadcrumbItems = [
    { label: "Configuración", href: "/settings" },
    { label: "Aviso de privacidad", href: "/privacy-policy" },
  ];

  return (
    <PrivacyLayout
      title="Declaración de privacidad y confidencialidad de la información de RataCueva"
      breadcrumbs={breadcrumbItems}
    >
      <div className="space-y-8">
        {/* Header Content */}
        <div className="space-y-4">
          <div className=" text-neutral-400">
            <BodySmall>
              <strong>Última actualización:</strong> 2 de julio de 2025
            </BodySmall>
          </div>
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
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {privacySections.map((section) => (
            <PrivacyPolicyCard
              key={section.id}
              id={section.id}
              title={section.title}
              summary={section.summary}
              href={section.href}
              icon={section.icon}
            />
          ))}
        </div>
      </div>
    </PrivacyLayout>
  );
}
