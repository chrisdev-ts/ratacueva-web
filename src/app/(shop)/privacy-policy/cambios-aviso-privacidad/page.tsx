"use client";

import { Body } from "@/components/common/Typography";
import { PolicyPageLayout, InfoCard } from "@/components/privacy-policy";
import {
  DocumentTextIcon,
  BellIcon,
  EyeIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationCircleIcon,
  ArrowPathIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export default function CambiosAvisoPrivacidadPage() {
  const breadcrumbItems = [
    { label: "Configuración", href: "/settings" },
    { label: "Aviso de privacidad", href: "/privacy-policy" },
    { label: "Cambios a este aviso de privacidad" },
  ];

  const quickAccessCards = [
    {
      icon: <DocumentTextIcon className="h-6 w-6" />,
      title: "Publicación de cambios",
      description: "En www.ratacueva.com",
      href: "#publicacion-cambios",
      category: "importante" as const,
    },
    {
      icon: <BellIcon className="h-6 w-6" />,
      title: "Notificaciones",
      description: "Email y avisos en sitio",
      href: "#notificaciones",
      category: "importante" as const,
    },
    {
      icon: <EyeIcon className="h-6 w-6" />,
      title: "Revisión periódica",
      description: "Manténgase informado",
      href: "#revision-periodica",
      category: "informativo" as const,
    },
  ];

  const faqs = [
    {
      question: "¿Con qué frecuencia cambian la política de privacidad?",
      answer:
        "No hay una frecuencia fija. Los cambios ocurren cuando hay nuevas leyes, cambios en nuestros servicios, o mejoras en nuestras prácticas de protección. Típicamente, revisamos anualmente nuestra política.",
    },
    {
      question: "¿Cómo me entero de los cambios importantes?",
      answer:
        "Publicamos todos los cambios en www.ratacueva.com y te enviamos notificaciones por email para cambios significativos. También mostramos avisos prominentes en nuestro sitio web.",
    },
    {
      question: "¿Qué pasa si no estoy de acuerdo con los cambios?",
      answer:
        "Si no estás de acuerdo con las modificaciones, puedes ejercer tus derechos ARCO (acceso, rectificación, cancelación, oposición) o discontinuar el uso de nuestros servicios antes de que entren en vigor.",
    },
    {
      question: "¿Los cambios aplican inmediatamente?",
      answer:
        "Generalmente proporcionamos un período de gracia de 30 días antes de que los cambios significativos entren en vigor, dándote tiempo para revisar y decidir sobre tu participación.",
    },
  ];

  return (
    <PolicyPageLayout
      title="Cambios a este aviso de privacidad"
      subtitle="RataCueva se reserva el derecho de actualizar este aviso de privacidad para adaptarse a cambios legales, tecnológicos y operacionales, siempre manteniendo la transparencia y respetando tus derechos."
      breadcrumbItems={breadcrumbItems}
      currentPageNumber={8}
      highlightBox={{
        icon: <InformationCircleIcon className="h-6 w-6" />,
        title: "Transparencia total en modificaciones",
        type: "info",
        children: (
          <>
            <Body className="text-blue-100 mb-3">
              <strong>Siempre te informamos de los cambios:</strong> Cualquier
              modificación será publicada claramente en nuestro sitio web con la
              fecha de actualización y explicación de los cambios.
            </Body>
            <Body className="text-blue-100">
              Tu uso continuado de la plataforma después de las modificaciones
              constituye tu aceptación de los nuevos términos.
            </Body>
          </>
        ),
      }}
      quickAccessCards={quickAccessCards}
      faqs={faqs}
    >
      <div className="space-y-8">
        <InfoCard
          icon={<ArrowPathIcon className="h-6 w-6" />}
          title="Razones para modificaciones"
          description="Las modificaciones a nuestro aviso de privacidad obedecen a razones específicas que garantizan su relevancia, cumplimiento legal y adaptación a las necesidades cambiantes del entorno digital."
          accentColor="blue"
          sections={[
            {
              subtitle: "Cambios en la legislación mexicana:",
              list: [
                "Actualizaciones en la Ley Federal de Protección de Datos Personales (LFPDPPP)",
                "Nuevas regulaciones del INAI (Instituto Nacional de Transparencia)",
                "Reformas al Código de Comercio para e-commerce",
                "Nuevas disposiciones internacionales aplicables a México",
                "Criterios jurisprudenciales relevantes en materia de privacidad",
              ],
            },
            {
              subtitle: "Evolución de nuestros servicios gaming:",
              list: [
                "Implementación de nuevas funcionalidades en la plataforma",
                "Incorporación de nuevos métodos de pago y proveedores",
                "Expansión a nuevos mercados o regiones",
                "Integración con nuevas plataformas tecnológicas",
                "Mejoras en nuestros sistemas de seguridad y protección",
              ],
            },
            {
              subtitle: "Políticas internas y mejores prácticas:",
              list: [
                "Adopción de mejores prácticas internacionales de privacidad",
                "Actualización de procedimientos de seguridad",
                "Cambios en estructura corporativa o modelo de negocio",
                "Nuevas políticas de retención y eliminación de datos",
                "Mejoras en procesos de atención al cliente y soporte",
              ],
              variant: "highlight",
            },
          ]}
        />

        <InfoCard
          id="publicacion-cambios"
          icon={<DocumentTextIcon className="h-6 w-6" />}
          title="Publicación y disponibilidad de cambios"
          description="Todos los cambios son publicados de manera clara y accesible para garantizar que puedas estar siempre informado sobre las modificaciones a nuestro aviso de privacidad."
          accentColor="green"
          sections={[
            {
              subtitle: "Ubicaciones de publicación:",
              list: [
                "Sitio web principal: www.ratacueva.com/privacy-policy",
                "Sección destacada en página de inicio durante cambios importantes",
                "Área de tu cuenta de usuario (para cambios que te afecten directamente)",
                "Centro de ayuda y documentación legal",
                "Newsletter y comunicaciones oficiales",
              ],
            },
            {
              subtitle: "Información incluida en cada cambio:",
              list: [
                "Fecha exacta de la modificación",
                "Resumen ejecutivo de los cambios realizados",
                "Razón específica y justificación para la modificación",
                "Fecha de entrada en vigor",
                "Versión anterior disponible para comparación detallada",
                "Enlaces a secciones específicas modificadas",
              ],
            },
            {
              subtitle: "Formato de presentación:",
              plainText:
                "Los cambios se presentan en formato claramente legible, con resaltado de las modificaciones específicas y explicaciones en lenguaje sencillo para facilitar su comprensión y revisión.",
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Mantenemos disponible un historial completo de versiones anteriores para tu consulta y comparación.",
          }}
        />

        <InfoCard
          id="notificaciones"
          icon={<BellIcon className="h-6 w-6" />}
          title="Sistema de notificaciones"
          description="Implementamos múltiples canales de comunicación para asegurar que estés enterado de cambios importantes que puedan afectar tu privacidad y derechos."
          accentColor="orange"
          sections={[
            {
              subtitle: "Canales de notificación automática:",
              list: [
                "Email a tu dirección registrada en la cuenta",
                "Notificación push (si tienes nuestra app móvil instalada)",
                "Mensaje destacado en tu panel de usuario",
                "Banner informativo en el sitio web",
                "Notificación en redes sociales oficiales",
              ],
            },
            {
              subtitle: "Contenido detallado de las notificaciones:",
              list: [
                "Resumen ejecutivo de los cambios más importantes",
                "Enlaces directos a las secciones específicas modificadas",
                "Fecha exacta de entrada en vigor",
                "Acciones recomendadas o requeridas (si las hay)",
                "Información de contacto para consultas y aclaraciones",
              ],
            },
            {
              subtitle: "Criterios para notificación prioritaria:",
              list: [
                "Cambios que afecten tus derechos fundamentales",
                "Modificaciones en el tipo de datos que recopilamos",
                "Nuevas finalidades de tratamiento de datos",
                "Cambios en transferencias o compartir datos con terceros",
                "Modificaciones significativas en períodos de conservación",
              ],
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "warning",
            text: "Para cambios menores (correcciones tipográficas, actualizaciones de contacto), la notificación puede ser solo en el sitio web.",
          }}
        />

        <InfoCard
          id="revision-periodica"
          icon={<EyeIcon className="h-6 w-6" />}
          title="Recomendación de revisión periódica"
          description="Le recomendamos encarecidamente revisar regularmente nuestro aviso de privacidad para mantenerse informado."
          accentColor="purple"
          sections={[
            {
              subtitle: "Frecuencia recomendada:",
              list: [
                "Revisión trimestral para usuarios frecuentes",
                "Revisión semestral para usuarios ocasionales",
                "Revisión inmediata tras recibir notificaciones",
                "Revisión antes de proporcionar nuevos datos sensibles",
              ],
            },
            {
              subtitle: "Qué verificar en cada revisión:",
              list: [
                "Fecha de última actualización",
                "Cambios en finalidades de tratamiento",
                "Nuevos derechos o procedimientos",
                "Modificaciones en información de contacto",
                "Actualizaciones en medidas de seguridad",
              ],
            },
            {
              subtitle: "Herramientas para facilitar la revisión:",
              list: [
                "Sistema de resaltado de cambios recientes",
                "Comparador de versiones",
                "Resúmenes ejecutivos de modificaciones",
                "Alertas personalizadas según su perfil",
              ],
              variant: "highlight",
            },
          ]}
        />

        <InfoCard
          icon={<CheckCircleIcon className="h-6 w-6" />}
          title="Aceptación de modificaciones"
          description="El proceso de aceptación de modificaciones está diseñado para ser claro y respetar su autonomía de decisión."
          accentColor="green"
          sections={[
            {
              subtitle: "Formas de aceptación:",
              list: [
                "Uso continuado de la plataforma después del período de gracia",
                "Aceptación explícita mediante botón de confirmación",
                "Realización de nuevas transacciones tras los cambios",
                "Actualización de preferencias de cuenta",
              ],
            },
            {
              subtitle: "Período de gracia:",
              plainText:
                "Proporcionamos generalmente 30 días de período de gracia para cambios significativos, durante el cual puede evaluar las modificaciones y decidir sobre su participación continuada.",
            },
            {
              subtitle: "Si no acepta las modificaciones:",
              list: [
                "Puede ejercer sus derechos ARCO antes de la entrada en vigor",
                "Puede solicitar la eliminación de su cuenta",
                "Puede discontinuar el uso de servicios específicos",
                "Puede contactarnos para discutir opciones alternativas",
              ],
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Su no aceptación no afecta el tratamiento de datos realizado anteriormente bajo las versiones previas del aviso.",
          }}
        />

        <InfoCard
          icon={<ClockIcon className="h-6 w-6" />}
          title="Cronología y entrada en vigor"
          description="Establecemos cronologías claras para la implementación de modificaciones, respetando períodos razonables de adaptación."
          accentColor="red"
          sections={[
            {
              subtitle: "Cronología típica:",
              list: [
                "Día 0: Publicación del aviso de modificación",
                "Día 1-7: Notificaciones a usuarios",
                "Día 30: Entrada en vigor (para cambios significativos)",
                "Día 45: Aplicación completa de nuevas políticas",
              ],
            },
            {
              subtitle: "Excepciones al cronograma:",
              list: [
                "Cambios por emergencia legal: Inmediatos",
                "Mejoras de seguridad: 7 días",
                "Correcciones menores: 14 días",
                "Cambios estructurales: 60 días",
              ],
            },
            {
              subtitle: "Durante el período de transición:",
              plainText:
                "Mantenemos ambas versiones disponibles y aplicamos la versión más favorable al usuario cuando existe conflicto entre versiones.",
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "warning",
            text: "Los cambios por requerimientos legales inmediatos pueden entrar en vigor sin período de gracia.",
          }}
        />
      </div>
    </PolicyPageLayout>
  );
}
