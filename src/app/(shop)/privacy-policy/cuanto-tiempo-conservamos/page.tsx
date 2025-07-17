"use client";

import { Body } from "@/components/common/Typography";
import { PolicyPageLayout, InfoCard } from "@/components/privacy-policy";
import {
  ClockIcon,
  DocumentTextIcon,
  UserIcon,
  EnvelopeIcon,
  TrashIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

export default function CuantoTiempoConservamosPage() {
  const breadcrumbItems = [
    { label: "Configuración", href: "/settings" },
    { label: "Aviso de privacidad", href: "/privacy-policy" },
    { label: "¿Cuánto tiempo conservamos tus datos?" },
  ];

  const quickAccessCards = [
    {
      icon: <DocumentTextIcon className="h-6 w-6" />,
      title: "Datos transaccionales",
      description: "5-10 años según ley fiscal",
      href: "#datos-transaccionales",
      category: "importante" as const,
    },
    {
      icon: <UserIcon className="h-6 w-6" />,
      title: "Cuenta de usuario",
      description: "Mientras esté activa + 2 años",
      href: "#cuenta-usuario",
      category: "importante" as const,
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: "Marketing directo",
      description: "Hasta revocación de consentimiento",
      href: "#marketing-directo",
      category: "informativo" as const,
    },
  ];

  const faqs = [
    {
      question: "¿Por qué conservan mis datos por tanto tiempo?",
      answer:
        "Los períodos de conservación están determinados por obligaciones legales (principalmente leyes fiscales que requieren conservar documentación 5-10 años) y por la necesidad de brindarte un servicio continuo. Conservamos solo lo mínimo necesario.",
    },
    {
      question:
        "¿Puedo solicitar que eliminen mis datos antes del tiempo estipulado?",
      answer:
        "Sí, puedes ejercer tu derecho de cancelación en cualquier momento. Sin embargo, algunos datos podrían conservarse si existen obligaciones legales pendientes o procesos en curso que lo requieran.",
    },
    {
      question: "¿Cómo se eliminan mis datos de forma segura?",
      answer:
        "Utilizamos métodos de supresión segura que impiden la recuperación de datos. Esto incluye sobrescritura de datos, destrucción física de medios de almacenamiento cuando es necesario, y certificación del proceso.",
    },
    {
      question: "¿Qué pasa si mi cuenta está inactiva?",
      answer:
        "Si tu cuenta permanece inactiva por períodos prolongados, te notificaremos antes de proceder con la eliminación. Generalmente mantenemos cuentas inactivas hasta 2 años para facilitar reactivación.",
    },
  ];

  return (
    <PolicyPageLayout
      title="¿Cuánto tiempo conservamos tus datos?"
      subtitle="Tus datos personales son conservados únicamente por el tiempo estrictamente necesario para cumplir con las finalidades establecidas y las obligaciones legales que nos aplican como empresa."
      breadcrumbItems={breadcrumbItems}
      currentPageNumber={5}
      highlightBox={{
        icon: <ExclamationTriangleIcon className="h-6 w-6" />,
        title: "Principio de minimización temporal",
        type: "info",
        children: (
          <>
            <Body className="text-blue-100 mb-3">
              <strong>No conservamos más de lo necesario:</strong> Nuestros
              períodos de retención están diseñados para cumplir con la ley
              mientras minimizamos el tiempo de almacenamiento de tu
              información.
            </Body>
            <Body className="text-blue-100">
              Todos los plazos están fundamentados en obligaciones legales
              específicas o necesidades operativas justificadas.
            </Body>
          </>
        ),
      }}
      quickAccessCards={quickAccessCards}
      faqs={faqs}
    >
      <div className="space-y-8">
        <InfoCard
          id="datos-transaccionales"
          icon={<DocumentTextIcon className="h-6 w-6" />}
          title="Datos de transacciones y facturación"
          description="Los datos relacionados con tus compras, facturas y transacciones deben conservarse por períodos específicos establecidos por la legislación fiscal mexicana para cumplir con obligaciones contables y tributarias."
          accentColor="blue"
          sections={[
            {
              subtitle: "Período de conservación obligatorio:",
              plainText:
                "5 a 10 años desde la fecha de la transacción, según lo establecido por el Código Fiscal de la Federación y demás disposiciones aplicables que regulan a RataCueva como empresa.",
            },
            {
              subtitle: "Tipos de datos que conservamos:",
              list: [
                "Historial completo de pedidos y compras realizadas",
                "Facturas y comprobantes fiscales emitidos",
                "Datos de pago y autorización de transacciones",
                "Información detallada de envío y entrega",
                "Registros de devoluciones, cambios y reembolsos",
                "Correspondencia relacionada con cada transacción",
              ],
            },
            {
              subtitle: "Fundamento legal:",
              plainText:
                "Esta conservación es obligatoria según las leyes fiscales mexicanas para efectos de auditorías del SAT, revisiones contables y cumplimiento de obligaciones tributarias. No podemos reducir estos períodos.",
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "warning",
            text: "Esta conservación es obligatoria por ley y no puede ser reducida mediante solicitud del titular.",
          }}
        />

        <InfoCard
          id="cuenta-usuario"
          icon={<UserIcon className="h-6 w-6" />}
          title="Datos de cuenta de usuario"
          description="Tu información de perfil y preferencias se mantiene mientras tu cuenta esté activa, con períodos adicionales para facilitar la reactivación en caso de que decidas regresar a RataCueva."
          accentColor="green"
          sections={[
            {
              subtitle: "Cuenta activa:",
              plainText:
                "Mientras tu cuenta permanezca activa en nuestra plataforma, conservamos tu información de perfil, preferencias y configuraciones para brindarte un servicio personalizado y continuo.",
            },
            {
              subtitle: "Cuenta inactiva - cronograma:",
              list: [
                "2 años de inactividad: Te enviamos notificación de posible eliminación",
                "2.5 años: Segunda notificación de advertencia",
                "3 años de inactividad: Eliminación automática programada",
                "Período de gracia: 30 días para reactivar antes de eliminación definitiva",
              ],
            },
            {
              subtitle: "Datos incluidos en tu cuenta:",
              list: [
                "Información de perfil (nombre, email, teléfono)",
                "Direcciones guardadas para envíos",
                "Preferencias de comunicación y marketing",
                "Configuraciones personalizadas de cuenta",
                "Lista de deseos y productos favoritos",
                "Historial de navegación y búsquedas recientes",
              ],
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Puedes solicitar la eliminación inmediata de tu cuenta en cualquier momento contactando a privacidad@ratacueva.com",
          }}
        />

        <InfoCard
          id="marketing-directo"
          icon={<EnvelopeIcon className="h-6 w-6" />}
          title="Datos para marketing directo"
          description="La información utilizada para enviarte comunicaciones promocionales se conserva únicamente mientras mantengas tu consentimiento para recibir este tipo de contenido."
          accentColor="orange"
          sections={[
            {
              subtitle: "Duración del consentimiento:",
              plainText:
                "Los datos para marketing se conservan mientras no revoques tu consentimiento para recibir comunicaciones promocionales. Puedes retirar este consentimiento en cualquier momento.",
            },
            {
              subtitle: "Tipos de comunicaciones que enviamos:",
              list: [
                "Newsletters y promociones por email",
                "Notificaciones push de ofertas especiales",
                "Comunicaciones personalizadas según tus intereses",
                "Invitaciones a eventos gaming o programas especiales",
                "Alertas de productos en oferta o disponibilidad",
              ],
            },
            {
              subtitle: "Revocación de consentimiento:",
              list: [
                "Eliminación automática en 30 días tras revocación",
                "Enlaces de desuscripción en todos los emails",
                "Configuración de preferencias desde tu cuenta",
                "Contacto directo a privacidad@ratacueva.com",
              ],
              variant: "highlight",
            },
          ]}
        />

        <InfoCard
          icon={<CalendarDaysIcon className="h-6 w-6" />}
          title="Otros períodos de conservación específicos"
          description="Diferentes tipos de datos tienen períodos de conservación específicos según su naturaleza y uso."
          accentColor="purple"
          sections={[
            {
              subtitle: "Datos de navegación y cookies:",
              list: [
                "Cookies técnicas: Duración de la sesión",
                "Cookies analíticas: 24 meses máximo",
                "Cookies de personalización: Hasta revocación",
                "Logs de servidor: 12 meses para seguridad",
              ],
            },
            {
              subtitle: "Comunicaciones de soporte:",
              list: [
                "Tickets de soporte: 3 años para referencia",
                "Llamadas grabadas: 6 meses para calidad",
                "Chats en línea: 1 año para análisis",
                "Quejas y reclamaciones: 5 años por ley",
              ],
            },
            {
              subtitle: "Datos de seguridad:",
              list: [
                "Registros de acceso: 12 meses",
                "Logs de seguridad: 24 meses",
                "Evidencia de incidentes: Según investigación",
                "Backups de seguridad: 90 días",
              ],
              collapsible: true,
            },
          ]}
        />

        <InfoCard
          icon={<TrashIcon className="h-6 w-6" />}
          title="Proceso de eliminación segura"
          description="Cuando se cumple el período de conservación, implementamos procesos seguros para eliminar definitivamente sus datos."
          accentColor="red"
          sections={[
            {
              subtitle: "Métodos de eliminación:",
              list: [
                "Sobrescritura segura de datos digitales",
                "Destrucción física de medios de almacenamiento",
                "Eliminación de bases de datos y backups",
                "Certificación del proceso de destrucción",
                "Verificación de eliminación completa",
              ],
            },
            {
              subtitle: "Cronograma de eliminación:",
              list: [
                "Notificación previa: 30 días antes",
                "Proceso de eliminación: 7 días laborales",
                "Verificación: 3 días adicionales",
                "Certificación: Entrega de confirmación",
              ],
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Puede solicitar certificación del proceso de eliminación de sus datos contactando a privacidad@ratacueva.com",
          }}
        />

        <InfoCard
          icon={<ShieldCheckIcon className="h-6 w-6" />}
          title="Revisión y actualización de políticas de retención"
          description="Mantenemos nuestras políticas de conservación actualizadas y sometemos nuestros procesos a revisión periódica."
          accentColor="green"
          sections={[
            {
              subtitle: "Proceso de revisión:",
              list: [
                "Revisión anual de todos los períodos de conservación",
                "Actualización según cambios en la legislación",
                "Auditorías internas de cumplimiento",
                "Evaluación de necesidades operativas reales",
                "Implementación de mejores prácticas del sector",
              ],
            },
            {
              subtitle: "Principios que seguimos:",
              list: [
                "Minimización: Solo el tiempo estrictamente necesario",
                "Proporcionalidad: Equilibrio entre necesidad y privacidad",
                "Transparencia: Información clara sobre períodos",
                "Legalidad: Cumplimiento de todas las obligaciones",
                "Seguridad: Protección durante todo el período",
              ],
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Nos comprometemos a no conservar sus datos más tiempo del estrictamente necesario y legalmente requerido.",
          }}
        />
      </div>
    </PolicyPageLayout>
  );
}
