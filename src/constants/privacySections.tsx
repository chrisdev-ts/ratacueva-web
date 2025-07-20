import {
  BuildingOffice2Icon,
  DocumentDuplicateIcon,
  Cog6ToothIcon,
  UsersIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  KeyIcon,
  FaceSmileIcon,
  ClockIcon,
  ArrowPathIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

export interface PrivacySection {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export interface SidebarSection {
  id: string;
  title: string;
  href: string;
}

// Datos completos con iconos JSX
export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: "identidad-responsable",
    title: "¿Quién es responsable de tus datos?",
    description:
      "RataCueva es la entidad legal responsable del tratamiento de sus datos personales y se encuentra ubicada en Cuitláhuac, Ver.",
    href: "/privacy-policy/quien-es-responsable",
    icon: <BuildingOffice2Icon className="w-6 h-6" />,
  },
  {
    id: "datos-recopilamos",
    title: "¿Qué datos personales recopilamos?",
    description:
      "Información sobre las categorías de datos personales que recopilamos para ofrecerle una experiencia completa en RataCueva.",
    href: "/privacy-policy/que-datos-recopilamos",
    icon: <DocumentDuplicateIcon className="w-6 h-6" />,
  },
  {
    id: "finalidades-tratamiento",
    title: "¿Para qué usamos tus datos?",
    description:
      "Detalle de las finalidades primarias y secundarias para las cuales utilizamos sus datos personales en nuestra plataforma.",
    href: "/privacy-policy/para-que-usamos-datos",
    icon: <Cog6ToothIcon className="w-6 h-6" />,
  },
  {
    id: "transferencia-datos",
    title: "¿Con quién compartimos tus datos?",
    description:
      "Información sobre los terceros con quienes compartimos sus datos y las medidas de protección implementadas.",
    href: "/privacy-policy/con-quien-compartimos-datos",
    icon: <UsersIcon className="w-6 h-6" />,
  },
  {
    id: "medidas-seguridad",
    title: "¿Cómo protegemos tus datos?",
    description:
      "Conjunto integral de medidas administrativas, técnicas y físicas que implementamos para proteger su información.",
    href: "/privacy-policy/como-protegemos-datos",
    icon: <ShieldCheckIcon className="w-6 h-6" />,
  },
  {
    id: "politica-cookies",
    title: "Cookies y tecnologías similares",
    description:
      "Cómo utilizamos cookies, web beacons y otras tecnologías para mejorar tu experiencia de usuario.",
    href: "/privacy-policy/cookies-tecnologias",
    icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
  },
  {
    id: "derechos-usuarios",
    title: "Tus derechos sobre tus datos (ARCO)",
    description:
      "Conoce tus derechos de Acceso, Rectificación, Cancelación y Oposición, así como sus limitaciones.",
    href: "/privacy-policy/tus-derechos-arco",
    icon: <KeyIcon className="w-6 h-6" />,
  },
  {
    id: "proteccion-menores",
    title: "Privacidad de menores de edad",
    description:
      "Políticas específicas para la protección de datos de usuarios menores de 18 años.",
    href: "/privacy-policy/privacidad-menores",
    icon: <FaceSmileIcon className="w-6 h-6" />,
  },
  {
    id: "tiempo-retencion",
    title: "¿Cuánto tiempo conservamos tus datos?",
    description:
      "Períodos de retención y criterios para la eliminación segura de tu información personal.",
    href: "/privacy-policy/cuanto-tiempo-conservamos",
    icon: <ClockIcon className="w-6 h-6" />,
  },
  {
    id: "cambios-politica",
    title: "Cambios a este aviso de privacidad",
    description:
      "Cómo te notificamos sobre cambios en este aviso y qué opciones tienes ante las modificaciones.",
    href: "/privacy-policy/cambios-aviso-privacidad",
    icon: <ArrowPathIcon className="w-6 h-6" />,
  },
  {
    id: "denuncias",
    title: "¿Dónde presentar quejas o denuncias?",
    description:
      "Información sobre cómo presentar denuncias ante el Instituto Nacional de Transparencia y Acceso a la Información.",
    href: "/privacy-policy/donde-presentar-quejas",
    icon: <ExclamationCircleIcon className="w-6 h-6" />,
  },
];

// Función transformadora para el sidebar (solo necesita id, title, href)
export const getSidebarSections = (): SidebarSection[] => {
  // Agregar la sección overview al inicio
  const overviewSection: SidebarSection = {
    id: "overview",
    title: "Aviso de Privacidad",
    href: "/privacy-policy",
  };

  const transformedSections = PRIVACY_SECTIONS.map(
    ({ id, title, href }: PrivacySection) => ({
      id,
      title,
      href,
    })
  );

  return [overviewSection, ...transformedSections];
};
