import React from "react";
import {
  BuildingOfficeIcon,
  EnvelopeIcon,
  MapPinIcon,
  InformationCircleIcon,
  ArrowPathIcon,
  DocumentTextIcon,
  BellIcon,
  EyeIcon,
  CheckCircleIcon,
  ClockIcon,
  LockClosedIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  TruckIcon,
  CloudIcon,
  ChartBarIcon,
  CogIcon,
  AdjustmentsHorizontalIcon,
  TvIcon,
  WrenchScrewdriverIcon,
  TrashIcon,
  HandRaisedIcon,
  UserIcon,
  ShoppingCartIcon,
  IdentificationIcon,
  PencilSquareIcon,
  ShieldExclamationIcon,
  KeyIcon,
  ExclamationCircleIcon,
  ComputerDesktopIcon,
  ExclamationTriangleIcon,
  HeartIcon,
  PhoneIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { InfoCard } from "@/components/features/privacy-policy/templates/InfoCard";

interface QuickAccessItem {
  title: string;
  description: string;
  href: string;
  category: "importante" | "informativo" | "contacto" | "derechos";
}

interface HighlightBoxProps {
  icon: React.ReactNode;
  title: string;
  type: "warning" | "info" | "success" | "urgent" | "legal";
  content: string | string[];
}

interface FAQ {
  question: string;
  answer: string;
}

// Define una interfaz para los datos de cada sección de política
export interface PolicySectionData {
  id: string; // La ID de la sección (ej. "quien-es-responsable")
  path: string; // La ruta URL (ej. "/privacy-policy/quien-es-responsable")
  title: string; // Título para breadcrumbs, sidebar y página
  subtitle: string; // Subtítulo detallado para la página
  summary: string; // Resumen corto para tarjetas y navegación
  icon: React.ReactNode; // Icono principal de la sección
  currentPageNumber: number;
  highlightBox: HighlightBoxProps;
  quickAccessCards?: QuickAccessItem[];
  faqs: FAQ[];
  // Contenido principal de la sección (los InfoCard).
  // Usamos una función que retorna un React.ReactNode para poder renderizar los InfoCard.
  content: React.ReactNode;
}

// Arreglo con los datos de todas las secciones
export const PRIVACY_POLICY_SECTIONS: PolicySectionData[] = [
  // ¿Quién es responsable de tus datos?
  {
    id: "quien-es-responsable",
    path: "/privacy-policy/quien-es-responsable",
    title: "¿Quién es responsable de tus datos?",
    subtitle:
      "RataCueva es la entidad legal responsable del tratamiento de sus datos personales. Esto significa que RataCueva es quien decide sobre el uso y la protección de la información que usted nos confía. Nuestro compromiso es cumplir cabalmente con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su reglamento, así como con cualquier otra normativa aplicable en la materia.",
    summary:
      "RataCueva es la entidad legal responsable del tratamiento de tus datos personales, cumpliendo con las leyes de privacidad en México y garantizando su protección.",
    icon: <BuildingOfficeIcon className="h-6 w-6" />,
    currentPageNumber: 0, // Ajustado a 0 si es la primera página en tu navegación.
    highlightBox: {
      icon: <InformationCircleIcon className="h-6 w-6" />,
      title: "Información de contacto para privacidad",
      type: "info",
      content: [
        "Domicilio: Av. Universidad No. 350 Carretera Federal Cuitláhuac - La Tinaja, Localidad Dos Caminos, Cuitláhuac, Ver. CP. 94910.",
        "Correo electrónico: privacidad@ratacueva.com - Canal principal y directo para ejercer derechos y consultas sobre privacidad.",
      ],
    },
    faqs: [
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
        question:
          "¿Cuál es el tiempo de respuesta para consultas de privacidad?",
        answer:
          "Nos comprometemos a responder a sus comunicaciones de manera oportuna y efectiva. Hemos habilitado privacidad@ratacueva.com como el canal principal para ejercer derechos y realizar consultas sobre privacidad.",
      },
    ],
    content: (
      <>
        <InfoCard
          id="responsable-tratamiento"
          icon={<BuildingOfficeIcon className="h-6 w-6" />}
          title="RataCueva como responsable del tratamiento"
          description="RataCueva es la entidad legal responsable del tratamiento de sus datos personales. Esto significa que RataCueva es quien decide sobre el uso y la protección de la información que usted nos confía."
          basicDescription="RataCueva es quien decide cómo se usan y protegen tus datos personales, siguiendo estrictamente las leyes mexicanas de privacidad."
          accentColor="blue"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 3 LFPDPPP",
            tooltip:
              "Es obligatorio por ley identificar claramente al responsable del tratamiento de datos personales.",
          }}
          sections={[
            {
              subtitle: "¿Qué significa ser responsable?",
              basicContent:
                "Somos la empresa que decide cómo se recopilan, usan, almacenan y protegen tus datos personales.",
              detailedContent:
                "Como responsable, RataCueva es quien toma las decisiones sobre cómo se recopilan, utilizan, almacenan y protegen sus datos personales. Esta designación conlleva obligaciones legales específicas que cumplimos cabalmente conforme a la LFPDPPP y su reglamento, así como cualquier otra normativa aplicable en la materia.",
              collapsible: true,
            },
            {
              subtitle: "Nuestro compromiso legal",
              basicContent:
                "Cumplimos todas las leyes mexicanas de protección de datos y mantenemos este aviso actualizado, garantizando tus derechos.",
              detailedContent: [
                "Cumplir cabalmente con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
                "Cumplir con el reglamento de la LFPDPPP y disposiciones aplicables.",
                "Observar cualquier otra normativa aplicable en materia de protección de datos.",
                "Mantener actualizado este Aviso de Privacidad conforme a modificaciones legales y operacionales.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Responsabilidades principales",
              basicContent:
                "Decidimos sobre el propósito y medios de tus datos, implementamos seguridad y garantizamos tus derechos ARCO.",
              detailedContent: [
                "Decidir sobre las finalidades del tratamiento de datos.",
                "Determinar los medios para el tratamiento de datos personales.",
                "Implementar medidas de seguridad adecuadas para proteger la información.",
                "Garantizar el ejercicio de sus derechos ARCO (Acceso, Rectificación, Cancelación y Oposición).",
                "Mantener la confidencialidad, integridad y disponibilidad de su información personal.",
              ],
              collapsible: true,
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Esta responsabilidad nos compromete legalmente a proteger tu privacidad y manejar tus datos con el más alto estándar de cuidado.",
          }}
        />
        <InfoCard
          id="domicilio-oficial"
          icon={<MapPinIcon className="h-6 w-6" />}
          title="Domicilio oficial del responsable"
          description="Este domicilio es nuestra sede principal y el lugar donde se centralizan las decisiones relacionadas con el tratamiento de sus datos personales. Es también el lugar donde puedes presentar solicitudes presenciales."
          basicDescription="Nuestra oficina principal está en Cuitláhuac, Veracruz. Es donde se centraliza la gestión de tus datos y puedes presentar solicitudes."
          accentColor="green"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 16 LFPDPPP",
            tooltip:
              "Es obligatorio informar el domicilio del responsable del tratamiento de datos personales.",
          }}
          sections={[
            {
              subtitle: "Dirección completa",
              basicContent:
                "Av. Universidad No. 350, Carretera Federal Cuitláhuac - La Tinaja, Localidad Dos Caminos, Cuitláhuac, Ver. CP. 94910, México.",
              detailedContent: [
                "Avenida: Universidad No. 350",
                "Vialidad: Carretera Federal Cuitláhuac - La Tinaja",
                "Localidad: Dos Caminos",
                "Municipio: Cuitláhuac",
                "Estado: Veracruz",
                "Código Postal: 94910",
                "País: México",
              ],
              collapsible: true,
            },
            {
              subtitle: "Importancia del domicilio",
              basicContent:
                "Es nuestra sede principal para operaciones, decisiones de datos y presentación de solicitudes presenciales de privacidad.",
              detailedContent:
                "Este domicilio es nuestra sede principal y el lugar donde se centralizan las decisiones relacionadas con el tratamiento de sus datos. Es aquí donde puede presentar solicitudes presenciales relacionadas con sus derechos de privacidad, como solicitudes ARCO o revocación de consentimiento, siguiendo los procedimientos establecidos.",
              collapsible: true,
            },
            {
              subtitle: "Usos del domicilio oficial",
              basicContent:
                "Sede principal, centro de decisiones de datos, lugar para solicitudes ARCO y contacto con autoridades.",
              detailedContent: [
                "Sede principal de operaciones de RataCueva.",
                "Centro de decisiones sobre tratamiento de datos personales.",
                "Lugar para presentación de solicitudes ARCO presenciales.",
                "Punto de contacto para autoridades competentes en materia de privacidad.",
                "Archivo de documentación legal y relacionada con privacidad.",
              ],
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Para solicitudes presenciales, recomendamos contactar previamente a privacidad@ratacueva.com para coordinar su visita y asegurar una atención eficiente.",
          }}
        />
        <InfoCard
          id="contacto-privacidad"
          defaultExpanded={false}
          icon={<EnvelopeIcon className="h-6 w-6" />}
          title="Correo electrónico de contacto para privacidad"
          description="Hemos habilitado esta dirección de correo electrónico como el canal principal y directo para que usted pueda ejercer sus derechos, realizar consultas o presentar cualquier inquietud relacionada con la privacidad de sus datos personales."
          basicDescription="privacidad@ratacueva.com es nuestro canal directo y principal para tus derechos ARCO, consultas y cualquier inquietud de privacidad."
          accentColor="purple"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 16 LFPDPPP",
            tooltip:
              "Es obligatorio proporcionar un medio de contacto para que el titular pueda ejercer sus derechos ARCO.",
          }}
          sections={[
            {
              subtitle: "Canal principal de contacto",
              basicContent:
                "privacidad@ratacueva.com está disponible 24/7 para recibir tus solicitudes y consultas de privacidad.",
              detailedContent: [
                "Correo electrónico: privacidad@ratacueva.com.",
                "Disponible 24/7 para recepción de solicitudes.",
                "Canal directo y preferente para ejercicio de derechos ARCO.",
                "Medio preferido para consultas y aclaraciones sobre este Aviso de Privacidad.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Tipos de comunicaciones que atendemos",
              basicContent:
                "Atendemos derechos ARCO, consultas sobre el aviso, inquietudes de datos, reportes de violaciones y preguntas sobre transferencias.",
              detailedContent: [
                "Ejercicio de derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO).",
                "Consultas sobre el contenido y aplicación de este Aviso de Privacidad.",
                "Inquietudes relacionadas con el tratamiento específico de sus datos.",
                "Reportes de posibles violaciones de privacidad o incidentes de seguridad.",
                "Solicitudes de información sobre transferencias de datos a terceros.",
                "Preguntas sobre medidas de seguridad implementadas y nuestras políticas internas de privacidad.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Compromiso de respuesta",
              basicContent:
                "Nos comprometemos a responder a tus comunicaciones de manera oportuna y efectiva, garantizando atención especializada.",
              detailedContent:
                "Nos comprometemos a responder a sus comunicaciones de manera oportuna y efectiva. Este canal ha sido especialmente habilitado para garantizar una atención especializada en temas de protección de datos personales, asegurando que sus inquietudes sean abordadas por el equipo adecuado y en los plazos legales.",
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Para acelerar la atención de tu solicitud, incluye siempre información clara sobre el tipo de consulta y tus datos de contacto.",
          }}
        />
      </>
    ),
  },
  // ¿Qué datos personales recopilamos?
  {
    id: "que-datos-recopilamos",
    path: "/privacy-policy/que-datos-recopilamos",
    title: "¿Qué datos personales recopilamos?",
    subtitle:
      "Para poder ofrecerte una experiencia de compra completa y eficiente en RataCueva, y cumplir con las diversas finalidades que se detallan más adelante en este aviso de privacidad, es necesario que recopilemos ciertas categorías de datos personales. Estos datos son esenciales para la operación de nuestro e-commerce y para brindarte un servicio de calidad.",
    summary:
      "Detalle de los tipos de datos personales que RataCueva recopila: identificación, contacto, financieros, transacción, uso y preferencias.",
    icon: <IdentificationIcon className="h-6 w-6" />,
    currentPageNumber: 1,
    highlightBox: {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: "Protección de datos financieros",
      type: "info",
      content: [
        "RataCueva no almacena el número completo de su tarjeta de crédito ni el código de verificación (CVV/CVC).",
        "Esta información altamente sensible se solicita en cada transacción de manera temporal y es procesada directamente por nuestros proveedores de servicios de pago seguros y certificados.",
      ],
    },
    quickAccessCards: [
      {
        title: "Identificación y contacto",
        description: "Nombre, email, teléfono, dirección",
        href: "#datos-identificacion-contacto",
        category: "importante",
      },
      {
        title: "Financieros y de pago",
        description: "Tipo de tarjeta, últimos 4 dígitos",
        href: "#datos-financieros-pago",
        category: "importante",
      },
      {
        title: "De transacción",
        description: "Productos, historial de pedidos",
        href: "#datos-transaccion",
        category: "informativo",
      },
      {
        title: "Uso y preferencias",
        description: "Preferencias gaming, navegación, IP",
        href: "#datos-uso-preferencias",
        category: "informativo",
      },
    ],
    faqs: [
      {
        question: "¿Por qué necesitan recopilar datos personales?",
        answer:
          "Para poder ofrecerle una experiencia de compra completa y eficiente en RataCueva, y cumplir con las diversas finalidades que se detallan en nuestro aviso de privacidad. Estos datos son esenciales para la operación de nuestro e-commerce y para brindarle un servicio de calidad.",
      },
      {
        question:
          "¿RataCueva almacena mi número completo de tarjeta de crédito?",
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
    ],
    content: (
      <>
        <InfoCard
          id="datos-identificacion-contacto"
          icon={<IdentificationIcon className="h-6 w-6" />}
          title="Datos de identificación y contacto"
          description="Esta categoría incluye información fundamental para identificarle y comunicarnos con usted, asegurando la entrega de sus compras y el soporte necesario."
          basicDescription="Recopilamos tu nombre, email, teléfono y dirección de envío para procesar pedidos y comunicarnos contigo."
          accentColor="blue"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 3 LFPDPPP",
            tooltip:
              "Datos esenciales para la operación del servicio y la identificación del usuario.",
          }}
          sections={[
            {
              subtitle: "Información personal básica",
              basicContent:
                "Nombre completo, email, número de teléfono y dirección de envío detallada.",
              detailedContent: [
                "Nombre completo (nombre(s), apellido paterno y apellido materno)",
                "Dirección de correo electrónico",
                "Número de teléfono",
                "Dirección de envío completa (código postal, calle, número exterior, número interior opcional, colonia, ciudad, estado, país)",
              ],
              collapsible: true,
            },
            {
              subtitle: "Propósito de esta información",
              basicContent:
                "Usamos estos datos para personalizar tu experiencia, enviar pedidos, notificaciones y ofrecer soporte.",
              detailedContent:
                "Recopilamos su nombre completo para personalizar su experiencia y asegurar que los envíos lleguen a la persona correcta. Su dirección de correo electrónico es crucial para enviarle confirmaciones de pedidos, recibos electrónicos, notificaciones de envío y para comunicarnos con usted sobre cualquier aspecto relevante de su cuenta o sus compras.",
              collapsible: true,
            },
            {
              subtitle: "Importancia para el servicio",
              basicContent:
                "Sin estos datos esenciales, no podríamos procesar ni enviar tus pedidos o contactarte en caso de problemas.",
              detailedContent:
                "El número de teléfono nos permite contactarle rápidamente en caso de problemas con su pedido o entrega. La dirección de envío completa es indispensable para que las empresas de paquetería puedan entregar sus productos de manera precisa y oportuna. Sin esta información, no podríamos procesar ni enviar sus pedidos.",
              variant: "highlight",
              collapsible: true,
            },
          ]}
        />

        <InfoCard
          id="datos-financieros-pago"
          icon={<CreditCardIcon className="h-6 w-6" />}
          title="Datos financieros y de pago"
          description="Para facilitar sus transacciones, recopilamos información relacionada con los métodos de pago que usted elija utilizar en nuestra plataforma, pero siempre con su seguridad como prioridad."
          basicDescription="Recopilamos tipo de tarjeta, últimos 4 dígitos y fecha de expiración para tus pagos, pero nunca el número completo ni el CVV."
          accentColor="green"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 7, 8 LFPDPPP",
            tooltip:
              "El tratamiento de datos financieros requiere consentimiento y medidas de seguridad reforzadas.",
          }}
          sections={[
            {
              subtitle: "Información que recopilamos",
              basicContent:
                "Tipo de tarjeta, últimos 4 dígitos, proveedor y fecha de expiración.",
              detailedContent: [
                "Tipo de tarjeta (crédito/débito)",
                "Los últimos cuatro dígitos de su tarjeta (para su identificación y referencia)",
                "El proveedor de la tarjeta (ej. Visa, Mastercard)",
                "La fecha de expiración",
              ],
              collapsible: true,
            },
            {
              subtitle: "Información que NO almacenamos",
              basicContent:
                "No almacenamos tu número de tarjeta completo ni el código CVV/CVC.",
              detailedContent: [
                "El número completo de su tarjeta de crédito",
                "El código de verificación (CVV/CVC)",
              ],
              variant: "highlight",
              collapsible: true,
            },
            {
              subtitle: "Procesamiento seguro",
              basicContent:
                "Los datos sensibles son procesados directamente por proveedores certificados PCI DSS, no por RataCueva.",
              detailedContent:
                "La información altamente sensible se solicita en cada transacción de manera temporal y es procesada directamente por nuestros proveedores de servicios de pago seguros y certificados. Estos proveedores cumplen con los más altos estándares de seguridad de la industria (PCI DSS) para asegurar la protección de sus datos financieros durante la transacción, minimizando así el riesgo de que esta información sea comprometida en nuestros sistemas.",
              collapsible: true,
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
          description="Esta información detalla su actividad de compra en RataCueva, lo cual nos permite gestionar su cuenta y brindar un soporte eficiente."
          basicDescription="Registramos productos comprados, historial de pedidos y fechas para gestionar tu cuenta y facilitar el soporte."
          accentColor="purple"
          sections={[
            {
              subtitle: "Información de compras",
              basicContent:
                "Productos que adquieres, historial de pedidos, fechas de compra y detalles de cada transacción.",
              detailedContent: [
                "Los productos que adquiere",
                "Su historial de pedidos completo",
                "Las fechas exactas de sus compras",
                "Todos los detalles específicos de cada transacción (montos, métodos de pago utilizados)",
              ],
              collapsible: true,
            },
            {
              subtitle: "Propósito de estos datos",
              basicContent:
                "Nos ayudan a gestionar tu cuenta, procesar devoluciones y para fines contables y fiscales.",
              detailedContent:
                "Estos datos nos permiten gestionar su cuenta, procesar devoluciones o cambios, y mantener un registro preciso de sus interacciones comerciales con nosotros, lo cual es fundamental para el soporte al cliente y para fines contables y fiscales.",
              collapsible: true,
            },
            {
              subtitle: "Beneficios para usted",
              basicContent:
                "Facilita el seguimiento de pedidos, devoluciones y te da un mejor soporte personalizado.",
              detailedContent: [
                "Seguimiento detallado de sus pedidos en tiempo real",
                "Historial completo de compras para consultas futuras",
                "Facilita el proceso de devoluciones y cambios",
                "Mejor soporte al cliente personalizado al tener su historial a mano",
              ],
              collapsible: true,
            },
          ]}
        />

        <InfoCard
          id="datos-uso-preferencias"
          icon={<UserIcon className="h-6 w-6" />}
          title="Datos de uso y preferencias"
          description="Para mejorar continuamente su experiencia en RataCueva, recopilamos información sobre cómo interactúa con nuestro sitio, incluyendo sus preferencias y aspectos técnicos de su conexión."
          basicDescription="Analizamos tus preferencias de juegos, navegación, IP y tipo de dispositivo para personalizar recomendaciones y optimizar el sitio."
          accentColor="orange"
          legalBadge={{
            type: "optional",
            lawReference: "Consentimiento o Interés legítimo",
            tooltip:
              "Estos datos se recopilan para mejorar la experiencia, con opción de rechazo.",
          }}
          sections={[
            {
              subtitle: "Preferencias y comportamiento",
              basicContent:
                "Tus gustos de juegos, historial de navegación en RataCueva, páginas vistas y términos de búsqueda.",
              detailedContent: [
                "Sus preferencias de productos gaming (géneros de videojuegos, marcas favoritas de periféricos)",
                "Su historial de navegación dentro de RataCueva",
                "Las páginas que consulta y el tiempo de permanencia",
                "Los términos de búsqueda que utiliza en el sitio",
              ],
              collapsible: true,
            },
            {
              subtitle: "Información técnica",
              basicContent:
                "Direcciones IP, tipo de navegador, sistema operativo, hora y duración de visitas.",
              detailedContent: [
                "Las direcciones IP desde las que accede",
                "El tipo de navegador y sistema operativo que utiliza",
                "La hora y duración de sus visitas",
                "Información del dispositivo (modelo, fabricante, ID)",
              ],
              collapsible: true,
            },
            {
              subtitle: "Cómo mejora su experiencia",
              basicContent:
                "Nos permite personalizar recomendaciones, optimizar la interfaz y asegurar que el sitio funcione correctamente en tu dispositivo.",
              detailedContent:
                "Esta información nos ayuda a entender sus intereses, personalizar las recomendaciones de productos, optimizar la interfaz de usuario y asegurar que el Sitio funcione correctamente en diferentes dispositivos y configuraciones. También nos permite detectar y corregir errores.",
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Todos estos datos se utilizan exclusivamente para mejorar su experiencia de compra en RataCueva y ofrecerle contenido más relevante.",
          }}
        />
      </>
    ),
  },
  // ¿Para qué usamos tus datos?
  {
    id: "para-que-usamos-datos",
    path: "/privacy-policy/para-que-usamos-datos",
    title: "¿Para qué usamos tus datos?",
    subtitle:
      "Sus datos personales son recopilados y tratados por RataCueva con un conjunto de finalidades claramente definidas, las cuales se dividen en primarias (necesarias para la prestación del servicio) y secundarias (que nos permiten mejorar su experiencia, pero no son indispensables para la funcionalidad básica).",
    summary:
      "Explicamos cómo RataCueva utiliza tus datos personales para operar nuestros servicios esenciales y mejorar tu experiencia, respetando tu control sobre la información.",
    icon: <AdjustmentsHorizontalIcon className="h-6 w-6" />, // Un icono relevante para "propósitos" o "uso"
    currentPageNumber: 2,
    highlightBox: {
      icon: <InformationCircleIcon className="h-6 w-6" />,
      title: "¿Para qué usamos tus datos?",
      type: "info",
      content: [
        "Finalidades primarias: Indispensables para que RataCueva pueda operar como un e-commerce y cumplir con los servicios que esperas de nosotros.",
        "Finalidades secundarias: Buscan enriquecer tu interacción y ofrecerte un servicio más personalizado. Puedes oponerte a ellas en cualquier momento.",
      ],
    },
    quickAccessCards: [
      {
        title: "Finalidades primarias",
        description: "Esenciales para el servicio",
        href: "#finalidades-primarias",
        category: "importante",
      },
      {
        title: "Finalidades secundarias",
        description: "Mejoran su experiencia",
        href: "#finalidades-secundarias",
        category: "informativo",
      },
      {
        title: "Derecho de oposición",
        description: "Puede rechazar las secundarias",
        href: "#derecho-oposicion",
        category: "derechos",
      },
    ],
    faqs: [
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
    ],
    content: (
      <>
        {/* SECTION: FINALIDADES PRIMARIAS */}
        <InfoCard
          id="finalidades-primarias"
          icon={<ShoppingCartIcon className="h-6 w-6" />}
          title="Finalidades primarias (necesarias para el servicio)"
          description="Tus datos son utilizados para verificar la disponibilidad de los productos, procesar tu pago de forma segura, generar tu factura o comprobante de compra, preparar tu pedido para el envío y, en general, gestionar todo el ciclo de vida de tu compra. Esto incluye la validación de la información de pago y la prevención de fraudes."
          basicDescription="Usamos tus datos para procesar pedidos, gestionar envíos, comunicarnos sobre tu cuenta y pedidos, y garantizar la seguridad de tus transacciones."
          accentColor="red" // Color rojo para indicar "obligatorio para la función principal"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 18 LFPDPPP",
            tooltip:
              "El tratamiento es necesario para el cumplimiento de una obligación legal o para la ejecución de un contrato.",
          }}
          sections={[
            {
              subtitle: "Procesamiento y gestión de pedidos",
              basicContent:
                "Verificamos disponibilidad, procesamos pagos, generamos facturas y preparamos envíos.",
              detailedContent: [
                "Verificación de disponibilidad de productos",
                "Procesamiento seguro de tu pago",
                "Generación de factura o comprobante de compra",
                "Preparación del pedido para el envío",
                "Validación de la información de pago",
                "Prevención de fraudes relacionados con tu compra",
              ],
              collapsible: true,
            },
            {
              subtitle: "Gestión de envíos y entregas",
              basicContent:
                "Compartimos tu nombre, dirección y teléfono con paqueterías para la entrega de tus productos.",
              detailedContent: [
                "Compartir nombre, dirección y teléfono con empresas de paquetería (DHL, FedEx, Estafeta, 99minutos)",
                "Coordinación de rutas de entrega para tu pedido",
                "Contacto en caso de eventualidades durante el envío",
                "Asegurar la recepción exitosa de tu paquete",
              ],
              collapsible: true,
            },
            {
              subtitle: "Comunicación relacionada con tu cuenta y pedidos",
              basicContent:
                "Te enviamos confirmaciones, notificaciones de envío y respondemos a tus consultas de soporte.",
              detailedContent: [
                "Envío de confirmaciones de pedido por correo electrónico",
                "Notificaciones de envío con números de seguimiento",
                "Actualizaciones sobre posibles retrasos o incidencias en tus pedidos",
                "Respuestas a cualquier consulta o solicitud de soporte al cliente",
              ],
              collapsible: true,
            },
            {
              subtitle: "Autenticación y seguridad de la cuenta",
              basicContent:
                "Tus datos son clave para tu inicio de sesión y para proteger tu cuenta de accesos no autorizados.",
              detailedContent: [
                "Verificación de tu identidad cada vez que inicias sesión en RataCueva",
                "Implementación de autenticación de dos factores (2FA) para protección extra",
                "Solicitud de confirmaciones para cambios importantes en tu perfil (contraseña, pago)",
                "Notificaciones proactivas sobre operaciones relevantes en tu cuenta",
              ],
              collapsible: true,
            },
            {
              subtitle: "Gestión de pagos",
              basicContent:
                "Tus datos de pago son compartidos con proveedores externos para procesar tus transacciones de forma segura.",
              detailedContent: [
                "Compartir datos de pago con proveedores de servicios de pago externos (Stripe, PayPal, Oxxo Pay)",
                "Procesamiento de autorización de tu tarjeta o método de pago",
                "Asegurar la transferencia de fondos y confirmar la transacción",
                "RataCueva no procesa directamente datos sensibles de tu tarjeta, solo recibe confirmación del pago",
              ],
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "warning",
            text: "Estas finalidades son indispensables para que RataCueva pueda operar como un e-commerce y cumplir con los servicios que esperas.",
          }}
        />

        {/* SECTION: FINALIDADES SECUNDARIAS */}
        <InfoCard
          id="finalidades-secundarias"
          icon={<UserIcon className="h-6 w-6" />}
          title="Finalidades secundarias (mejoran tu experiencia, pero son opcionales)"
          description="Estas finalidades no son indispensables para la funcionalidad básica de RataCueva, pero nos permiten enriquecer tu interacción y ofrecerte un servicio más personalizado y relevante. Puedes oponerte a ellas en cualquier momento sin afectar los servicios principales."
          basicDescription="Utilizamos tus datos para personalizar recomendaciones, enviarte marketing relevante, realizar análisis internos y prevenir fraudes, todo con el fin de mejorar tu experiencia."
          accentColor="yellow" // Color amarillo para indicar "opcional"
          legalBadge={{
            type: "optional",
            lawReference: "Art. 8 LFPDPPP",
            tooltip:
              "Para estas finalidades se requiere tu consentimiento explícito o la posibilidad de oponerte.",
          }}
          sections={[
            {
              subtitle: "Mejora de la experiencia del usuario",
              basicContent:
                "Personalizamos el contenido (juegos, accesorios, ofertas) basándonos en tus preferencias.",
              detailedContent: [
                "Análisis de tus preferencias de productos gaming y historial de navegación",
                "Recomendación personalizada de videojuegos, accesorios o componentes de PC",
                "Mostrar ofertas relevantes y contenido adaptado a tus intereses",
                "Personalización de la interfaz y experiencia general de usuario",
              ],
              collapsible: true,
            },
            {
              subtitle: "Marketing y publicidad",
              basicContent:
                "Te enviamos ofertas, promociones, lanzamientos y noticias del mundo gaming (por email, push, SMS).",
              detailedContent: [
                "Envío de información sobre nuestras últimas ofertas y promociones exclusivas",
                "Notificaciones sobre lanzamientos de nuevos productos y eventos especiales",
                "Noticias relevantes del mundo gaming a través de correo electrónico, notificaciones push o mensajes de texto",
              ],
              collapsible: true,
            },
            {
              subtitle: "Análisis y estadísticas",
              basicContent:
                "Recopilamos datos anónimos para entender tendencias de compra y mejorar nuestros servicios y productos.",
              detailedContent: [
                "Análisis de datos agregados y anonimizados sobre el uso del sitio",
                "Identificación de tendencias de compra y comportamiento general de usuarios",
                "Evaluación de la efectividad de nuestras campañas de marketing",
                "Toma de decisiones informadas para mejorar continuamente servicios y productos",
              ],
              collapsible: true,
            },
            {
              subtitle: "Prevención de fraudes (secundaria)",
              basicContent:
                "Analizamos datos para detectar actividades fraudulentas y mantener un entorno seguro y justo.",
              detailedContent: [
                "Detección y prevención de posibles actividades fraudulentas en la Plataforma",
                "Prevención de usos indebidos y violaciones de nuestros términos y condiciones",
                "Contribución a un entorno seguro y justo para todos los usuarios",
              ],
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Puedes oponerte a estas finalidades en cualquier momento sin afectar los servicios principales de RataCueva.",
          }}
        />

        {/* SECTION: DERECHO DE OPOSICIÓN */}
        <InfoCard
          id="derecho-oposicion"
          icon={<HandRaisedIcon className="h-6 w-6" />}
          title="Tu derecho de oposición a finalidades secundarias"
          description="Si no deseas que tus datos personales sean tratados para las finalidades secundarias, puedes manifestar tu negativa en cualquier momento enviando un correo electrónico a privacidad@ratacueva.com. Tu decisión de oponerte a estas finalidades no afectará de ninguna manera la prestación de los servicios principales que solicites o contrates con nosotros, como la compra y envío de productos."
          basicDescription="Puedes rechazar el uso de tus datos para finalidades secundarias (marketing, personalización, análisis) enviando un email. Esto no afecta los servicios principales."
          accentColor="orange" // Color naranja para enfatizar la elección del usuario
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 10, 29 LFPDPPP",
            tooltip:
              "Tienes el derecho de oponerte al tratamiento de tus datos para finalidades no esenciales.",
          }}
          actionGuide={{
            title: "Cómo ejercer tu derecho de oposición",
            description:
              "Sigue estos sencillos pasos para indicarnos que no deseas el tratamiento de tus datos para finalidades secundarias.",
            steps: [
              "Envía un correo electrónico a privacidad@ratacueva.com.",
              "En el asunto, indica 'Oposición a finalidades secundarias'.",
              "En el cuerpo del correo, especifica claramente a qué finalidades te opones (ej. 'No deseo recibir comunicaciones de marketing').",
              "Asegúrate de incluir tu nombre completo y el correo electrónico asociado a tu cuenta de RataCueva para que podamos procesar tu solicitud.",
              "Recibirás una confirmación de nuestra parte una vez que tu solicitud haya sido procesada.",
            ],
            nextAction: {
              label: "Enviar email de oposición",
              href: "mailto:privacidad@ratacueva.com?subject=Oposición%20a%20finalidades%20secundarias%20de%20privacidad",
              external: true,
            },
          }}
          footerNote={{
            type: "warning",
            text: "Las finalidades primarias no pueden ser rechazadas ya que son esenciales para el funcionamiento del servicio.",
          }}
        />
      </>
    ),
  },
  // ¿Con quién compartimos tus datos?
  {
    id: "con-quien-compartimos-datos",
    path: "/privacy-policy/con-quien-compartimos-datos",
    title: "¿Con quién compartimos tus datos?",
    subtitle:
      "Para brindarte una experiencia de compra completa, necesitamos trabajar con terceros confiables y certificados. Te explicamos exactamente con quién, qué datos y por qué, siempre bajo estrictas medidas de protección y contratos de confidencialidad.",
    summary:
      "Detalles sobre los terceros con quienes RataCueva comparte tus datos (pagos, envíos, servicios, análisis) y las garantías de protección implementadas en cada transferencia.",
    icon: <UserGroupIcon className="h-6 w-6" />,
    currentPageNumber: 3,
    highlightBox: {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: "Compromiso de protección total",
      type: "info",
      content: [
        "RataCueva jamás vende, alquila o intercambia sus datos personales con fines comerciales.",
        "Solo compartimos información cuando es estrictamente necesario para proporcionarle el servicio que solicita, siempre bajo contratos de confidencialidad y las más altas medidas de seguridad.",
      ],
    },
    quickAccessCards: [
      {
        title: "Proveedores de pago",
        description: "Stripe, PayPal, Oxxo Pay",
        href: "#proveedores-pago",
        category: "importante",
      },
      {
        title: "Empresas de logística",
        description: "DHL, FedEx, Estafeta",
        href: "#empresas-logistica",
        category: "importante",
      },
      {
        title: "Servicios en la nube",
        description: "AWS, Google Cloud",
        href: "#servicios-nube",
        category: "informativo",
      },
      {
        title: "Análisis y marketing",
        description: "Google Analytics, Email Mkt",
        href: "#servicios-marketing",
        category: "informativo",
      },
      {
        title: "Soporte y Atención",
        description: "Zendesk, Intercom, Twilio",
        href: "#proveedores-soporte",
        category: "informativo",
      },
    ],
    faqs: [
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
        question:
          "¿Mis datos financieros están seguros cuando los transfieren?",
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
    ],
    content: (
      <>
        <InfoCard
          id="proveedores-pago"
          defaultExpanded={false}
          icon={<CreditCardIcon className="h-6 w-6" />}
          title="Proveedores de servicios de pago"
          description="Para procesar sus compras de manera segura, trabajamos con plataformas de pago certificadas y reconocidas internacionalmente, garantizando que sus transacciones financieras estén protegidas."
          basicDescription="Tus pagos se procesan de forma segura con Stripe, PayPal, Oxxo Pay y Mercado Pago, todos certificados PCI DSS Nivel 1. RataCueva no almacena tus datos completos de tarjeta."
          accentColor="blue"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 37 LFPDPPP",
            tooltip:
              "Es obligatorio informar sobre las transferencias de datos personales a terceros.",
          }}
          sections={[
            {
              subtitle: "Con quién compartimos sus datos financieros",
              basicContent:
                "Solo con procesadores de pago certificados: Stripe, PayPal, Oxxo Pay y Mercado Pago.",
              detailedContent: [
                "Stripe: Procesador de tarjetas internacional certificado PCI DSS.",
                "PayPal: Plataforma de pagos digitales con encriptación de extremo a extremo.",
                "Oxxo Pay: Para pagos en efectivo en tiendas de conveniencia.",
                "Mercado Pago: Procesador latinoamericano con estándares bancarios y alta seguridad.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Qué información específica compartimos",
              basicContent:
                "Monto, información del pedido y tu nombre. Los datos de tarjeta van directamente al procesador, RataCueva no los ve.",
              detailedContent: [
                "Monto de la transacción.",
                "Información esencial del pedido (productos, cantidades).",
                "Tu nombre como aparece en el método de pago.",
                "Importante: Los datos completos de tu tarjeta (número, CVV) van directamente al procesador; RataCueva nunca los almacena ni tiene acceso a ellos.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Medidas de seguridad implementadas",
              basicContent:
                "Certificación PCI DSS Nivel 1, encriptación SSL/TLS y monitoreo 24/7 contra fraudes.",
              detailedContent: [
                "Certificación PCI DSS Nivel 1: El más alto estándar de seguridad para el manejo de datos de tarjetas.",
                "Encriptación SSL/TLS: En todas las comunicaciones para proteger los datos en tránsito.",
                "Tokenización de datos: Los datos sensibles de tu tarjeta se convierten en un token, minimizando el riesgo.",
                "Monitoreo 24/7: Contra fraudes y actividades sospechosas en las transacciones.",
                "Cumplimiento con regulaciones: Estricta adhesión a regulaciones bancarias y financieras internacionales.",
              ],
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "RataCueva prioriza tu seguridad financiera; por eso, nunca almacena ni tiene acceso a tu número completo de tarjeta o código CVV/CVC.",
          }}
        />

        <InfoCard
          id="empresas-logistica"
          defaultExpanded={false}
          icon={<TruckIcon className="h-6 w-6" />}
          title="Empresas de logística y paquetería"
          description="Para entregar tus productos de manera segura y oportuna, colaboramos con empresas de transporte especializadas y certificadas, asegurando que tu compra llegue a su destino final."
          basicDescription="Compartimos tu nombre, dirección y teléfono con paqueterías líderes (DHL, FedEx, Estafeta, etc.) solo para la entrega de tus pedidos, bajo estrictos contratos de confidencialidad."
          accentColor="green"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 37 LFPDPPP",
            tooltip:
              "La transferencia de datos es necesaria para la prestación del servicio de entrega contratado.",
          }}
          sections={[
            {
              subtitle: "Con quién compartimos sus datos de envío",
              basicContent:
                "Trabajamos con DHL, FedEx, UPS, Estafeta, 99minutos y Paquetexpress para asegurar tus entregas.",
              detailedContent: [
                "DHL: Empresa internacional con amplia cobertura global.",
                "FedEx: Especializada en logística express con seguimiento en tiempo real.",
                "UPS: Servicios de transporte terrestre y aéreo con altos estándares.",
                "Estafeta: Reconocida empresa mexicana con amplia cobertura nacional.",
                "99minutos: Soluciones de entrega de última milla, rápidas en zonas urbanas.",
                "Paquetexpress: Servicios de logística nacional e internacional.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Qué información exacta compartimos",
              basicContent:
                "Tu nombre completo, dirección de envío, número de teléfono e información general del producto (no contenido específico).",
              detailedContent: [
                "Tu nombre completo (para identificación del destinatario en la entrega).",
                "Dirección de envío completa (calle, número, colonia, ciudad, estado, código postal).",
                "Número de teléfono (para coordinación de entrega y contacto en caso de problemas).",
                "Información del producto (descripción general, peso, dimensiones; no contenido específico ni valor comercial detallado).",
                "Instrucciones especiales de entrega (solo si tú las proporcionas al hacer el pedido).",
              ],
              collapsible: true,
            },
            {
              subtitle: "Protecciones contractuales implementadas",
              basicContent:
                "Nuestros contratos con transportistas incluyen confidencialidad, limitación de uso y obligación de eliminar tus datos tras la entrega.",
              detailedContent: [
                "Contratos de confidencialidad: Estrictos acuerdos de protección de datos con todos los proveedores.",
                "Limitación del uso: Los datos se usan exclusivamente para fines de entrega.",
                "Obligación de eliminación: Deben borrar los datos una vez completada la entrega y el plazo legal de retención.",
                "Prohibición de uso comercial: No pueden usar tus datos para otros fines comerciales.",
                "Auditorías regulares: Para asegurar el cumplimiento de nuestras políticas de privacidad y seguridad.",
                "Responsabilidad conjunta: En caso de incidentes de seguridad que afecten tus datos.",
              ],
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Solo compartimos la información mínima indispensable para que tu paquete llegue a salvo y te puedan contactar si es necesario.",
          }}
        />

        <InfoCard
          id="servicios-nube"
          defaultExpanded={false}
          icon={<CloudIcon className="h-6 w-6" />}
          title="Proveedores de servicios en la nube"
          description="Para mantener nuestro sitio web funcionando de manera segura, confiable y eficiente las 24 horas del día, utilizamos servicios de infraestructura tecnológica en la nube de líderes del sector."
          basicDescription="Usamos servicios en la nube (AWS, Google Cloud, Azure) para hosting, bases de datos y seguridad. Estos proveedores cumplen con los más altos estándares de protección de datos."
          accentColor="purple"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 19 LFPDPPP",
            tooltip:
              "La ley exige medidas de seguridad en el tratamiento de datos, incluyendo la infraestructura tecnológica.",
          }}
          sections={[
            {
              subtitle: "Con quién compartimos datos técnicos",
              basicContent:
                "Con Amazon Web Services (AWS), Google Cloud Platform, Microsoft Azure, Cloudflare, MongoDB Atlas y Vercel.",
              detailedContent: [
                "Amazon Web Services (AWS): Para hosting, bases de datos y almacenamiento de archivos.",
                "Google Cloud Platform: Servicios de análisis, machine learning y almacenamiento.",
                "Microsoft Azure: Para aplicaciones empresariales y respaldos seguros.",
                "Cloudflare: Protección DDoS, firewall de aplicaciones y optimización de velocidad.",
                "MongoDB Atlas: Para la gestión segura de bases de datos NoSQL.",
                "Vercel: Hospedaje optimizado para nuestras aplicaciones web.",
              ],
              collapsible: true,
            },
            {
              subtitle: "¿Qué tipo de información procesan?",
              basicContent:
                "Principalmente datos técnicos de navegación (IPs, tipo de navegador), logs de actividad y métricas de rendimiento, además de respaldos encriptados de datos.",
              detailedContent: [
                "Datos técnicos de navegación (direcciones IP, tipo de navegador, sistema operativo).",
                "Logs de actividad del sistema (para monitoreo de seguridad y auditorías).",
                "Métricas de rendimiento del sitio web y uso de recursos.",
                "Información agregada y anonimizada para análisis de tendencias.",
                "Respaldos encriptados de datos: Para recuperación ante desastres y continuidad del negocio.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Medidas de seguridad en la nube",
              basicContent:
                "Todos los proveedores implementan encriptación de datos, certificaciones ISO 27001/SOC 2 y monitoreo 24/7.",
              detailedContent: [
                "Encriptación: De datos tanto en reposo como en tránsito.",
                "Certificaciones de seguridad: Como ISO 27001, SOC 2 Tipo II, que validan sus robustos controles de seguridad.",
                "Controles de acceso estrictos: Con autenticación multifactor para el personal de los proveedores.",
                "Monitoreo 24/7: De actividades sospechosas en sus infraestructuras.",
                "Respaldos automáticos y planes de recuperación: Para garantizar la disponibilidad y resiliencia de los datos.",
                "Cumplimiento con regulaciones: Adherencia a normativas internacionales de privacidad.",
              ],
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Todos nuestros proveedores de nube cumplen con los más altos estándares de seguridad y privacidad internacional para proteger tu información.",
          }}
        />

        <InfoCard
          id="servicios-marketing"
          defaultExpanded={false}
          icon={<ChartBarIcon className="h-6 w-6" />}
          title="Servicios de análisis y marketing"
          description="Para mejorar continuamente nuestros servicios, entender las preferencias de los usuarios y personalizar tu experiencia de compra, trabajamos con herramientas especializadas de análisis y comunicación de marketing."
          basicDescription="Usamos Google Analytics, Hotjar, Mailchimp y Facebook Pixel para análisis de tráfico, personalización de contenido y envío de marketing, siempre respetando tu privacidad y opciones de control."
          accentColor="orange"
          legalBadge={{
            type: "optional",
            lawReference: "Art. 8, 29 LFPDPPP",
            tooltip:
              "El tratamiento para marketing y análisis requiere consentimiento o la posibilidad de oponerse.",
          }}
          sections={[
            {
              subtitle: "Con quién compartimos datos para análisis y marketing",
              basicContent:
                "Google Analytics, Hotjar, Mailchimp, SendGrid, Facebook Pixel y Google Ads son nuestros socios principales en estas áreas.",
              detailedContent: [
                "Google Analytics: Para análisis de tráfico web y comportamiento de usuarios (datos anonimizados).",
                "Hotjar: Mapas de calor y grabaciones de sesiones para mejorar la UX (datos anonimizados).",
                "Mailchimp: Gestión de newsletters y comunicaciones masivas por email.",
                "SendGrid: Envío transaccional de emails (confirmaciones de pedido, notificaciones).",
                "Facebook Pixel: Análisis de efectividad de publicidad en redes sociales (datos agregados).",
                "Google Ads: Optimización de campañas publicitarias para mostrarte anuncios relevantes.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Qué información específica compartimos",
              basicContent:
                "Datos demográficos agregados, patrones de navegación, interacciones con emails y métricas de compra (sin información personal identificable).",
              detailedContent: [
                "Datos demográficos agregados y anonimizados (sin identificarte individualmente).",
                "Patrones de navegación y preferencias de productos e intereses.",
                "Información de interacción con correos electrónicos (aperturas, clics).",
                "Métricas de conversión y abandonos de carrito.",
                "Datos de comportamiento de compra (sin vinculación directa a tu identidad).",
              ],
              collapsible: true,
            },
            {
              subtitle: "Su control sobre estos servicios",
              basicContent:
                "Puedes optar por no participar en estos servicios de análisis y marketing sin afectar tus compras, contactando a privacidad@ratacueva.com.",
              detailedContent:
                "Usted tiene el derecho de solicitar la exclusión de estos servicios de análisis y marketing en cualquier momento. Esto no afectará su capacidad de realizar compras o el uso de los servicios esenciales de la plataforma, pero podría limitar la personalización de su experiencia y las comunicaciones de ofertas relevantes. Para solicitar la exclusión, contáctenos a través de privacidad@ratacueva.com.",
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Siempre puedes oponerte a las transferencias de datos para fines de marketing o análisis contactando a nuestro equipo de privacidad.",
          }}
        />

        <InfoCard
          id="proveedores-soporte"
          defaultExpanded={false}
          icon={<CogIcon className="h-6 w-6" />}
          title="Servicios de soporte y atención al cliente"
          description="Para brindarte la mejor y más eficiente experiencia de soporte cuando necesites ayuda, podemos trabajar con proveedores especializados en atención al cliente que nos ayudan a gestionar tus consultas."
          basicDescription="Colaboramos con Zendesk, Intercom y Twilio para tu soporte. Solo compartimos la información mínima necesaria para resolver tus consultas."
          accentColor="yellow" // Cambiado a yellow para indicar "requiere atención del usuario para resolver problemas"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 18 LFPDPPP",
            tooltip:
              "Las transferencias son necesarias para la prestación de los servicios de soporte solicitados.",
          }}
          sections={[
            {
              subtitle: "Con quién compartimos datos para soporte",
              basicContent:
                "Zendesk para tickets, Intercom para chat en vivo y Twilio para comunicaciones directas.",
              detailedContent: [
                "Zendesk: Sistema de tickets y gestión de casos de soporte para un seguimiento organizado.",
                "Intercom: Plataforma de chat en vivo y comunicación directa para una atención instantánea.",
                "Twilio: Servicios de comunicación por SMS y WhatsApp para notificaciones de soporte específicas.",
                "Help Scout: Herramientas de colaboración para nuestro equipo de soporte, mejorando la eficiencia.",
              ],
              collapsible: true,
            },
            {
              subtitle: "¿Qué información compartimos?",
              basicContent:
                "Tu contacto, historial de pedidos relevante, descripción del problema y comunicaciones previas para resolver tu consulta.",
              detailedContent: [
                "Tu información de contacto (nombre, email, teléfono).",
                "Historial de pedidos o transacciones relevante a tu consulta.",
                "Descripción detallada del problema o pregunta que reportas.",
                "Comunicaciones previas relacionadas con el caso para un contexto completo.",
                "Información técnica necesaria para diagnosticar y resolver el problema.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Limitaciones y protecciones",
              basicContent:
                "Acceso limitado a lo esencial para tu consulta y contratos estrictos de confidencialidad con todos los proveedores de soporte.",
              detailedContent:
                "Nuestros proveedores de soporte tienen acceso estrictamente limitado solo a la información necesaria para resolver tu consulta específica. No pueden ver información altamente sensible como datos financieros completos. Además, están obligados por contratos estrictos de confidencialidad y cumplen con nuestras políticas de seguridad de datos.",
              collapsible: true,
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Solo compartimos la información mínima indispensable para que tu consulta de soporte sea resuelta de manera eficiente y segura.",
          }}
        />

        <InfoCard
          id="garantias-proteccion-general"
          defaultExpanded={false}
          icon={<ShieldCheckIcon className="h-6 w-6" />}
          title="Garantías de protección en todas las transferencias"
          description="Implementamos múltiples capas de protección legal, técnica y contractual para asegurar que tus datos estén completamente seguros en manos de cualquier tercero con el que colaboremos."
          basicDescription="Todas las transferencias de datos a terceros están protegidas por contratos legales estrictos, medidas técnicas de seguridad avanzadas y tu capacidad de ejercer control sobre tu información."
          accentColor="green"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 37 LFPDPPP",
            tooltip:
              "Es obligatorio establecer garantías de protección en todas las transferencias de datos personales.",
          }}
          sections={[
            {
              subtitle: "Protecciones contractuales obligatorias",
              basicContent:
                "Todos nuestros proveedores firman contratos estrictos de confidencialidad y están sujetos a auditorías regulares y responsabilidades compartidas.",
              detailedContent: [
                "Contratos de protección de datos: Estrictos acuerdos de confidencialidad y protección de datos con todos los proveedores externos.",
                "Cláusulas de responsabilidad: Definición de responsabilidad compartida ante incidentes de seguridad o incumplimiento de datos.",
                "Auditorías regulares: De cumplimiento de estándares de privacidad y seguridad por parte de terceros.",
                "Certificación obligatoria: Requerimos certificaciones de cumplimiento de normativas mexicanas e internacionales.",
                "Limitación del uso: El uso de datos está contractualmente limitado solo para el propósito específico autorizado.",
                "Obligación de eliminación: Deben eliminar los datos una vez que ya no sean necesarios para el servicio o al finalizar el contrato.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Medidas técnicas de seguridad",
              basicContent:
                "Aplicamos encriptación de datos, controles de acceso robustos, monitoreo continuo y protocolos de respuesta a incidentes.",
              detailedContent: [
                "Encriptación de datos: Tanto en tránsito (SSL/TLS) como en reposo.",
                "Controles de acceso: Estrictos y con autenticación multifactor para proteger la información.",
                "Monitoreo continuo: De actividades sospechosas y vulnerabilidades de seguridad.",
                "Notificación inmediata: De cualquier incidente de seguridad que pudiera afectarte.",
                "Protocolos de respuesta: Planes detallados para actuar ante brechas de seguridad.",
              ],
              variant: "highlight",
              collapsible: true,
            },
            {
              subtitle: "Tus derechos y controles",
              basicContent:
                "Mantienes control total con tus derechos ARCO y puedes excluirte de servicios opcionales (marketing/análisis) contactando a privacidad@ratacueva.com.",
              detailedContent:
                "Usted mantiene el control sobre sus datos en todo momento. Para servicios esenciales (como pagos y envíos), las transferencias son inherentes y necesarias para el funcionamiento del servicio que solicitas. Para servicios opcionales (como análisis de marketing o personalización), siempre puedes solicitar su exclusión contactando a privacidad@ratacueva.com. Además, en cualquier momento puedes ejercer tus derechos ARCO (Acceso, Rectificación, Cancelación, Oposición) para gestionar tus datos.",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Todas nuestras transferencias cumplen estrictamente con la LFPDPPP y están respaldadas por contratos sólidos de protección de datos, diseñados para tu seguridad.",
          }}
        />
      </>
    ),
  },
  // ¿Cómo protegemos tus datos?
  {
    id: "como-protegemos-datos",
    path: "/privacy-policy/como-protegemos-datos",
    title: "¿Cómo protegemos tus datos?",
    subtitle:
      "La seguridad de tu información es nuestra máxima prioridad. Implementamos múltiples capas de protección técnica, administrativa y de monitoreo para mantener tus datos completamente seguros las 24 horas del día.",
    summary:
      "Múltiples capas de seguridad técnica, administrativa y de monitoreo protegen tu información con estándares de grado militar y certificaciones internacionales.",
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    currentPageNumber: 5,
    highlightBox: {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: "Protección multicapa garantizada",
      type: "info",
      content: [
        "Implementamos los más altos estándares de seguridad de la industria con tecnología de grado militar y certificaciones internacionales.",
        "Tu información está protegida por múltiples capas de seguridad que incluyen cifrado avanzado, controles de acceso estrictos y monitoreo continuo.",
      ],
    },
    quickAccessCards: [
      {
        title: "Protecciones técnicas",
        description: "Cifrado AES-256, SSL/TLS, 2FA",
        href: "#protecciones-tecnicas",
        category: "importante",
      },
      {
        title: "Protecciones administrativas",
        description: "Control de acceso, capacitación",
        href: "#protecciones-administrativas",
        category: "importante",
      },
      {
        title: "Monitoreo y auditorías",
        description: "Vigilancia 24/7, pruebas de penetración",
        href: "#monitoreo-auditorias",
        category: "informativo",
      },
      {
        title: "Certificaciones",
        description: "ISO 27001, SOC 2, PCI DSS",
        href: "#certificaciones",
        category: "informativo",
      },
    ],
    faqs: [
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
    ],
    content: (
      <>
        <InfoCard
          id="protecciones-tecnicas"
          defaultExpanded={false}
          icon={<LockClosedIcon className="h-6 w-6" />}
          title="Protecciones técnicas avanzadas"
          description="Utilizamos tecnología de seguridad de última generación para crear múltiples barreras de protección alrededor de tu información personal, desde el momento en que nos la confías hasta su almacenamiento."
          basicDescription="Empleamos cifrado de grado militar (AES-256, SSL/TLS 1.3), autenticación de dos factores (2FA) y una infraestructura de servidores altamente protegida y certificada."
          accentColor="blue"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 19 LFPDPPP",
            tooltip:
              "Es legalmente obligatorio implementar medidas de seguridad técnicas para proteger los datos personales.",
          }}
          sections={[
            {
              subtitle: "Cifrado de grado militar",
              basicContent:
                "Usamos cifrado AES-256 y SSL/TLS 1.3 para proteger tus datos en reposo y en tránsito, al nivel de bancos y gobiernos.",
              detailedContent: [
                "Cifrado AES-256: Para todos los datos almacenados, el mismo estándar utilizado por instituciones financieras y gobiernos.",
                "SSL/TLS 1.3: Protege todas las comunicaciones en tiempo real, garantizando que tu información viaje de forma segura.",
                "Cifrado de extremo a extremo: En transmisiones de datos sensibles para máxima privacidad.",
                "Tokenización: Para datos financieros, reemplazando información sensible con códigos únicos.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Autenticación y control de acceso",
              basicContent:
                "Ofrecemos autenticación de dos factores (2FA) y aplicamos controles de acceso estrictos a nuestro personal.",
              detailedContent: [
                "Autenticación de dos factores (2FA): Disponible para tu cuenta, añade una capa extra de seguridad al iniciar sesión.",
                "Controles de acceso basados en roles: Nuestro personal solo accede a la información mínima indispensable para sus funciones.",
                "Gestión de sesiones seguras: Con tiempos de expiración automáticos para proteger tu cuenta de accesos no autorizados.",
                "Verificación de identidad: Para cambios críticos en tu cuenta, como contraseñas o información de pago.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Infraestructura protegida",
              basicContent:
                "Nuestros servidores están en centros de datos certificados ISO 27001, con firewalls y protección DDoS 24/7.",
              detailedContent: [
                "Centros de datos certificados: Servidores alojados en instalaciones con certificación ISO 27001, que cumplen con los más altos estándares de seguridad física y lógica.",
                "Firewalls de aplicación web (WAF): De última generación, protegen nuestras aplicaciones de ataques cibernéticos.",
                "Protección DDoS automática: Vigilancia y mitigación de ataques de denegación de servicio distribuido las 24 horas.",
                "Respaldos encriptados: Copias de seguridad de tus datos se almacenan de forma encriptada en múltiples ubicaciones geográficas seguras.",
              ],
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Te recomendamos encarecidamente activar la autenticación de dos factores (2FA) en tu cuenta para añadir una capa adicional de seguridad personal.",
          }}
        />

        <InfoCard
          id="protecciones-administrativas"
          defaultExpanded={false}
          icon={<UserGroupIcon className="h-6 w-6" />}
          title="Protecciones administrativas y humanas"
          description="Implementamos políticas internas estrictas y programas de capacitación continua para asegurar que solo las personas autorizadas, y bajo condiciones seguras, puedan acceder y tratar tu información personal."
          basicDescription="Contamos con personal capacitado, controles de acceso estrictos, contratos de confidencialidad y políticas internas robustas para el manejo seguro de tus datos."
          accentColor="green"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 19 LFPDPPP",
            tooltip:
              "Es legalmente obligatorio implementar medidas de seguridad administrativas para proteger los datos personales.",
          }}
          sections={[
            {
              subtitle: "Control de acceso del personal",
              basicContent:
                "Aplicamos el principio de 'menor privilegio': solo el acceso mínimo necesario y con verificación de antecedentes.",
              detailedContent: [
                "Principio de 'menor privilegio': Nuestro personal solo tiene acceso a la información estrictamente necesaria para realizar sus funciones.",
                "Revisión de antecedentes: Todo el personal con acceso a datos sensibles pasa por una exhaustiva revisión de antecedentes.",
                "Contratos de confidencialidad: Firmas estrictas y legalmente vinculantes para todos los empleados.",
                "Revocación inmediata de accesos: Al terminar la relación laboral, los accesos a sistemas y datos se desactivan de forma inmediata.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Capacitación y concientización",
              basicContent:
                "Capacitación obligatoria en seguridad y privacidad, actualizaciones regulares y simulacros para nuestro equipo.",
              detailedContent: [
                "Capacitación obligatoria: Todo el equipo recibe formación constante en seguridad y privacidad de datos.",
                "Actualizaciones regulares: Sobre nuevas amenazas cibernéticas y mejores prácticas de protección.",
                "Simulacros de phishing y pruebas de seguridad: Periódicas para mantener al personal alerta y preparado.",
                "Cultura de seguridad: Fomentamos una cultura organizacional que prioriza la protección de datos personales en cada acción.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Políticas y procedimientos",
              basicContent:
                "Contamos con políticas de seguridad, procedimientos documentados para incidentes y un registro de todos los accesos a datos.",
              detailedContent: [
                "Políticas de escritorio limpio y pantalla bloqueada: Estándares de seguridad física en nuestras oficinas.",
                "Procedimientos documentados: Para el manejo adecuado de datos, incidentes de seguridad y respuesta a brechas.",
                "Registro y monitoreo: De todos los accesos y operaciones realizadas con datos personales.",
                "Protocolo de respuesta a incidentes de seguridad: Detallado y probado para actuar rápida y eficazmente ante cualquier evento.",
              ],
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Todo nuestro personal firma rigurosos acuerdos de confidencialidad antes de tener cualquier tipo de acceso a nuestros sistemas o datos.",
          }}
        />

        <InfoCard
          id="monitoreo-auditorias"
          defaultExpanded={false}
          icon={<ClipboardDocumentCheckIcon className="h-6 w-6" />}
          title="Monitoreo continuo y auditorías"
          description="Mantenemos una vigilancia constante y proactiva de nuestros sistemas, además de realizar evaluaciones y auditorías regulares para identificar, prevenir y mitigar cualquier amenaza a la seguridad de tus datos en tiempo real."
          basicDescription="Vigilamos nuestros sistemas 24/7 con detección automática de amenazas, realizamos pruebas de penetración trimestrales y tenemos un equipo de respuesta a incidentes listo."
          accentColor="purple"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 19 LFPDPPP",
            tooltip:
              "Es obligatorio monitorear y auditar las medidas de seguridad para garantizar su efectividad.",
          }}
          sections={[
            {
              subtitle: "Monitoreo en tiempo real",
              basicContent:
                "Vigilancia 24/7 de sistemas, detección automática de actividades sospechosas y alertas inmediatas.",
              detailedContent: [
                "Vigilancia 24/7/365: De todos los sistemas críticos y la infraestructura de datos.",
                "Detección automática: De actividades sospechosas o patrones de ataque inusuales.",
                "Alertas inmediatas: Ante cualquier intento de acceso no autorizado o anomalía de seguridad.",
                "Análisis de comportamiento: Para identificar y prevenir comportamientos maliciosos.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Pruebas y auditorías regulares",
              basicContent:
                "Realizamos pruebas de penetración trimestrales, auditorías internas mensuales y evaluaciones de vulnerabilidades semanales.",
              detailedContent: [
                "Pruebas de penetración trimestrales: Realizadas por empresas especializadas e independientes para identificar vulnerabilidades.",
                "Auditorías de seguridad internas: Mensuales para revisar el cumplimiento de nuestras políticas y procedimientos.",
                "Evaluaciones de vulnerabilidades: Semanales para detectar y corregir posibles puntos débiles rápidamente.",
                "Revisión anual: De todas las políticas de seguridad para asegurar su actualización y relevancia.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Respuesta a incidentes",
              basicContent:
                "Contamos con un equipo 24/7, protocolos de contención y notificación a usuarios afectados en 72 horas.",
              detailedContent: [
                "Equipo de respuesta: Disponible 24/7 para actuar de inmediato ante cualquier emergencia de seguridad.",
                "Protocolos predefinidos: De contención y mitigación para minimizar el impacto de un incidente.",
                "Notificación a usuarios afectados: Dentro de las 72 horas siguientes a la detección de un incidente que afecte su información, conforme a la ley.",
                "Investigación forense completa: De cualquier incidente de seguridad para identificar la causa raíz y prevenir futuras recurrencias.",
              ],
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Mantenemos un programa de recompensas por vulnerabilidades (`bug bounty program`) para colaborar con investigadores de seguridad éticos y fortalecer nuestras defensas.",
          }}
        />

        <InfoCard
          id="certificaciones"
          defaultExpanded={false}
          icon={<ShieldCheckIcon className="h-6 w-6" />}
          title="Certificaciones y cumplimiento normativo"
          description="Cumplimos con los estándares más estrictos de la industria y mantenemos certificaciones internacionales de seguridad para validar la solidez de nuestras medidas de protección de datos."
          basicDescription="Contamos con certificaciones como ISO 27001, SOC 2 y PCI DSS, y cumplimos estrictamente con la LFPDPPP mexicana y mejores prácticas internacionales."
          accentColor="green"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 19 LFPDPPP",
            tooltip:
              "Es obligatorio cumplir con estándares de seguridad reconocidos para proteger los datos personales.",
          }}
          sections={[
            {
              subtitle: "Certificaciones de seguridad",
              basicContent:
                "ISO 27001 para gestión de seguridad, SOC 2 Tipo II para controles, y PCI DSS para datos de tarjetas.",
              detailedContent: [
                "ISO 27001: Certificación internacional para Sistemas de Gestión de Seguridad de la Información (SGSI).",
                "SOC 2 Tipo II: Reporte sobre la efectividad de nuestros controles de seguridad y disponibilidad de los sistemas.",
                "PCI DSS: Estándar de Seguridad de Datos para la Industria de Tarjetas de Pago, crucial para proteger transacciones financieras.",
                "Evaluaciones regulares: De cumplimiento normativo por auditores externos para mantener nuestras certificaciones al día.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Cumplimiento legal",
              basicContent:
                "Cumplimos con la LFPDPPP, lineamientos del INAI y las mejores prácticas internacionales de privacidad.",
              detailedContent: [
                "Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de México: Cumplimiento total.",
                "Lineamientos del Instituto Nacional de Transparencia (INAI): Adherencia estricta a las disposiciones emitidas por la autoridad mexicana de privacidad.",
                "Mejores prácticas internacionales de privacidad: Como principios del GDPR (General Data Protection Regulation), en lo aplicable a nuestras operaciones.",
                "Preparación para futuras regulaciones: Monitoreamos activamente el panorama legal para adaptarnos a nuevas leyes de privacidad.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Transparencia y comunicación",
              basicContent:
                "Publicamos reportes de transparencia y mantenemos una comunicación abierta sobre nuestras prácticas de seguridad y privacidad.",
              detailedContent:
                "Publicamos reportes de transparencia regulares sobre nuestras prácticas de seguridad y cualquier incidente relevante. Creemos firmemente que la transparencia es fundamental para generar confianza con nuestros usuarios y mantenerlos informados sobre cómo protegemos su información.",
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Nuestras certificaciones son renovadas anualmente y están disponibles para consulta pública, demostrando nuestro compromiso continuo con la seguridad.",
          }}
        />
      </>
    ),
  },
  // Cookies y tecnologías de rastreo
  {
    id: "cookies-tecnologias",
    path: "/privacy-policy/cookies-tecnologias",
    title: "Cookies y tecnologías de rastreo",
    subtitle:
      "Utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación, recordar tus preferencias y analizar cómo interactúas con nuestro sitio. Te explicamos qué tipos usamos y cómo puedes controlarlas.",
    summary:
      "Información sobre el uso de cookies esenciales, de rendimiento, funcionales y de marketing, así como tus opciones para controlarlas y gestionar tu privacidad en línea.",
    icon: <CogIcon className="h-6 w-6" />,
    currentPageNumber: 6, // Nota: el currentPageNumber en el código original era 5. Lo he ajustado a 6 para mantener la secuencia lógica, si este es el caso. Si tu orden de páginas es diferente, por favor ajusta.
    highlightBox: {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: "¿Qué son las cookies?",
      type: "info",
      content: [
        "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet, móvil) cuando visitas nuestro sitio web.",
        "Utilizamos cookies para mejorar tu experiencia de usuario, recordar tus preferencias, analizar el tráfico del sitio y personalizar el contenido que te mostramos, todo con el fin de optimizar RataCueva para ti.",
      ],
    },
    quickAccessCards: [
      {
        title: "Cookies esenciales",
        description: "Funcionalidad básica - sesión, carrito",
        href: "#cookies-esenciales",
        category: "importante",
      },
      {
        title: "Cookies de análisis",
        description: "Métricas de rendimiento y UX",
        href: "#cookies-analisis",
        category: "informativo",
      },
      {
        title: "Cookies funcionales",
        description: "Preferencias de idioma y personalización",
        href: "#cookies-funcionales",
        category: "informativo",
      },
      {
        title: "Cookies de marketing",
        description: "Publicidad personalizada y seguimiento",
        href: "#cookies-marketing",
        category: "informativo",
      },
    ],
    faqs: [
      {
        question: "¿Qué son las cookies?",
        answer:
          "Son pequeños archivos de texto que se almacenan en tu dispositivo para recordar preferencias y mejorar tu experiencia de navegación en nuestro sitio web.",
      },
      {
        question: "¿Puedo desactivar las cookies?",
        answer:
          "Sí, puedes gestionar y desactivar la mayoría de las cookies desde tu navegador o nuestro centro de preferencias. Las cookies esenciales no se pueden desactivar porque son indispensables para el funcionamiento básico del sitio.",
      },
      {
        question: "¿Las cookies contienen información personal?",
        answer:
          "Las cookies esenciales y funcionales generalmente no contienen información personal directa. Las de análisis y marketing pueden recopilar datos para crear perfiles anónimos de comportamiento, pero no te identifican directamente sin tu consentimiento.",
      },
    ],
    content: (
      <>
        <InfoCard
          id="cookies-esenciales"
          defaultExpanded={false}
          icon={<WrenchScrewdriverIcon className="h-6 w-6" />}
          title="Cookies esenciales (obligatorias)"
          description="Estas cookies son fundamentales para el funcionamiento básico de RataCueva y son indispensables para que puedas navegar por el sitio, iniciar sesión de forma segura y realizar compras."
          basicDescription="Cookies necesarias para el funcionamiento principal del sitio: gestionar tu sesión, recordar tu carrito, asegurar la navegación y procesar tus pagos."
          accentColor="red" // Color rojo para indicar su naturaleza "obligatoria/crítica"
          legalBadge={{
            type: "mandatory",
            lawReference: "Interés legítimo",
            tooltip:
              "El uso de estas cookies es necesario para la prestación del servicio que usted solicita y para la seguridad de la plataforma.",
          }}
          sections={[
            {
              subtitle: "Funciones críticas que permiten",
              basicContent:
                "Mantener tu sesión activa, recordar tu carrito de compras, garantizar la seguridad y procesar tus pagos de forma segura.",
              detailedContent: [
                "Mantener tu sesión iniciada mientras navegas por diferentes páginas de nuestro sitio.",
                "Recordar los productos que has añadido a tu carrito de compras antes de finalizar la compra.",
                "Asegurar que las funciones de seguridad básicas (como la prevención de fraudes) operen correctamente.",
                "Permitir la navegación segura y acceso a áreas protegidas de tu cuenta.",
                "Procesar pagos de forma segura y confiable a través de nuestros proveedores.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Ejemplos de cookies esenciales",
              basicContent:
                "Incluyen cookies para tu sesión (session_token), contenido del carrito (cart_contents), y protección de seguridad (csrf_protection, payment_state).",
              detailedContent: [
                "session_token: Identifica tu sesión de navegación para mantenerte conectado.",
                "cart_contents: Almacena los productos que tienes en tu carrito de compras.",
                "csrf_protection: Protege contra ataques de falsificación de solicitudes entre sitios.",
                "payment_state: Gestiona el estado de tus transacciones durante el proceso de pago.",
              ],
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "warning",
            text: "Estas cookies no pueden ser desactivadas porque son absolutamente necesarias para que el sitio web funcione de manera básica y segura.",
          }}
        />

        <InfoCard
          id="cookies-analisis"
          defaultExpanded={false}
          icon={<ChartBarIcon className="h-6 w-6" />}
          title="Cookies de rendimiento y análisis"
          description="Estas cookies recopilan información agregada y anónima sobre cómo interactúas con nuestro sitio, lo que nos permite entender el comportamiento de los usuarios y mejorar continuamente la funcionalidad y el rendimiento de RataCueva."
          basicDescription="Herramientas como Google Analytics y Hotjar nos ayudan a mejorar el sitio al recopilar datos anónimos sobre tu navegación, rendimiento y posibles errores."
          accentColor="blue" // Azul para indicar información general / funcional
          legalBadge={{
            type: "optional",
            tooltip:
              "Estas cookies requieren de tu consentimiento para ser utilizadas.",
          }}
          sections={[
            {
              subtitle: "Qué información recopilamos",
              basicContent:
                "Páginas visitadas, errores técnicos, velocidad del sitio, tipo de dispositivo y patrones de navegación (todo de forma anónima).",
              detailedContent: [
                "Páginas más visitadas y tiempo de permanencia en cada una.",
                "Errores técnicos y problemas de navegación que puedan surgir.",
                "Velocidad de carga de las páginas y rendimiento general del sitio.",
                "Tipos de dispositivos y navegadores utilizados (datos anonimizados).",
                "Patrones de navegación y flujos de usuario para entender cómo usas el sitio.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Herramientas de análisis que utilizamos",
              basicContent:
                "Google Analytics, Google Tag Manager, Hotjar y Microsoft Clarity para recopilación de datos anónimos de uso.",
              detailedContent: [
                "Google Analytics: Para estadísticas de tráfico web y comportamiento de usuarios.",
                "Google Tag Manager: Para gestionar de forma eficiente las etiquetas de seguimiento.",
                "Hotjar: Para mapas de calor y análisis visual de la experiencia de usuario (datos agregados y anonimizados).",
                "Microsoft Clarity: Para grabaciones de sesión y análisis de interacción, siempre con anonimización de datos sensibles.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Beneficios para tu experiencia",
              basicContent:
                "Un sitio web más rápido, mejor navegación, rápida detección de errores y funcionalidades mejoradas, todo gracias al análisis de uso.",
              detailedContent: [
                "Disfrutar de un sitio web más rápido y con un rendimiento optimizado.",
                "Experimentar una navegación mejorada y más intuitiva.",
                "Detección y corrección rápida de errores que puedan afectar tu experiencia.",
                "Contenido y funcionalidades continuamente mejoradas basadas en el uso real de los usuarios.",
              ],
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Toda la información recopilada es agregada y anónima; no te identificamos personalmente a través de estas cookies, solo buscamos mejorar el servicio.",
          }}
        />

        <InfoCard
          id="cookies-funcionales"
          defaultExpanded={false}
          icon={<AdjustmentsHorizontalIcon className="h-6 w-6" />}
          title="Cookies funcionales y de personalización"
          description="Estas cookies mejoran tu experiencia en RataCueva recordando tus preferencias y configuraciones, haciendo tu navegación más cómoda, relevante y personalizada a cada visita."
          basicDescription="Recuerdan tu idioma, región, configuraciones de visualización, y preferencias de productos para personalizar tu experiencia en el sitio."
          accentColor="purple" // Púrpura para "personalización/preferencias"
          legalBadge={{
            type: "optional",
            tooltip:
              "Estas cookies requieren de tu consentimiento para ser utilizadas.",
          }}
          sections={[
            {
              subtitle: "Preferencias que recordamos",
              basicContent:
                "Tu idioma, región, modo oscuro/claro, tamaño de texto, filtros de productos y listas de deseos.",
              detailedContent: [
                "Tu idioma preferido (español, inglés, etc.) y la región desde la que accedes.",
                "Configuraciones de visualización, como el modo oscuro/claro o el tamaño de texto.",
                "Tus preferencias de navegación y filtros de productos favoritos aplicados.",
                "Productos guardados en tu lista de deseos y comparaciones.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Configuraciones de cuenta",
              basicContent:
                "Recordamos tu método de pago preferido, dirección de envío y preferencias de notificaciones para agilizar tus procesos.",
              detailedContent: [
                "Recordar tu método de pago preferido para agilizar futuras compras.",
                "Mantener tu dirección de envío predeterminada para evitar la reintroducción de datos.",
                "Tus preferencias de notificaciones y comunicación.",
                "Configuración de privacidad personalizada que hayas establecido.",
              ],
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Estas cookies te ahorran tiempo al evitar que tengas que reconfigurar tus preferencias en cada visita al sitio, brindando una experiencia fluida.",
          }}
        />

        <InfoCard
          id="cookies-marketing"
          defaultExpanded={false}
          icon={<TvIcon className="h-6 w-6" />}
          title="Cookies de publicidad y marketing"
          description="Utilizadas por nosotros y nuestros socios publicitarios para mostrarte anuncios más relevantes y personalizados basados en tus intereses en productos gaming, así como para medir la efectividad de nuestras campañas."
          basicDescription="Nos permiten mostrarte anuncios relevantes de productos gaming, medir campañas y personalizar ofertas. Puedes desactivarlas si no quieres publicidad personalizada."
          accentColor="orange" // Naranja para "publicidad/atención"
          legalBadge={{
            type: "optional",
            lawReference: "Art. 29 LFPDPPP",
            tooltip:
              "El tratamiento para fines de mercadotecnia directa requiere la posibilidad de oposición.",
          }}
          sections={[
            {
              subtitle: "¿Para qué las utilizamos?",
              basicContent:
                "Para mostrarte anuncios relevantes, limitar la frecuencia de anuncios y medir el rendimiento de nuestras campañas.",
              detailedContent: [
                "Mostrar anuncios más relevantes para tus intereses en productos gaming y accesorios.",
                "Limitar el número de veces que ves un anuncio específico para no ser intrusivos.",
                "Medir la efectividad de nuestras campañas publicitarias y optimizar la inversión.",
                "Personalizar ofertas y promociones basadas en tu historial de navegación y compras.",
                "Realizar retargeting de productos que has visto pero no comprado, recordándote tu interés.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Plataformas publicitarias que utilizamos",
              basicContent:
                "Colaboramos con Google Ads, Facebook/Instagram Ads, TikTok for Business, YouTube Ads y Criteo para nuestras campañas.",
              detailedContent: [
                "Google Ads: Para publicidad en búsquedas de Google y sitios web de su red de display.",
                "Facebook/Instagram Ads: Anuncios personalizados en las plataformas de Meta.",
                "TikTok for Business: Publicidad en formatos de video en la plataforma de TikTok.",
                "YouTube Ads: Anuncios en contenido de video relacionado con gaming.",
                "Criteo: Especializado en retargeting y publicidad de rendimiento personalizado.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Tu control sobre estas cookies",
              basicContent:
                "Puedes desactivar estas cookies desde nuestro centro de preferencias o tu navegador. Esto no afecta la funcionalidad del sitio.",
              detailedContent:
                "Puedes desactivar estas cookies en cualquier momento desde nuestro centro de preferencias de cookies o directamente a través de la configuración de tu navegador. Si las desactivas, seguirás viendo anuncios, pero serán menos relevantes para tus intereses y podrían ser repetitivos. Tu decisión no afectará la funcionalidad principal del sitio.",
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Tienes la opción de no recibir publicidad personalizada manteniendo toda la funcionalidad y experiencia de compra en el sitio.",
          }}
        />

        <InfoCard
          id="control-cookies"
          defaultExpanded={false}
          icon={<CogIcon className="h-6 w-6" />}
          title="Tu control total sobre las cookies"
          description="Tienes múltiples opciones para gestionar y controlar qué cookies acepta tu navegador, desde configuraciones básicas hasta controles granulares que te dan el poder sobre tu privacidad en línea."
          basicDescription="Controla tus cookies desde nuestro centro de preferencias, la configuración de tu navegador o herramientas de opt-out y extensiones especializadas."
          accentColor="green" // Verde para "control / empoderamiento"
          legalBadge={{
            type: "recommendation",
            lawReference: "Derechos del usuario",
            tooltip:
              "Tienes el derecho de controlar la información que se recopila sobre tu navegación.",
          }}
          sections={[
            {
              subtitle: "Opciones de control disponibles",
              basicContent:
                "Usa nuestro centro de preferencias, la configuración de tu navegador, o herramientas de opt-out de plataformas publicitarias.",
              detailedContent: [
                "Centro de preferencias de cookies en RataCueva: Acceso directo desde nuestro sitio web para gestionar tus consentimientos.",
                "Configuración de privacidad de tu navegador web: Todos los navegadores modernos permiten gestionar cookies (bloquear, eliminar, ver detalles).",
                "Herramientas de opt-out: De plataformas publicitarias y asociaciones de la industria para no recibir publicidad personalizada.",
                "Extensiones de navegador: Especializadas en bloqueo de rastreadores y gestión de privacidad.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Configuración por navegador",
              basicContent:
                "Guías rápidas para gestionar cookies en Chrome, Firefox, Safari y Edge desde sus configuraciones de privacidad.",
              detailedContent: [
                "Chrome: Ve a 'Configuración > Privacidad y seguridad > Cookies y otros datos de sitios'.",
                "Firefox: En 'Preferencias > Privacidad y seguridad', busca la sección 'Cookies y datos del sitio'.",
                "Safari: Abre 'Preferencias > Privacidad' y gestiona 'Cookies y datos de sitios web'.",
                "Edge: Accede a 'Configuración > Cookies y permisos de sitio'.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Centro de preferencias RataCueva",
              basicContent:
                "Puedes acceder desde tu cuenta o el banner de consentimiento, y un enlace permanente en el pie de página.",
              detailedContent: [
                "Acceso desde tu cuenta: En 'Configuración > Privacidad > Gestión de cookies'.",
                "Banner de consentimiento: Al visitar el sitio por primera vez, puedes personalizar tus opciones.",
                "Enlace permanente: 'Configuración de cookies' en el pie de página de nuestro sitio, siempre disponible.",
                "Revisar y cambiar preferencias: La opción está disponible en cualquier momento que desees ajustar tus consentimientos.",
              ],
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "warning",
            text: "Recuerda que desactivar las cookies esenciales puede afectar seriamente la funcionalidad del sitio, incluyendo el carrito de compras y la autenticación de tu cuenta.",
          }}
        />
      </>
    ),
  },
  // Tus derechos sobre tus datos (ARCO)
  {
    id: "tus-derechos-arco",
    path: "/privacy-policy/tus-derechos-arco",
    title: "Tus derechos sobre tus datos (ARCO)",
    subtitle:
      "Como titular de datos personales, tienes derechos fundamentales que puedes ejercer en cualquier momento para controlar el tratamiento que RataCueva hace de tu información personal. Estos derechos son tu garantía para la transparencia y el control.",
    summary:
      "Conoce tus derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) para controlar cómo RataCueva trata tus datos personales y cómo puedes ejercerlos.",
    icon: <KeyIcon className="h-6 w-6" />,
    currentPageNumber: 7,
    highlightBox: {
      icon: <ShieldExclamationIcon className="h-6 w-6" />,
      title: "Tus derechos fundamentales",
      type: "legal", // 'legal' es un buen tipo para enfatizar la importancia legal
      content: [
        "Derechos ARCO: Tienes derecho a Acceder a tus datos, Rectificar información incorrecta, Cancelar datos innecesarios y Oponerte a ciertos tratamientos.",
        "Estos derechos son fundamentales para el control de tu información personal y están protegidos por la legislación mexicana de protección de datos (LFPDPPP).",
      ],
    },
    quickAccessCards: [
      {
        title: "Derecho de acceso",
        description: "Conoce qué datos tenemos de ti",
        href: "#derecho-acceso",
        category: "derechos",
      },
      {
        title: "Derecho de rectificación",
        description: "Corrige información incorrecta",
        href: "#derecho-rectificacion",
        category: "derechos",
      },
      {
        title: "Derecho de cancelación",
        description: "Elimina tus datos personales",
        href: "#derecho-cancelacion",
        category: "derechos",
      },
      {
        title: "Derecho de oposición",
        description: "Oponte al tratamiento",
        href: "#derecho-oposicion",
        category: "derechos",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo tardan en responder a mi solicitud ARCO?",
        answer:
          "Le comunicaremos nuestra determinación en un plazo máximo de 20 días hábiles contados desde la fecha en que recibamos su solicitud completa.",
      },
      {
        question: "¿Necesito presentar documentos para ejercer mis derechos?",
        answer:
          "Sí, debe proporcionar identificación oficial, comprobante de domicilio y cualquier documento que facilite la localización de sus datos personales.",
      },
      {
        question: "¿Puedo revocar mi consentimiento en cualquier momento?",
        answer:
          "Sí, puede revocar su consentimiento, aunque esto puede afectar la prestación de nuestros servicios y no tiene efectos retroactivos.",
      },
    ],
    content: (
      <>
        <InfoCard
          id="derecho-acceso"
          icon={<KeyIcon className="h-6 w-6" />}
          title="Derecho de acceso"
          description="Puedes solicitar conocer qué datos personales tenemos sobre ti, para qué los usamos, con quién los compartimos y cualquier información relacionada con su tratamiento. Este derecho te permite tener transparencia total sobre el manejo de tu información."
          basicDescription="Solicita ver todos tus datos personales que RataCueva tiene registrados, sus usos y con quién los compartimos."
          accentColor="blue"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 22, 29 LFPDPPP",
            tooltip:
              "Derecho fundamental a conocer el tratamiento de sus datos personales.",
          }}
          sections={[
            {
              subtitle: "Información que puedes solicitar",
              basicContent:
                "Qué datos tenemos, para qué los usamos, con quién los compartimos, su origen y plazos de conservación.",
              detailedContent: [
                "Qué datos personales tenemos sobre ti",
                "Para qué finalidades los utilizamos",
                "Con quién hemos compartido tu información (transferencias)",
                "El origen de donde obtuvimos tus datos",
                "El plazo de conservación de tu información",
              ],
              collapsible: true,
            },
          ]}
          actionGuide={{
            title: "Cómo solicitar acceso a tus datos",
            description: "Sigue estos pasos para ejercer tu derecho de acceso.",
            steps: [
              "Envía un correo a privacidad@ratacueva.com con el asunto 'Solicitud de Acceso ARCO'.",
              "En el cuerpo, indica claramente qué información deseas conocer.",
              "Adjunta una copia de tu identificación oficial para verificar tu identidad.",
            ],
            nextAction: {
              label: "Enviar solicitud de acceso",
              href: "mailto:privacidad@ratacueva.com?subject=Solicitud%20de%20Acceso%20ARCO",
              external: true,
            },
          }}
          footerNote={{
            type: "tip",
            text: "Este derecho te brinda transparencia total sobre el manejo de tu información personal.",
          }}
        />

        <InfoCard
          id="derecho-rectificacion"
          icon={<PencilSquareIcon className="h-6 w-6" />}
          title="Derecho de rectificación"
          description="Si encuentras que alguno de tus datos personales en nuestros sistemas es incorrecto, está desactualizado o incompleto, puedes solicitar que lo corrijamos. Tu información debe ser exacta y estar actualizada en todo momento."
          basicDescription="Corrige cualquier dato personal incorrecto, desactualizado o incompleto que tengamos sobre ti."
          accentColor="green"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 22, 29 LFPDPPP",
            tooltip:
              "Derecho fundamental a que sus datos sean exactos y actualizados.",
          }}
          sections={[
            {
              subtitle: "Cuándo puedes solicitar rectificación",
              basicContent:
                "Si tus datos son inexactos, desactualizados, incompletos, o si has cambiado de información de contacto.",
              detailedContent: [
                "Tus datos son inexactos o incorrectos",
                "La información está desactualizada",
                "Los datos están incompletos",
                "No son pertinentes para la finalidad original",
                "Has cambiado de dirección, teléfono o email",
                "Hay errores de captura en tu información",
              ],
              collapsible: true,
            },
          ]}
          actionGuide={{
            title: "Cómo solicitar la rectificación de tus datos",
            description:
              "Sigue estos pasos para corregir tu información personal.",
            steps: [
              "Envía un correo a privacidad@ratacueva.com con el asunto 'Solicitud de Rectificación ARCO'.",
              "Especifica el dato a rectificar y proporciona la información correcta.",
              "Adjunta documentos que soporten la corrección (ej. comprobante de domicilio si cambiaste de dirección).",
              "Incluye una copia de tu identificación oficial.",
            ],
            nextAction: {
              label: "Enviar solicitud de rectificación",
              href: "mailto:privacidad@ratacueva.com?subject=Solicitud%20de%20Rectificación%20ARCO",
              external: true,
            },
          }}
          footerNote={{
            type: "tip",
            text: "Mantener tu información precisa nos permite brindarte un mejor servicio.",
          }}
        />

        <InfoCard
          id="derecho-cancelacion"
          icon={<TrashIcon className="h-6 w-6" />}
          title="Derecho de cancelación"
          description="Puedes solicitar que eliminemos tus datos personales de nuestros registros cuando ya no sean necesarios para las finalidades que motivaron su tratamiento o cuando consideres que no se están utilizando conforme a los principios de protección de datos."
          basicDescription="Pide la eliminación de tus datos si ya no son necesarios para el fin original o si crees que se usan de forma incorrecta."
          accentColor="red"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 22, 29 LFPDPPP",
            tooltip:
              "Derecho fundamental a la supresión de sus datos personales.",
          }}
          sections={[
            {
              subtitle: "Cuándo puedes solicitar cancelación",
              basicContent:
                "Si tus datos ya no son necesarios, has retirado tu consentimiento, o se trataron de forma ilícita.",
              detailedContent: [
                "Los datos ya no son necesarios para las finalidades originales",
                "Has retirado tu consentimiento y no hay otra base legal para el tratamiento",
                "Tus datos han sido tratados de manera ilícita",
                "Es necesario para cumplir una obligación legal (ej. cierre de cuenta y plazos de retención)",
                "Ya no mantienes una relación comercial con RataCueva",
                "Se han cumplido los plazos de conservación establecidos y no hay excepciones",
              ],
              collapsible: true,
            },
          ]}
          actionGuide={{
            title: "Cómo solicitar la cancelación de tus datos",
            description:
              "Sigue estos pasos para ejercer tu derecho de cancelación.",
            steps: [
              "Envía un correo a privacidad@ratacueva.com con el asunto 'Solicitud de Cancelación ARCO'.",
              "Especifica qué datos deseas cancelar y la razón de tu solicitud.",
              "Adjunta una copia de tu identificación oficial.",
            ],
            nextAction: {
              label: "Enviar solicitud de cancelación",
              href: "mailto:privacidad@ratacueva.com?subject=Solicitud%20de%20Cancelación%20ARCO",
              external: true,
            },
          }}
          footerNote={{
            type: "warning",
            text: "Algunos datos pueden conservarse por obligaciones legales o para el ejercicio o defensa de reclamaciones, incluso después de una solicitud de cancelación.",
          }}
        />

        <InfoCard
          id="derecho-oposicion"
          icon={<HandRaisedIcon className="h-6 w-6" />}
          title="Derecho de oposición"
          description="Puedes oponerte al tratamiento de tus datos personales cuando exista una causa legítima para ello o cuando el tratamiento tenga por objeto el envío de publicidad, prospección comercial o promoción de productos y servicios."
          basicDescription="Oponte al uso de tus datos para marketing directo o si tienes razones legítimas para que cese su tratamiento."
          accentColor="orange"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 22, 29 LFPDPPP",
            tooltip:
              "Derecho fundamental a oponerse al tratamiento de sus datos personales.",
          }}
          sections={[
            {
              subtitle: "Cuándo puedes ejercer oposición",
              basicContent:
                "Si el tratamiento te causa molestias injustificadas, es para marketing directo, o no deseas comunicaciones promocionales.",
              detailedContent: [
                "El tratamiento cause molestias o perjuicios injustificados",
                "Se utilicen para fines de marketing directo (publicidad, prospección comercial)",
                "No deseas recibir comunicaciones promocionales de RataCueva",
                "El tratamiento se base en interés legítimo y prefieres que se detenga por motivos personales",
                "Consideras que el tratamiento es innecesario para la finalidad original",
                "Existe una causa legítima específica que justifique tu oposición",
              ],
              collapsible: true,
            },
          ]}
          actionGuide={{
            title: "Cómo ejercer tu derecho de oposición",
            description:
              "Sigue estos pasos para oponerte al tratamiento de tus datos.",
            steps: [
              "Envía un correo a privacidad@ratacueva.com con el asunto 'Solicitud de Oposición ARCO'.",
              "Especifica a qué tratamiento te opones y la razón (ej. 'No deseo recibir marketing', 'Me opongo al análisis de mis preferencias').",
              "Adjunta una copia de tu identificación oficial.",
            ],
            nextAction: {
              label: "Enviar solicitud de oposición",
              href: "mailto:privacidad@ratacueva.com?subject=Solicitud%20de%20Oposición%20ARCO",
              external: true,
            },
          }}
          footerNote={{
            type: "tip",
            text: "Tu oposición al marketing directo se atenderá de inmediato y sin justificación necesaria.",
          }}
        />

        <InfoCard
          id="como-ejercer-arco"
          icon={<ClockIcon className="h-6 w-6" />}
          title="¿Cómo ejercer tus derechos ARCO?"
          description="Para ejercer cualquiera de tus derechos ARCO, puedes contactarnos a través de los siguientes medios. Te responderemos en los plazos establecidos por ley y te guiaremos en todo el proceso para asegurar tu control sobre tus datos."
          basicDescription="Ejerce tus derechos ARCO contactándonos por email o a través de nuestro portal de privacidad. Necesitarás tu ID y una descripción clara de tu solicitud."
          accentColor="purple"
          actionGuide={{
            title: "Proceso para enviar tu solicitud ARCO",
            description:
              "Asegura que tu solicitud sea procesada de manera eficiente siguiendo estos pasos.",
            steps: [
              "Contacto: Envía un correo electrónico a privacidad@ratacueva.com o utiliza nuestro portal de privacidad.",
              "Información requerida: Incluye tu nombre completo, correo electrónico registrado, y el derecho ARCO que deseas ejercer.",
              "Detalle de solicitud: Proporciona una descripción clara y precisa de tu solicitud (ej. 'Deseo acceder a todos mis datos', 'Solicito la rectificación de mi dirección a X').",
              "Identificación: Adjunta una copia de tu identificación oficial (INE, pasaporte, cédula profesional) para verificar tu identidad.",
              "Documentación adicional: Si aplica (ej. comprobante de domicilio para rectificación de dirección, poder notarial si representas a alguien).",
            ],
            nextAction: {
              label: "Ir al portal de privacidad",
              href: "https://www.ratacueva.com/privacidad", // Asumiendo que esta es la URL de tu portal
              external: false,
            },
          }}
          sections={[
            {
              subtitle: "Medios de contacto",
              basicContent:
                "Email principal: privacidad@ratacueva.com. También puedes usar nuestro portal de privacidad o centro de ayuda.",
              detailedContent: [
                "Correo electrónico principal: privacidad@ratacueva.com (canal recomendado y más ágil)",
                "Portal de privacidad: www.ratacueva.com/privacidad (para enviar solicitudes electrónicamente y dar seguimiento)",
                "Centro de ayuda: soporte@ratacueva.com (para consultas generales, no exclusivas de ARCO)",
                "Teléfono: +52 (55) 1234-5678 (horario de oficina, para orientación inicial)",
              ],
              collapsible: true,
            },
            {
              subtitle: "Información que debes incluir",
              basicContent:
                "Nombre, email, derecho a ejercer y descripción clara de tu solicitud, además de identificación oficial.",
              detailedContent: [
                "Tu nombre completo",
                "Correo electrónico registrado en tu cuenta (o cualquier medio para contactarte)",
                "Derecho que deseas ejercer (Acceso, Rectificación, Cancelación u Oposición)",
                "Descripción clara y precisa de tu solicitud (lo más detallada posible)",
                "Copia de identificación oficial vigente (INE, pasaporte, cédula profesional)",
              ],
              collapsible: true,
            },
            {
              subtitle: "Documentos adicionales (si aplica)",
              basicContent:
                "Comprobante de domicilio, documentos que faciliten localizar tus datos o poder notarial si actúas como representante.",
              detailedContent: [
                "Comprobante de domicilio actualizado (si solicitas rectificación de dirección)",
                "Cualquier documento que facilite la localización de tus datos personales (ej. número de pedido, fecha de transacción)",
                "En caso de representación legal: copia del poder notarial o carta poder simple firmada por el titular y dos testigos, junto con identificaciones de todos.",
              ],
              collapsible: true,
            },
          ]}
        />

        <InfoCard
          id="plazos-respuesta"
          icon={<ClockIcon className="h-6 w-6" />}
          title="Plazos de respuesta"
          description="RataCueva se compromete a responder tus solicitudes de derechos ARCO en los plazos establecidos por la legislación mexicana de protección de datos personales para garantizar una atención oportuna."
          basicDescription="Respondemos a tus solicitudes ARCO en 20 días hábiles y las ejecutamos en 15 días adicionales si son procedentes."
          accentColor="blue"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 32, 33 LFPDPPP",
            tooltip:
              "La ley establece plazos específicos para la atención y ejecución de solicitudes ARCO.",
          }}
          sections={[
            {
              subtitle: "Tiempo de respuesta",
              basicContent:
                "Te comunicaremos nuestra determinación en un máximo de 20 días hábiles desde que recibamos tu solicitud completa.",
              detailedContent:
                "Te comunicaremos nuestra determinación en un plazo máximo de 20 días hábiles contados desde la fecha en que recibamos su solicitud completa. Este plazo puede extenderse por una sola vez y por un periodo igual, siempre que así lo justifiquen las circunstancias del caso.",
              collapsible: true,
            },
            {
              subtitle: "Implementación de la solicitud",
              basicContent:
                "Si tu solicitud es procedente, la haremos efectiva en un plazo máximo de 15 días hábiles después de nuestra respuesta.",
              detailedContent:
                "Si tu solicitud es procedente, la haremos efectiva en un plazo máximo de 15 días hábiles siguientes a la comunicación de nuestra respuesta. Este plazo también puede extenderse por un periodo igual, por causas debidamente justificadas.",
              collapsible: true,
            },
            {
              subtitle: "Seguimiento de tu solicitud",
              basicContent:
                "Recibirás un número de folio para dar seguimiento a tu solicitud a través de nuestro portal de privacidad.",
              detailedContent:
                "Recibirás un número de folio para dar seguimiento a tu solicitud y podrás consultar el estatus en tiempo real a través de nuestro portal de privacidad (www.ratacueva.com/privacidad) o contactando a privacidad@ratacueva.com.",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "La eficiencia en la atención a tus derechos es nuestra prioridad, cumpliendo siempre con los plazos legales.",
          }}
        />

        <InfoCard
          id="limitaciones-arco"
          icon={<ShieldExclamationIcon className="h-6 w-6" />}
          title="Limitaciones al ejercicio de los derechos ARCO"
          description="En algunos casos específicos, establecidos por la legislación mexicana, podríamos no estar en posibilidad de acceder a su solicitud de ejercicio de derechos ARCO. Estas limitaciones buscan proteger otros intereses legítimos o cumplir con obligaciones legales."
          basicDescription="Existen situaciones legales donde no es posible ejercer los derechos ARCO, como obligaciones legales, investigaciones o protección de intereses de terceros."
          accentColor="red"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 26, 34 LFPDPPP",
            tooltip:
              "La ley prevé excepciones al ejercicio de los derechos ARCO.",
          }}
          sections={[
            {
              subtitle: "Casos donde pueden existir limitaciones",
              basicContent:
                "Si la ley obliga a conservar datos, hay una orden judicial, o si afecta a terceros o investigaciones.",
              detailedContent: [
                "Cuando el tratamiento de los datos personales esté previsto en una ley que impida el ejercicio del derecho.",
                "Cuando la cancelación de datos personales haya sido ordenada por autoridad competente.",
                "Cuando se obstaculice el cumplimiento de obligaciones legales o se impida el ejercicio de defensas legales.",
                "Cuando los datos personales sean necesarios para proteger los intereses jurídicamente tutelados del titular o de terceros.",
                "Cuando exista un impedimento legal o la resolución de una autoridad competente que restrinja el acceso o la modificación de los datos personales.",
                "Cuando los datos sean necesarios para la investigación y persecución de delitos, o la administración de justicia.",
                "Cuando se relacionen con información que, al ser revelada, pueda comprometer la seguridad nacional o el orden público.",
              ],
              collapsible: true,
              variant: "highlight", // Destacar esta sección ya que es crucial
            },
          ]}
          footerNote={{
            type: "warning",
            text: "Estas limitaciones están establecidas por la legislación mexicana en materia de protección de datos personales para garantizar la seguridad jurídica.",
          }}
        />

        <InfoCard
          id="revocacion-consentimiento"
          icon={<HandRaisedIcon className="h-6 w-6" />}
          title="Revocación del consentimiento"
          description="Puedes revocar el consentimiento que nos hayas otorgado para el tratamiento de tus datos personales en cualquier momento. Sin embargo, es importante que conozcas las implicaciones de esta decisión."
          basicDescription="Puedes retirar tu consentimiento en cualquier momento. Esto podría afectar algunos servicios, pero no anulará tratamientos previos ya realizados."
          accentColor="orange"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 8, 10 LFPDPPP",
            tooltip:
              "Derecho a revocar el consentimiento previamente otorgado.",
          }}
          actionGuide={{
            title: "Cómo revocar tu consentimiento",
            description:
              "Sigue estos pasos para retirar tu consentimiento al tratamiento de datos.",
            steps: [
              "Envía un correo electrónico a privacidad@ratacueva.com con el asunto 'Revocación de Consentimiento'.",
              "Especifica claramente el alcance de tu revocación (ej. 'Deseo revocar el consentimiento para recibir comunicaciones de marketing').",
              "Incluye tu nombre completo y el correo electrónico asociado a tu cuenta para verificación de identidad.",
              "Recibirás una confirmación de nuestra parte una vez que tu solicitud haya sido procesada.",
            ],
            nextAction: {
              label: "Enviar email de revocación",
              href: "mailto:privacidad@ratacueva.com?subject=Revocación%20de%20Consentimiento",
              external: true,
            },
          }}
          sections={[
            {
              subtitle: "Consideraciones importantes",
              basicContent:
                "La revocación puede impedirnos prestarte ciertos servicios y no tiene efectos retroactivos.",
              detailedContent:
                "La revocación puede tener como consecuencia que no podamos seguir prestándote ciertos servicios o funcionalidades (especialmente si el consentimiento es la única base legal para el tratamiento de esos datos), o que concluyamos nuestra relación comercial. Es importante recalcar que esta revocación no tendrá efectos retroactivos sobre el tratamiento de datos personales realizado previamente a su solicitud.",
              collapsible: true,
            },
            {
              subtitle: "Proceso de revocación",
              basicContent:
                "Envía un correo a privacidad@ratacueva.com especificando los tratamientos que deseas detener.",
              detailedContent:
                "Puedes revocar tu consentimiento enviando un correo a privacidad@ratacueva.com especificando qué tratamientos deseas que cesen y confirmando tu identidad con una copia de tu identificación oficial. Procesaremos tu solicitud a la brevedad posible.",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "La revocación del consentimiento no afecta la licitud del tratamiento basado en el consentimiento previo a su revocación, ni tampoco los tratamientos necesarios por obligación legal.",
          }}
        />

        <InfoCard
          id="mecanismos-automatizados"
          icon={<ClockIcon className="h-6 w-6" />} // Reutilizando ClockIcon, o buscando uno más representativo como Ajustes
          title="Mecanismos automatizados para ejercer tus derechos"
          description="Para facilitar y agilizar el ejercicio de tus derechos ARCO y la gestión de tu privacidad, hemos implementado los siguientes mecanismos automatizados y directos."
          basicDescription="Hemos habilitado un portal de privacidad y un centro de control de datos en tu cuenta para que gestiones tus derechos fácilmente."
          accentColor="green"
          legalBadge={{
            type: "recommendation",
            tooltip:
              "Facilitamos el ejercicio de derechos a través de herramientas accesibles.",
          }}
          sections={[
            {
              subtitle: "Portal de privacidad",
              basicContent:
                "Un portal dedicado (www.ratacueva.com/privacidad) para enviar solicitudes y dar seguimiento a su estado.",
              detailedContent:
                "Acceda a nuestro portal especializado en: www.ratacueva.com/privacidad. Aquí podrá enviar sus solicitudes de derechos ARCO de manera electrónica, con un formulario guiado y la posibilidad de dar seguimiento a su estatus en tiempo real con un número de folio.",
              collapsible: true,
            },
            {
              subtitle: "Centro de control de datos",
              basicContent:
                "Desde tu cuenta de usuario, puedes gestionar directamente algunos aspectos de tu privacidad en la sección 'Configuración de Privacidad'.",
              detailedContent:
                "Desde su cuenta de usuario, acceda a la sección 'Configuración de Privacidad'. Allí podrá gestionar directamente algunos aspectos del tratamiento de sus datos, como preferencias de comunicación, consentimiento para finalidades secundarias y la revisión de sus datos básicos.",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Te recomendamos utilizar estos mecanismos para una gestión más rápida y eficiente de tus derechos.",
          }}
        />
      </>
    ),
  },
  // Privacidad de menores
  {
    id: "privacidad-menores",
    path: "/privacy-policy/privacidad-menores",
    title: "Privacidad de menores de edad",
    subtitle:
      "En RataCueva implementamos las medidas más estrictas para proteger los datos personales de menores de 18 años, cumpliendo con las normativas especiales de protección infantil y priorizando siempre su bienestar digital.",
    summary:
      "Medidas de RataCueva para proteger los datos de menores de 18 años, incluyendo verificación de edad, consentimiento parental y derechos especiales.",
    icon: <HeartIcon className="h-6 w-6" />, // Un icono que representa cuidado o protección
    currentPageNumber: 8,
    highlightBox: {
      icon: <ExclamationTriangleIcon className="h-6 w-6" />,
      title: "Protección prioritaria de menores",
      type: "urgent", // 'urgent' es un buen tipo para esta alerta crítica
      content: [
        "NO recopilamos datos de menores sin consentimiento parental: Todo tratamiento de datos de menores de 18 años requiere autorización expresa de padres o tutores legales.",
        "Si detectas que un menor proporcionó datos sin autorización, contacta inmediatamente a menores@ratacueva.com para su eliminación.",
      ],
    },
    quickAccessCards: [
      {
        title: "Verificación de edad",
        description: "Mecanismos de identificación",
        href: "#verificacion-edad",
        category: "importante",
      },
      {
        title: "Consentimiento parental",
        description: "Autorización de tutores legales",
        href: "#consentimiento-parental",
        category: "importante",
      },
      {
        title: "Canal especializado",
        description: "menores@ratacueva.com",
        href: "#contacto-menores",
        category: "contacto",
      },
    ],
    faqs: [
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
    ],
    content: (
      <>
        <InfoCard
          id="verificacion-edad"
          icon={<ShieldCheckIcon className="h-6 w-6" />}
          title="Verificación de edad y detección de menores"
          description="Implementamos múltiples mecanismos para identificar cuando un usuario es menor de edad y aplicar las protecciones correspondientes de manera inmediata y efectiva, priorizando su seguridad digital."
          basicDescription="Usamos declaración de edad, validación de pago y análisis de comportamiento para identificar a menores y activar protecciones especiales."
          accentColor="blue"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 8, 16 LFPDPPP",
            tooltip:
              "Es obligatorio obtener consentimiento parental para datos de menores y verificar la edad.",
          }}
          sections={[
            {
              subtitle: "Métodos de verificación que utilizamos",
              basicContent:
                "Declaración de edad al registrarse, validación con métodos de pago y monitoreo de patrones de comportamiento.",
              detailedContent: [
                "Declaración explícita de edad durante el proceso de registro de cuenta.",
                "Validación con métodos de pago (las tarjetas de crédito/débito generalmente requieren mayoría de edad).",
                "Verificación de documentos oficiales cuando sea necesario para confirmar la edad.",
                "Análisis de direcciones de envío o datos que pudieran vincularse a instituciones educativas.",
                "Monitoreo de patrones de comportamiento atípicos o que sugieran que el usuario es un menor de edad.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Respuesta automática al detectar un menor",
              basicContent:
                "Si detectamos un menor, suspendemos el registro, solicitamos consentimiento parental y limitamos funcionalidades.",
              detailedContent: [
                "Suspensión inmediata del proceso de registro de cuenta.",
                "Activación de protecciones especiales de privacidad de forma automática.",
                "Solicitud automática y prioritaria de consentimiento parental verificable.",
                "Limitación estricta de funcionalidades hasta obtener la autorización debida.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Protecciones especiales activadas para menores",
              basicContent:
                "Prohibición de marketing, limitación de tratamiento de datos, monitoreo especial y restricción de compartir datos con terceros.",
              detailedContent: [
                "Prohibición total de comunicaciones de marketing directo o publicidad personalizada.",
                "Limitación estricta en el tipo y volumen de datos que se tratan.",
                "Monitoreo especial de todas las actividades para asegurar el cumplimiento de políticas de protección.",
                "Aplicación de políticas de retención de datos reducidas y eliminación prioritaria.",
                "Restricción de compartir datos con terceros, salvo con consentimiento parental expreso.",
              ],
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "warning",
            text: "La verificación de edad es obligatoria y no se puede omitir para usuarios que declaren o parezcan ser menores de 18 años.",
          }}
        />

        <InfoCard
          id="consentimiento-parental"
          icon={<UserGroupIcon className="h-6 w-6" />}
          title="Consentimiento parental y autorización de tutores"
          description="El consentimiento de padres o tutores legales es un requisito indispensable y verificado para cualquier tratamiento de datos personales de menores de 18 años. Este proceso garantiza que los adultos responsables autoricen expresamente y de forma informada cualquier uso de información de sus hijos."
          basicDescription="Requerimos y verificamos el consentimiento expreso de padres o tutores para procesar datos de menores, con un proceso claro de obtención y revocación."
          accentColor="green"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 8 LFPDPPP, Lineamientos INAI",
            tooltip:
              "La ley exige el consentimiento expreso e informado de los padres o tutores para el tratamiento de datos de menores.",
          }}
          sections={[
            {
              subtitle: "Proceso completo de obtención de consentimiento",
              basicContent:
                "Identificación y verificación del padre/tutor, explicación detallada del tratamiento y consentimiento expreso por escrito.",
              detailedContent: [
                "Identificación verificada del padre/madre o tutor legal que otorga el consentimiento.",
                "Verificación documental de la relación parental con el menor (ej. acta de nacimiento).",
                "Explicación detallada y comprensible del tratamiento de datos propuesto y sus implicaciones.",
                "Obtención de consentimiento expreso e informado por escrito o a través de un mecanismo verificable.",
                "Registro y documentación completa del consentimiento otorgado para fines de auditoría.",
                "Confirmación de comprensión de derechos y obligaciones por parte del padre/tutor.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Documentación obligatoria requerida",
              basicContent:
                "Identificación oficial del padre/tutor, acta de nacimiento del menor y autorización firmada específica para RataCueva.",
              detailedContent: [
                "Identificación oficial vigente del padre/tutor (INE, pasaporte, cédula profesional).",
                "Acta de nacimiento del menor (o documento que compruebe la relación parental o tutela legal).",
                "Formato de autorización firmada específicamente para RataCueva, con detalle de los consentimientos.",
                "Contacto directo verificable del padre/tutor para futuras comunicaciones y verificaciones.",
                "Comprobante de domicilio actualizado del padre/tutor para fines de seguridad.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Revocación del consentimiento",
              basicContent:
                "Los padres pueden revocar el consentimiento en cualquier momento, lo que lleva a la eliminación inmediata de los datos del menor y suspensión de la cuenta.",
              detailedContent:
                "Los padres o tutores pueden revocar el consentimiento en cualquier momento enviando un correo a menores@ratacueva.com con la documentación de identificación. La revocación resultará en la eliminación inmediata de todos los datos del menor de nuestros sistemas y la suspensión permanente de la cuenta, salvo que exista una obligación legal de retención de datos mínimos.",
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Para asegurar la protección continua, el consentimiento debe ser renovado anualmente para mantener activa la cuenta del menor.",
          }}
        />

        <InfoCard
          id="derechos-especiales-menores"
          icon={<DocumentCheckIcon className="h-6 w-6" />}
          title="Derechos especiales de los menores"
          description="Los menores de edad tienen derechos prioritarios y especiales en el tratamiento de sus datos personales, con protecciones adicionales que van más allá de los derechos ARCO estándar, reflejando su mayor vulnerabilidad."
          basicDescription="Los menores tienen derechos ARCO prioritarios y protecciones adicionales como el derecho al olvido reforzado y la prohibición de marketing directo."
          accentColor="purple"
          legalBadge={{
            type: "mandatory",
            lawReference: "Lineamientos INAI, COPAA",
            tooltip:
              "La ley y mejores prácticas establecen protecciones reforzadas para los derechos de los menores.",
          }}
          sections={[
            {
              subtitle: "Derechos ARCO prioritarios para menores",
              basicContent:
                "Acceso, rectificación, cancelación y oposición de datos con atención expedita y preferente.",
              detailedContent: [
                "Acceso prioritario: Obtención de información inmediata sobre el tratamiento de sus datos.",
                "Rectificación expedita: Corrección de datos inexactos, incompletos o desactualizados sin demora.",
                "Cancelación preferente: Eliminación inmediata de datos cuando no haya una base legal clara para su retención.",
                "Oposición reforzada: Derecho amplificado a oponerse al tratamiento de sus datos, especialmente para fines no esenciales.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Protecciones adicionales exclusivas",
              basicContent:
                "Derecho al olvido digital reforzado, portabilidad simplificada, limitación de perfilado y prohibición total de marketing directo.",
              detailedContent: [
                "Derecho al olvido digital reforzado y prioritario: Mayor facilidad para solicitar la supresión de contenido público.",
                "Portabilidad de datos simplificada y asistida: Facilidad para obtener sus datos en un formato estructurado y transferible.",
                "Limitación estricta del perfilado y decisiones automatizadas: Prohibición de toma de decisiones basadas exclusivamente en el perfilado automatizado que afecte al menor.",
                "Protección absoluta contra marketing directo: No se enviará publicidad o promociones directas a menores.",
                "Derecho a la supervisión parental constante y transparente: Acceso completo de los padres a la información y actividad del menor.",
                "Derecho a la eliminación automática al cumplir mayoría de edad: Posibilidad de solicitar la eliminación de todos sus datos al alcanzar los 18 años.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Ejercicio de derechos",
              basicContent:
                "Los padres o tutores ejercen estos derechos en nombre del menor hasta la mayoría de edad, momento en que el menor puede decidir.",
              detailedContent:
                "Los padres o tutores legales pueden ejercer todos estos derechos en nombre del menor hasta que este alcance la mayoría de edad (18 años). Al cumplir los 18, el menor puede decidir si desea continuar con la cuenta y el tratamiento de sus datos, ejerciendo sus propios derechos como adulto.",
              collapsible: true,
              variant: "highlight",
            },
          ]}
        />

        <InfoCard
          id="responsabilidades-padres"
          icon={<UserGroupIcon className="h-6 w-6" />}
          title="Responsabilidades de padres y tutores"
          description="Los padres y tutores legales tienen responsabilidades específicas y cruciales en la supervisión del uso de servicios digitales por menores, asegurando un entorno seguro y adecuado para ellos."
          basicDescription="Los padres y tutores deben supervisar activamente el uso de plataformas digitales por sus hijos, gestionar consentimientos y ejercer derechos en su nombre."
          accentColor="orange"
          legalBadge={{
            type: "mandatory",
            lawReference: "Responsabilidad parental",
            tooltip:
              "Los padres son legalmente responsables de las acciones de sus hijos menores.",
          }}
          sections={[
            {
              subtitle: "Supervisión activa",
              basicContent:
                "Monitorear el uso de plataformas, revisar actividad y educar sobre seguridad digital.",
              detailedContent: [
                "Monitorear activamente el uso que sus hijos menores hacen de plataformas digitales.",
                "Revisar periódicamente la actividad en la cuenta del menor para asegurar su bienestar.",
                "Establecer límites apropiados para la edad y el tiempo de uso de la plataforma.",
                "Educar a sus hijos sobre la importancia de la seguridad y privacidad digital.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Gestión de consentimientos",
              basicContent:
                "Otorgar/denegar consentimientos, revisar y actualizar permisos y revocar cuando sea necesario.",
              detailedContent: [
                "Otorgar o denegar autorizaciones de tratamiento de datos personales de sus hijos.",
                "Revisar y actualizar los permisos otorgados según sea necesario.",
                "Revocar consentimientos cuando lo consideren apropiado para proteger la privacidad del menor.",
                "Mantener actualizada su información de contacto para recibir notificaciones importantes.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Ejercicio de derechos",
              basicContent:
                "Ejercer derechos ARCO y presentar quejas en nombre de sus hijos.",
              detailedContent: [
                "Ejercer los derechos ARCO (Acceso, Rectificación, Cancelación, Oposición) en nombre de sus hijos.",
                "Presentar quejas o reclamaciones ante RataCueva o la autoridad competente cuando sea necesario.",
                "Solicitar información específica sobre el tratamiento de datos del menor.",
                "Coordinar directamente con RataCueva para asegurar la protección óptima del menor.",
              ],
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "warning",
            text: "Los padres son responsables legales de las acciones de sus hijos menores en plataformas digitales y de la veracidad del consentimiento otorgado.",
          }}
        />

        <InfoCard
          id="procedimiento-notificacion"
          icon={<ExclamationCircleIcon className="h-6 w-6" />}
          title="Procedimiento de notificación de uso no autorizado"
          description="Si descubre que un menor de edad proporcionó datos personales a RataCueva sin su consentimiento parental, es fundamental que siga este procedimiento para asegurar una resolución inmediata y la protección del menor."
          basicDescription="Si tu hijo menor usó la plataforma sin tu permiso, notifícanos a menores@ratacueva.com con evidencia parental para suspensión y eliminación de datos."
          accentColor="red"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 8, 30 LFPDPPP",
            tooltip:
              "Obligación del responsable de atender solicitudes sobre datos de menores y eliminar información no autorizada.",
          }}
          actionGuide={{
            title:
              "Pasos para notificar uso no autorizado de datos de un menor",
            description:
              "Actúe rápidamente para proteger la privacidad de su hijo siguiendo estas indicaciones.",
            steps: [
              "Contacto inmediato: Envíe un correo electrónico a nuestro canal especializado: menores@ratacueva.com.",
              "Proporcione información esencial: Incluya el nombre completo del menor, su email/usuario (si lo conoce) y la descripción del uso no autorizado.",
              "Acredite su relación parental: Adjunte una copia de su identificación oficial y un documento que compruebe la relación (ej. acta de nacimiento del menor).",
              "Verificación y acción: Nuestro equipo verificará la información y procederá con la suspensión de la cuenta y eliminación de los datos del menor.",
              "Confirmación: Recibirá un correo de confirmación una vez que el proceso haya finalizado.",
            ],
            nextAction: {
              label: "Enviar email a menores@ratacueva.com",
              href: "mailto:menores@ratacueva.com?subject=Uso%20no%20autorizado%20de%20datos%20de%20menor",
              external: true,
            },
          }}
          sections={[
            {
              subtitle: "Información requerida para la notificación",
              basicContent:
                "Nombre del menor, email/usuario, tu identificación como padre/tutor, documento que acredite la relación parental y descripción del uso no autorizado.",
              detailedContent: [
                "Nombre completo del menor afectado.",
                "Email o usuario de la cuenta del menor (si lo conoce).",
                "Su identificación oficial vigente como padre/tutor legal.",
                "Documento que acredite la relación parental (ej. acta de nacimiento, sentencia de tutela).",
                "Descripción clara y precisa del uso no autorizado detectado.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Tiempos de respuesta y acciones de RataCueva",
              basicContent:
                "Confirmación en 2 horas, suspensión temporal en 24 horas y eliminación de datos en 72 horas.",
              detailedContent: [
                "Confirmación de recepción de su notificación: en un plazo máximo de 2 horas hábiles.",
                "Suspensión temporal de la cuenta del menor (si aplica): en un plazo máximo de 24 horas hábiles tras la verificación inicial.",
                "Eliminación de datos personales del menor: en un plazo máximo de 72 horas hábiles tras la verificación completa y confirmación parental.",
                "Confirmación final de eliminación: en un plazo máximo de 5 días hábiles.",
              ],
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Actuamos con la máxima urgencia en casos de uso no autorizado de datos de menores.",
          }}
        />

        <InfoCard
          id="contacto-menores"
          icon={<PhoneIcon className="h-6 w-6" />}
          title="Canal especializado para asuntos de menores"
          description="Disponemos de un canal de comunicación dedicado y especializado para atender exclusivamente temas relacionados con la privacidad de menores de edad, asegurando una atención prioritaria y experta."
          basicDescription="Usa nuestro email (menores@ratacueva.com) o línea directa para consultas, denuncias o solicitudes ARCO relacionadas con menores."
          accentColor="blue"
          legalBadge={{
            type: "recommendation",
            tooltip:
              "Recomendación de contar con un canal específico para menores.",
          }}
          sections={[
            {
              subtitle: "Información de contacto",
              basicContent:
                "Email: menores@ratacueva.com. Línea directa: +52 (55) 1234-5678 ext. 3. Atención prioritaria en horario de oficina.",
              detailedContent: [
                "Email especializado: menores@ratacueva.com (monitoreado 24/7 para emergencias, respuesta prioritaria).",
                "Línea directa: +52 (55) 1234-5678 ext. 3 (disponible Lunes a viernes 9:00-18:00 hrs, hora de Ciudad de México).",
                "Atención prioritaria: Todas las comunicaciones recibidas a través de este canal son tratadas con la máxima urgencia y confidencialidad.",
                "Respuesta de emergencia: Nuestro equipo está disponible 24/7 para casos urgentes de uso no autorizado.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Tipos de consultas atendidas",
              basicContent:
                "Denuncias, solicitudes ARCO, consultas de consentimiento, asesoría y reportes de seguridad para menores.",
              detailedContent: [
                "Denuncias de uso no autorizado de datos de menores.",
                "Solicitudes de ejercicio de derechos ARCO para menores.",
                "Consultas sobre el proceso de consentimiento parental.",
                "Asesoría sobre la protección digital de menores en nuestra plataforma.",
                "Reportes de incidentes de seguridad que involucren datos de menores.",
              ],
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Nuestro equipo especializado en protección de menores está certificado en privacidad infantil para brindarte la mejor asesoría.",
          }}
        />

        <InfoCard
          id="compromiso-proteccion-infantil"
          icon={<HeartIcon className="h-6 w-6" />}
          title="Nuestro compromiso con la protección infantil"
          description="La protección de datos personales de menores de edad es una prioridad fundamental que guía todas nuestras decisiones de tratamiento de datos, y nos esforzamos por ir más allá de los requisitos legales mínimos."
          basicDescription="La protección de menores es un compromiso ético y legal fundamental de RataCueva, con estándares técnicos, políticas y monitoreo especializado."
          accentColor="green"
          legalBadge={{
            type: "recommendation",
            tooltip:
              "Más allá de la ley, es un compromiso ético y una buena práctica.",
          }}
          sections={[
            {
              subtitle: "Estándares especiales",
              basicContent:
                "Protecciones técnicas adicionales, políticas de retención reducidas, monitoreo especial y capacitación del personal.",
              detailedContent: [
                "Implementación de protecciones técnicas adicionales para cuentas de menores.",
                "Aplicación de políticas de retención de datos reducidas específicamente para información de menores.",
                "Monitoreo especial de actividades sospechosas o inusuales en cuentas de menores.",
                "Capacitación especializada y continua del personal en protección de datos infantiles.",
                "Cumplimiento con estándares internacionales de protección infantil, como COPPA (Children's Online Privacy Protection Act) y el GDPR (Reglamento General de Protección de Datos) en lo aplicable.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Mejora continua",
              basicContent:
                "Revisamos políticas constantemente, nos actualizamos con mejores prácticas y colaboramos con organizaciones de protección infantil.",
              detailedContent: [
                "Revisión constante de políticas y procedimientos de protección para menores.",
                "Actualización continua según las mejores prácticas internacionales en privacidad infantil.",
                "Colaboración activa con organizaciones dedicadas a la protección de los derechos de la infancia y la privacidad digital.",
                "Implementación de tecnologías avanzadas para detectar y prevenir riesgos para menores.",
                "Transparencia total con padres, tutores y autoridades sobre nuestras prácticas de protección.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Compromiso a futuro",
              basicContent:
                "Nos comprometemos a mejorar continuamente nuestras medidas de protección, priorizando siempre el bienestar y la seguridad de los menores.",
              detailedContent:
                "Nos comprometemos a mantener y mejorar continuamente nuestras medidas de protección, siempre priorizando el bienestar y la seguridad digital de los menores de edad. Su protección no es solo una obligación legal, sino un compromiso ético fundamental de RataCueva.",
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "La seguridad y privacidad de los menores es nuestra máxima prioridad, y trabajamos constantemente para superarnos en este aspecto.",
          }}
        />
      </>
    ),
  },
  // ¿Cuánto tiempo conservamos tus datos?
  {
    id: "cuanto-tiempo-conservamos",
    path: "/privacy-policy/cuanto-tiempo-conservamos",
    title: "¿Cuánto tiempo conservamos tus datos?",
    subtitle:
      "Conservamos tus datos personales solo durante el tiempo estrictamente necesario para cumplir con las finalidades informadas y las obligaciones legales aplicables. Te explicamos los plazos y criterios de conservación, así como tus derechos para solicitar la eliminación anticipada.",
    summary:
      "Información sobre los plazos de conservación de datos, los criterios legales que seguimos y tus opciones para solicitar la eliminación anticipada de tu información.",
    icon: <ClockIcon className="h-6 w-6" />,
    currentPageNumber: 9, // Ajustado a 9, siguiendo tu patrón de numeración
    highlightBox: {
      icon: <InformationCircleIcon className="h-6 w-6" />,
      title: "Plazos claros y eliminación garantizada",
      type: "info",
      content: [
        "Tus datos se conservan solo el tiempo necesario para cumplir con las finalidades informadas y las obligaciones legales.",
        "Puedes solicitar la eliminación anticipada de tus datos cuando ya no sean necesarios para el servicio o por motivos legítimos.",
      ],
    },
    quickAccessCards: [
      {
        title: "Plazos legales",
        description: "Conservación según LFPDPPP y obligaciones fiscales",
        href: "#plazos-legales",
        category: "importante",
      },
      {
        title: "Eliminación anticipada",
        description: "Solicítala cuando ya no sea necesario el tratamiento",
        href: "#eliminacion-anticipada",
        category: "importante",
      },
      {
        title: "Criterios de conservación",
        description: "Finalidad, tipo de dato y obligaciones legales",
        href: "#criterios-conservacion",
        category: "informativo",
      },
    ],
    faqs: [
      {
        question: "¿Por cuánto tiempo guardan mis datos personales?",
        answer:
          "El plazo depende de la finalidad y las obligaciones legales. Por ejemplo, datos de facturación se conservan por al menos 5 años según la ley fiscal, mientras que datos de cuenta pueden eliminarse al cerrar la cuenta.",
      },
      {
        question: "¿Puedo pedir que eliminen mis datos antes del plazo legal?",
        answer:
          "Sí, puedes solicitar la eliminación anticipada si ya no son necesarios para la finalidad informada, salvo que exista una obligación legal de conservación.",
      },
      {
        question: "¿Qué pasa con mis datos si elimino mi cuenta?",
        answer:
          "Eliminamos todos los datos asociados a tu cuenta, salvo aquellos que deban conservarse por obligaciones legales (por ejemplo, facturación).",
      },
      {
        question: "¿Cómo sé cuándo se eliminarán mis datos?",
        answer:
          "Te informamos los plazos en este aviso y puedes consultarlos en cualquier momento. Además, te notificamos cuando se realiza la eliminación definitiva.",
      },
    ],
    content: (
      <>
        <InfoCard
          id="plazos-legales"
          icon={<ClockIcon className="h-6 w-6" />}
          title="Plazos legales de conservación"
          description="Conservamos tus datos personales conforme a los plazos estrictamente establecidos por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y otras normativas aplicables."
          basicDescription="Conservamos tus datos por el tiempo legalmente requerido para cumplir con obligaciones fiscales (5-10 años) y la operación del servicio."
          accentColor="blue"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 11, 37 LFPDPPP",
            tooltip:
              "La ley exige conservar ciertos datos por plazos mínimos para cumplir con obligaciones fiscales y legales.",
          }}
          sections={[
            {
              subtitle: "Ejemplos de plazos legales",
              basicContent:
                "Datos de facturación: mínimo 5 años. Datos de cuenta: hasta que elimines tu cuenta o retires tu consentimiento.",
              detailedContent: [
                "Datos de facturación y transacciones: mínimo 5 años por ley fiscal (Código Fiscal de la Federación).",
                "Datos de cuenta y perfil: hasta que elimines tu cuenta o retires el consentimiento (si no hay otra base legal).",
                "Datos de soporte y atención al cliente: 2 años tras la última interacción o resolución del caso.",
                "Datos de marketing y preferencias: hasta que retires el consentimiento para recibir comunicaciones.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Excepciones y conservación extendida",
              basicContent:
                "Los plazos pueden extenderse por litigios, investigaciones de fraude o requerimientos legales específicos de autoridades.",
              detailedContent: [
                "Conservación extendida: en casos de litigio, investigación de fraude, o procesos administrativos/judiciales en curso.",
                "Requerimientos de autoridades: si existe un requerimiento legal por parte de autoridades fiscales, judiciales o administrativas.",
                "Prevención de fraudes: por períodos limitados para prevenir actividades fraudulentas o para el ejercicio de defensas legales.",
              ],
              collapsible: true,
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "warning",
            text: "Algunos datos deben conservarse por ley incluso si solicitas la eliminación de tu cuenta, como los datos fiscales.",
          }}
        />
        <InfoCard
          id="criterios-conservacion"
          icon={<DocumentTextIcon className="h-6 w-6" />}
          title="Criterios para determinar el plazo de conservación"
          description="El plazo exacto de conservación de tus datos personales depende de la finalidad para la que fueron recopilados, el tipo de dato específico y las obligaciones legales aplicables."
          basicDescription="El plazo de conservación se basa en el propósito del dato, su tipo (ej. sensible) y nuestras obligaciones legales. Solo conservamos lo estrictamente necesario."
          accentColor="green"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 11 LFPDPPP",
            tooltip:
              "La ley exige que los datos se eliminen cuando dejan de ser necesarios para la finalidad informada, cumpliendo el principio de finalidad.",
          }}
          sections={[
            {
              subtitle: "Finalidad del tratamiento",
              basicContent:
                "El tiempo de conservación varía según para qué se usen los datos: compras, soporte, marketing, etc.",
              detailedContent: [
                "Compra y facturación: Conservación por los plazos fiscales y comerciales necesarios para garantías y comprobaciones.",
                "Soporte y atención al cliente: Datos relacionados con tickets y comunicaciones se conservan para referencia futura en casos similares.",
                "Marketing y análisis: Datos se conservan hasta que revoques tu consentimiento o te opongas al tratamiento.",
                "Seguridad de la plataforma: Logs y registros se mantienen por un tiempo limitado para detectar y prevenir fraudes o ciberataques.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Tipo de dato",
              basicContent:
                "Datos sensibles y financieros tienen plazos más cortos y métodos de eliminación reforzados para mayor seguridad.",
              detailedContent: [
                "Datos sensibles: Aquellos que afectan la esfera más íntima del titular, como origen racial o estado de salud, tienen plazos de eliminación inmediata una vez cumplida su finalidad y con medidas de seguridad reforzadas.",
                "Datos financieros: Como información de pago, se eliminan o tokenizan una vez procesada la transacción, sin que RataCueva los almacene.",
                "Datos de navegación: Como IPs y cookies, tienen períodos de retención periódicos y a menudo se anonimizan.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Obligaciones legales y contractuales",
              basicContent:
                "Leyes fiscales o acuerdos contractuales pueden exigirnos conservar datos por plazos mínimos, incluso si ya no los necesitas.",
              detailedContent: [
                "Ley fiscal: El Código Fiscal de la Federación exige la conservación de documentación contable por un mínimo de 5 a 10 años.",
                "Contratos y garantías: Datos necesarios para cumplir con obligaciones derivadas de contratos o garantías de productos se conservan hasta el fin de la relación contractual.",
                "Requerimientos judiciales o administrativos: Conservación hasta el cierre definitivo del proceso legal o administrativo.",
              ],
              collapsible: true,
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Nos esforzamos en eliminar o anonimizar tus datos periódicamente para proteger tu privacidad y reducir riesgos.",
          }}
        />
        <InfoCard
          id="eliminacion-anticipada"
          icon={<TrashIcon className="h-6 w-6" />}
          title="Eliminación anticipada de datos"
          description="Tienes el derecho de solicitar la eliminación anticipada de tus datos personales cuando ya no sean necesarios para la finalidad informada, salvo que exista una obligación legal que nos impida hacerlo."
          basicDescription="Puedes solicitar la eliminación anticipada de tus datos contactando a privacidad@ratacueva.com si ya no son necesarios, a menos que haya una obligación legal de conservarlos."
          accentColor="purple"
          legalBadge={{
            type: "optional",
            lawReference: "Art. 22 LFPDPPP",
            tooltip:
              "Tienes derecho a solicitar la cancelación de tus datos personales cuando corresponda.",
          }}
          sections={[
            {
              subtitle: "Cómo solicitar la eliminación",
              basicContent:
                "Envía tu solicitud a privacidad@ratacueva.com, especificando qué datos y por qué. Adjunta tu identificación.",
              detailedContent: [
                "Correo electrónico: Envía tu solicitud a privacidad@ratacueva.com.",
                "Claridad de la solicitud: Indica claramente qué datos deseas eliminar y la razón de tu solicitud.",
                "Validación de identidad: Adjunta una copia de tu identificación oficial vigente para validar tu solicitud.",
                "Confirmación: Recibirás una confirmación y el cronograma estimado de eliminación una vez procesada tu solicitud.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Excepciones legales a la eliminación",
              basicContent:
                "No podemos eliminar datos que deban conservarse por ley (ej. facturación, litigios) o para cumplir contratos.",
              detailedContent: [
                "Datos de facturación y transacciones: Su conservación es obligatoria por ley fiscal.",
                "Datos involucrados en litigios o investigaciones: Necesarios para el ejercicio o defensa de reclamaciones legales.",
                "Datos necesarios para cumplir obligaciones contractuales: Por ejemplo, para garantías de productos o servicios aún vigentes.",
                "Prevención de fraudes: Para proteger los intereses legítimos de RataCueva o de terceros.",
              ],
              collapsible: true,
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "warning",
            text: "La eliminación anticipada no aplica a datos que deban conservarse por una obligación legal o para el cumplimiento de un contrato.",
          }}
        />
        <InfoCard
          id="proceso-eliminacion-segura" // Este ID no estaba en tu quickAccessCards, pero es importante.
          icon={<TrashIcon className="h-6 w-6" />}
          title="Proceso de eliminación segura"
          description="Cuando se cumple el período de conservación legal o de finalidad, implementamos procesos robustos y seguros para eliminar definitivamente tus datos personales, impidiendo su recuperación."
          basicDescription="Cuando el plazo se cumple, eliminamos tus datos de forma segura mediante sobrescritura, destrucción física y verificación, impidiendo su recuperación."
          accentColor="red"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 19 LFPDPPP",
            tooltip:
              "Es obligatorio implementar medidas de seguridad para la eliminación de datos personales.",
          }}
          sections={[
            {
              subtitle: "Métodos de eliminación",
              basicContent:
                "Usamos sobrescritura segura, destrucción física de medios y eliminación de backups para garantizar que tus datos no puedan recuperarse.",
              detailedContent: [
                "Sobrescritura segura de datos digitales: Aplicación de algoritmos para hacer irrecuperable la información en discos duros y servidores.",
                "Destrucción física de medios de almacenamiento: Para soportes físicos, se realiza trituración o desmagnetización certificada.",
                "Eliminación de bases de datos y backups: Los datos se purgan de las bases de datos activas y de todas las copias de seguridad una vez que cumplen su ciclo.",
                "Certificación del proceso de destrucción: Emitimos constancias de destrucción para datos que lo requieran legalmente.",
                "Verificación de eliminación completa: Auditorías internas y externas para asegurar que los datos han sido eliminados según el estándar.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Cronograma de eliminación",
              basicContent:
                "Te notificamos 30 días antes de la eliminación. El proceso dura aprox. 7 días, con verificación adicional.",
              detailedContent: [
                "Notificación previa: 30 días antes de la eliminación programada, si aplica y es relevante para el usuario.",
                "Proceso de eliminación: El proceso técnico de eliminación inicia y dura aproximadamente 7 días laborales.",
                "Verificación: Una vez completada la eliminación, se realiza una verificación interna en 3 días adicionales.",
                "Certificación: Si lo solicitas, podemos emitir una confirmación del proceso de eliminación.",
              ],
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Puedes solicitar una certificación del proceso de eliminación de tus datos contactando a privacidad@ratacueva.com.",
          }}
        />
        <InfoCard
          id="revision-politicas-retencion" // ID corregido y más descriptivo
          icon={<ShieldCheckIcon className="h-6 w-6" />}
          title="Revisión y actualización de políticas de retención"
          description="Mantenemos nuestras políticas de conservación de datos actualizadas y sometemos nuestros procesos a una revisión periódica y estricta para garantizar el cumplimiento legal y la máxima protección de tu privacidad."
          basicDescription="Revisamos anualmente nuestras políticas de retención de datos, ajustándolas a nuevas leyes y mejores prácticas, siempre priorizando tu privacidad."
          accentColor="green"
          legalBadge={{
            type: "recommendation",
            tooltip:
              "Es una buena práctica auditar y actualizar periódicamente las políticas de conservación de datos.",
          }}
          sections={[
            {
              subtitle: "Proceso de revisión",
              basicContent:
                "Revisamos anualmente los plazos, actualizamos por ley, hacemos auditorías y evaluamos necesidades operativas.",
              detailedContent: [
                "Revisión anual de todos los períodos de conservación de datos.",
                "Actualización inmediata de políticas según cambios en la legislación (LFPDPPP, reglamentos, etc.).",
                "Auditorías internas y externas de cumplimiento de las políticas de retención.",
                "Evaluación continua de las necesidades operativas reales que justifican la conservación de datos.",
                "Implementación de mejores prácticas del sector y recomendaciones de autoridades de privacidad.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Principios que seguimos",
              basicContent:
                "Minimización, proporcionalidad, transparencia, legalidad y seguridad son nuestros principios clave en la conservación de datos.",
              detailedContent: [
                "Minimización: Conservar solo el tiempo estrictamente necesario para la finalidad.",
                "Proporcionalidad: Equilibrio entre la necesidad de conservar el dato y el impacto en la privacidad.",
                "Transparencia: Información clara y accesible sobre los períodos y criterios de conservación.",
                "Legalidad: Cumplimiento de todas las obligaciones legales y regulatorias.",
                "Seguridad: Protección de los datos durante todo su ciclo de vida, incluyendo el período de conservación.",
              ],
              collapsible: true,
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Nuestro compromiso es no conservar tus datos más tiempo del estrictamente necesario y legalmente requerido, garantizando tu privacidad.",
          }}
        />
      </>
    ),
  },
  // Cambios al aviso de privacidad
  {
    id: "cambios-aviso-privacidad",
    path: "/privacy-policy/cambios-aviso-privacidad",
    title: "Cambios a este aviso de privacidad",
    subtitle:
      "RataCueva se reserva el derecho de actualizar este aviso de privacidad para adaptarse a cambios legales, tecnológicos y operacionales, siempre manteniendo la transparencia y respetando tus derechos.",
    summary:
      "Información sobre cómo y cuándo actualizamos nuestro aviso de privacidad, incluyendo notificaciones y procesos de aceptación.",
    icon: <ArrowPathIcon className="h-6 w-6" />,
    currentPageNumber: 10,
    highlightBox: {
      icon: <InformationCircleIcon className="h-6 w-6" />,
      title: "Transparencia total en modificaciones",
      type: "info",
      content: [
        "Siempre te informamos de los cambios: Cualquier modificación será publicada claramente en nuestro sitio web con la fecha de actualización y explicación de los cambios.",
        "Tu uso continuado de la plataforma después de las modificaciones constituye tu aceptación de los nuevos términos.",
      ],
    },
    quickAccessCards: [
      {
        title: "Razones de cambios",
        description: "Por qué actualizamos el aviso",
        href: "#razones-modificaciones",
        category: "informativo",
      },
      {
        title: "Publicación de cambios",
        description: "Dónde y cómo se informan",
        href: "#publicacion-cambios",
        category: "importante",
      },
      {
        title: "Sistema de notificaciones",
        description: "Cómo te informamos activamente",
        href: "#notificaciones",
        category: "importante",
      },
      {
        title: "Aceptación y periodos",
        description: "Tu consentimiento y tiempos",
        href: "#aceptacion-modificaciones",
        category: "importante",
      },
    ],
    faqs: [
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
    ],
    content: (
      <>
        <InfoCard
          id="razones-modificaciones"
          icon={<ArrowPathIcon className="h-6 w-6" />}
          title="Razones para modificaciones"
          description="Las modificaciones a nuestro aviso de privacidad obedecen a razones específicas que garantizan su relevancia, cumplimiento legal y adaptación a las necesidades cambiantes del entorno digital."
          basicDescription="Actualizamos nuestro aviso por cambios en leyes, evolución de nuestros servicios o implementación de mejores prácticas de protección."
          accentColor="blue"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 16 LFPDPPP",
            tooltip:
              "Es obligatorio mantener actualizado el aviso de privacidad conforme a cambios legales y operativos.",
          }}
          sections={[
            {
              subtitle: "Cambios en la legislación mexicana",
              basicContent:
                "Nos adaptamos a nuevas leyes, regulaciones del INAI y reformas que afectan la protección de datos.",
              detailedContent: [
                "Actualizaciones en la Ley Federal de Protección de Datos Personales (LFPDPPP).",
                "Nuevas regulaciones o lineamientos emitidos por el INAI (Instituto Nacional de Transparencia).",
                "Reformas al Código de Comercio y otras leyes aplicables al e-commerce.",
                "Nuevas disposiciones internacionales que tienen impacto en México.",
                "Criterios jurisprudenciales relevantes en materia de privacidad y datos personales.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Evolución de nuestros servicios gaming",
              basicContent:
                "Actualizamos el aviso cuando agregamos nuevas funcionalidades, métodos de pago o expandimos nuestros servicios.",
              detailedContent: [
                "Implementación de nuevas funcionalidades o características en la plataforma.",
                "Incorporación de nuevos métodos de pago y proveedores de servicios.",
                "Expansión a nuevos mercados o regiones geográficas.",
                "Integración con nuevas plataformas o tecnologías de terceros.",
                "Mejoras en nuestros sistemas de seguridad y protección de datos.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Políticas internas y mejores prácticas",
              basicContent:
                "Mejoramos continuamente nuestras prácticas de privacidad y seguridad, adoptando estándares internacionales.",
              detailedContent: [
                "Adopción de mejores prácticas y estándares internacionales de privacidad.",
                "Actualización de procedimientos internos de seguridad y manejo de datos.",
                "Cambios en nuestra estructura corporativa o modelo de negocio.",
                "Nuevas políticas de retención y eliminación de datos.",
                "Mejoras en nuestros procesos de atención al cliente y soporte relacionados con la privacidad.",
              ],
              variant: "highlight",
              collapsible: true,
            },
          ]}
        />

        <InfoCard
          id="publicacion-cambios"
          icon={<DocumentTextIcon className="h-6 w-6" />}
          title="Publicación y disponibilidad de cambios"
          description="Todos los cambios son publicados de manera clara y accesible para garantizar que puedas estar siempre informado sobre las modificaciones a nuestro aviso de privacidad, manteniendo total transparencia."
          basicDescription="Publicamos cada cambio en nuestro sitio web principal, con información detallada y la fecha de actualización visible."
          accentColor="green"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 16 LFPDPPP",
            tooltip:
              "Es obligatorio informar sobre los cambios al aviso de privacidad de forma clara.",
          }}
          sections={[
            {
              subtitle: "Ubicaciones de publicación",
              basicContent:
                "Encontrarás los cambios en www.ratacueva.com/privacy-policy y en tu área de usuario.",
              detailedContent: [
                "Sitio web principal: Siempre disponible en www.ratacueva.com/privacy-policy.",
                "Sección destacada: En la página de inicio o en un banner durante cambios importantes.",
                "Área de tu cuenta de usuario: Para cambios que te afecten directamente, encontrarás avisos allí.",
                "Centro de ayuda y documentación legal: Como parte de nuestra biblioteca de recursos.",
                "Newsletter y comunicaciones oficiales: Avisos generales para suscriptores.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Información incluida en cada cambio",
              basicContent:
                "Cada actualización incluye la fecha de modificación, un resumen ejecutivo, la razón del cambio y su fecha de entrada en vigor.",
              detailedContent: [
                "Fecha exacta de la modificación: Siempre visible para tu referencia.",
                "Resumen ejecutivo de los cambios: Una síntesis de las modificaciones más importantes.",
                "Razón específica y justificación: Explicamos por qué se realizó cada cambio.",
                "Fecha de entrada en vigor: El día en que los nuevos términos se aplican.",
                "Versión anterior disponible: Para comparación detallada si deseas revisar los cambios punto por punto.",
                "Enlaces a secciones específicas modificadas: Para una navegación rápida a lo relevante.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Formato de presentación",
              basicContent:
                "Los cambios se resaltan y explican en lenguaje sencillo para facilitar su comprensión y revisión.",
              detailedContent:
                "Los cambios se presentan en formato claramente legible, con resaltado de las modificaciones específicas y explicaciones en lenguaje sencillo para facilitar su comprensión y revisión, asegurando que no haya ambigüedades.",
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Mantenemos disponible un historial completo de versiones anteriores para tu consulta y comparación detallada en cualquier momento.",
          }}
        />

        <InfoCard
          id="notificaciones"
          icon={<BellIcon className="h-6 w-6" />}
          title="Sistema de notificaciones"
          description="Implementamos múltiples canales de comunicación para asegurar que estés enterado de cambios importantes que puedan afectar tu privacidad y derechos, garantizando que ninguna actualización relevante pase desapercibida."
          basicDescription="Te notificamos sobre cambios importantes por email, notificaciones push, mensajes en tu cuenta y avisos en el sitio web."
          accentColor="orange"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 16 LFPDPPP",
            tooltip:
              "Es obligatorio notificar cambios significativos al aviso de privacidad.",
          }}
          sections={[
            {
              subtitle: "Canales de notificación automática",
              basicContent:
                "Usamos email, notificaciones push (si aplica), mensajes en tu panel de usuario y banners en el sitio.",
              detailedContent: [
                "Email: A tu dirección registrada en la cuenta para cambios significativos.",
                "Notificación push: Si tienes nuestra app móvil instalada y las notificaciones activadas.",
                "Mensaje destacado: En tu panel de usuario al iniciar sesión.",
                "Banner informativo: En áreas prominentes del sitio web.",
                "Notificación en redes sociales oficiales: Para una difusión más amplia de avisos generales.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Contenido detallado de las notificaciones",
              basicContent:
                "Incluimos un resumen ejecutivo, enlaces directos, la fecha de entrada en vigor y acciones recomendadas.",
              detailedContent: [
                "Resumen ejecutivo: De los cambios más importantes.",
                "Enlaces directos: A las secciones específicas modificadas para fácil acceso.",
                "Fecha exacta de entrada en vigor: Claramente indicada.",
                "Acciones recomendadas o requeridas: Si las hay, para que puedas actuar.",
                "Información de contacto: Para consultas y aclaraciones adicionales.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Criterios para notificación prioritaria",
              basicContent:
                "Priorizamos notificar cambios que afecten tus derechos fundamentales, tipos de datos recopilados o transferencias a terceros.",
              detailedContent: [
                "Cambios que afecten directamente tus derechos fundamentales (ARCO, consentimiento).",
                "Modificaciones en el tipo o categoría de datos personales que recopilamos.",
                "Establecimiento de nuevas finalidades de tratamiento de datos.",
                "Cambios en las transferencias de datos o el compartir información con terceros.",
                "Modificaciones significativas en los períodos de conservación de tus datos.",
              ],
              collapsible: true,
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "warning",
            text: "Para cambios menores (correcciones tipográficas, actualizaciones de contacto), la notificación puede ser solo a través de una actualización en el sitio web, sin aviso directo.",
          }}
        />

        <InfoCard
          id="revision-periodica"
          icon={<EyeIcon className="h-6 w-6" />}
          title="Recomendación de revisión periódica"
          description="Le recomendamos encarecidamente revisar regularmente nuestro aviso de privacidad para mantenerse informado sobre nuestras prácticas y cualquier modificación, garantizando así su control sobre su información."
          basicDescription="Revisa nuestro aviso periódicamente (trimestral o semestralmente) y siempre después de recibir notificaciones de cambios importantes."
          accentColor="purple"
          legalBadge={{
            type: "recommendation",
            lawReference: "Buenas prácticas",
            tooltip:
              "Es una buena práctica que el usuario revise la política de privacidad regularmente.",
          }}
          sections={[
            {
              subtitle: "Frecuencia recomendada",
              basicContent:
                "Sugerimos revisión trimestral para usuarios frecuentes y semestral para los ocasionales, o de inmediato si hay notificaciones.",
              detailedContent: [
                "Revisión trimestral para usuarios frecuentes de la plataforma.",
                "Revisión semestral para usuarios ocasionales.",
                "Revisión inmediata tras recibir cualquier notificación de cambios importantes.",
                "Revisión antes de proporcionar nuevos datos sensibles o utilizar nuevas funcionalidades.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Qué verificar en cada revisión",
              basicContent:
                "Presta atención a la fecha de última actualización, cambios en las finalidades y nuevas informaciones de contacto o seguridad.",
              detailedContent: [
                "Fecha de última actualización del aviso.",
                "Cambios en las finalidades de tratamiento de tus datos.",
                "Nuevos derechos o procedimientos para el ejercicio de los mismos.",
                "Modificaciones en la información de contacto del responsable.",
                "Actualizaciones en las medidas de seguridad implementadas.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Herramientas para facilitar la revisión",
              basicContent:
                "Ofrecemos resaltado de cambios recientes, un comparador de versiones y resúmenes ejecutivos para tu comodidad.",
              detailedContent: [
                "Sistema de resaltado de cambios recientes en el documento para identificar lo nuevo rápidamente.",
                "Función de comparador de versiones para ver diferencias exactas entre versiones anteriores y actuales.",
                "Resúmenes ejecutivos de modificaciones para una comprensión rápida de los puntos clave.",
                "Alertas personalizadas según tu perfil de usuario para los cambios más relevantes para ti.",
              ],
              variant: "highlight",
              collapsible: true,
            },
          ]}
        />

        <InfoCard
          id="aceptacion-modificaciones"
          icon={<CheckCircleIcon className="h-6 w-6" />}
          title="Aceptación de modificaciones"
          description="El proceso de aceptación de modificaciones está diseñado para ser claro y respetar su autonomía de decisión, brindándole tiempo y opciones para manifestar su conformidad o inconformidad con los cambios."
          basicDescription="Puedes aceptar los cambios continuando con el uso de la plataforma, o de forma explícita. Tienes 30 días para revisar y decidir."
          accentColor="green"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 8 LFPDPPP",
            tooltip:
              "El consentimiento debe ser libre, específico e informado para ser válido.",
          }}
          sections={[
            {
              subtitle: "Formas de aceptación",
              basicContent:
                "La aceptación puede ser por uso continuado, confirmación explícita, nuevas transacciones o actualización de preferencias.",
              detailedContent: [
                "Uso continuado de la plataforma: Después de un período de gracia y la notificación adecuada, tu uso continuado implica aceptación.",
                "Aceptación explícita: Mediante un botón de confirmación en un aviso prominente.",
                "Realización de nuevas transacciones: Al realizar una compra después de la fecha de entrada en vigor de los cambios.",
                "Actualización de preferencias de cuenta: Que requieran la lectura y aceptación de los nuevos términos.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Período de gracia",
              basicContent:
                "Proporcionamos generalmente 30 días para revisar cambios significativos antes de que entren en vigor, dándote tiempo para decidir.",
              detailedContent:
                "Proporcionamos generalmente un período de gracia de al menos 30 días antes de que los cambios significativos entren en vigor. Este tiempo está diseñado para que puedas evaluar las modificaciones con calma y decidir sobre tu participación continuada en la plataforma.",
              collapsible: true,
            },
            {
              subtitle: "Si no acepta las modificaciones",
              basicContent:
                "Puedes ejercer tus derechos ARCO, eliminar tu cuenta o dejar de usar servicios específicos si no estás de acuerdo con los cambios.",
              detailedContent: [
                "Puede ejercer sus derechos ARCO (Acceso, Rectificación, Cancelación, Oposición) antes de la fecha de entrada en vigor de los cambios.",
                "Puede solicitar la eliminación de su cuenta si las modificaciones afectan de manera sustancial su decisión de usar el servicio.",
                "Puede discontinuar el uso de servicios específicos que se vean afectados por los cambios.",
                "Puede contactarnos en privacidad@ratacueva.com para discutir opciones alternativas o aclarar dudas.",
              ],
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Su no aceptación de los nuevos términos no afecta la validez del tratamiento de datos realizado anteriormente bajo las versiones previas del aviso.",
          }}
        />

        <InfoCard
          id="cronologia-entrada-vigor"
          icon={<ClockIcon className="h-6 w-6" />}
          title="Cronología y entrada en vigor"
          description="Establecemos cronologías claras para la implementación de modificaciones, respetando períodos razonables de adaptación para que siempre estés informado sobre cuándo y cómo los cambios se aplicarán."
          basicDescription="Los cambios siguen una cronología clara: publicación, notificación a usuarios, período de gracia y fecha de entrada en vigor para aplicación completa."
          accentColor="red"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 16 LFPDPPP",
            tooltip:
              "Debe establecerse claramente cuándo entran en vigor las modificaciones al aviso de privacidad.",
          }}
          sections={[
            {
              subtitle: "Cronología típica",
              basicContent:
                "Publicación inmediata, notificaciones en 1-7 días, entrada en vigor de cambios significativos en 30 días.",
              detailedContent: [
                "Día 0: Publicación oficial del aviso de modificación en el sitio web.",
                "Día 1-7: Envío de notificaciones a usuarios (email, in-app, etc.).",
                "Día 30: Entrada en vigor para cambios significativos (período de gracia).",
                "Día 45: Aplicación completa y sin excepciones de las nuevas políticas.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Excepciones al cronograma",
              basicContent:
                "Cambios por emergencia legal son inmediatos, mejoras de seguridad en 7 días y correcciones menores en 14 días.",
              detailedContent: [
                "Cambios por emergencia legal o cumplimiento de mandatos judiciales: Pueden entrar en vigor de forma inmediata.",
                "Mejoras urgentes de seguridad: Pueden aplicarse en 7 días.",
                "Correcciones menores (tipográficas, formato): Generalmente en 14 días.",
                "Cambios estructurales mayores (fusión, adquisición): Pueden requerir hasta 60 días para adaptación.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Durante el período de transición",
              basicContent:
                "Mantenemos ambas versiones disponibles y aplicamos la más favorable al usuario si hay conflicto entre versiones.",
              detailedContent:
                "Durante el período de transición, mantenemos ambas versiones del aviso de privacidad disponibles para consulta. En caso de existir algún conflicto de interpretación entre la versión anterior y la nueva, aplicaremos la versión que resulte más favorable a los intereses del usuario, siempre respetando la legalidad vigente.",
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "warning",
            text: "Los cambios que sean resultado de requerimientos legales o situaciones de emergencia de seguridad pueden entrar en vigor sin un período de gracia prolongado.",
          }}
        />
      </>
    ),
  },
  // Dónde presentar quejas o denuncias
  {
    id: "donde-presentar-quejas",
    path: "/privacy-policy/donde-presentar-quejas",
    title: "¿Dónde presentar quejas o denuncias?",
    subtitle:
      "En RataCueva nos esforzamos por tratar tus datos personales de manera ética y en estricto apego a la legislación mexicana. Si consideras que tu derecho a la protección de datos ha sido lesionado, tienes el derecho de interponer una queja ante la autoridad competente.",
    summary:
      "Aprende dónde y cómo presentar una queja o denuncia si consideras que tus derechos de protección de datos han sido vulnerados, incluyendo el contacto con el INAI.",
    icon: <ExclamationTriangleIcon className="h-6 w-6" />,
    currentPageNumber: 11,
    highlightBox: {
      icon: <ExclamationCircleIcon className="h-6 w-6" />,
      title: "Tu derecho a presentar quejas",
      type: "warning",
      content: [
        "Antes de acudir al INAI: Te recomendamos intentar resolver la situación directamente con RataCueva a través de nuestros canales de atención en privacidad@ratacueva.com.",
        "Si consideras que hay una violación a la LFPDPPP o que tu derecho ha sido lesionado sin respuesta satisfactoria, puedes acudir al INAI.",
      ],
    },
    quickAccessCards: [
      {
        title: "Cuándo denunciar",
        description: "Criterios para presentar denuncia",
        href: "#cuando-denunciar",
        category: "importante",
      },
      {
        title: "Cómo denunciar",
        description: "Requisitos y procedimiento",
        href: "#como-denunciar",
        category: "importante",
      },
      {
        title: "Contacto INAI",
        description: "55 5004 2400 / 800 835 4324",
        href: "#contacto-inai",
        category: "contacto",
      },
    ],
    faqs: [
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
    ],
    content: (
      <>
        <InfoCard
          id="el-inai"
          icon={<BuildingOfficeIcon className="h-6 w-6" />}
          title="El Instituto Nacional de Transparencia (INAI)"
          description="El INAI es la autoridad encargada de garantizar la protección de datos personales en México, según lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP). Actúa como tu defensor en caso de incumplimiento."
          basicDescription="El INAI es la autoridad mexicana que protege tus datos personales. Puedes acudir a ellos si tus derechos son vulnerados por RataCueva."
          accentColor="blue"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 43 LFPDPPP",
            tooltip:
              "La ley establece al INAI como la autoridad protectora de datos personales en México.",
          }}
          sections={[
            {
              subtitle: "¿Qué es el INAI?",
              basicContent:
                "Es la autoridad competente para atender quejas y denuncias sobre el uso indebido de datos personales por parte de empresas como la nuestra.",
              detailedContent:
                "El Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI) es la autoridad competente para conocer quejas y denuncias relacionadas con el tratamiento indebido de datos personales por parte de particulares como RataCueva. Es tu última instancia de recurso legal.",
              collapsible: true,
            },
            {
              subtitle: "¿Cuándo puedes acudir al INAI?",
              basicContent:
                "Si tus derechos de protección de datos son lesionados por RataCueva, o si nuestras respuestas a tus solicitudes ARCO no son satisfactorias.",
              detailedContent: [
                "Cuando consideres que tu derecho a la protección de datos personales ha sido lesionado por alguna conducta de nuestros empleados o actuaciones.",
                "Si presumes que en el tratamiento de tus datos personales existe alguna violación a las disposiciones previstas en la LFPDPPP y su reglamento.",
                "Cuando nuestras respuestas a tus solicitudes ARCO no hayan sido satisfactorias.",
                "Si consideras que no hemos atendido adecuadamente tus derechos de privacidad después de contactarnos directamente.",
              ],
              collapsible: true,
            },
            {
              subtitle: "Nuestro compromiso de colaboración",
              basicContent:
                "RataCueva colaborará plenamente con el INAI en cualquier investigación que surja de tu queja.",
              detailedContent:
                "RataCueva colaborará plenamente con el INAI en cualquier investigación que pueda surgir de tu queja o denuncia. Nuestro objetivo es siempre resolver las situaciones de manera justa y transparente.",
              variant: "highlight",
              collapsible: true,
            },
          ]}
        />

        <InfoCard
          id="contacto-rata-cueva"
          icon={<EnvelopeIcon className="h-6 w-6" />}
          title="Antes de acudir al INAI: Contacta a RataCueva"
          description="Te recomendamos encarecidamente intentar resolver cualquier situación relacionada con tus datos personales directamente con nosotros antes de presentar una queja formal ante el INAI. Nuestra meta es solucionar tus inquietudes de forma rápida y efectiva."
          basicDescription="Antes de ir al INAI, intenta resolver tu queja directamente con RataCueva. Estamos comprometidos a ayudarte."
          accentColor="orange"
          legalBadge={{
            type: "recommendation",
            tooltip:
              "Se recomienda agotar la vía interna antes de recurrir a la autoridad.",
          }}
          sections={[
            {
              subtitle: "Nuestro compromiso contigo",
              basicContent:
                "Nos esforzamos por tratar tus datos éticamente y resolver cualquier inquietud sobre tu información personal.",
              detailedContent:
                "En RataCueva nos esforzamos por tratar tus datos personales de manera ética y en estricto apego a la legislación mexicana. Estamos comprometidos a resolver cualquier inquietud que tengas sobre el tratamiento de tu información personal antes de que sea necesario escalar a una autoridad externa.",
              collapsible: true,
            },
            {
              subtitle: "Cómo contactarnos",
              basicContent:
                "Usa nuestro correo especializado privacidad@ratacueva.com, tu cuenta de usuario o el centro de ayuda.",
              detailedContent: [
                "Correo especializado: privacidad@ratacueva.com (canal principal y directo)",
                "A través de tu cuenta de usuario en la sección de configuración (si tienes una cuenta)",
                "Centro de ayuda en nuestro sitio web (para preguntas frecuentes y formularios de contacto)",
                "Formulario de contacto general en www.ratacueva.com",
              ],
              collapsible: true,
            },
            {
              subtitle: "¿Cuándo acudir al INAI?",
              basicContent:
                "Si no obtienes una respuesta satisfactoria de RataCueva, o si consideras que ha habido una violación grave a tus derechos de privacidad.",
              detailedContent:
                "Si consideras que tu derecho a la protección de datos personales ha sido lesionado por alguna conducta de nuestros empleados o respuestas, o si presumes que existe alguna violación a las disposiciones previstas en la LFPDPPP y su reglamento, y nuestras vías internas no han sido suficientes, tienes el derecho de interponer la queja correspondiente ante el INAI.",
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "RataCueva colaborará plenamente con el INAI en cualquier investigación que pueda surgir, buscando siempre la resolución más justa.",
          }}
        />

        <InfoCard
          id="contacto-inai"
          icon={<ComputerDesktopIcon className="h-6 w-6" />}
          title="Cómo contactar al INAI"
          description="El INAI pone a tu disposición múltiples canales para presentar quejas o denuncias relacionadas con la protección de datos personales, asegurando que tengas acceso fácil a la autoridad competente."
          basicDescription="Contacta al INAI a través de su sitio web oficial, teléfono o email para presentar quejas o denuncias sobre privacidad."
          accentColor="green"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 43 LFPDPPP",
            tooltip:
              "La autoridad debe poner a disposición medios de contacto para quejas.",
          }}
          actionGuide={{
            title: "Pasos para presentar una queja ante el INAI",
            description:
              "Si has agotado la vía interna con RataCueva sin una solución satisfactoria, puedes proceder con una queja formal ante el INAI.",
            steps: [
              "Visita el sitio oficial del INAI: Accede a www.inai.org.mx.",
              "Busca la sección de quejas o denuncias: Usualmente bajo 'Protección de Datos Personales'.",
              "Prepara tu documentación: Necesitarás tu identificación, evidencia de tu comunicación con RataCueva, y los detalles de la presunta violación.",
              "Utiliza el Sistema de Denuncias en línea: sitemadenuncias.inai.org.mx es el canal digital principal.",
              "Sigue las instrucciones: Completa el formulario con la mayor precisión posible y adjunta la evidencia.",
              "Guarda tu acuse: El INAI te proporcionará un folio para dar seguimiento a tu caso.",
            ],
            nextAction: {
              label: "Ir al sitio oficial del INAI",
              href: "https://www.inai.org.mx/",
              external: true,
            },
          }}
          sections={[
            {
              subtitle: "Sitio web oficial del INAI",
              basicContent:
                "www.inai.org.mx es el recurso principal para información detallada y guías.",
              detailedContent:
                "www.inai.org.mx - En este sitio encontrarás información detallada sobre el proceso de presentación de quejas y denuncias, así como formularios y guías paso a paso para ayudarte a preparar y enviar tu caso.",
              collapsible: true,
            },
            {
              subtitle: "Información de contacto principal",
              basicContent:
                "Teléfono (55 5004 2400 / 800 835 4324), email (atencion@inai.org.mx) y sistema de denuncias en línea.",
              detailedContent: [
                "Teléfono: 55 5004 2400 (Ciudad de México y área metropolitana)",
                "Lada sin costo: 800 835 4324 (para el resto del país)",
                "Email: atencion@inai.org.mx",
                "Sistema de denuncias en línea: sistemadenuncias.inai.org.mx (canal preferente para agilizar el proceso)",
              ],
              collapsible: true,
            },
            {
              subtitle: "Dirección física",
              basicContent:
                "Av. Insurgentes Sur 3211, Col. Insurgentes Cuicuilco, C.P. 04530, Ciudad de México.",
              detailedContent:
                "Av. Insurgentes Sur 3211, Col. Insurgentes Cuicuilco, Alcaldía Coyoacán, C.P. 04530, Ciudad de México. Puedes presentar quejas presenciales, pero se recomienda el canal online para mayor eficiencia.",
              collapsible: true,
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "tip",
            text: "El INAI también ofrece asesoría gratuita para guiarte en el proceso de tu queja o denuncia.",
          }}
        />
      </>
    ),
  },
];

export interface PrivacySection {
  id: string;
  title: string;
  summary: string;
  href: string;
  icon: React.ReactNode;
}

export interface SidebarSection {
  id: string;
  title: string;
  href: string;
}

// Helper para encontrar una sección por ID
export const getPrivacySectionData = (id: string) => {
  return PRIVACY_POLICY_SECTIONS.find((section) => section.id === id);
};

// Función para obtener datos básicos de secciones
export const getPrivacySections = (): PrivacySection[] => {
  return PRIVACY_POLICY_SECTIONS.map((section) => ({
    id: section.id,
    title: section.title,
    summary: section.summary,
    href: section.path,
    icon: section.icon,
  }));
};

// Función para obtener secciones del sidebar
export const getSidebarSections = (): SidebarSection[] => {
  // Agregar la sección overview al inicio
  const overviewSection: SidebarSection = {
    id: "overview",
    title: "Aviso de privacidad",
    href: "/privacy-policy",
  };

  const transformedSections = PRIVACY_POLICY_SECTIONS.map((section) => ({
    id: section.id,
    title: section.title,
    href: section.path,
  }));

  return [overviewSection, ...transformedSections];
};
