"use client";

import { Body } from "@/components/common/Typography";
import { PolicyPageLayout, InfoCard } from "@/components/privacy-policy";
import {
  IdentificationIcon,
  CreditCardIcon,
  ChartBarIcon,
  UserIcon,
  ShieldCheckIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export default function DatosRecopilamosPage() {
  const breadcrumbItems = [
    { label: "Configuración", href: "/settings" },
    { label: "Aviso de privacidad", href: "/privacy-policy" },
    { label: "¿Qué datos personales recopilamos?" },
  ];

  const quickAccessCards = [
    {
      icon: <IdentificationIcon className="h-6 w-6" />,
      title: "Datos de identificación y contacto",
      description: "Nombre, email, teléfono, dirección de envío",
      href: "#datos-identificacion-contacto",
      category: "importante" as const,
    },
    {
      icon: <CreditCardIcon className="h-6 w-6" />,
      title: "Datos financieros y de pago",
      description: "Tipo de tarjeta, últimos 4 dígitos, proveedor",
      href: "#datos-financieros-pago",
      category: "importante" as const,
    },
    {
      icon: <ChartBarIcon className="h-6 w-6" />,
      title: "Datos de transacción",
      description: "Productos, historial de pedidos, fechas de compra",
      href: "#datos-transaccion",
      category: "informativo" as const,
    },
    {
      icon: <UserIcon className="h-6 w-6" />,
      title: "Datos de uso y preferencias",
      description: "Preferencias gaming, navegación, direcciones IP",
      href: "#datos-uso-preferencias",
      category: "informativo" as const,
    },
  ];

  const faqs = [
    {
      question: "¿Por qué necesitan recopilar datos personales?",
      answer:
        "Para poder ofrecerle una experiencia de compra completa y eficiente en RataCueva, y cumplir con las diversas finalidades que se detallan en nuestro aviso de privacidad. Estos datos son esenciales para la operación de nuestro e-commerce y para brindarle un servicio de calidad.",
    },
    {
      question: "¿RataCueva almacena mi número completo de tarjeta de crédito?",
      answer:
        "No. RataCueva no almacena el número completo de su tarjeta de crédito ni el código de verificación (CVV/CVC). Esta información se solicita en cada transacción de manera temporal y es procesada directamente por nuestros proveedores de servicios de pago seguros y certificados.",
    },
    {
      question: "¿Qué información recopilan sobre mi navegación?",
      answer:
        "Recopilamos sus preferencias de productos gaming, historial de navegación dentro de RataCueva, direcciones IP, tipo de navegador, sistema operativo, hora y duración de visitas, páginas consultadas y términos de búsqueda para mejorar continuamente su experiencia.",
    },
    {
      question: "¿Qué sucede si no proporciono ciertos datos?",
      answer:
        "Sin cierta información esencial como su dirección de envío, no podríamos procesar ni enviar sus pedidos. Su correo electrónico es crucial para confirmaciones y comunicación sobre sus compras.",
    },
  ];

  return (
    <PolicyPageLayout
      title="¿Qué datos personales recopilamos?"
      subtitle="Para poder ofrecerle una experiencia de compra completa y eficiente en RataCueva, y cumplir con las diversas finalidades que se detallan más adelante en este aviso de privacidad, es necesario que recopilemos ciertas categorías de datos personales. Estos datos son esenciales para la operación de nuestro e-commerce y para brindarle un servicio de calidad."
      breadcrumbItems={breadcrumbItems}
      currentPageNumber={2}
      highlightBox={{
        icon: <ShieldCheckIcon className="h-6 w-6" />,
        title: "Protección de datos financieros",
        type: "info",
        children: (
          <>
            <Body className="text-blue-100 mb-3">
              <strong>
                RataCueva no almacena el número completo de su tarjeta de
                crédito ni el código de verificación (CVV/CVC).
              </strong>
            </Body>
            <Body className="text-blue-100">
              Esta información altamente sensible se solicita en cada
              transacción de manera temporal y es procesada directamente por
              nuestros proveedores de servicios de pago seguros y certificados.
            </Body>
          </>
        ),
      }}
      quickAccessCards={quickAccessCards}
      faqs={faqs}
    >
      <InfoCard
        id="datos-identificacion-contacto"
        icon={<IdentificationIcon className="h-6 w-6" />}
        title="Datos de identificación y contacto"
        description="Esta categoría incluye información fundamental para identificarle y comunicarnos con usted."
        accentColor="blue"
        sections={[
          {
            subtitle: "Información personal básica:",
            list: [
              "Nombre completo (nombre(s), apellido paterno y apellido materno)",
              "Dirección de correo electrónico",
              "Número de teléfono",
              "Dirección de envío completa (código postal, calle, número exterior, número interior opcional, colonia, ciudad, estado, país)",
            ],
          },
          {
            subtitle: "Propósito de esta información:",
            plainText:
              "Recopilamos su nombre completo para personalizar su experiencia y asegurar que los envíos lleguen a la persona correcta. Su dirección de correo electrónico es crucial para enviarle confirmaciones de pedidos, recibos electrónicos, notificaciones de envío y para comunicarnos con usted sobre cualquier aspecto relevante de su cuenta o sus compras.",
          },
          {
            subtitle: "Importancia para el servicio:",
            plainText:
              "El número de teléfono nos permite contactarle rápidamente en caso de problemas con su pedido o entrega. La dirección de envío completa es indispensable para que las empresas de paquetería puedan entregar sus productos de manera precisa y oportuna. Sin esta información, no podríamos procesar ni enviar sus pedidos.",
            variant: "highlight",
          },
        ]}
      />

      <InfoCard
        id="datos-financieros-pago"
        icon={<CreditCardIcon className="h-6 w-6" />}
        title="Datos financieros y de pago"
        description="Para facilitar sus transacciones, recopilamos información relacionada con los métodos de pago que usted elija utilizar en nuestra plataforma."
        accentColor="green"
        sections={[
          {
            subtitle: "Información que recopilamos:",
            list: [
              "Tipo de tarjeta (crédito/débito)",
              "Los últimos cuatro dígitos de su tarjeta (para su identificación y referencia)",
              "El proveedor de la tarjeta (ej. Visa, Mastercard)",
              "La fecha de expiración",
            ],
          },
          {
            subtitle: "Información que NO almacenamos:",
            list: [
              "El número completo de su tarjeta de crédito",
              "El código de verificación (CVV/CVC)",
            ],
            variant: "highlight",
          },
          {
            subtitle: "Procesamiento seguro:",
            plainText:
              "La información altamente sensible se solicita en cada transacción de manera temporal y es procesada directamente por nuestros proveedores de servicios de pago seguros y certificados. Estos proveedores cumplen con los más altos estándares de seguridad de la industria (PCI DSS) para asegurar la protección de sus datos financieros durante la transacción, minimizando así el riesgo de que esta información sea comprometida en nuestros sistemas.",
          },
        ]}
        footerNote={{
          type: "tip",
          text: "Su seguridad financiera es nuestra prioridad. Por eso no almacenamos información sensible de tarjetas.",
        }}
      />

      <InfoCard
        id="datos-transaccion"
        icon={<ChartBarIcon className="h-6 w-6" />}
        title="Datos de transacción"
        description="Esta información detalla su actividad de compra en RataCueva."
        accentColor="purple"
        sections={[
          {
            subtitle: "Información de compras:",
            list: [
              "Los productos que adquiere",
              "Su historial de pedidos completo",
              "Las fechas exactas de sus compras",
              "Todos los detalles específicos de cada transacción",
            ],
          },
          {
            subtitle: "Propósito de estos datos:",
            plainText:
              "Estos datos nos permiten gestionar su cuenta, procesar devoluciones o cambios, y mantener un registro preciso de sus interacciones comerciales con nosotros, lo cual es fundamental para el soporte al cliente y para fines contables y fiscales.",
          },
          {
            subtitle: "Beneficios para usted:",
            list: [
              "Seguimiento detallado de sus pedidos",
              "Historial completo para consultas futuras",
              "Facilita el proceso de devoluciones y cambios",
              "Mejor soporte al cliente personalizado",
            ],
          },
        ]}
      />

      <InfoCard
        id="datos-uso-preferencias"
        icon={<UserIcon className="h-6 w-6" />}
        title="Datos de uso y preferencias"
        description="Para mejorar continuamente su experiencia en RataCueva, recopilamos información sobre cómo interactúa con nuestro sitio."
        accentColor="orange"
        sections={[
          {
            subtitle: "Preferencias y comportamiento:",
            list: [
              "Sus preferencias de productos gaming (géneros de videojuegos, marcas favoritas de periféricos)",
              "Su historial de navegación dentro de RataCueva",
              "Las páginas que consulta",
              "Los términos de búsqueda que utiliza",
            ],
          },
          {
            subtitle: "Información técnica:",
            list: [
              "Las direcciones IP desde las que accede",
              "El tipo de navegador y sistema operativo que utiliza",
              "La hora y duración de sus visitas",
            ],
          },
          {
            subtitle: "Cómo mejora su experiencia:",
            plainText:
              "Esta información nos ayuda a entender sus intereses, personalizar las recomendaciones de productos, optimizar la interfaz de usuario y asegurar que el Sitio funcione correctamente en diferentes dispositivos y configuraciones.",
            variant: "highlight",
          },
        ]}
        footerNote={{
          type: "tip",
          text: "Todos estos datos se utilizan exclusivamente para mejorar su experiencia de compra en RataCueva.",
        }}
      />
    </PolicyPageLayout>
  );
}
