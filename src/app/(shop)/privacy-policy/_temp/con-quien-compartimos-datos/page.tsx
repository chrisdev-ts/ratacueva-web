"use client";

import { Body } from "@/components/common/Typography";
import { PolicyPageLayout, InfoCard } from "@/components/privacy-policy";
import {
  CreditCardIcon,
  TruckIcon,
  CloudIcon,
  ChartBarIcon,
  CogIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function CompartimosDataPage() {
  const breadcrumbItems = [
    { label: "Configuración", href: "/settings" },
    { label: "Aviso de privacidad", href: "/privacy-policy" },
    { label: "¿Con quién compartimos tus datos?" },
  ];

  const quickAccessCards = [
    {
      icon: <CreditCardIcon className="h-6 w-6" />,
      title: "Proveedores de pago",
      description:
        "Stripe, PayPal, Oxxo Pay - procesadores certificados PCI DSS",
      href: "#proveedores-pago",
      category: "importante" as const,
    },
    {
      icon: <TruckIcon className="h-6 w-6" />,
      title: "Empresas de logística",
      description: "DHL, FedEx, Estafeta - para entrega de productos",
      href: "#empresas-logistica",
      category: "importante" as const,
    },
    {
      icon: <CloudIcon className="h-6 w-6" />,
      title: "Servicios en la nube",
      description: "AWS, Google Cloud - infraestructura tecnológica segura",
      href: "#servicios-nube",
      category: "informativo" as const,
    },
    {
      icon: <ChartBarIcon className="h-6 w-6" />,
      title: "Análisis y marketing",
      description: "Google Analytics, herramientas de email marketing",
      href: "#servicios-marketing",
      category: "informativo" as const,
    },
  ];

  const faqs = [
    {
      question: "¿RataCueva vende mis datos personales a terceros?",
      answer:
        "Absolutamente NO. RataCueva jamás vende, alquila o intercambia sus datos personales con fines comerciales. Solo compartimos información cuando es estrictamente necesario para proporcionarle el servicio que solicita, siempre bajo estrictas medidas de seguridad.",
    },
    {
      question: "¿Con qué empresas comparten mis datos de envío?",
      answer:
        "Únicamente con empresas de logística certificadas como DHL, FedEx, UPS, Estafeta y 99minutos. Solo compartimos su nombre, dirección de entrega y teléfono - exclusivamente lo necesario para la entrega de su pedido.",
    },
    {
      question: "¿Mis datos financieros están seguros cuando los transfieren?",
      answer:
        "Sí. Sus datos de pago van directamente a procesadores certificados PCI DSS como Stripe o PayPal. RataCueva nunca tiene acceso al número completo de su tarjeta ni al código de seguridad (CVV/CVC).",
    },
    {
      question: "¿Puedo solicitar que no compartan mis datos?",
      answer:
        "Para servicios esenciales (pagos y envíos) no es posible, ya que son indispensables para completar su compra. Para servicios opcionales como análisis de marketing, puede solicitar la exclusión contactando a privacidad@ratacueva.com.",
    },
    {
      question: "¿Cómo protegen mis datos cuando los transfieren?",
      answer:
        "Todos nuestros proveedores firman contratos estrictos de confidencialidad, implementan encriptación de datos, limitamos el uso solo al propósito específico y realizamos auditorías regulares de seguridad.",
    },
  ];

  return (
    <PolicyPageLayout
      title="¿Con quién compartimos tus datos?"
      subtitle="Para brindarte una experiencia de compra completa, necesitamos trabajar con terceros confiables y certificados. Te explicamos exactamente con quién, qué datos y por qué, siempre bajo estrictas medidas de protección y contratos de confidencialidad."
      breadcrumbItems={breadcrumbItems}
      currentPageNumber={3}
      highlightBox={{
        icon: <ShieldCheckIcon className="h-6 w-6" />,
        title: "Compromiso de protección total",
        type: "info",
        children: (
          <>
            <Body className="text-blue-100 mb-3">
              <strong>
                RataCueva jamás vende, alquila o intercambia sus datos
                personales con fines comerciales.
              </strong>
            </Body>
            <Body className="text-blue-100">
              Solo compartimos información cuando es estrictamente necesario
              para proporcionarle el servicio que solicita, siempre bajo
              contratos de confidencialidad y las más altas medidas de
              seguridad.
            </Body>
          </>
        ),
      }}
      quickAccessCards={quickAccessCards}
      faqs={faqs}
    >
      <InfoCard
        id="proveedores-pago"
        icon={<CreditCardIcon className="h-6 w-6" />}
        title="Proveedores de servicios de pago"
        description="Para procesar sus compras de manera segura, trabajamos con plataformas de pago certificadas y reconocidas internacionalmente."
        accentColor="blue"
        sections={[
          {
            subtitle: "¿Con quién compartimos sus datos financieros?",
            list: [
              "Stripe (procesador de tarjetas internacional certificado PCI DSS)",
              "PayPal (plataforma de pagos digitales con encriptación de extremo a extremo)",
              "Oxxo Pay (para pagos en efectivo en tiendas de conveniencia)",
              "Mercado Pago (procesador latinoamericano con estándares bancarios)",
            ],
          },
          {
            subtitle: "¿Qué información específica compartimos?",
            list: [
              "Monto de la transacción",
              "Información del pedido (productos, cantidades)",
              "Su nombre como aparece en la tarjeta",
              "Los datos de la tarjeta van directamente al procesador (RataCueva nunca los ve)",
            ],
          },
          {
            subtitle: "Medidas de seguridad implementadas:",
            list: [
              "Certificación PCI DSS nivel 1 (el más alto estándar de seguridad)",
              "Encriptación SSL/TLS en todas las comunicaciones",
              "Tokenización de datos sensibles",
              "Monitoreo 24/7 contra fraudes y actividades sospechosas",
              "Cumplimiento con regulaciones bancarias internacionales",
            ],
            variant: "highlight",
          },
        ]}
        footerNote={{
          type: "tip",
          text: "RataCueva nunca almacena ni tiene acceso a su número completo de tarjeta o código CVV/CVC.",
        }}
      />

      <InfoCard
        id="empresas-logistica"
        icon={<TruckIcon className="h-6 w-6" />}
        title="Empresas de logística y paquetería"
        description="Para entregar sus productos de manera segura y oportuna, colaboramos con empresas de transporte especializadas y certificadas."
        accentColor="green"
        sections={[
          {
            subtitle: "¿Con quién compartimos sus datos de envío?",
            list: [
              "DHL (empresa internacional con cobertura global)",
              "FedEx (logística express con seguimiento en tiempo real)",
              "UPS (transporte terrestre y aéreo certificado)",
              "Estafeta (empresa mexicana con amplia cobertura nacional)",
              "99minutos (entregas de última milla en zona metropolitana)",
              "Paquetexpress (logística nacional e internacional)",
            ],
          },
          {
            subtitle: "¿Qué información exacta compartimos?",
            list: [
              "Su nombre completo (para identificación del destinatario)",
              "Dirección de envío completa (calle, número, colonia, ciudad, estado, código postal)",
              "Número de teléfono (para coordinación de entrega y contacto en caso de problemas)",
              "Información del producto (descripción, peso, dimensiones - no contenido específico)",
              "Instrucciones especiales de entrega (solo si usted las proporciona)",
            ],
          },
          {
            subtitle: "Protecciones contractuales implementadas:",
            list: [
              "Contratos de confidencialidad y protección de datos estrictos",
              "Limitación del uso exclusivamente para fines de entrega",
              "Obligación de eliminar datos después de completar la entrega",
              "Prohibición expresa de usar datos para otros fines comerciales",
              "Auditorías regulares de cumplimiento de privacidad",
              "Responsabilidad conjunta en caso de incidentes de seguridad",
            ],
            variant: "highlight",
          },
        ]}
        footerNote={{
          type: "tip",
          text: "Solo compartimos el mínimo indispensable para que puedan entregar su paquete y contactarle si es necesario.",
        }}
      />

      <InfoCard
        id="servicios-nube"
        icon={<CloudIcon className="h-6 w-6" />}
        title="Proveedores de servicios en la nube"
        description="Para mantener nuestro sitio web funcionando de manera segura, confiable y eficiente las 24 horas del día, utilizamos servicios de infraestructura tecnológica en la nube."
        accentColor="purple"
        sections={[
          {
            subtitle: "¿Con quién compartimos datos técnicos?",
            list: [
              "Amazon Web Services (AWS) - hosting, bases de datos y almacenamiento",
              "Google Cloud Platform - servicios de análisis y machine learning",
              "Microsoft Azure - aplicaciones empresariales y respaldos",
              "Cloudflare - protección DDoS y optimización de velocidad",
              "MongoDB Atlas - gestión segura de bases de datos",
              "Vercel - hospedaje optimizado para aplicaciones web",
            ],
          },
          {
            subtitle: "¿Qué tipo de información procesan?",
            list: [
              "Datos técnicos de navegación (direcciones IP, tipo de navegador)",
              "Logs de actividad del sistema (para monitoreo y seguridad)",
              "Métricas de rendimiento del sitio web",
              "Información agregada y anonimizada para análisis",
              "Respaldos encriptados de datos para recuperación ante desastres",
            ],
          },
          {
            subtitle: "Medidas de seguridad en la nube:",
            list: [
              "Encriptación de datos en reposo y en tránsito",
              "Certificaciones de seguridad ISO 27001, SOC 2 Tipo II",
              "Controles de acceso estrictos con autenticación multifactor",
              "Monitoreo 24/7 de actividades sospechosas",
              "Respaldos automáticos y planes de recuperación ante desastres",
              "Cumplimiento con regulaciones internacionales de privacidad",
            ],
            variant: "highlight",
          },
        ]}
        footerNote={{
          type: "tip",
          text: "Todos nuestros proveedores de nube cumplen con los más altos estándares de seguridad y privacidad internacional.",
        }}
      />

      <InfoCard
        id="servicios-marketing"
        icon={<ChartBarIcon className="h-6 w-6" />}
        title="Servicios de análisis y marketing"
        description="Para mejorar continuamente nuestros servicios y personalizar su experiencia de compra, trabajamos con herramientas especializadas de análisis y comunicación."
        accentColor="orange"
        sections={[
          {
            subtitle: "¿Con quién compartimos datos para análisis?",
            list: [
              "Google Analytics - análisis de tráfico web y comportamiento de usuarios",
              "Hotjar - grabaciones de sesiones y mapas de calor (datos anonimizados)",
              "Mailchimp - gestión de newsletters y comunicaciones por email",
              "SendGrid - envío transaccional de emails (confirmaciones, notificaciones)",
              "Facebook Pixel - análisis de efectividad de publicidad (solo datos agregados)",
              "Google Ads - optimización de campañas publicitarias",
            ],
          },
          {
            subtitle: "¿Qué información específica compartimos?",
            list: [
              "Datos demográficos agregados y anonimizados",
              "Patrones de navegación y preferencias de productos",
              "Información de interacción con emails (aperturas, clics)",
              "Métricas de conversión y abandonos de carrito",
              "Datos de comportamiento de compra (sin información personal identificable)",
            ],
          },
          {
            subtitle: "Su control sobre estos servicios:",
            plainText:
              "Usted puede solicitar la exclusión de estos servicios de análisis y marketing en cualquier momento. Esto no afectará su capacidad de realizar compras, pero podría limitar la personalización de su experiencia. Para solicitar la exclusión, contáctenos en privacidad@ratacueva.com.",
            variant: "highlight",
          },
        ]}
        footerNote={{
          type: "tip",
          text: "Puede oponerse a estas transferencias para marketing contactando a privacidad@ratacueva.com",
        }}
      />

      <InfoCard
        id="proveedores-soporte"
        icon={<CogIcon className="h-6 w-6" />}
        title="Servicios de soporte y atención al cliente"
        description="Para brindarle la mejor experiencia de soporte cuando necesite ayuda, podemos trabajar con proveedores especializados en atención al cliente."
        accentColor="red"
        sections={[
          {
            subtitle: "¿Con quién compartimos datos para soporte?",
            list: [
              "Zendesk - sistema de tickets y gestión de casos de soporte",
              "Intercom - chat en vivo y comunicación directa con clientes",
              "Twilio - servicios de comunicación por SMS y WhatsApp",
              "Help Scout - herramientas de colaboración para soporte",
            ],
          },
          {
            subtitle: "¿Qué información compartimos?",
            list: [
              "Su información de contacto (nombre, email, teléfono)",
              "Historial de pedidos relevante a su consulta",
              "Descripción del problema o pregunta que reporta",
              "Comunicaciones previas relacionadas con el caso",
              "Información técnica necesaria para resolver el problema",
            ],
          },
          {
            subtitle: "Limitaciones y protecciones:",
            plainText:
              "Los proveedores de soporte tienen acceso limitado solo a la información necesaria para resolver su consulta específica. No pueden ver información sensible como datos financieros completos, y están obligados por contratos estrictos de confidencialidad.",
          },
        ]}
        footerNote={{
          type: "tip",
          text: "Solo compartimos la información mínima necesaria para resolver eficientemente su consulta de soporte.",
        }}
      />

      <InfoCard
        id="garantias-proteccion"
        icon={<ShieldCheckIcon className="h-6 w-6" />}
        title="Garantías de protección en todas las transferencias"
        description="Implementamos múltiples capas de protección legal, técnica y contractual para asegurar que sus datos estén completamente seguros en manos de terceros."
        accentColor="green"
        sections={[
          {
            subtitle: "Protecciones contractuales obligatorias:",
            list: [
              "Contratos de protección de datos y confidencialidad estrictos con todos los proveedores",
              "Cláusulas de responsabilidad compartida ante incidentes de seguridad",
              "Auditorías regulares de cumplimiento de estándares de privacidad",
              "Certificación obligatoria de cumplimiento de normativas mexicanas e internacionales",
              "Limitación contractual del uso de datos solo para el propósito específico autorizado",
              "Obligación de eliminar datos cuando ya no sean necesarios para el servicio",
            ],
          },
          {
            subtitle: "Medidas técnicas de seguridad:",
            list: [
              "Encriptación de datos en tránsito y en reposo",
              "Controles de acceso con autenticación multifactor",
              "Monitoreo continuo de actividades sospechosas",
              "Notificación inmediata de cualquier incidente de seguridad",
              "Protocolos de respuesta ante brechas de seguridad",
            ],
            variant: "highlight",
          },
          {
            subtitle: "Sus derechos y controles:",
            plainText:
              "Usted mantiene control sobre sus datos en todo momento. Para servicios esenciales (pagos, envíos), las transferencias son necesarias para el funcionamiento del servicio. Para servicios opcionales (marketing, análisis), puede solicitar su exclusión. Siempre puede ejercer sus derechos ARCO (Acceso, Rectificación, Cancelación, Oposición) contactándonos en privacidad@ratacueva.com.",
          },
        ]}
        footerNote={{
          type: "tip",
          text: "Todas nuestras transferencias cumplen estrictamente con la LFPDPPP y están respaldadas por contratos sólidos de protección de datos.",
        }}
      />
    </PolicyPageLayout>
  );
}
