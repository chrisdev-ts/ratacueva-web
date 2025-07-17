"use client";

import Link from "next/link";
import { H1, H2, Body, BodySmall } from "@/components/common/Typography";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PrivacyLayout } from "@/components/privacy-policy/PrivacyLayout";

interface PrivacySection {
  id: string;
  title: string;
  description: string;
  href: string;
}

const privacySections: PrivacySection[] = [
  {
    id: "identidad-responsable",
    title: "¿Quién es responsable de tus datos?",
    description:
      "RataCueva es la entidad legal responsable del tratamiento de sus datos personales y se encuentra ubicada en Cuitláhuac, Ver.",
    href: "/privacy-policy/quien-es-responsable",
  },
  {
    id: "datos-recopilamos",
    title: "¿Qué datos personales recopilamos?",
    description:
      "Información sobre las categorías de datos personales que recopilamos para ofrecerle una experiencia completa en RataCueva.",
    href: "/privacy-policy/que-datos-recopilamos",
  },
  {
    id: "finalidades-tratamiento",
    title: "¿Para qué usamos tus datos?",
    description:
      "Detalle de las finalidades primarias y secundarias para las cuales utilizamos sus datos personales en nuestra plataforma.",
    href: "/privacy-policy/para-que-usamos-datos",
  },
  {
    id: "transferencia-datos",
    title: "¿Con quién compartimos tus datos?",
    description:
      "Información sobre los terceros con quienes compartimos sus datos y las medidas de protección implementadas.",
    href: "/privacy-policy/con-quien-compartimos-datos",
  },
  {
    id: "medidas-seguridad",
    title: "¿Cómo protegemos tus datos?",
    description:
      "Conjunto integral de medidas administrativas, técnicas y físicas que implementamos para proteger su información.",
    href: "/privacy-policy/como-protegemos-datos",
  },
  {
    id: "politica-cookies",
    title: "Cookies y tecnologías similares",
    description:
      "Cómo utilizamos cookies, web beacons y otras tecnologías para mejorar tu experiencia de usuario.",
    href: "/privacy-policy/cookies-tecnologias",
  },
  {
    id: "derechos-usuarios",
    title: "Tus derechos sobre tus datos (ARCO)",
    description:
      "Conoce tus derechos de Acceso, Rectificación, Cancelación y Oposición, así como sus limitaciones.",
    href: "/privacy-policy/tus-derechos-arco",
  },
  {
    id: "proteccion-menores",
    title: "Privacidad de menores de edad",
    description:
      "Políticas específicas para la protección de datos de usuarios menores de 18 años.",
    href: "/privacy-policy/privacidad-menores",
  },
  {
    id: "tiempo-retencion",
    title: "¿Cuánto tiempo conservamos tus datos?",
    description:
      "Períodos de retención y criterios para la eliminación segura de tu información personal.",
    href: "/privacy-policy/cuanto-tiempo-conservamos",
  },
  {
    id: "cambios-politica",
    title: "Cambios a este aviso de privacidad",
    description:
      "Cómo te notificamos sobre cambios en este aviso y qué opciones tienes ante las modificaciones.",
    href: "/privacy-policy/cambios-aviso-privacidad",
  },
  {
    id: "denuncias",
    title: "¿Dónde presentar quejas o denuncias?",
    description:
      "Información sobre cómo presentar denuncias ante el Instituto Nacional de Transparencia y Acceso a la Información.",
    href: "/privacy-policy/donde-presentar-quejas",
  },
];

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [
    { label: "Configuración", href: "/settings" },
    { label: "Aviso de privacidad", href: "/privacy-policy" },
  ];

  return (
    <PrivacyLayout>
      <div className="max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Header */}
        <div className="mb-12">
          <H1 className="text-white mb-6">
            Declaración de privacidad y confidencialidad de la información de
            RataCueva
          </H1>
          <Body className="text-neutral-300 max-w-4xl mx-auto mb-6 leading-relaxed">
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
          <Body className="text-neutral-300 max-w-4xl mx-auto mb-6 leading-relaxed">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {privacySections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              className="bg-[hsl(var(--medium))] rounded-lg p-6 hover:bg-[hsl(var(--medium))]/80 transition-all duration-300 border border-neutral-700 hover:border-[hsl(var(--primary))] group"
            >
              <div className="h-full">
                <H2 className="text-[hsl(var(--primary))] mb-3 text-lg group-hover:text-[hsl(var(--accent))] transition-colors">
                  {section.title}
                </H2>
                <Body className="text-neutral-300 text-sm leading-relaxed">
                  {section.description}
                </Body>
                <div className="mt-4 flex items-center text-[hsl(var(--primary))] text-sm group-hover:text-[hsl(var(--accent))] transition-colors">
                  <span>Leer más</span>
                  <svg
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Important Notice */}
        <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-8 mb-12">
          <div className="text-center">
            <H2 className="text-blue-100 mb-4">
              🛡️ Tu privacidad es nuestra prioridad
            </H2>
            <Body className="text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Este aviso de privacidad cumple con la Ley Federal de Protección
              de Datos Personales en Posesión de los Particulares y establece
              los términos bajo los cuales RATA CUEVA recopila, utiliza,
              almacena y protege tu información personal.
            </Body>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[hsl(var(--medium))] rounded-lg p-8 text-center">
          <H2 className="text-[hsl(var(--primary))] mb-4">
            ¿Tienes dudas sobre tu privacidad?
          </H2>
          <Body className="text-neutral-300 mb-6 max-w-2xl mx-auto">
            Si tienes preguntas sobre cómo manejamos tus datos personales o
            deseas ejercer tus derechos, estamos aquí para ayudarte.
          </Body>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/privacy-policy/derechos-usuarios"
              className="inline-flex items-center px-6 py-3 bg-[hsl(var(--primary))] text-black rounded-lg hover:bg-[hsl(var(--accent))] transition-colors font-semibold"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Conoce tus derechos
            </Link>
            <Link
              href="mailto:privacidad@ratacueva.com"
              className="inline-flex items-center px-6 py-3 border border-[hsl(var(--primary))] text-[hsl(var(--primary))] rounded-lg hover:bg-[hsl(var(--primary))] hover:text-black transition-colors font-semibold"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z"
                />
              </svg>
              Contactar por email
            </Link>
          </div>
        </div>
      </div>
    </PrivacyLayout>
  );
}
