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
} from "@heroicons/react/24/outline";
import { InfoCard } from "@/components/privacy-policy";

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
  quickAccessCards: QuickAccessItem[];
  faqs: FAQ[];
  // Contenido principal de la sección (los InfoCard).
  // Usamos una función que retorna un React.ReactNode para poder renderizar los InfoCard.
  content: React.ReactNode;
}

// Aquí iría el arreglo con los datos de todas tus secciones
export const PRIVACY_POLICY_SECTIONS: PolicySectionData[] = [
  {
    id: "quien-es-responsable",
    path: "/privacy-policy/quien-es-responsable",
    title: "¿Quién es responsable de tus datos?",
    subtitle:
      "RataCueva es la entidad legal responsable del tratamiento de sus datos personales. Esto significa que RataCueva es quien decide sobre el uso y la protección de la información que usted nos confía. Nuestro compromiso es cumplir cabalmente con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su reglamento, así como con cualquier otra normativa aplicable en la materia.",
    summary:
      "RataCueva es la entidad legal responsable del tratamiento de sus datos personales y se encuentra ubicada en Cuitláhuac, Ver.",
    icon: <BuildingOfficeIcon className="h-6 w-6" />,
    currentPageNumber: 1,
    highlightBox: {
      icon: <InformationCircleIcon className="h-6 w-6" />,
      title: "Información de contacto para privacidad",
      type: "info",
      content: [
        "Domicilio: Av. Universidad No. 350 Carretera Federal Cuitláhuac - La Tinaja, Localidad Dos Caminos, Cuitláhuac, Ver. CP. 94910.",
        "Correo electrónico: privacidad@ratacueva.com - Canal principal y directo para ejercer derechos y consultas sobre privacidad.",
      ],
    },
    quickAccessCards: [
      {
        title: "Responsable del tratamiento",
        description: "RataCueva decide sobre el uso y protección de datos",
        href: "#responsable-tratamiento",
        category: "importante",
      },
      {
        title: "Domicilio oficial",
        description: "Av. Universidad No. 350, Cuitláhuac, Ver.",
        href: "#domicilio-oficial",
        category: "importante",
      },
      {
        title: "Contacto de privacidad",
        description: "privacidad@ratacueva.com",
        href: "#contacto-privacidad",
        category: "contacto",
      },
    ],
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
          basicDescription="RataCueva es quien decide cómo se usan y protegen sus datos personales, siguiendo estrictamente las leyes mexicanas de privacidad."
          accentColor="blue"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 3 LFPDPPP",
            tooltip:
              "Es obligatorio por ley identificar claramente al responsable del tratamiento",
          }}
          sections={[
            {
              subtitle: "¿Qué significa ser responsable?",
              basicContent:
                "Somos la empresa que toma las decisiones sobre sus datos: para qué los usamos, cómo los protegemos y cuánto tiempo los guardamos.",
              detailedContent:
                "Como responsable, RataCueva es quien toma las decisiones sobre cómo se recopilan, utilizan, almacenan y protegen sus datos personales. Esta designación conlleva obligaciones legales específicas que cumplimos cabalmente conforme a la LFPDPPP y su reglamento.",
            },
            {
              subtitle: "Nuestras obligaciones legales:",
              basicContent:
                "Cumplimos todas las leyes mexicanas de protección de datos y mantenemos este aviso actualizado.",
              detailedContent: [
                "Cumplir cabalmente con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)",
                "Cumplir con el reglamento de la LFPDPPP y disposiciones aplicables",
                "Observar cualquier otra normativa aplicable en materia de protección de datos",
                "Mantener actualizado este Aviso de Privacidad conforme a modificaciones legales",
              ],
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Esta responsabilidad nos compromete legalmente a proteger su privacidad y manejar sus datos con el más alto estándar de cuidado.",
          }}
        />
        <InfoCard
          id="domicilio-oficial"
          icon={<MapPinIcon className="h-6 w-6" />}
          title="Domicilio oficial del responsable"
          description="Este domicilio es nuestra sede principal y el lugar donde se centralizan las decisiones relacionadas con el tratamiento de sus datos."
          basicDescription="Nuestra oficina principal está en Cuitláhuac, Veracruz. Aquí puede presentar solicitudes presenciales si lo prefiere."
          accentColor="green"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 16 LFPDPPP",
            tooltip: "Es obligatorio informar el domicilio del responsable",
          }}
          sections={[
            {
              subtitle: "Dirección completa:",
              basicContent:
                "Universidad No. 350, Dos Caminos, Cuitláhuac, Veracruz. CP 94910",
              detailedContent: [
                "Avenida: Universidad No. 350",
                "Vialidad: Carretera Federal Cuitláhuac - La Tinaja",
                "Localidad: Dos Caminos",
                "Municipio: Cuitláhuac",
                "Estado: Veracruz",
                "Código Postal: 94910",
                "País: México",
              ],
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Para solicitudes presenciales, recomendamos contactar previamente a privacidad@ratacueva.com para coordinar su visita.",
          }}
        />
        <InfoCard
          id="contacto-privacidad"
          icon={<EnvelopeIcon className="h-6 w-6" />}
          title="Correo electrónico de contacto para privacidad"
          description="Hemos habilitado esta dirección de correo electrónico como el canal principal y directo para que usted pueda ejercer sus derechos, realizar consultas o presentar cualquier inquietud relacionada con la privacidad de sus datos."
          basicDescription="privacidad@ratacueva.com es nuestro canal principal para derechos ARCO, consultas y cualquier tema relacionado con sus datos personales."
          accentColor="purple"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 16 LFPDPPP",
            tooltip:
              "Es obligatorio proporcionar medios para ejercer derechos ARCO",
          }}
          sections={[
            {
              subtitle: "Canal de contacto:",
              basicContent:
                "privacidad@ratacueva.com - disponible 24/7 para recibir sus solicitudes y consultas.",
            },
            {
              subtitle: "Tipos de comunicaciones que atendemos:",
              basicContent:
                "Atendemos derechos ARCO, consultas sobre privacidad, reportes de violaciones y preguntas sobre transferencias de datos.",
              detailedContent: [
                "Ejercicio de derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO)",
                "Consultas sobre el contenido de este Aviso de Privacidad",
                "Inquietudes relacionadas con el tratamiento de sus datos",
                "Reportes de posibles violaciones de privacidad",
                "Solicitudes de información sobre transferencias de datos",
                "Preguntas sobre medidas de seguridad implementadas",
              ],
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Para acelerar la atención de su solicitud, incluya siempre información clara sobre el tipo de consulta y sus datos de contacto.",
          }}
        />
      </>
    ),
  },
  {
    id: "cuanto-tiempo-conservamos",
    path: "/privacy-policy/cuanto-tiempo-conservamos",
    title: "¿Cuánto tiempo conservamos tus datos?",
    subtitle:
      "Conservamos tus datos personales solo durante el tiempo estrictamente necesario para cumplir con las finalidades informadas y las obligaciones legales aplicables. Te explicamos los plazos y criterios de conservación, así como tus derechos para solicitar la eliminación anticipada.",
    summary:
      "Información sobre los plazos de conservación de datos, criterios legales y opciones para solicitar la eliminación anticipada.",
    icon: <ClockIcon className="h-6 w-6" />,
    currentPageNumber: 6,
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
          description="Conservamos tus datos conforme a los plazos establecidos por la Ley Federal de Protección de Datos Personales y otras normativas aplicables."
          basicDescription="Datos fiscales: mínimo 5 años. Datos de cuenta: hasta que elimines tu cuenta o retires el consentimiento."
          accentColor="blue"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 11, 37 LFPDPPP",
            tooltip:
              "La ley exige conservar ciertos datos por plazos mínimos para cumplir obligaciones fiscales y legales.",
          }}
          sections={[
            {
              subtitle: "Ejemplos de plazos legales",
              basicContent:
                "Datos de facturación: mínimo 5 años. Datos de cuenta: hasta que elimines tu cuenta.",
              detailedContent: [
                "Datos de facturación y transacciones: mínimo 5 años por ley fiscal",
                "Datos de cuenta y perfil: hasta que elimines tu cuenta o retires el consentimiento",
                "Datos de soporte y atención: 2 años tras la última interacción",
                "Datos de marketing: hasta que retires el consentimiento",
              ],
              collapsible: true,
            },
            {
              subtitle: "Excepciones y conservación extendida",
              basicContent:
                "En casos de litigio, fraude o requerimiento legal, los plazos pueden extenderse.",
              detailedContent: [
                "Conservación extendida por litigios o investigaciones",
                "Requerimientos de autoridades fiscales o judiciales",
                "Prevención de fraudes y reclamaciones",
              ],
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "warning",
            text: "Algunos datos deben conservarse por ley incluso si solicitas la eliminación de tu cuenta.",
          }}
        />
        <InfoCard
          id="criterios-conservacion"
          icon={<DocumentTextIcon className="h-6 w-6" />}
          title="Criterios para determinar el plazo de conservación"
          description="El plazo depende de la finalidad, el tipo de dato y las obligaciones legales."
          basicDescription="Solo conservamos lo estrictamente necesario y eliminamos lo que ya no tiene finalidad legítima."
          accentColor="green"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 11 LFPDPPP",
            tooltip:
              "La ley exige que los datos se eliminen cuando dejan de ser necesarios para la finalidad informada.",
          }}
          sections={[
            {
              subtitle: "Finalidad del tratamiento",
              basicContent:
                "El plazo depende de para qué se recopilaron los datos (compra, soporte, marketing, etc.).",
              detailedContent: [
                "Compra y facturación: plazos fiscales y comerciales",
                "Soporte y atención: hasta 2 años tras la última interacción",
                "Marketing y análisis: hasta que retires el consentimiento",
              ],
              collapsible: true,
            },
            {
              subtitle: "Tipo de dato",
              basicContent:
                "Datos sensibles y financieros tienen plazos más cortos y medidas de eliminación reforzadas.",
              detailedContent: [
                "Datos sensibles: eliminación inmediata tras cumplir la finalidad",
                "Datos financieros: eliminación tras procesar la transacción",
                "Datos de navegación: eliminación periódica y anonimización",
              ],
              collapsible: true,
            },
            {
              subtitle: "Obligaciones legales y contractuales",
              basicContent:
                "Algunas leyes exigen conservar datos por plazos mínimos, incluso si solicitas su eliminación.",
              detailedContent: [
                "Ley fiscal: mínimo 5 años para facturación",
                "Contratos y garantías: conservación hasta el fin de la relación contractual",
                "Requerimientos judiciales: conservación hasta cierre del proceso",
              ],
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Eliminamos y anonimizamos datos periódicamente para proteger tu privacidad.",
          }}
        />
        <InfoCard
          id="eliminacion-anticipada"
          icon={<TrashIcon className="h-6 w-6" />}
          title="Eliminación anticipada de datos"
          description="Puedes solicitar la eliminación anticipada de tus datos cuando ya no sean necesarios para la finalidad informada, salvo que exista una obligación legal de conservación."
          basicDescription="Solicita la eliminación anticipada contactando a privacidad@ratacueva.com."
          accentColor="purple"
          legalBadge={{
            type: "optional",
            lawReference: "Art. 22 LFPDPPP",
            tooltip:
              "Tienes derecho a solicitar la eliminación anticipada de tus datos personales.",
          }}
          sections={[
            {
              subtitle: "Cómo solicitar la eliminación",
              basicContent:
                "Envía tu solicitud a privacidad@ratacueva.com indicando qué datos deseas eliminar.",
              detailedContent: [
                "Correo electrónico: privacidad@ratacueva.com",
                "Indica claramente qué datos deseas eliminar",
                "Adjunta identificación para validar tu solicitud",
                "Recibirás confirmación y cronograma de eliminación",
              ],
              collapsible: true,
            },
            {
              subtitle: "Excepciones legales",
              basicContent:
                "No podemos eliminar datos que deban conservarse por ley (facturación, litigios, etc.).",
              detailedContent: [
                "Datos de facturación y transacciones: conservación obligatoria por ley fiscal",
                "Datos involucrados en litigios o investigaciones",
                "Datos necesarios para cumplir obligaciones contractuales",
              ],
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "warning",
            text: "La eliminación anticipada no aplica a datos que deban conservarse por ley o contrato.",
          }}
        />
      </>
    ),
  },
  {
    id: "cambios-aviso-privacidad",
    path: "/privacy-policy/cambios-aviso-privacidad",
    title: "Cambios a este aviso de privacidad",
    subtitle:
      "RataCueva se reserva el derecho de actualizar este aviso de privacidad para adaptarse a cambios legales, tecnológicos y operacionales, siempre manteniendo la transparencia y respetando tus derechos.",
    summary:
      "Información sobre cómo y cuándo actualizamos nuestro aviso de privacidad, incluyendo notificaciones y procesos de aceptación.",
    icon: <ArrowPathIcon className="h-6 w-6" />,
    currentPageNumber: 8,
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
        title: "Publicación de cambios",
        description: "En www.ratacueva.com",
        href: "#publicacion-cambios",
        category: "importante",
      },
      {
        title: "Notificaciones",
        description: "Email y avisos en sitio",
        href: "#notificaciones",
        category: "importante",
      },
      {
        title: "Revisión periódica",
        description: "Manténgase informado",
        href: "#revision-periodica",
        category: "informativo",
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
          icon={<ArrowPathIcon className="h-6 w-6" />}
          title="Razones para modificaciones"
          description="Las modificaciones a nuestro aviso de privacidad obedecen a razones específicas que garantizan su relevancia, cumplimiento legal y adaptación a las necesidades cambiantes del entorno digital."
          basicDescription="Actualizamos nuestro aviso por cambios legales, nuevos servicios o mejores prácticas de protección de datos."
          accentColor="blue"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 16 LFPDPPP",
            tooltip:
              "Es obligatorio mantener actualizado el aviso de privacidad",
          }}
          sections={[
            {
              subtitle: "Cambios en la legislación mexicana",
              basicContent:
                "Actualizamos cuando hay nuevas leyes o regulaciones que afectan la protección de datos.",
              detailedContent: [
                "Actualizaciones en la Ley Federal de Protección de Datos Personales (LFPDPPP)",
                "Nuevas regulaciones del INAI (Instituto Nacional de Transparencia)",
                "Reformas al Código de Comercio para e-commerce",
                "Nuevas disposiciones internacionales aplicables a México",
                "Criterios jurisprudenciales relevantes en materia de privacidad",
              ],
              collapsible: true,
            },
            {
              subtitle: "Evolución de nuestros servicios gaming",
              basicContent:
                "Cuando agregamos nuevas funcionalidades o expandimos nuestros servicios.",
              detailedContent: [
                "Implementación de nuevas funcionalidades en la plataforma",
                "Incorporación de nuevos métodos de pago y proveedores",
                "Expansión a nuevos mercados o regiones",
                "Integración con nuevas plataformas tecnológicas",
                "Mejoras en nuestros sistemas de seguridad y protección",
              ],
              collapsible: true,
            },
            {
              subtitle: "Políticas internas y mejores prácticas",
              basicContent:
                "Mejoramos continuamente nuestras prácticas de privacidad y seguridad.",
              detailedContent: [
                "Adopción de mejores prácticas internacionales de privacidad",
                "Actualización de procedimientos de seguridad",
                "Cambios en estructura corporativa o modelo de negocio",
                "Nuevas políticas de retención y eliminación de datos",
                "Mejoras en procesos de atención al cliente y soporte",
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
          description="Todos los cambios son publicados de manera clara y accesible para garantizar que puedas estar siempre informado sobre las modificaciones a nuestro aviso de privacidad."
          basicDescription="Publicamos todos los cambios en nuestro sitio web con información detallada y fechas claras."
          accentColor="green"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 16 LFPDPPP",
            tooltip:
              "Es obligatorio informar sobre cambios al aviso de privacidad",
          }}
          sections={[
            {
              subtitle: "Ubicaciones de publicación",
              basicContent:
                "Publicamos en nuestro sitio web principal y en tu área de usuario.",
              detailedContent: [
                "Sitio web principal: www.ratacueva.com/privacy-policy",
                "Sección destacada en página de inicio durante cambios importantes",
                "Área de tu cuenta de usuario (para cambios que te afecten directamente)",
                "Centro de ayuda y documentación legal",
                "Newsletter y comunicaciones oficiales",
              ],
              collapsible: true,
            },
            {
              subtitle: "Información incluida en cada cambio",
              basicContent:
                "Cada cambio incluye fecha, resumen, razón y fecha de entrada en vigor.",
              detailedContent: [
                "Fecha exacta de la modificación",
                "Resumen ejecutivo de los cambios realizados",
                "Razón específica y justificación para la modificación",
                "Fecha de entrada en vigor",
                "Versión anterior disponible para comparación detallada",
                "Enlaces a secciones específicas modificadas",
              ],
              collapsible: true,
            },
            {
              subtitle: "Formato de presentación",
              basicContent:
                "Los cambios se presentan en formato claramente legible con resaltado de modificaciones.",
              detailedContent:
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
          basicDescription="Te notificamos por email, en tu cuenta y en el sitio web sobre cambios importantes."
          accentColor="orange"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 16 LFPDPPP",
            tooltip: "Es obligatorio notificar cambios significativos",
          }}
          sections={[
            {
              subtitle: "Canales de notificación automática",
              basicContent:
                "Usamos email, notificaciones push, mensajes en tu cuenta y banners en el sitio.",
              detailedContent: [
                "Email a tu dirección registrada en la cuenta",
                "Notificación push (si tienes nuestra app móvil instalada)",
                "Mensaje destacado en tu panel de usuario",
                "Banner informativo en el sitio web",
                "Notificación en redes sociales oficiales",
              ],
              collapsible: true,
            },
            {
              subtitle: "Contenido detallado de las notificaciones",
              basicContent:
                "Incluimos resumen, enlaces directos, fechas y acciones recomendadas.",
              detailedContent: [
                "Resumen ejecutivo de los cambios más importantes",
                "Enlaces directos a las secciones específicas modificadas",
                "Fecha exacta de entrada en vigor",
                "Acciones recomendadas o requeridas (si las hay)",
                "Información de contacto para consultas y aclaraciones",
              ],
              collapsible: true,
            },
            {
              subtitle: "Criterios para notificación prioritaria",
              basicContent:
                "Priorizamos cambios que afecten derechos, datos recopilados o transferencias a terceros.",
              detailedContent: [
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
          basicDescription="Revisa nuestro aviso periódicamente, especialmente después de recibir notificaciones de cambios."
          accentColor="purple"
          legalBadge={{
            type: "recommendation",
            lawReference: "Buenas prácticas",
            tooltip: "Recomendamos revisar periódicamente para estar informado",
          }}
          sections={[
            {
              subtitle: "Frecuencia recomendada",
              basicContent:
                "Revisa trimestralmente si eres usuario frecuente, semestralmente si eres ocasional.",
              detailedContent: [
                "Revisión trimestral para usuarios frecuentes",
                "Revisión semestral para usuarios ocasionales",
                "Revisión inmediata tras recibir notificaciones",
                "Revisión antes de proporcionar nuevos datos sensibles",
              ],
            },
            {
              subtitle: "Qué verificar en cada revisión",
              basicContent:
                "Verifica fechas de actualización, cambios en finalidades y nueva información de contacto.",
              detailedContent: [
                "Fecha de última actualización",
                "Cambios en finalidades de tratamiento",
                "Nuevos derechos o procedimientos",
                "Modificaciones en información de contacto",
                "Actualizaciones en medidas de seguridad",
              ],
              collapsible: true,
            },
            {
              subtitle: "Herramientas para facilitar la revisión",
              basicContent:
                "Ofrecemos herramientas como resaltado de cambios y comparador de versiones.",
              detailedContent: [
                "Sistema de resaltado de cambios recientes",
                "Comparador de versiones",
                "Resúmenes ejecutivos de modificaciones",
                "Alertas personalizadas según su perfil",
              ],
              variant: "highlight",
              collapsible: true,
            },
          ]}
        />
        <InfoCard
          icon={<CheckCircleIcon className="h-6 w-6" />}
          title="Aceptación de modificaciones"
          description="El proceso de aceptación de modificaciones está diseñado para ser claro y respetar su autonomía de decisión."
          basicDescription="Puedes aceptar cambios usando la plataforma normalmente o de forma explícita. Tienes 30 días para decidir."
          accentColor="green"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 8 LFPDPPP",
            tooltip: "El consentimiento debe ser libre, específico e informado",
          }}
          sections={[
            {
              subtitle: "Formas de aceptación",
              basicContent:
                "Uso continuado, aceptación explícita, nuevas transacciones o actualización de preferencias.",
              detailedContent: [
                "Uso continuado de la plataforma después del período de gracia",
                "Aceptación explícita mediante botón de confirmación",
                "Realización de nuevas transacciones tras los cambios",
                "Actualización de preferencias de cuenta",
              ],
            },
            {
              subtitle: "Período de gracia",
              basicContent:
                "Generalmente 30 días para cambios significativos donde puedes evaluar las modificaciones.",
              detailedContent:
                "Proporcionamos generalmente 30 días de período de gracia para cambios significativos, durante el cual puede evaluar las modificaciones y decidir sobre su participación continuada.",
            },
            {
              subtitle: "Si no acepta las modificaciones",
              basicContent:
                "Puedes ejercer derechos ARCO, eliminar tu cuenta o discontinuar servicios específicos.",
              detailedContent: [
                "Puede ejercer sus derechos ARCO antes de la entrada en vigor",
                "Puede solicitar la eliminación de su cuenta",
                "Puede discontinuar el uso de servicios específicos",
                "Puede contactarnos para discutir opciones alternativas",
              ],
              variant: "highlight",
              collapsible: true,
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
          basicDescription="Los cambios siguen una cronología clara: publicación, notificación, período de gracia y entrada en vigor."
          accentColor="red"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 16 LFPDPPP",
            tooltip:
              "Debe establecerse claramente cuándo entran en vigor los cambios",
          }}
          sections={[
            {
              subtitle: "Cronología típica",
              basicContent:
                "Publicación inmediata, notificaciones en 7 días, entrada en vigor en 30 días.",
              detailedContent: [
                "Día 0: Publicación del aviso de modificación",
                "Día 1-7: Notificaciones a usuarios",
                "Día 30: Entrada en vigor (para cambios significativos)",
                "Día 45: Aplicación completa de nuevas políticas",
              ],
            },
            {
              subtitle: "Excepciones al cronograma",
              basicContent:
                "Emergencias legales son inmediatas, mejoras de seguridad toman 7 días.",
              detailedContent: [
                "Cambios por emergencia legal: Inmediatos",
                "Mejoras de seguridad: 7 días",
                "Correcciones menores: 14 días",
                "Cambios estructurales: 60 días",
              ],
              collapsible: true,
            },
            {
              subtitle: "Durante el período de transición",
              basicContent:
                "Mantenemos ambas versiones disponibles y aplicamos la más favorable al usuario.",
              detailedContent:
                "Mantenemos ambas versiones disponibles y aplicamos la versión más favorable al usuario cuando existe conflicto entre versiones.",
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "warning",
            text: "Los cambios por requerimientos legales inmediatos pueden entrar en vigor sin período de gracia.",
          }}
        />
      </>
    ),
  },
  {
    id: "como-protegemos-datos",
    path: "/privacy-policy/como-protegemos-datos",
    title: "¿Cómo protegemos tus datos?",
    subtitle:
      "La seguridad de tu información es nuestra máxima prioridad. Implementamos múltiples capas de protección técnica, administrativa y de monitoreo para mantener tus datos completamente seguros las 24 horas del día.",
    summary:
      "Múltiples capas de seguridad técnica y administrativa que protegen tu información con estándares de grado militar.",
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    currentPageNumber: 4,
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
        description: "Cifrado AES-256, SSL/TLS, 2FA y controles avanzados",
        href: "#protecciones-tecnicas",
        category: "importante",
      },
      {
        title: "Protecciones administrativas",
        description: "Control de acceso, capacitación, políticas estrictas",
        href: "#protecciones-administrativas",
        category: "importante",
      },
      {
        title: "Monitoreo y auditorías",
        description:
          "Vigilancia 24/7, pruebas de penetración, respuesta a incidentes",
        href: "#monitoreo-auditorias",
        category: "informativo",
      },
      {
        title: "Certificaciones",
        description: "ISO 27001, SOC 2, PCI DSS y estándares internacionales",
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
          icon={<LockClosedIcon className="h-6 w-6" />}
          title="Protecciones técnicas avanzadas"
          description="Utilizamos tecnología de seguridad de última generación para crear múltiples barreras de protección alrededor de tu información."
          basicDescription="Cifrado AES-256, SSL/TLS, autenticación 2FA y infraestructura protegida en centros de datos certificados."
          accentColor="blue"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 19 LFPDPPP",
            tooltip: "Es obligatorio implementar medidas de seguridad técnicas",
          }}
          sections={[
            {
              subtitle: "Cifrado de grado militar",
              basicContent:
                "Usamos cifrado AES-256 y SSL/TLS para proteger tus datos como lo hacen bancos y gobiernos.",
              detailedContent: [
                "Cifrado AES-256 para datos almacenados (el mismo que usan bancos y gobiernos)",
                "SSL/TLS 1.3 para todas las comunicaciones en tiempo real",
                "Cifrado de extremo a extremo en transmisiones sensibles",
                "Tokenización de datos financieros para máxima seguridad",
              ],
              collapsible: true,
            },
            {
              subtitle: "Autenticación y control de acceso",
              basicContent:
                "Autenticación de dos factores disponible y controles estrictos de acceso al sistema.",
              detailedContent: [
                "Autenticación de dos factores (2FA) disponible para tu cuenta",
                "Controles de acceso basados en roles para nuestro personal",
                "Gestión de sesiones seguras con timeouts automáticos",
                "Verificación de identidad para cambios críticos en tu cuenta",
              ],
              collapsible: true,
            },
            {
              subtitle: "Infraestructura protegida",
              basicContent:
                "Servidores en centros certificados con firewalls avanzados y respaldos encriptados.",
              detailedContent: [
                "Servidores en centros de datos certificados ISO 27001",
                "Firewalls de aplicación web (WAF) de última generación",
                "Protección DDoS automática las 24 horas",
                "Respaldos encriptados en múltiples ubicaciones geográficas",
              ],
              variant: "highlight",
              collapsible: true,
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
          basicDescription="Personal capacitado, acceso mínimo necesario, contratos de confidencialidad y políticas estrictas de seguridad."
          accentColor="green"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 19 LFPDPPP",
            tooltip:
              "Es obligatorio implementar medidas de seguridad administrativas",
          }}
          sections={[
            {
              subtitle: "Control de acceso del personal",
              basicContent:
                "Solo acceso mínimo necesario, verificación de antecedentes y contratos de confidencialidad.",
              detailedContent: [
                "Principio de 'menor privilegio' - solo acceso mínimo necesario",
                "Revisión de antecedentes para todo el personal con acceso a datos",
                "Contratos de confidencialidad estrictos y vinculantes",
                "Revocación inmediata de accesos al terminar la relación laboral",
              ],
              collapsible: true,
            },
            {
              subtitle: "Capacitación y concientización",
              basicContent:
                "Capacitación obligatoria en seguridad, simulacros y cultura de protección de datos.",
              detailedContent: [
                "Capacitación obligatoria en seguridad y privacidad para todo el equipo",
                "Actualizaciones regulares sobre nuevas amenazas y protecciones",
                "Simulacros de phishing y pruebas de seguridad al personal",
                "Cultura de seguridad que prioriza la protección de datos",
              ],
              collapsible: true,
            },
            {
              subtitle: "Políticas y procedimientos",
              basicContent:
                "Procedimientos documentados, registro de accesos y protocolos de respuesta a incidentes.",
              detailedContent: [
                "Políticas de escritorio limpio y pantalla bloqueada",
                "Procedimientos documentados para manejo de incidentes",
                "Registro y monitoreo de todos los accesos a datos personales",
                "Protocolo de respuesta a incidentes de seguridad",
              ],
              variant: "highlight",
              collapsible: true,
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
          basicDescription="Vigilancia 24/7, pruebas de penetración trimestrales y respuesta inmediata a incidentes."
          accentColor="purple"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 19 LFPDPPP",
            tooltip:
              "Es obligatorio monitorear y auditar las medidas de seguridad",
          }}
          sections={[
            {
              subtitle: "Monitoreo en tiempo real",
              basicContent:
                "Vigilancia 24/7 con detección automática de actividades sospechosas y alertas inmediatas.",
              detailedContent: [
                "Vigilancia 24/7/365 de todos los sistemas críticos",
                "Detección automática de actividades sospechosas",
                "Alertas inmediatas ante intentos de acceso no autorizado",
                "Análisis de comportamiento para identificar anomalías",
              ],
              collapsible: true,
            },
            {
              subtitle: "Pruebas y auditorías regulares",
              basicContent:
                "Pruebas de penetración trimestrales, auditorías mensuales y evaluaciones semanales.",
              detailedContent: [
                "Pruebas de penetración trimestrales por empresas especializadas",
                "Auditorías de seguridad internas mensuales",
                "Evaluaciones de vulnerabilidades semanales",
                "Revisión anual de todas las políticas de seguridad",
              ],
              collapsible: true,
            },
            {
              subtitle: "Respuesta a incidentes",
              basicContent:
                "Equipo disponible 24/7, contención inmediata y notificación dentro de 72 horas.",
              detailedContent: [
                "Equipo de respuesta disponible 24/7 para emergencias",
                "Protocolos de contención y mitigación predefinidos",
                "Notificación a usuarios afectados dentro de 72 horas",
                "Investigación forense completa de cualquier incidente",
              ],
              variant: "highlight",
              collapsible: true,
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
          basicDescription="Certificaciones ISO 27001, SOC 2, PCI DSS y cumplimiento total con la LFPDPPP mexicana."
          accentColor="green"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 19 LFPDPPP",
            tooltip:
              "Es obligatorio cumplir con estándares de seguridad reconocidos",
          }}
          sections={[
            {
              subtitle: "Certificaciones de seguridad",
              basicContent:
                "ISO 27001, SOC 2 Tipo II, PCI DSS y evaluaciones regulares de cumplimiento.",
              detailedContent: [
                "ISO 27001 - Gestión de seguridad de la información",
                "SOC 2 Tipo II - Controles de seguridad y disponibilidad",
                "PCI DSS - Estándar de seguridad para datos de tarjetas",
                "Evaluaciones regulares de cumplimiento normativo",
              ],
            },
            {
              subtitle: "Cumplimiento legal",
              basicContent:
                "Cumplimiento total con LFPDPPP, lineamientos INAI y mejores prácticas internacionales.",
              detailedContent: [
                "Ley Federal de Protección de Datos Personales (LFPDPPP) de México",
                "Lineamientos del Instituto Nacional de Transparencia (INAI)",
                "Mejores prácticas internacionales de privacidad",
                "Preparación para futuras regulaciones de privacidad",
              ],
              collapsible: true,
            },
            {
              subtitle: "Transparencia y comunicación",
              basicContent:
                "Reportes de transparencia regulares y comunicación abierta sobre prácticas de seguridad.",
              detailedContent:
                "Publicamos reportes de transparencia regulares sobre nuestras prácticas de seguridad y cualquier incidente relevante. Creemos que la transparencia es fundamental para generar confianza.",
              variant: "highlight",
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Nuestras certificaciones son renovadas anualmente y están disponibles para consulta pública.",
          }}
        />
      </>
    ),
  },
  {
    id: "con-quien-compartimos-datos",
    path: "/privacy-policy/con-quien-compartimos-datos",
    title: "¿Con quién compartimos tus datos?",
    subtitle:
      "Para brindarte una experiencia de compra completa, necesitamos trabajar con terceros confiables y certificados. Te explicamos exactamente con quién, qué datos y por qué, siempre bajo estrictas medidas de protección y contratos de confidencialidad.",
    summary:
      "Información sobre los terceros con quienes compartimos datos (pagos, envíos, servicios) y las protecciones implementadas.",
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
        description:
          "Stripe, PayPal, Oxxo Pay - procesadores certificados PCI DSS",
        href: "#proveedores-pago",
        category: "importante",
      },
      {
        title: "Empresas de logística",
        description: "DHL, FedEx, Estafeta - para entrega de productos",
        href: "#empresas-logistica",
        category: "importante",
      },
      {
        title: "Servicios en la nube",
        description: "AWS, Google Cloud - infraestructura tecnológica segura",
        href: "#servicios-nube",
        category: "informativo",
      },
      {
        title: "Análisis y marketing",
        description: "Google Analytics, herramientas de email marketing",
        href: "#servicios-marketing",
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
          icon={<CreditCardIcon className="h-6 w-6" />}
          title="Proveedores de servicios de pago"
          description="Para procesar sus compras de manera segura, trabajamos con plataformas de pago certificadas y reconocidas internacionalmente."
          basicDescription="Stripe, PayPal, Oxxo Pay y Mercado Pago procesan sus pagos con certificación PCI DSS nivel 1."
          accentColor="blue"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 37 LFPDPPP",
            tooltip:
              "Es obligatorio informar sobre transferencias de datos personales",
          }}
          sections={[
            {
              subtitle: "Con quién compartimos sus datos financieros",
              basicContent:
                "Solo con procesadores certificados: Stripe, PayPal, Oxxo Pay y Mercado Pago.",
              detailedContent: [
                "Stripe (procesador de tarjetas internacional certificado PCI DSS)",
                "PayPal (plataforma de pagos digitales con encriptación de extremo a extremo)",
                "Oxxo Pay (para pagos en efectivo en tiendas de conveniencia)",
                "Mercado Pago (procesador latinoamericano con estándares bancarios)",
              ],
              collapsible: true,
            },
            {
              subtitle: "Qué información específica compartimos",
              basicContent:
                "Monto, información del pedido y su nombre. Los datos de tarjeta van directamente al procesador.",
              detailedContent: [
                "Monto de la transacción",
                "Información del pedido (productos, cantidades)",
                "Su nombre como aparece en la tarjeta",
                "Los datos de la tarjeta van directamente al procesador (RataCueva nunca los ve)",
              ],
              collapsible: true,
            },
            {
              subtitle: "Medidas de seguridad implementadas",
              basicContent:
                "Certificación PCI DSS nivel 1, encriptación SSL/TLS y monitoreo 24/7 contra fraudes.",
              detailedContent: [
                "Certificación PCI DSS nivel 1 (el más alto estándar de seguridad)",
                "Encriptación SSL/TLS en todas las comunicaciones",
                "Tokenización de datos sensibles",
                "Monitoreo 24/7 contra fraudes y actividades sospechosas",
                "Cumplimiento con regulaciones bancarias internacionales",
              ],
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "RataCueva nunca almacena ni tiene acceso a su número completo de tarjeta o código CVV/CVC.",
          }}
        />
        <InfoCard
          id="garantias-proteccion"
          icon={<ShieldCheckIcon className="h-6 w-6" />}
          title="Garantías de protección en todas las transferencias"
          description="Implementamos múltiples capas de protección legal, técnica y contractual para asegurar que sus datos estén completamente seguros en manos de terceros."
          basicDescription="Contratos estrictos, medidas técnicas y sus derechos de control garantizan protección total."
          accentColor="green"
          legalBadge={{
            type: "mandatory",
            lawReference: "Art. 37 LFPDPPP",
            tooltip:
              "Es obligatorio establecer garantías de protección en transferencias",
          }}
          sections={[
            {
              subtitle: "Protecciones contractuales obligatorias",
              basicContent:
                "Todos los proveedores firman contratos estrictos con cláusulas de responsabilidad y auditorías regulares.",
              detailedContent: [
                "Contratos de protección de datos y confidencialidad estrictos con todos los proveedores",
                "Cláusulas de responsabilidad compartida ante incidentes de seguridad",
                "Auditorías regulares de cumplimiento de estándares de privacidad",
                "Certificación obligatoria de cumplimiento de normativas mexicanas e internacionales",
                "Limitación contractual del uso de datos solo para el propósito específico autorizado",
                "Obligación de eliminar datos cuando ya no sean necesarios para el servicio",
              ],
              collapsible: true,
            },
            {
              subtitle: "Sus derechos y controles",
              basicContent:
                "Mantiene control total con derechos ARCO y opción de exclusión para servicios opcionales.",
              detailedContent:
                "Usted mantiene control sobre sus datos en todo momento. Para servicios esenciales (pagos, envíos), las transferencias son necesarias para el funcionamiento del servicio. Para servicios opcionales (marketing, análisis), puede solicitar su exclusión. Siempre puede ejercer sus derechos ARCO (Acceso, Rectificación, Cancelación, Oposición) contactándonos en privacidad@ratacueva.com.",
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Todas nuestras transferencias cumplen estrictamente con la LFPDPPP y están respaldadas por contratos sólidos de protección de datos.",
          }}
        />
      </>
    ),
  },
  {
    id: "cookies-tecnologias",
    path: "/privacy-policy/cookies-tecnologias",
    title: "Cookies y tecnologías de rastreo",
    subtitle:
      "Utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación, recordar tus preferencias y analizar cómo interactúas con nuestro sitio. Te explicamos qué tipos usamos y cómo puedes controlarlas.",
    summary:
      "Información sobre el uso de cookies esenciales, analíticas, funcionales y de marketing, así como opciones de control.",
    icon: <CogIcon className="h-6 w-6" />,
    currentPageNumber: 5,
    highlightBox: {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: "¿Qué son las cookies?",
      type: "info",
      content: [
        "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web.",
        "Utilizamos cookies para mejorar tu experiencia de usuario, recordar tus preferencias, analizar el tráfico del sitio y personalizar el contenido que te mostramos.",
      ],
    },
    quickAccessCards: [
      {
        title: "Cookies esenciales",
        description: "Funcionalidad básica - sesión, carrito, seguridad",
        href: "#cookies-esenciales",
        category: "importante",
      },
      {
        title: "Cookies de análisis",
        description: "Google Analytics - métricas de rendimiento",
        href: "#cookies-analisis",
        category: "informativo",
      },
      {
        title: "Cookies funcionales",
        description: "Preferencias de idioma, región y personalización",
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
    ],
    content: (
      <>
        <InfoCard
          id="cookies-esenciales"
          icon={<WrenchScrewdriverIcon className="h-6 w-6" />}
          title="Cookies esenciales (obligatorias)"
          description="Estas cookies son fundamentales para el funcionamiento básico de RataCueva. Sin ellas, el sitio no podría funcionar correctamente."
          basicDescription="Cookies necesarias para sesión, carrito, seguridad y procesamiento de pagos."
          accentColor="red"
          legalBadge={{
            type: "mandatory",
            lawReference: "Interés legítimo",
            tooltip:
              "Las cookies esenciales son necesarias para el funcionamiento del sitio",
          }}
          sections={[
            {
              subtitle: "Funciones críticas que permiten",
              basicContent:
                "Mantener sesión, recordar carrito, asegurar navegación y procesar pagos.",
              detailedContent: [
                "Mantener tu sesión iniciada mientras navegas por diferentes páginas",
                "Recordar los productos que has añadido a tu carrito de compras",
                "Asegurar que las funciones de seguridad básicas operen correctamente",
                "Permitir la navegación segura entre páginas protegidas",
                "Procesar pagos de forma segura y confiable",
              ],
            },
            {
              subtitle: "Ejemplos de cookies esenciales",
              basicContent:
                "session_token, cart_contents, csrf_protection y payment_state.",
              detailedContent: [
                "session_token - Identifica tu sesión de navegación",
                "cart_contents - Mantiene los productos en tu carrito",
                "csrf_protection - Protege contra ataques de seguridad",
                "payment_state - Gestiona el estado de transacciones",
              ],
              collapsible: true,
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
          basicDescription="Google Analytics y herramientas similares nos ayudan a mejorar el sitio con datos anónimos."
          accentColor="blue"
          legalBadge={{
            type: "optional",
            lawReference: "Consentimiento",
            tooltip: "Puedes optar por no permitir estas cookies",
          }}
          sections={[
            {
              subtitle: "Qué información recopilamos",
              basicContent:
                "Páginas visitadas, errores, velocidad, dispositivos y patrones de navegación (todo anónimo).",
              detailedContent: [
                "Páginas más visitadas y tiempo de permanencia",
                "Errores técnicos y problemas de navegación",
                "Velocidad de carga y rendimiento del sitio",
                "Dispositivos y navegadores utilizados (datos anonimizados)",
                "Patrones de navegación y flujos de usuario",
              ],
              collapsible: true,
            },
            {
              subtitle: "Herramientas de análisis que utilizamos",
              basicContent:
                "Google Analytics, Hotjar y Microsoft Clarity para análisis anónimo.",
              detailedContent: [
                "Google Analytics - Estadísticas de tráfico y comportamiento",
                "Google Tag Manager - Gestión de etiquetas de seguimiento",
                "Hotjar - Mapas de calor y análisis de experiencia de usuario",
                "Microsoft Clarity - Grabaciones de sesión anonimizadas",
              ],
              collapsible: true,
            },
            {
              subtitle: "Beneficios para tu experiencia",
              basicContent:
                "Sitio más rápido, mejor navegación, detección de errores y funcionalidades mejoradas.",
              detailedContent: [
                "Sitio web más rápido y funcional",
                "Mejor experiencia de navegación optimizada",
                "Detección y corrección rápida de errores",
                "Contenido y funcionalidades mejoradas según el uso",
              ],
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "tip",
            text: "Toda la información es agregada y anónima. No te identificamos personalmente a través de estas cookies.",
          }}
        />
        <InfoCard
          id="control-cookies"
          icon={<CogIcon className="h-6 w-6" />}
          title="Tu control total sobre las cookies"
          description="Tienes múltiples opciones para gestionar y controlar qué cookies acepta tu navegador, desde configuraciones básicas hasta controles granulares."
          basicDescription="Controla cookies desde nuestro centro de preferencias o configuración de tu navegador."
          accentColor="green"
          legalBadge={{
            type: "recommendation",
            lawReference: "Derechos del usuario",
            tooltip: "Tienes derecho a controlar el uso de cookies",
          }}
          sections={[
            {
              subtitle: "Opciones de control disponibles",
              basicContent:
                "Centro de preferencias RataCueva, configuración del navegador y herramientas de opt-out.",
              detailedContent: [
                "Centro de preferencias de cookies en RataCueva",
                "Configuración de privacidad de tu navegador web",
                "Herramientas de opt-out de plataformas publicitarias",
                "Extensiones de navegador para bloqueo de rastreadores",
              ],
            },
            {
              subtitle: "Centro de preferencias RataCueva",
              basicContent:
                "Acceso desde tu cuenta, banner de consentimiento y link permanente en pie de página.",
              detailedContent: [
                "Acceso desde tu cuenta: Configuración > Privacidad > Gestión de cookies",
                "Banner de consentimiento al visitar el sitio por primera vez",
                "Link permanente en el pie de página: 'Configuración de cookies'",
                "Opción de revisar y cambiar preferencias en cualquier momento",
              ],
              variant: "highlight",
              collapsible: true,
            },
          ]}
          footerNote={{
            type: "warning",
            text: "Desactivar cookies esenciales puede afectar funcionalidades como el carrito de compras y la autenticación.",
          }}
        />
      </>
    ),
  },
];

// Interfaces para compatibilidad con el sistema anterior
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

// Función para obtener datos básicos de secciones (reemplaza PRIVACY_SECTIONS)
export const getPrivacySections = (): PrivacySection[] => {
  return PRIVACY_POLICY_SECTIONS.map((section) => ({
    id: section.id,
    title: section.title,
    summary: section.summary,
    href: section.path,
    icon: section.icon,
  }));
};

// Función para obtener secciones del sidebar (reemplaza getSidebarSections)
export const getSidebarSections = (): SidebarSection[] => {
  // Agregar la sección overview al inicio
  const overviewSection: SidebarSection = {
    id: "overview",
    title: "Aviso de Privacidad",
    href: "/privacy-policy",
  };

  const transformedSections = PRIVACY_POLICY_SECTIONS.map((section) => ({
    id: section.id,
    title: section.title,
    href: section.path,
  }));

  return [overviewSection, ...transformedSections];
};
