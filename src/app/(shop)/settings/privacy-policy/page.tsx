"use client";

import { Body, BodySmall } from "@/components/atoms/Typography";
import { PrivacySidebar } from "@/components/features/privacy-policy/organisms/PrivacySidebar";
import { PrivacyPolicyCard } from "@/components/features/privacy-policy";
import { getPrivacySections } from "@/constants/privacySectionsData";
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb";
import { PageLayout } from "@/components/templates/PageLayout";

export default function PrivacyPolicyPage() {
  const privacySections = getPrivacySections();

  return (
    <PageLayout>
      <div className="pt-8 pb-4">
        {/* Row 1: Breadcrumb y título */}
        <SettingsBreadcrumb
          items={[
            { label: "Configuración", href: "/settings" },
            { label: "Aviso de privacidad" },
          ]}
          title="Declaración de privacidad y confidencialidad de la información de RataCueva"
          color="text-white"
          className="mb-8"
        />
        {/* Row 2: Sidebar y contenido */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block lg:w-80 flex-shrink-0">
            <PrivacySidebar />
          </div>
          {/* Contenido principal */}
          <div className="flex-1 min-w-0">
            <div className="space-y-8">
              {/* Header Content */}
              <div className="space-y-4">
                <div>
                  <BodySmall className="text-white">
                    <strong>Última actualización:</strong> 2 de julio de 2025
                  </BodySmall>
                </div>
                <Body className="max-w-4xl leading-relaxed text-white">
                  En RataCueva (en adelante, &quot;nosotros&quot;, &quot;nuestro&quot; o &quot;la Plataforma&quot;),
                  valoramos profundamente su privacidad y nos comprometemos firmemente
                  a proteger la integridad y confidencialidad de sus datos personales.
                  Este aviso de privacidad ha sido diseñado para informarle de manera
                  clara y transparente sobre cómo recopilamos, utilizamos,
                  almacenamos, divulgamos y protegemos la información personal que
                  usted nos proporciona al interactuar con nuestro sitio web
                  [www.ratacueva.com] (en adelante, el &quot;Sitio&quot;) y al hacer uso de
                  nuestros servicios.
                </Body>
                <Body className="max-w-4xl leading-relaxed text-white">
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
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
