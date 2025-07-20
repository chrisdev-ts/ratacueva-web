import { notFound } from "next/navigation";
import { PrivacyLayout, PolicyPageLayout } from "@/components/privacy-policy";
import { getPrivacySectionData } from "@/constants/privacySectionsData";

interface PrivacySectionPageProps {
  params: Promise<{
    sectionId: string;
  }>;
}

export default async function PrivacySectionPage({
  params,
}: PrivacySectionPageProps) {
  const { sectionId } = await params;

  // Busca los datos de la sección basados en el ID de la URL
  const sectionData = getPrivacySectionData(sectionId);

  // Si no se encuentra la sección, muestra una página 404
  if (!sectionData) {
    notFound();
  }

  // Prepara los breadcrumbs. Siempre incluirá "Configuración" y "Aviso de privacidad"
  // y luego la sección actual.
  const breadcrumbItems = [
    { label: "Configuración", href: "/settings" },
    { label: "Aviso de privacidad", href: "/privacy-policy" },
    { label: sectionData.title, href: sectionData.path }, // Usa el title y path de la sección
  ];

  return (
    // PrivacyLayout ahora recibe el título y los breadcrumbs
    <PrivacyLayout
      breadcrumbs={breadcrumbItems} // Pasa los breadcrumbs al PrivacyLayout
    >
      <PolicyPageLayout
        title={sectionData.title}
        subtitle={sectionData.subtitle}
        currentPageNumber={sectionData.currentPageNumber}
        highlightBox={sectionData.highlightBox}
        quickAccessCards={sectionData.quickAccessCards}
        faqs={sectionData.faqs}
      >
        {sectionData.content}{" "}
        {/* Renderiza el contenido específico de la sección */}
      </PolicyPageLayout>
    </PrivacyLayout>
  );
}
