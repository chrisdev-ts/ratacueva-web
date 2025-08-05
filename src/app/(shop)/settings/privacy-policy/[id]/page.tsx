import { notFound } from "next/navigation";
import {
  PrivacyLayout,
  PolicyPageLayout,
} from "@/components/features/privacy-policy";
import { getPrivacySectionData } from "@/constants/privacySectionsData";

interface PrivacySectionPageProps {
  params: {
    id: string;
  };
}

export default async function PrivacySectionPage({
  params,
}: PrivacySectionPageProps) {
  const { id } = await params;

  // Busca los datos de la sección basados en el ID de la URL
  const sectionData = getPrivacySectionData(id);

  if (!sectionData) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Configuración", href: "/settings" },
    { label: "Aviso de privacidad", href: "/settings/privacy-policy" },
    { label: sectionData.title, href: sectionData.path },
  ];

  return (
    <PrivacyLayout breadcrumbs={breadcrumbItems}>
      <PolicyPageLayout
        title={sectionData.title}
        subtitle={sectionData.subtitle}
        currentPageNumber={sectionData.currentPageNumber}
        highlightBox={sectionData.highlightBox}
        quickAccessCards={sectionData.quickAccessCards ?? []}
        faqs={sectionData.faqs}
      >
        {sectionData.content}{" "}
      </PolicyPageLayout>
    </PrivacyLayout>
  );
}
