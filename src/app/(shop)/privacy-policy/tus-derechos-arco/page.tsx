"use client";

import { Body } from "@/components/common/Typography";
import { PolicyPageLayout, InfoCard } from "@/components/privacy-policy";
import {
  KeyIcon,
  PencilSquareIcon,
  TrashIcon,
  HandRaisedIcon,
  ClockIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";

export default function TusDerechosArcoPage() {
  const breadcrumbItems = [
    { label: "Configuración", href: "/settings" },
    { label: "Aviso de privacidad", href: "/privacy-policy" },
    { label: "Tus derechos sobre tus datos (ARCO)",
      href: "/privacy-policy/tus-derechos-arco"
     },
  ];

  const quickAccessCards = [
    {
      icon: <KeyIcon className="h-6 w-6" />,
      title: "Derecho de Acceso",
      description: "Conoce qué datos tenemos de ti",
      href: "#derecho-acceso",
      category: "derechos" as const,
    },
    {
      icon: <PencilSquareIcon className="h-6 w-6" />,
      title: "Derecho de Rectificación",
      description: "Corrige información incorrecta",
      href: "#derecho-rectificacion",
      category: "derechos" as const,
    },
    {
      icon: <TrashIcon className="h-6 w-6" />,
      title: "Derecho de Cancelación",
      description: "Elimina tus datos personales",
      href: "#derecho-cancelacion",
      category: "derechos" as const,
    },
    {
      icon: <HandRaisedIcon className="h-6 w-6" />,
      title: "Derecho de Oposición",
      description: "Oponte al tratamiento",
      href: "#derecho-oposicion",
      category: "derechos" as const,
    },
  ];

  const faqs = [
    {
      question: "¿Cuánto tiempo tardan en responder a mi solicitud ARCO?",
      answer:
        "Le comunicaremos nuestra determinación en un plazo máximo de 20 días hábiles contados desde la fecha en que recibamos su solicitud.",
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
  ];

  return (
    <PolicyPageLayout
      title="Tus derechos sobre tus datos (ARCO)"
      subtitle="Como titular de datos personales, tienes derechos fundamentales que puedes ejercer en cualquier momento para controlar el tratamiento que RataCueva hace de tu información personal."
      breadcrumbItems={breadcrumbItems}
      currentPageNumber={7}
      highlightBox={{
        icon: <ShieldExclamationIcon className="h-6 w-6" />,
        title: "Tus derechos fundamentales",
        type: "legal",
        children: (
          <>
            <Body className="text-gray-300 mb-3">
              <strong>Derechos ARCO:</strong> Tienes derecho a Acceder a tus
              datos, Rectificar información incorrecta, Cancelar datos
              innecesarios y Oponerte a ciertos tratamientos.
            </Body>
            <Body className="text-gray-300">
              Estos derechos son fundamentales para el control de tu información
              personal y están protegidos por la legislación mexicana de
              protección de datos.
            </Body>
          </>
        ),
      }}
      quickAccessCards={quickAccessCards}
      faqs={faqs}
    >
      <div className="space-y-8">
        <InfoCard
          id="derecho-acceso"
          icon={<KeyIcon className="h-6 w-6" />}
          title="Derecho de Acceso"
          description="Puedes solicitar conocer qué datos personales tenemos sobre ti, para qué los usamos, con quién los compartimos y cualquier información relacionada con su tratamiento. Este derecho te permite tener transparencia total sobre el manejo de tu información."
          accentColor="blue"
          sections={[
            {
              subtitle: "Información que puedes solicitar:",
              list: [
                "Qué datos personales tenemos sobre ti",
                "Para qué finalidades los utilizamos",
                "Con quién hemos compartido tu información",
                "El origen de donde obtuvimos tus datos",
                "Las transferencias que se hayan realizado",
                "El plazo de conservación de tu información",
              ],
            },
          ]}
        />

        <InfoCard
          id="derecho-rectificacion"
          icon={<PencilSquareIcon className="h-6 w-6" />}
          title="Derecho de Rectificación"
          description="Si encuentras que alguno de tus datos personales en nuestros sistemas es incorrecto, está desactualizado o incompleto, puedes solicitar que lo corrijamos. Tu información debe ser exacta y estar actualizada en todo momento."
          accentColor="green"
          sections={[
            {
              subtitle: "Cuándo puedes solicitar rectificación:",
              list: [
                "Tus datos son inexactos o incorrectos",
                "La información está desactualizada",
                "Los datos están incompletos",
                "No son pertinentes para la finalidad original",
                "Has cambiado de dirección, teléfono o email",
                "Hay errores de captura en tu información",
              ],
            },
          ]}
        />

        <InfoCard
          id="derecho-cancelacion"
          icon={<TrashIcon className="h-6 w-6" />}
          title="Derecho de Cancelación"
          description="Puedes solicitar que eliminemos tus datos personales de nuestros registros cuando ya no sean necesarios para las finalidades que motivaron su tratamiento o cuando consideres que no se están utilizando conforme a los principios de protección de datos."
          accentColor="red"
          sections={[
            {
              subtitle: "Cuándo puedes solicitar cancelación:",
              list: [
                "Los datos ya no son necesarios para las finalidades originales",
                "Has retirado tu consentimiento y no hay otra base legal",
                "Tus datos han sido tratados de manera ilícita",
                "Es necesario para cumplir una obligación legal",
                "Ya no mantienes una relación comercial con RataCueva",
                "Se han cumplido los plazos de conservación establecidos",
              ],
            },
          ]}
          footerNote={{
            type: "warning",
            text: "Algunos datos pueden conservarse por obligaciones legales o para el ejercicio o defensa de reclamaciones.",
          }}
        />

        <InfoCard
          id="derecho-oposicion"
          icon={<HandRaisedIcon className="h-6 w-6" />}
          title="Derecho de Oposición"
          description="Puedes oponerte al tratamiento de tus datos personales cuando exista una causa legítima para ello o cuando el tratamiento tenga por objeto el envío de publicidad, prospección comercial o promoción de productos y servicios."
          accentColor="orange"
          sections={[
            {
              subtitle: "Cuándo puedes ejercer oposición:",
              list: [
                "El tratamiento cause molestias o perjuicios injustificados",
                "Se utilicen para fines de marketing directo",
                "No deseas recibir comunicaciones promocionales",
                "El tratamiento se base en interés legítimo y prefieres que se detenga",
                "Consideras que el tratamiento es innecesario",
                "Existe una causa legítima que justifique tu oposición",
              ],
            },
          ]}
        />

        <InfoCard
          icon={<ClockIcon className="h-6 w-6" />}
          title="¿Cómo ejercer tus derechos ARCO?"
          description="Para ejercer cualquiera de tus derechos ARCO, puedes contactarnos a través de los siguientes medios. Te responderemos en los plazos establecidos por ley y te guiaremos en todo el proceso."
          accentColor="purple"
          sections={[
            {
              subtitle: "Medios de contacto:",
              list: [
                "Correo electrónico: privacidad@ratacueva.com",
                "Portal de privacidad: www.ratacueva.com/privacidad",
                "Centro de ayuda: soporte@ratacueva.com",
                "Teléfono: +52 (55) 1234-5678 (horario de oficina)",
              ],
            },
            {
              subtitle: "Información que debes incluir:",
              list: [
                "Tu nombre completo",
                "Correo electrónico registrado en tu cuenta",
                "Derecho que deseas ejercer (Acceso, Rectificación, Cancelación u Oposición)",
                "Descripción clara y precisa de tu solicitud",
                "Copia de identificación oficial",
              ],
            },
            {
              subtitle: "Documentos adicionales (si aplica):",
              list: [
                "Comprobante de domicilio actualizado",
                "Cualquier documento que facilite localizar tus datos",
                "En caso de representación: poder notarial o carta poder",
              ],
              collapsible: true,
            },
          ]}
        />

        <InfoCard
          icon={<ClockIcon className="h-6 w-6" />}
          title="Plazos de respuesta"
          description="RataCueva se compromete a responder tus solicitudes de derechos ARCO en los plazos establecidos por la legislación mexicana de protección de datos personales."
          accentColor="blue"
          sections={[
            {
              subtitle: "Tiempo de respuesta:",
              plainText:
                "Te comunicaremos nuestra determinación en un plazo máximo de 20 días hábiles contados desde la fecha en que recibamos tu solicitud completa.",
            },
            {
              subtitle: "Implementación de la solicitud:",
              plainText:
                "Si tu solicitud es procedente, la haremos efectiva en un plazo máximo de 15 días hábiles siguientes a la comunicación de nuestra respuesta.",
            },
            {
              subtitle: "Seguimiento de tu solicitud:",
              plainText:
                "Recibirás un número de folio para dar seguimiento a tu solicitud y podrás consultar el estatus a través de nuestro portal de privacidad.",
            },
          ]}
        />

        <InfoCard
          icon={<ShieldExclamationIcon className="h-6 w-6" />}
          title="Limitaciones al ejercicio de los derechos ARCO"
          description="En algunos casos, podríamos no estar en posibilidad de acceder a su solicitud de ejercicio de derechos ARCO."
          accentColor="red"
          sections={[
            {
              subtitle: "Casos donde pueden existir limitaciones:",
              list: [
                "Esté previsto en una ley que los datos personales deban ser tratados para el cumplimiento de obligaciones legales",
                "La cancelación de datos personales haya sido ordenada por autoridad competente",
                "Se obstaculice actuaciones judiciales o administrativas vinculadas a obligaciones fiscales, la investigación y persecución de delitos",
                "Los datos personales sean necesarios para proteger los intereses jurídicamente tutelados del titular",
                "Exista un impedimento legal o la resolución de una autoridad competente que restrinja el acceso a los datos personales",
              ],
            },
          ]}
          footerNote={{
            type: "warning",
            text: "Estas limitaciones están establecidas por la legislación mexicana en materia de protección de datos personales.",
          }}
        />

        <InfoCard
          icon={<HandRaisedIcon className="h-6 w-6" />}
          title="Revocación del consentimiento"
          description="Puedes revocar el consentimiento que nos hayas otorgado para el tratamiento de tus datos personales en cualquier momento. Sin embargo, es importante que conozcas las implicaciones de esta decisión."
          accentColor="orange"
          sections={[
            {
              subtitle: "Consideraciones importantes:",
              plainText:
                "La revocación puede tener como consecuencia que no podamos seguir prestándote ciertos servicios o que concluyamos nuestra relación comercial. Esta revocación no tendrá efectos retroactivos sobre el tratamiento previo.",
            },
            {
              subtitle: "Proceso de revocación:",
              plainText:
                "Puedes revocar tu consentimiento enviando un correo a privacidad@ratacueva.com especificando qué tratamientos deseas que cesen y confirmando tu identidad.",
            },
          ]}
          footerNote={{
            type: "tip",
            text: "La revocación del consentimiento no afecta la licitud del tratamiento basado en el consentimiento previo a su revocación.",
          }}
        />

        <InfoCard
          icon={<ClockIcon className="h-6 w-6" />}
          title="Mecanismos automatizados para ejercer sus derechos"
          description="Para facilitar el ejercicio de sus derechos ARCO, hemos implementado los siguientes mecanismos automatizados."
          accentColor="green"
          sections={[
            {
              subtitle: "Portal de privacidad:",
              plainText:
                "Acceda a nuestro portal especializado en: www.ratacueva.com/privacidad. Aquí podrá enviar sus solicitudes de manera electrónica y dar seguimiento a su estatus.",
            },
            {
              subtitle: "Centro de control de datos:",
              plainText:
                "Desde su cuenta de usuario, acceda a la sección 'Configuración de Privacidad'. Allí podrá gestionar directamente algunos aspectos del tratamiento de sus datos.",
            },
          ]}
        />
      </div>
    </PolicyPageLayout>
  );
}
