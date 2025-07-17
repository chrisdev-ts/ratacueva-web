"use client";

import { Body } from "@/components/common/Typography";
import { PolicyPageLayout, InfoCard } from "@/components/privacy-policy";
import {
  BuildingOfficeIcon,
  EnvelopeIcon,
  MapPinIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  PhoneIcon,
  ClockIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export default function IdentidadResponsablePage() {
  const breadcrumbItems = [
    { label: "Configuración", href: "/settings" },
    { label: "Aviso de privacidad", href: "/privacy-policy" },
    {
      label: "¿Quién es responsable de tus datos?",
      href: "/privacy-policy/quien-es-responsable",
    },
  ];

  const quickAccessCards = [
    {
      icon: <BuildingOfficeIcon className="h-6 w-6" />,
      title: "Responsable del tratamiento",
      description: "RataCueva decide sobre el uso y protección de datos",
      href: "#responsable-tratamiento",
      category: "importante" as const,
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Domicilio oficial",
      description: "Av. Universidad No. 350, Cuitláhuac, Ver.",
      href: "#domicilio-oficial",
      category: "importante" as const,
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: "Contacto de privacidad",
      description: "privacidad@ratacueva.com",
      href: "#contacto-privacidad",
      category: "contacto" as const,
    },
  ];

  const faqs = [
    {
      question:
        "¿Qué significa que RataCueva sea el 'responsable' de mis datos?",
      answer:
        "Significa que RataCueva es quien decide sobre el uso y la protección de la información que usted nos confía. Tenemos la obligación de cumplir cabalmente con la LFPDPPP y su reglamento, así como con cualquier otra normativa aplicable en la materia.",
    },
    {
      question: "¿Dónde puedo ejercer mis derechos ARCO?",
      answer:
        "Puede ejercer sus derechos ARCO enviando una solicitud a privacidad@ratacueva.com, que es nuestro canal principal y directo, o presentándola físicamente en nuestro domicilio oficial en Cuitláhuac, Veracruz.",
    },
    {
      question: "¿Cuál es el tiempo de respuesta para consultas de privacidad?",
      answer:
        "Nos comprometemos a responder a sus comunicaciones de manera oportuna y efectiva. Hemos habilitado privacidad@ratacueva.com como el canal principal para ejercer derechos y realizar consultas sobre privacidad.",
    },
  ];

  return (
    <PolicyPageLayout
      title="¿Quién es responsable de tus datos? (Identidad y domicilio)"
      subtitle="RataCueva es la entidad legal responsable del tratamiento de sus datos personales. Esto significa que RataCueva es quien decide sobre el uso y la protección de la información que usted nos confía. Nuestro compromiso es cumplir cabalmente con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su reglamento, así como con cualquier otra normativa aplicable en la materia."
      breadcrumbItems={breadcrumbItems}
      currentPageNumber={1}
      highlightBox={{
        icon: <InformationCircleIcon className="h-6 w-6" />,
        title: "Información de contacto para privacidad",
        type: "info",
        children: (
          <>
            <Body className="text-blue-100 mb-3">
              <strong>Domicilio:</strong> Av. Universidad No. 350 Carretera
              Federal Cuitláhuac - La Tinaja, Localidad Dos Caminos, Cuitláhuac,
              Ver. CP. 94910.
            </Body>
            <Body className="text-blue-100">
              <strong>Correo electrónico:</strong> privacidad@ratacueva.com -
              Canal principal y directo para ejercer derechos y consultas sobre
              privacidad.
            </Body>
          </>
        ),
      }}
      quickAccessCards={quickAccessCards}
      faqs={faqs}
    >
      <InfoCard
        id="responsable-tratamiento"
        icon={<BuildingOfficeIcon className="h-6 w-6" />}
        title="RataCueva como responsable del tratamiento"
        description="RataCueva es la entidad legal responsable del tratamiento de sus datos personales. Esto significa que RataCueva es quien decide sobre el uso y la protección de la información que usted nos confía."
        accentColor="blue"
        sections={[
          {
            subtitle: "¿Qué significa ser responsable?",
            plainText:
              "Como responsable, RataCueva es quien toma las decisiones sobre cómo se recopilan, utilizan, almacenan y protegen sus datos personales. Esta designación conlleva obligaciones legales específicas que cumplimos cabalmente.",
          },
          {
            subtitle: "Nuestro compromiso legal:",
            list: [
              "Cumplir cabalmente con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)",
              "Cumplir con el reglamento de la LFPDPPP",
              "Cumplir con cualquier otra normativa aplicable en la materia",
              "Mantener actualizado este Aviso de Privacidad",
            ],
          },
          {
            subtitle: "Responsabilidades principales:",
            list: [
              "Decidir sobre las finalidades del tratamiento de datos",
              "Determinar los medios para el tratamiento",
              "Implementar medidas de seguridad adecuadas",
              "Garantizar el ejercicio de sus derechos ARCO",
              "Mantener la confidencialidad de su información",
            ],
          },
        ]}
        footerNote={{
          type: "tip",
          text: "Esta responsabilidad nos compromete legalmente a proteger su privacidad y manejar sus datos con el más alto estándar de cuidado.",
        }}
      />

      <InfoCard
        id="domicilio-oficial"
        icon={<MapPinIcon className="h-6 w-6" />}
        title="Domicilio oficial del responsable"
        description="Este domicilio es nuestra sede principal y el lugar donde se centralizan las decisiones relacionadas con el tratamiento de sus datos."
        accentColor="green"
        sections={[
          {
            subtitle: "Dirección completa:",
            list: [
              "Avenida: Universidad No. 350",
              "Vialidad: Carretera Federal Cuitláhuac - La Tinaja",
              "Localidad: Dos Caminos",
              "Municipio: Cuitláhuac",
              "Estado: Veracruz",
              "Código Postal: 94910",
              "País: México",
            ],
          },
          {
            subtitle: "Importancia del domicilio:",
            plainText:
              "Este domicilio es nuestra sede principal y el lugar donde se centralizan las decisiones relacionadas con el tratamiento de sus datos. Es aquí donde puede presentar solicitudes presenciales relacionadas con sus derechos de privacidad.",
          },
          {
            subtitle: "Usos del domicilio oficial:",
            list: [
              "Sede principal de operaciones de RataCueva",
              "Centro de decisiones sobre tratamiento de datos personales",
              "Lugar para presentación de solicitudes ARCO presenciales",
              "Punto de contacto para autoridades competentes",
              "Archivo de documentación relacionada con privacidad",
            ],
          },
        ]}
        footerNote={{
          type: "tip",
          text: "Para solicitudes presenciales, recomendamos contactar previamente a privacidad@ratacueva.com para coordinar su visita.",
        }}
      />

      <InfoCard
        id="contacto-privacidad"
        icon={<EnvelopeIcon className="h-6 w-6" />}
        title="Correo electrónico de contacto para privacidad"
        description="Hemos habilitado esta dirección de correo electrónico como el canal principal y directo para que usted pueda ejercer sus derechos, realizar consultas o presentar cualquier inquietud relacionada con la privacidad de sus datos."
        accentColor="purple"
        sections={[
          {
            subtitle: "Canal principal de contacto:",
            list: [
              "Correo electrónico: privacidad@ratacueva.com",
              "Disponible 24/7 para recepción de solicitudes",
              "Canal directo para ejercicio de derechos ARCO",
              "Medio preferido para consultas de privacidad",
            ],
          },
          {
            subtitle: "Tipos de comunicaciones que atendemos:",
            list: [
              "Ejercicio de derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO)",
              "Consultas sobre el contenido de este Aviso de Privacidad",
              "Inquietudes relacionadas con el tratamiento de sus datos",
              "Reportes de posibles violaciones de privacidad",
              "Solicitudes de información sobre transferencias de datos",
              "Preguntas sobre medidas de seguridad implementadas",
            ],
          },
          {
            subtitle: "Compromiso de respuesta:",
            plainText:
              "Nos comprometemos a responder a sus comunicaciones de manera oportuna y efectiva. Este canal ha sido especialmente habilitado para garantizar una atención especializada en temas de protección de datos personales.",
            variant: "highlight",
          },
        ]}
        footerNote={{
          type: "tip",
          text: "Para acelerar la atención de su solicitud, incluya siempre información clara sobre el tipo de consulta y sus datos de contacto.",
        }}
      />
    </PolicyPageLayout>
  );
}
