"use client";

import { Body } from "@/components/common/Typography";
import { PolicyPageLayout, InfoCard } from "@/components/privacy-policy";
import {
  ShieldCheckIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  ExclamationCircleIcon,
  PhoneIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export default function PrivacidadMenoresPage() {
  const breadcrumbItems = [
    { label: "Configuración", href: "/settings" },
    { label: "Aviso de privacidad", href: "/privacy-policy" },
    { label: "Privacidad de menores de edad" },
  ];

  const quickAccessCards = [
    {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: "Verificación de edad",
      description: "Mecanismos de identificación",
      href: "#verificacion-edad",
      category: "importante" as const,
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "Consentimiento parental",
      description: "Autorización de tutores legales",
      href: "#consentimiento-parental",
      category: "importante" as const,
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: "Canal especializado",
      description: "menores@ratacueva.com",
      href: "#contacto-menores",
      category: "contacto" as const,
    },
  ];

  const faqs = [
    {
      question: "¿Mi hijo menor de 18 años puede usar RataCueva?",
      answer:
        "Sí, pero requiere tu consentimiento parental expreso. Implementamos verificación de edad y solicitamos autorización de padres o tutores legales antes de permitir el registro de menores.",
    },
    {
      question:
        "¿Qué hago si descubro que mi hijo creó una cuenta sin mi permiso?",
      answer:
        "Contacta inmediatamente a menores@ratacueva.com con evidencia de tu relación parental. Procederemos a suspender la cuenta y eliminar los datos del menor según corresponda.",
    },
    {
      question: "¿Qué datos de menores pueden procesar legalmente?",
      answer:
        "Solo procesamos datos estrictamente necesarios y con consentimiento parental: información básica de contacto, datos para entrega de productos y comunicación con padres/tutores.",
    },
    {
      question: "¿Los menores tienen derechos especiales sobre sus datos?",
      answer:
        "Sí, tienen derechos prioritarios: acceso expedito, rectificación inmediata, cancelación preferente y oposición al tratamiento. Los padres pueden ejercer estos derechos en su nombre.",
    },
  ];

  return (
    <PolicyPageLayout
      title="Privacidad de menores de edad"
      subtitle="En RataCueva implementamos las medidas más estrictas para proteger los datos personales de menores de 18 años, cumpliendo con las normativas especiales de protección infantil y priorizando siempre su bienestar digital."
      breadcrumbItems={breadcrumbItems}
      currentPageNumber={6}
      highlightBox={{
        icon: <ExclamationTriangleIcon className="h-6 w-6" />,
        title: "Protección prioritaria de menores",
        type: "urgent",
        children: (
          <>
            <Body className="text-red-100 mb-3">
              <strong>
                NO recopilamos datos de menores sin consentimiento parental:
              </strong>{" "}
              Todo tratamiento de datos de menores de 18 años requiere
              autorización expresa de padres o tutores legales.
            </Body>
            <Body className="text-red-100">
              Si detectas que un menor proporcionó datos sin autorización,
              contacta inmediatamente a menores@ratacueva.com
            </Body>
          </>
        ),
      }}
      quickAccessCards={quickAccessCards}
      faqs={faqs}
    >
      <div className="space-y-8">
        <InfoCard
          id="verificacion-edad"
          icon={<ShieldCheckIcon className="h-6 w-6" />}
          title="Verificación de edad y identificación de menores"
          description="Implementamos múltiples mecanismos para identificar cuando un usuario es menor de edad y aplicar las protecciones correspondientes de manera inmediata y efectiva."
          accentColor="blue"
          sections={[
            {
              subtitle: "Métodos de verificación que utilizamos:",
              list: [
                "Declaración explícita de edad durante el registro",
                "Validación con métodos de pago (tarjetas requieren mayoría de edad)",
                "Verificación de documentos oficiales cuando sea necesario",
                "Análisis de direcciones de envío vinculadas a centros educativos",
                "Monitoreo de patrones de comportamiento típicos de menores",
              ],
            },
            {
              subtitle: "Respuesta automática al detectar un menor:",
              list: [
                "Suspensión inmediata del registro",
                "Activación de protecciones especiales de privacidad",
                "Solicitud automática de consentimiento parental",
                "Limitación de funcionalidades hasta obtener autorización",
              ],
            },
            {
              subtitle: "Protecciones especiales activadas:",
              list: [
                "Prohibición total de comunicaciones de marketing",
                "Limitación estricta en el tratamiento de datos",
                "Monitoreo especial de todas las actividades",
                "Aplicación de políticas de retención reducidas",
                "Restricción de compartir datos con terceros",
              ],
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "warning",
            text: "La verificación de edad es obligatoria y no se puede omitir para menores de 18 años.",
          }}
        />

        <InfoCard
          id="consentimiento-parental"
          icon={<UserGroupIcon className="h-6 w-6" />}
          title="Consentimiento parental y autorización de tutores"
          description="El consentimiento de padres o tutores legales es requisito indispensable para el tratamiento de datos de menores. Este proceso garantiza que los adultos responsables autoricen expresamente cualquier uso de información de sus hijos."
          accentColor="green"
          sections={[
            {
              subtitle: "Proceso completo de obtención de consentimiento:",
              list: [
                "Identificación verificada del padre/madre o tutor legal",
                "Verificación documental de la relación parental",
                "Explicación detallada del tratamiento de datos propuesto",
                "Consentimiento expreso e informado por escrito",
                "Registro y documentación completa del consentimiento otorgado",
                "Confirmación de comprensión de derechos y obligaciones",
              ],
            },
            {
              subtitle: "Documentación obligatoria requerida:",
              list: [
                "Identificación oficial vigente del padre/tutor",
                "Acta de nacimiento del menor (para comprobar relación parental)",
                "Autorización firmada específica para RataCueva",
                "Contacto directo verificable del padre/tutor",
                "Comprobante de domicilio actualizado",
              ],
            },
            {
              subtitle: "Revocación del consentimiento:",
              plainText:
                "Los padres pueden revocar el consentimiento en cualquier momento enviando un correo a menores@ratacueva.com, lo que resultará en la eliminación inmediata de todos los datos del menor y la suspensión permanente de la cuenta.",
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "tip",
            text: "El consentimiento debe ser renovado anualmente para mantener activa la cuenta del menor.",
          }}
        />

        <InfoCard
          icon={<DocumentCheckIcon className="h-6 w-6" />}
          title="Derechos especiales de los menores"
          description="Los menores de edad tienen derechos prioritarios y especiales en el tratamiento de sus datos personales, con protecciones adicionales que van más allá de los derechos ARCO estándar."
          accentColor="purple"
          sections={[
            {
              subtitle: "Derechos ARCO prioritarios para menores:",
              list: [
                "Acceso prioritario: Información inmediata sobre el tratamiento de datos",
                "Rectificación expedita: Corrección de datos inexactos sin demora",
                "Cancelación preferente: Eliminación inmediata cuando no hay base legal",
                "Oposición reforzada: Derecho amplificado a oponerse al tratamiento",
              ],
            },
            {
              subtitle: "Protecciones adicionales exclusivas:",
              list: [
                "Derecho al olvido digital reforzado y prioritario",
                "Portabilidad de datos simplificada y asistida",
                "Limitación estricta del perfilado y decisiones automatizadas",
                "Protección absoluta contra marketing directo",
                "Derecho a la supervisión parental constante y transparente",
                "Derecho a la eliminación automática al cumplir mayoría de edad",
              ],
            },
            {
              subtitle: "Ejercicio de derechos:",
              plainText:
                "Los padres o tutores pueden ejercer todos estos derechos en nombre del menor hasta que este alcance la mayoría de edad, momento en que el menor puede decidir sobre la continuidad del tratamiento.",
              collapsible: true,
            },
          ]}
        />

        <InfoCard
          icon={<ExclamationCircleIcon className="h-6 w-6" />}
          title="Responsabilidades de padres y tutores"
          description="Los padres y tutores legales tienen responsabilidades específicas en la supervisión del uso de servicios digitales por menores."
          accentColor="orange"
          sections={[
            {
              subtitle: "Supervisión activa:",
              list: [
                "Monitorear el uso que sus hijos hacen de plataformas digitales",
                "Revisar periódicamente la actividad en la cuenta del menor",
                "Establecer límites apropiados para la edad",
                "Educar sobre seguridad y privacidad digital",
              ],
            },
            {
              subtitle: "Gestión de consentimientos:",
              list: [
                "Otorgar o denegar autorizaciones de tratamiento",
                "Revisar y actualizar permisos según sea necesario",
                "Revocar consentimientos cuando lo consideren apropiado",
                "Mantener actualizada su información de contacto",
              ],
            },
            {
              subtitle: "Ejercicio de derechos:",
              list: [
                "Ejercer derechos ARCO en nombre de sus hijos",
                "Presentar quejas o reclamaciones cuando sea necesario",
                "Solicitar información sobre el tratamiento de datos",
                "Coordinar con RataCueva para la protección del menor",
              ],
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "warning",
            text: "Los padres son responsables legales de las acciones de sus hijos menores en plataformas digitales.",
          }}
        />

        <InfoCard
          icon={<ClockIcon className="h-6 w-6" />}
          title="Procedimiento de notificación de uso no autorizado"
          description="Si descubre que un menor proporcionó datos sin consentimiento parental, siga este procedimiento para resolución inmediata."
          accentColor="red"
          sections={[
            {
              subtitle: "Pasos para la notificación:",
              list: [
                "1. Contacto inmediato: Escriba a menores@ratacueva.com",
                "2. Proporcione información: Datos del menor y evidencia de relación parental",
                "3. Verificación: Completaremos proceso de verificación de identidad",
                "4. Acción inmediata: Suspensión de cuenta y eliminación de datos",
              ],
            },
            {
              subtitle: "Información requerida:",
              list: [
                "Nombre completo del menor",
                "Email o usuario de la cuenta (si lo conoce)",
                "Su identificación como padre/tutor legal",
                "Documento que acredite la relación parental",
                "Descripción del uso no autorizado detectado",
              ],
            },
            {
              subtitle: "Tiempos de respuesta:",
              list: [
                "Confirmación de recepción: 2 horas",
                "Suspensión temporal: 24 horas",
                "Eliminación de datos: 72 horas",
                "Confirmación final: 5 días hábiles",
              ],
              variant: "highlight",
            },
          ]}
        />

        <InfoCard
          id="contacto-menores"
          icon={<PhoneIcon className="h-6 w-6" />}
          title="Canal especializado para asuntos de menores"
          description="Disponemos de un canal de comunicación especializado para atender exclusivamente temas relacionados con menores de edad."
          accentColor="blue"
          sections={[
            {
              subtitle: "Información de contacto:",
              list: [
                "Email especializado: menores@ratacueva.com",
                "Línea directa: +52 (55) 1234-5678 ext. 3",
                "Atención prioritaria: Lunes a viernes 9:00-18:00 hrs",
                "Respuesta de emergencia: Disponible 24/7 para casos urgentes",
              ],
            },
            {
              subtitle: "Tipos de consultas atendidas:",
              list: [
                "Denuncias de uso no autorizado",
                "Solicitudes de ejercicio de derechos ARCO",
                "Consultas sobre consentimiento parental",
                "Asesoría sobre protección digital de menores",
                "Reportes de incidentes de seguridad",
              ],
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Nuestro equipo especializado en menores está certificado en protección de datos infantiles.",
          }}
        />

        <InfoCard
          icon={<HeartIcon className="h-6 w-6" />}
          title="Nuestro compromiso con la protección infantil"
          description="La protección de menores de edad es una prioridad fundamental que guía todas nuestras decisiones de tratamiento de datos."
          accentColor="green"
          sections={[
            {
              subtitle: "Estándares especiales:",
              list: [
                "Protecciones técnicas adicionales para cuentas de menores",
                "Políticas de retención de datos reducidas",
                "Monitoreo especial de actividades sospechosas",
                "Capacitación especializada del personal",
                "Cumplimiento con estándares internacionales de protección infantil",
              ],
            },
            {
              subtitle: "Mejora continua:",
              list: [
                "Revisión constante de políticas de protección",
                "Actualización según mejores prácticas internacionales",
                "Colaboración con organizaciones de protección infantil",
                "Implementación de tecnologías avanzadas de protección",
                "Transparencia total con padres y autoridades",
              ],
            },
            {
              subtitle: "Compromiso a futuro:",
              plainText:
                "Nos comprometemos a mantener y mejorar continuamente nuestras medidas de protección, siempre priorizando el bienestar y la seguridad de los menores de edad.",
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "tip",
            text: "La protección de menores no es solo una obligación legal, sino un compromiso ético fundamental de RataCueva.",
          }}
        />
      </div>
    </PolicyPageLayout>
  );
}
