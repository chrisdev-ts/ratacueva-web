"use client";

import { Body } from "@/components/common/Typography";
import { PolicyPageLayout, InfoCard } from "@/components/privacy-policy";
import {
  ExclamationTriangleIcon,
  DocumentTextIcon,
  PhoneIcon,
  ComputerDesktopIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  ClipboardDocumentListIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

export default function DondePresentarQuejasPage() {
  const breadcrumbItems = [
    { label: "Configuración", href: "/settings" },
    { label: "Aviso de privacidad", href: "/privacy-policy" },
    { label: "¿Dónde presentar quejas o denuncias?" },
  ];

  const quickAccessCards = [
    {
      icon: <ExclamationTriangleIcon className="h-6 w-6" />,
      title: "Cuándo denunciar",
      description: "Criterios para presentar denuncia",
      href: "#cuando-denunciar",
      category: "importante" as const,
    },
    {
      icon: <DocumentTextIcon className="h-6 w-6" />,
      title: "Cómo denunciar",
      description: "Requisitos y procedimiento",
      href: "#como-denunciar",
      category: "importante" as const,
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: "Contacto INAI",
      description: "55 5004 2400 / 800 835 4324",
      href: "#contacto-inai",
      category: "contacto" as const,
    },
  ];

  const faqs = [
    {
      question:
        "¿Debo agotar instancias con RataCueva antes de acudir al INAI?",
      answer:
        "Sí, se recomienda intentar resolver primero directamente con nosotros en privacidad@ratacueva.com. La queja al INAI procede cuando no hay respuesta satisfactoria a tus solicitudes ARCO o consideras que hay violaciones graves a la ley.",
    },
    {
      question: "¿Cuánto tiempo tarda el proceso de queja en el INAI?",
      answer:
        "El INAI tiene hasta 140 días hábiles para resolver una queja, aunque en casos complejos puede extenderse. El proceso incluye admisión, notificación al responsable, investigación y resolución.",
    },
    {
      question: "¿La queja ante el INAI tiene algún costo?",
      answer:
        "No, presentar una queja ante el INAI es completamente gratuito. No debes pagar ninguna cantidad por este trámite.",
    },
    {
      question: "¿Qué sanciones puede imponer el INAI a RataCueva?",
      answer:
        "El INAI puede ordenar desde medidas correctivas (modificar políticas, eliminar datos) hasta multas económicas que van desde 100 hasta 320,000 veces la Unidad de Medida y Actualización vigente.",
    },
  ];

  return (
    <PolicyPageLayout
      title="¿Dónde presentar quejas o denuncias?"
      subtitle="En RataCueva nos esforzamos por tratar tus datos personales de manera ética y en estricto apego a la legislación mexicana. Si consideras que tu derecho a la protección de datos ha sido lesionado, tienes el derecho de interponer una queja ante la autoridad competente."
      breadcrumbItems={breadcrumbItems}
      currentPageNumber={11}
      highlightBox={{
        icon: <ExclamationCircleIcon className="h-6 w-6" />,
        title: "Tu derecho a presentar quejas",
        type: "warning",
        children: (
          <>
            <Body className="text-yellow-100 mb-3">
              <strong>Antes de acudir al INAI:</strong> Te recomendamos intentar
              resolver la situación directamente con RataCueva a través de
              nuestros canales de atención en privacidad@ratacueva.com.
            </Body>
            <Body className="text-yellow-100">
              Si consideras que hay una violación a la LFPDPPP o que tu derecho
              ha sido lesionado sin respuesta satisfactoria, puedes acudir al
              INAI.
            </Body>
          </>
        ),
      }}
      quickAccessCards={quickAccessCards}
      faqs={faqs}
    >
      <div className="space-y-8">
        <InfoCard
          icon={<BuildingOfficeIcon className="h-6 w-6" />}
          title="El Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)"
          description="El INAI es la autoridad encargada de garantizar la protección de datos personales en México según lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)."
          accentColor="blue"
          sections={[
            {
              subtitle: "¿Qué es el INAI?",
              plainText:
                "El Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI) es la autoridad competente para conocer quejas y denuncias relacionadas con el tratamiento indebido de datos personales por parte de particulares como RataCueva.",
            },
            {
              subtitle: "¿Cuándo puedes acudir al INAI?",
              list: [
                "Cuando consideres que tu derecho a la protección de datos personales ha sido lesionado por alguna conducta de nuestros empleados o actuaciones",
                "Si presumes que en el tratamiento de tus datos personales existe alguna violación a las disposiciones previstas en la LFPDPPP y su reglamento",
                "Cuando nuestras respuestas a tus solicitudes ARCO no hayan sido satisfactorias",
                "Si consideras que no hemos atendido adecuadamente tus derechos de privacidad",
              ],
            },
            {
              subtitle: "Nuestro compromiso de colaboración:",
              plainText:
                "RataCueva colaborará plenamente con el INAI en cualquier investigación que pueda surgir de tu queja o denuncia.",
              variant: "highlight",
            },
          ]}
        />

        <InfoCard
          icon={<EnvelopeIcon className="h-6 w-6" />}
          title="Antes de acudir al INAI: Contacta a RataCueva"
          description="Te recomendamos intentar resolver cualquier situación relacionada con tus datos personales directamente con nosotros antes de presentar una queja formal ante el INAI."
          accentColor="orange"
          sections={[
            {
              subtitle: "Nuestro compromiso contigo:",
              plainText:
                "En RataCueva nos esforzamos por tratar tus datos personales de manera ética y en estricto apego a la legislación mexicana. Estamos comprometidos a resolver cualquier inquietud que tengas sobre el tratamiento de tu información personal.",
            },
            {
              subtitle: "Cómo contactarnos:",
              list: [
                "Correo especializado: privacidad@ratacueva.com",
                "A través de tu cuenta de usuario en la sección de configuración",
                "Centro de ayuda en nuestro sitio web",
                "Formulario de contacto en www.ratacueva.com",
              ],
            },
            {
              subtitle: "¿Cuándo acudir al INAI?",
              plainText:
                "Si consideras que tu derecho a la protección de datos personales ha sido lesionado por alguna conducta de nuestros empleados o respuestas, o si presumes que existe alguna violación a las disposiciones previstas en la LFPDPPP y su reglamento, tienes el derecho de interponer la queja correspondiente ante el INAI.",
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "tip",
            text: "RataCueva colaborará plenamente con el INAI en cualquier investigación que pueda surgir.",
          }}
        />

        <InfoCard
          id="contacto-inai"
          icon={<ComputerDesktopIcon className="h-6 w-6" />}
          title="Cómo contactar al INAI"
          description="El INAI pone a tu disposición múltiples canales para presentar quejas o denuncias relacionadas con la protección de datos personales."
          accentColor="green"
          sections={[
            {
              subtitle: "Sitio web oficial del INAI:",
              plainText:
                "www.inai.org.mx - En este sitio encontrarás información detallada sobre el proceso de presentación de quejas y denuncias, así como formularios y guías paso a paso.",
            },
            {
              subtitle: "Información de contacto principal:",
              list: [
                "Teléfono: 55 5004 2400",
                "Lada sin costo: 800 835 4324",
                "Email: atencion@inai.org.mx",
                "Sistema de denuncias en línea: sistemadenuncias.inai.org.mx",
              ],
            },
            {
              subtitle: "Dirección física:",
              plainText:
                "Av. Insurgentes Sur 3211, Col. Insurgentes Cuicuilco, Alcaldía Coyoacán, C.P. 04530, Ciudad de México",
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Para mayor información sobre el proceso de presentación de quejas o denuncias, te invitamos a visitar el sitio web oficial del INAI.",
          }}
        />
      </div>
    </PolicyPageLayout>
  );
}
