"use client";

import { Body } from "@/components/common/Typography";
import { PolicyPageLayout, InfoCard } from "@/components/privacy-policy";
import {
  CogIcon,
  ChartBarIcon,
  AdjustmentsHorizontalIcon,
  TvIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function CookiesTecnologiasPage() {
  const breadcrumbItems = [
    { label: "Configuración", href: "/settings" },
    { label: "Aviso de privacidad", href: "/privacy-policy" },
    { label: "Cookies y tecnologías de rastreo" },
  ];

  const quickAccessCards = [
    {
      icon: <CogIcon className="h-6 w-6" />,
      title: "Cookies esenciales",
      description: "Funcionalidad básica - sesión, carrito, seguridad",
      href: "#cookies-esenciales",
      category: "importante" as const,
    },
    {
      icon: <ChartBarIcon className="h-6 w-6" />,
      title: "Cookies de análisis",
      description: "Google Analytics - métricas de rendimiento",
      href: "#cookies-analisis",
      category: "informativo" as const,
    },
    {
      icon: <AdjustmentsHorizontalIcon className="h-6 w-6" />,
      title: "Cookies funcionales",
      description: "Preferencias de idioma, región y personalización",
      href: "#cookies-funcionales",
      category: "informativo" as const,
    },
    {
      icon: <TvIcon className="h-6 w-6" />,
      title: "Cookies de marketing",
      description: "Publicidad personalizada y seguimiento",
      href: "#cookies-marketing",
      category: "informativo" as const,
    },
  ];

  const faqs = [
    {
      question: "¿Qué son las cookies?",
      answer:
        "Son pequeños archivos de texto que se almacenan en tu dispositivo para recordar preferencias y mejorar tu experiencia de navegación.",
    },
    {
      question: "¿Puedo desactivar las cookies?",
      answer:
        "Sí, puedes gestionar cookies desde tu navegador. Las esenciales no se pueden desactivar porque son necesarias para el funcionamiento básico.",
    },
    {
      question: "¿Las cookies contienen información personal?",
      answer:
        "Las cookies esenciales no contienen información personal. Las de marketing pueden crear perfiles anónimos de comportamiento.",
    },
  ];

  return (
    <PolicyPageLayout
      title="Cookies y tecnologías de rastreo"
      subtitle="Utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación, recordar tus preferencias y analizar cómo interactúas con nuestro sitio. Te explicamos qué tipos usamos y cómo puedes controlarlas."
      breadcrumbItems={breadcrumbItems}
      currentPageNumber={5}
      highlightBox={{
        icon: <ShieldCheckIcon className="h-6 w-6" />,
        title: "¿Qué son las cookies?",
        type: "info",
        children: (
          <>
            <Body className="text-blue-100 mb-3">
              <strong>Las cookies son pequeños archivos de texto</strong> que se
              almacenan en tu dispositivo cuando visitas nuestro sitio web.
            </Body>
            <Body className="text-blue-100">
              Utilizamos cookies para mejorar tu experiencia de usuario,
              recordar tus preferencias, analizar el tráfico del sitio y
              personalizar el contenido que te mostramos.
            </Body>
          </>
        ),
      }}
      quickAccessCards={quickAccessCards}
      faqs={faqs}
    >
      <InfoCard
        id="cookies-esenciales"
        icon={<WrenchScrewdriverIcon className="h-6 w-6" />}
        title="Cookies esenciales (obligatorias)"
        description="Estas cookies son fundamentales para el funcionamiento básico de RataCueva. Sin ellas, el sitio no podría funcionar correctamente."
        accentColor="red"
        sections={[
          {
            subtitle: "Funciones críticas que permiten:",
            list: [
              "Mantener tu sesión iniciada mientras navegas por diferentes páginas",
              "Recordar los productos que has añadido a tu carrito de compras",
              "Asegurar que las funciones de seguridad básicas operen correctamente",
              "Permitir la navegación segura entre páginas protegidas",
              "Procesar pagos de forma segura y confiable",
            ],
          },
          {
            subtitle: "Ejemplos de cookies esenciales:",
            list: [
              "session_token - Identifica tu sesión de navegación",
              "cart_contents - Mantiene los productos en tu carrito",
              "csrf_protection - Protege contra ataques de seguridad",
              "payment_state - Gestiona el estado de transacciones",
            ],
          },
        ]}
        footerNote={{
          type: "warning",
          text: "Estas cookies no pueden ser desactivadas ya que son necesarias para el funcionamiento básico del sitio.",
        }}
      />

      <InfoCard
        id="cookies-analisis"
        icon={<ChartBarIcon className="h-6 w-6" />}
        title="Cookies de rendimiento y análisis"
        description="Recopilan información agregada y anónima sobre cómo interactúas con nuestro sitio para ayudarnos a mejorarlo continuamente."
        accentColor="blue"
        sections={[
          {
            subtitle: "¿Qué información recopilamos?",
            list: [
              "Páginas más visitadas y tiempo de permanencia",
              "Errores técnicos y problemas de navegación",
              "Velocidad de carga y rendimiento del sitio",
              "Dispositivos y navegadores utilizados (datos anonimizados)",
              "Patrones de navegación y flujos de usuario",
            ],
          },
          {
            subtitle: "Herramientas de análisis que utilizamos:",
            list: [
              "Google Analytics - Estadísticas de tráfico y comportamiento",
              "Google Tag Manager - Gestión de etiquetas de seguimiento",
              "Hotjar - Mapas de calor y análisis de experiencia de usuario",
              "Microsoft Clarity - Grabaciones de sesión anonimizadas",
            ],
          },
          {
            subtitle: "Beneficios para tu experiencia:",
            list: [
              "Sitio web más rápido y funcional",
              "Mejor experiencia de navegación optimizada",
              "Detección y corrección rápida de errores",
              "Contenido y funcionalidades mejoradas según el uso",
            ],
            variant: "highlight",
          },
        ]}
        footerNote={{
          type: "tip",
          text: "Toda la información es agregada y anónima. No te identificamos personalmente a través de estas cookies.",
        }}
      />

      <InfoCard
        id="cookies-funcionales"
        icon={<AdjustmentsHorizontalIcon className="h-6 w-6" />}
        title="Cookies funcionales y de personalización"
        description="Mejoran tu experiencia recordando tus preferencias y configuraciones para hacerte la navegación más cómoda y personalizada."
        accentColor="purple"
        sections={[
          {
            subtitle: "Preferencias que recordamos:",
            list: [
              "Tu idioma preferido (español, inglés, etc.)",
              "La región desde la que accedes (México, Estados Unidos, etc.)",
              "Configuraciones de visualización (modo oscuro/claro, tamaño de texto)",
              "Tus preferencias de navegación y filtros de productos favoritos",
              "Productos en tu lista de deseos y comparaciones",
            ],
          },
          {
            subtitle: "Configuraciones de cuenta:",
            list: [
              "Recordar tu método de pago preferido",
              "Mantener tu dirección de envío predeterminada",
              "Preferencias de notificaciones y comunicación",
              "Configuración de privacidad personalizada",
            ],
          },
        ]}
        footerNote={{
          type: "tip",
          text: "Estas cookies evitan que tengas que reconfigurar tus preferencias en cada visita al sitio.",
        }}
      />

      <InfoCard
        id="cookies-marketing"
        icon={<TvIcon className="h-6 w-6" />}
        title="Cookies de publicidad y marketing"
        description="Utilizadas por nosotros y nuestros socios publicitarios para mostrarte anuncios más relevantes basados en tus intereses en productos gaming."
        accentColor="orange"
        sections={[
          {
            subtitle: "¿Para qué las utilizamos?",
            list: [
              "Mostrar anuncios más relevantes para tus intereses en productos gaming",
              "Limitar el número de veces que ves un anuncio específico",
              "Medir la efectividad de nuestras campañas publicitarias",
              "Personalizar ofertas basadas en tu historial de navegación",
              "Retargeting de productos que has visto pero no comprado",
            ],
          },
          {
            subtitle: "Plataformas publicitarias que utilizamos:",
            list: [
              "Google Ads - Publicidad en búsquedas y sitios web",
              "Facebook/Instagram Ads - Anuncios en redes sociales",
              "TikTok for Business - Publicidad en video",
              "YouTube Ads - Anuncios en contenido gaming",
              "Criteo - Retargeting personalizado",
            ],
          },
          {
            subtitle: "Tu control sobre estas cookies:",
            plainText:
              "Puedes desactivar estas cookies en cualquier momento desde nuestro centro de preferencias o tu navegador. Esto no afectará el funcionamiento del sitio, pero podrías ver anuncios menos relevantes para tus intereses.",
            variant: "highlight",
          },
        ]}
        footerNote={{
          type: "tip",
          text: "Puedes optar por no recibir publicidad personalizada manteniendo toda la funcionalidad del sitio.",
        }}
      />

      <InfoCard
        id="control-cookies"
        icon={<CogIcon className="h-6 w-6" />}
        title="Tu control total sobre las cookies"
        description="Tienes múltiples opciones para gestionar y controlar qué cookies acepta tu navegador, desde configuraciones básicas hasta controles granulares."
        accentColor="green"
        sections={[
          {
            subtitle: "Opciones de control disponibles:",
            list: [
              "Centro de preferencias de cookies en RataCueva",
              "Configuración de privacidad de tu navegador web",
              "Herramientas de opt-out de plataformas publicitarias",
              "Extensiones de navegador para bloqueo de rastreadores",
            ],
          },
          {
            subtitle: "Configuración por navegador:",
            list: [
              "Chrome: Configuración > Privacidad y seguridad > Cookies y otros datos de sitios",
              "Firefox: Preferencias > Privacidad y seguridad > Cookies y datos del sitio",
              "Safari: Preferencias > Privacidad > Cookies y datos de sitios web",
              "Edge: Configuración > Cookies y permisos de sitio",
            ],
          },
          {
            subtitle: "Centro de preferencias RataCueva:",
            list: [
              "Acceso desde tu cuenta: Configuración > Privacidad > Gestión de cookies",
              "Banner de consentimiento al visitar el sitio por primera vez",
              "Link permanente en el pie de página: 'Configuración de cookies'",
              "Opción de revisar y cambiar preferencias en cualquier momento",
            ],
            variant: "highlight",
          },
        ]}
        footerNote={{
          type: "warning",
          text: "Desactivar cookies esenciales puede afectar funcionalidades como el carrito de compras y la autenticación.",
        }}
      />
    </PolicyPageLayout>
  );
}
