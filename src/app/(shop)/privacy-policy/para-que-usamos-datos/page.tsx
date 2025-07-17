"use client";

import { Body } from "@/components/common/Typography";
import { PolicyPageLayout, InfoCard } from "@/components/privacy-policy";
import {
  ShoppingCartIcon,
  TruckIcon,
  EnvelopeIcon,
  LockClosedIcon,
  CreditCardIcon,
  UserIcon,
  SpeakerWaveIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  InformationCircleIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";

export default function ParaQueUsamosDatosPage() {
  const breadcrumbItems = [
    { label: "Configuración", href: "/settings" },
    { label: "Aviso de Privacidad", href: "/privacy-policy" },
    { label: "¿Para qué usamos tus datos?", href: "/privacy-policy/para-que-usamos-datos" },
  ];

  const quickAccessCards = [
    {
      icon: <ShoppingCartIcon className="h-6 w-6" />,
      title: "Finalidades primarias",
      description: "Esenciales para el servicio",
      href: "#finalidades-primarias",
      category: "importante" as const,
    },
    {
      icon: <UserIcon className="h-6 w-6" />,
      title: "Finalidades secundarias",
      description: "Mejoran su experiencia",
      href: "#finalidades-secundarias",
      category: "informativo" as const,
    },
    {
      icon: <HandRaisedIcon className="h-6 w-6" />,
      title: "Derecho de oposición",
      description: "Puede rechazar las secundarias",
      href: "#derecho-oposicion",
      category: "derechos" as const,
    },
  ];

  const faqs = [
    {
      question: "¿Puedo oponerme a las finalidades secundarias?",
      answer:
        "Sí. Puede manifestar su negativa en cualquier momento enviando un correo electrónico a privacidad@ratacueva.com. Su decisión no afectará la prestación de los servicios principales.",
    },
    {
      question:
        "¿Qué sucede si no proporciono mis datos para finalidades primarias?",
      answer:
        "Las finalidades primarias son indispensables para operar el e-commerce. Si no proporciona estos datos, no podremos procesar ni enviar sus pedidos.",
    },
    {
      question: "¿Cómo protege RataCueva mis datos personales?",
      answer:
        "Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger su información contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado.",
    },
  ];

  return (
    <PolicyPageLayout
      title="¿Para qué usamos tus datos?"
      subtitle="Sus datos personales son recopilados y tratados por RataCueva con un conjunto de finalidades claramente definidas, las cuales se dividen en primarias (necesarias para la prestación del servicio) y secundarias (que nos permiten mejorar su experiencia, pero no son indispensables para la funcionalidad básica)."
      breadcrumbItems={breadcrumbItems}
      currentPageNumber={3}
      highlightBox={{
        icon: <InformationCircleIcon className="h-6 w-6" />,
        title: "¿Para qué usamos tus datos?",
        type: "info",
        children: (
          <>
            <Body className="text-blue-100 mb-3">
              <strong>Finalidades primarias:</strong> Indispensables para que
              RataCueva pueda operar como un e-commerce y cumplir con los
              servicios que esperas de nosotros.
            </Body>
            <Body className="text-blue-100">
              <strong>Finalidades secundarias:</strong> Buscan enriquecer tu
              interacción y ofrecerte un servicio más personalizado. Puedes
              oponerte a ellas en cualquier momento.
            </Body>
          </>
        ),
      }}
      quickAccessCards={quickAccessCards}
      faqs={faqs}
    >
      <PolicyPageLayout.SectionDivider subtitle="Finalidades primarias (necesarias para la prestación del servicio)" />

      <div id="finalidades-primarias">
        <InfoCard
          icon={<ShoppingCartIcon className="h-6 w-6" />}
          title="Procesamiento y gestión de pedidos"
          description="Tus datos son utilizados para verificar la disponibilidad de los productos, procesar tu pago de forma segura, generar tu factura o comprobante de compra, preparar tu pedido para el envío y, en general, gestionar todo el ciclo de vida de tu compra desde el momento en que la realizas hasta que el producto sale de nuestro almacén. Esto incluye la validación de la información de pago y la prevención de fraudes."
          accentColor="blue"
          sections={[
            {
              subtitle: "Actividades principales:",
              list: [
                "Verificación de disponibilidad de productos",
                "Procesamiento seguro de tu pago",
                "Generación de factura o comprobante de compra",
                "Preparación del pedido para el envío",
                "Validación de la información de pago",
                "Prevención de fraudes",
              ],
            },
          ]}
        />

        <InfoCard
          icon={<TruckIcon className="h-6 w-6" />}
          title="Gestión de envíos y entregas"
          description="Para asegurar que los productos que has adquirido lleguen a tus manos, compartimos tu nombre, dirección de envío y número de teléfono con las empresas de logística y paquetería que colaboran con RataCueva. Esta información es estrictamente necesaria para que puedan coordinar la ruta de entrega, contactarte en caso de cualquier eventualidad y asegurar la recepción exitosa de tu paquete."
          accentColor="green"
          sections={[
            {
              subtitle: "Procesos de entrega:",
              list: [
                "Compartir nombre, dirección y teléfono con empresas de paquetería",
                "Coordinación de rutas de entrega",
                "Contacto en caso de eventualidades",
                "Asegurar recepción exitosa del paquete",
              ],
            },
          ]}
        />

        <InfoCard
          icon={<EnvelopeIcon className="h-6 w-6" />}
          title="Comunicación relacionada con tu cuenta y pedidos"
          description="Utilizaremos tu correo electrónico y, en ocasiones, tu número de teléfono, para mantenerte informado sobre el estado de tus compras. Esto incluye el envío de confirmaciones de pedido, notificaciones de envío con números de seguimiento, actualizaciones sobre posibles retrasos o incidencias, así como para responder a cualquier consulta o solicitud de soporte que realices a nuestro equipo de servicio al cliente."
          accentColor="purple"
          sections={[
            {
              subtitle: "Comunicaciones que enviamos:",
              list: [
                "Confirmaciones de pedido",
                "Notificaciones de envío con número de seguimiento",
                "Actualizaciones sobre retrasos o incidencias",
                "Respuestas a consultas o solicitudes de soporte",
              ],
            },
          ]}
        />

        <InfoCard
          icon={<LockClosedIcon className="h-6 w-6" />}
          title="Autenticación y seguridad de la cuenta"
          description="Tus datos de identificación son vitales para verificar tu identidad cada vez que inicias sesión en tu cuenta de RataCueva. Implementamos medidas de seguridad robustas como la autenticación de dos factores (2FA) para añadir una capa extra de protección a tu cuenta. Además, solicitamos confirmaciones para cambios importantes en tu perfil, como la modificación de contraseña o información de pago, y te notificamos proactivamente sobre cualquier operación relevante que ocurra en tu cuenta para que estés siempre al tanto."
          accentColor="red"
          sections={[
            {
              subtitle: "Medidas de seguridad:",
              list: [
                "Verificación de identidad en cada inicio de sesión",
                "Autenticación de dos factores (2FA)",
                "Confirmaciones para cambios importantes en el perfil",
                "Notificaciones sobre operaciones relevantes en tu cuenta",
              ],
            },
          ]}
        />

        <InfoCard
          icon={<CreditCardIcon className="h-6 w-6" />}
          title="Gestión de pagos"
          description="Para que tus transacciones financieras se realicen sin problemas, tus datos de pago son compartidos con proveedores de servicios de pago externos. Estos proveedores son los encargados de procesar la autorización de tu tarjeta o método de pago, asegurar la transferencia de fondos y confirmar la transacción. RataCueva no interviene directamente en el procesamiento de los datos sensibles de tu tarjeta, solo recibe la confirmación del pago."
          accentColor="orange"
          sections={[
            {
              subtitle: "Procesamiento de pagos:",
              list: [
                "Compartir datos con proveedores de servicios de pago externos",
                "Procesamiento de autorización de tarjeta o método de pago",
                "Transferencia de fondos y confirmación de la transacción",
                "RataCueva solo recibe confirmación, no datos sensibles de tarjeta",
              ],
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Todas estas finalidades son indispensables para que RataCueva pueda operar como un e-commerce.",
          }}
        />
      </div>

      <PolicyPageLayout.SectionDivider subtitle="Finalidades secundarias (no necesarias para la prestación del servicio, pero que nos permiten mejorar su experiencia)" />

      <div id="finalidades-secundarias">
        <InfoCard
          icon={<UserIcon className="h-6 w-6" />}
          title="Mejora de la experiencia del usuario"
          description="Analizamos tus preferencias de productos gaming y tu historial de navegación para personalizar el contenido que ves en el Sitio. Esto puede incluir recomendarte videojuegos, accesorios o componentes de PC que se alineen con tus intereses, o mostrarte ofertas relevantes."
          accentColor="blue"
          sections={[
            {
              subtitle: "Personalizaciones que ofrecemos:",
              list: [
                "Recomendaciones de videojuegos, accesorios o componentes de PC",
                "Ofertas relevantes según tus intereses",
                "Personalización de la interfaz y experiencia de usuario",
              ],
            },
          ]}
        />

        <InfoCard
          icon={<SpeakerWaveIcon className="h-6 w-6" />}
          title="Marketing y publicidad"
          description="Con tu consentimiento, o basándonos en tu interacción con la plataforma, podremos enviarte información sobre nuestras últimas ofertas, promociones exclusivas, lanzamientos de nuevos productos, eventos especiales y noticias relevantes del mundo gaming. Estas comunicaciones pueden ser a través de correo electrónico, notificaciones push en tu navegador o, en algunos casos, mensajes de texto."
          accentColor="green"
          sections={[
            {
              subtitle: "Comunicaciones de marketing:",
              list: [
                "Ofertas y promociones exclusivas",
                "Lanzamientos de nuevos productos",
                "Eventos especiales y noticias relevantes",
                "Comunicaciones por email, notificaciones push o SMS",
              ],
            },
          ]}
        />

        <InfoCard
          icon={<ChartBarIcon className="h-6 w-6" />}
          title="Análisis y estadísticas"
          description="Recopilamos y analizamos datos agregados y anonimizados sobre el uso de nuestro sitio, las tendencias de compra y el comportamiento general de nuestros usuarios. Esto nos permite identificar patrones, comprender qué productos son más populares, evaluar la efectividad de nuestras campañas de marketing y tomar decisiones informadas para mejorar continuamente nuestros servicios, productos y estrategias comerciales."
          accentColor="purple"
          sections={[
            {
              subtitle: "Análisis que realizamos:",
              list: [
                "Identificación de patrones y tendencias de compra",
                "Evaluación de efectividad de campañas de marketing",
                "Mejora continua de servicios y productos",
              ],
            },
          ]}
        />

        <InfoCard
          icon={<ShieldCheckIcon className="h-6 w-6" />}
          title="Prevención de fraudes"
          description="Más allá de las finalidades primarias, utilizamos análisis de datos para detectar y prevenir posibles actividades fraudulentas, usos indebidos de la Plataforma o violaciones de nuestros términos y condiciones. Esto contribuye a mantener un entorno seguro y justo para todos nuestros usuarios."
          accentColor="red"
          sections={[
            {
              subtitle: "Actividades de protección:",
              list: [
                "Detección y prevención de actividades fraudulentas",
                "Prevención de usos indebidos de la Plataforma",
                "Identificación de violaciones de términos y condiciones",
              ],
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Estas finalidades buscan enriquecer tu experiencia y son completamente opcionales.",
          }}
        />
      </div>

      <InfoCard
        id="derecho-oposicion"
        icon={<HandRaisedIcon className="h-6 w-6" />}
        title="Tu derecho de oposición a finalidades secundarias"
        description="Si no deseas que tus datos personales sean tratados para las finalidades secundarias, puedes manifestar tu negativa en cualquier momento enviando un correo electrónico a privacidad@ratacueva.com. Tu decisión de oponerte a estas finalidades no afectará de ninguna manera la prestación de los servicios principales que solicites o contrates con nosotros, como la compra y envío de productos."
        accentColor="orange"
        sections={[
          {
            subtitle: "Cómo ejercer tu derecho:",
            plainText:
              "Envía un correo electrónico a privacidad@ratacueva.com indicando que no deseas que tus datos sean usados para marketing, análisis o mejoras de experiencia.",
          },
          {
            subtitle: "Garantía importante:",
            plainText:
              "Las finalidades primarias no pueden ser rechazadas ya que son esenciales para el funcionamiento del servicio.",
          },
        ]}
        footerNote={{
          type: "warning",
          text: "Las finalidades primarias no pueden ser rechazadas ya que son esenciales para el funcionamiento del servicio.",
        }}
      />
    </PolicyPageLayout>
  );
}
