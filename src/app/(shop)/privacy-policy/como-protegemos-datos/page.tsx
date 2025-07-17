"use client";

import { Body } from "@/components/common/Typography";
import { PolicyPageLayout, InfoCard } from "@/components/privacy-policy";
import {
  LockClosedIcon,
  CheckCircleIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";

export default function ProtegemosDatosPage() {
  const breadcrumbItems = [
    { label: "Configuración", href: "/settings" },
    { label: "Aviso de privacidad", href: "/privacy-policy" },
    { label: "¿Cómo protegemos tus datos?" },
  ];

  const quickAccessCards = [
    {
      icon: <LockClosedIcon className="h-6 w-6" />,
      title: "Protecciones técnicas",
      description: "Cifrado AES-256, SSL/TLS, 2FA y controles avanzados",
      href: "#protecciones-tecnicas",
      category: "importante" as const,
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "Protecciones administrativas",
      description: "Control de acceso, capacitación, políticas estrictas",
      href: "#protecciones-administrativas",
      category: "importante" as const,
    },
    {
      icon: <ClipboardDocumentCheckIcon className="h-6 w-6" />,
      title: "Monitoreo y auditorías",
      description:
        "Vigilancia 24/7, pruebas de penetración, respuesta a incidentes",
      href: "#monitoreo-auditorias",
      category: "informativo" as const,
    },
    {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: "Certificaciones",
      description: "ISO 27001, SOC 2, PCI DSS y estándares internacionales",
      href: "#certificaciones",
      category: "informativo" as const,
    },
  ];

  const faqs = [
    {
      question: "¿Qué tipo de cifrado utilizan?",
      answer:
        "Usamos cifrado AES-256, el mismo estándar que bancos y gobiernos. También SSL/TLS para todas las comunicaciones.",
    },
    {
      question: "¿Quién puede acceder a mis datos?",
      answer:
        "Solo personal autorizado y estrictamente para cumplir el servicio solicitado. Cada acceso queda registrado.",
    },
    {
      question: "¿Realizan pruebas de seguridad?",
      answer:
        "Sí, hacemos pruebas de penetración trimestrales, auditorías regulares y monitoreo continuo 24/7.",
    },
    {
      question: "¿Qué pasa si hay una brecha de seguridad?",
      answer:
        "Tenemos un protocolo de respuesta inmediata: notificación a usuarios, contención del problema e investigación completa.",
    },
  ];

  return (
    <PolicyPageLayout
      title="¿Cómo protegemos tus datos?"
      subtitle="La seguridad de tu información es nuestra máxima prioridad. Implementamos múltiples capas de protección técnica, administrativa y de monitoreo para mantener tus datos completamente seguros las 24 horas del día."
      breadcrumbItems={breadcrumbItems}
      currentPageNumber={4}
      highlightBox={{
        icon: <ShieldCheckIcon className="h-6 w-6" />,
        title: "Protección multicapa garantizada",
        type: "info",
        children: (
          <>
            <Body className="text-blue-100 mb-3">
              <strong>
                Implementamos los más altos estándares de seguridad de la
                industria
              </strong>{" "}
              con tecnología de grado militar y certificaciones internacionales.
            </Body>
            <Body className="text-blue-100">
              Tu información está protegida por múltiples capas de seguridad que
              incluyen cifrado avanzado, controles de acceso estrictos y
              monitoreo continuo.
            </Body>
          </>
        ),
      }}
      quickAccessCards={quickAccessCards}
      faqs={faqs}
    >
      <InfoCard
        id="protecciones-tecnicas"
        icon={<LockClosedIcon className="h-6 w-6" />}
        title="Protecciones técnicas avanzadas"
        description="Utilizamos tecnología de seguridad de última generación para crear múltiples barreras de protección alrededor de tu información."
        accentColor="blue"
        sections={[
          {
            subtitle: "Cifrado de grado militar:",
            list: [
              "Cifrado AES-256 para datos almacenados (el mismo que usan bancos y gobiernos)",
              "SSL/TLS 1.3 para todas las comunicaciones en tiempo real",
              "Cifrado de extremo a extremo en transmisiones sensibles",
              "Tokenización de datos financieros para máxima seguridad",
            ],
          },
          {
            subtitle: "Autenticación y control de acceso:",
            list: [
              "Autenticación de dos factores (2FA) disponible para tu cuenta",
              "Controles de acceso basados en roles para nuestro personal",
              "Gestión de sesiones seguras con timeouts automáticos",
              "Verificación de identidad para cambios críticos en tu cuenta",
            ],
          },
          {
            subtitle: "Infraestructura protegida:",
            list: [
              "Servidores en centros de datos certificados ISO 27001",
              "Firewalls de aplicación web (WAF) de última generación",
              "Protección DDoS automática las 24 horas",
              "Respaldos encriptados en múltiples ubicaciones geográficas",
            ],
            variant: "highlight",
          },
        ]}
        footerNote={{
          type: "tip",
          text: "Recomendamos activar la autenticación de dos factores en tu cuenta para mayor seguridad.",
        }}
      />

      <InfoCard
        id="protecciones-administrativas"
        icon={<UserGroupIcon className="h-6 w-6" />}
        title="Protecciones administrativas y humanas"
        description="Implementamos políticas estrictas y capacitación continua para asegurar que solo las personas autorizadas puedan acceder a tu información."
        accentColor="green"
        sections={[
          {
            subtitle: "Control de acceso del personal:",
            list: [
              "Principio de 'menor privilegio' - solo acceso mínimo necesario",
              "Revisión de antecedentes para todo el personal con acceso a datos",
              "Contratos de confidencialidad estrictos y vinculantes",
              "Revocación inmediata de accesos al terminar la relación laboral",
            ],
          },
          {
            subtitle: "Capacitación y concientización:",
            list: [
              "Capacitación obligatoria en seguridad y privacidad para todo el equipo",
              "Actualizaciones regulares sobre nuevas amenazas y protecciones",
              "Simulacros de phishing y pruebas de seguridad al personal",
              "Cultura de seguridad que prioriza la protección de datos",
            ],
          },
          {
            subtitle: "Políticas y procedimientos:",
            list: [
              "Políticas de escritorio limpio y pantalla bloqueada",
              "Procedimientos documentados para manejo de incidentes",
              "Registro y monitoreo de todos los accesos a datos personales",
              "Protocolo de respuesta a incidentes de seguridad",
            ],
            variant: "highlight",
          },
        ]}
        footerNote={{
          type: "tip",
          text: "Todo nuestro personal firma acuerdos de confidencialidad antes de tener acceso a cualquier sistema.",
        }}
      />

      <InfoCard
        id="monitoreo-auditorias"
        icon={<ClipboardDocumentCheckIcon className="h-6 w-6" />}
        title="Monitoreo continuo y auditorías"
        description="Mantenemos vigilancia constante de nuestros sistemas y realizamos evaluaciones regulares para identificar y mitigar cualquier amenaza."
        accentColor="purple"
        sections={[
          {
            subtitle: "Monitoreo en tiempo real:",
            list: [
              "Vigilancia 24/7/365 de todos los sistemas críticos",
              "Detección automática de actividades sospechosas",
              "Alertas inmediatas ante intentos de acceso no autorizado",
              "Análisis de comportamiento para identificar anomalías",
            ],
          },
          {
            subtitle: "Pruebas y auditorías regulares:",
            list: [
              "Pruebas de penetración trimestrales por empresas especializadas",
              "Auditorías de seguridad internas mensuales",
              "Evaluaciones de vulnerabilidades semanales",
              "Revisión anual de todas las políticas de seguridad",
            ],
          },
          {
            subtitle: "Respuesta a incidentes:",
            list: [
              "Equipo de respuesta disponible 24/7 para emergencias",
              "Protocolos de contención y mitigación predefinidos",
              "Notificación a usuarios afectados dentro de 72 horas",
              "Investigación forense completa de cualquier incidente",
            ],
            variant: "highlight",
          },
        ]}
        footerNote={{
          type: "tip",
          text: "Mantenemos un programa de recompensas por vulnerabilidades para investigadores de seguridad éticos.",
        }}
      />

      <InfoCard
        id="certificaciones"
        icon={<ShieldCheckIcon className="h-6 w-6" />}
        title="Certificaciones y cumplimiento normativo"
        description="Cumplimos con los estándares más estrictos de la industria y mantenemos certificaciones internacionales de seguridad."
        accentColor="green"
        sections={[
          {
            subtitle: "Certificaciones de seguridad:",
            list: [
              "ISO 27001 - Gestión de seguridad de la información",
              "SOC 2 Tipo II - Controles de seguridad y disponibilidad",
              "PCI DSS - Estándar de seguridad para datos de tarjetas",
              "Evaluaciones regulares de cumplimiento normativo",
            ],
          },
          {
            subtitle: "Cumplimiento legal:",
            list: [
              "Ley Federal de Protección de Datos Personales (LFPDPPP) de México",
              "Lineamientos del Instituto Nacional de Transparencia (INAI)",
              "Mejores prácticas internacionales de privacidad",
              "Preparación para futuras regulaciones de privacidad",
            ],
          },
          {
            subtitle: "Transparencia y comunicación:",
            plainText:
              "Publicamos reportes de transparencia regulares sobre nuestras prácticas de seguridad y cualquier incidente relevante. Creemos que la transparencia es fundamental para generar confianza.",
            variant: "highlight",
          },
        ]}
        footerNote={{
          type: "tip",
          text: "Nuestras certificaciones son renovadas anualmente y están disponibles para consulta pública.",
        }}
      />
    </PolicyPageLayout>
  );
}
