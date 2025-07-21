"use client";

import { Subtitle, Body } from "@/components/atoms/Typography";

interface HighlightBoxProps {
  type: "warning" | "info" | "success" | "urgent" | "legal";
  icon: React.ReactNode;
  title: string;
  content: string | string[]; // Acepta texto simple o array de textos
}

const typeStyles = {
  warning: "bg-yellow-900/30 border-yellow-700",
  info: "bg-blue-900/30 border-blue-700",
  success: "bg-green-900/30 border-green-700",
  urgent: "bg-red-900/30 border-red-700",
  legal: "bg-gray-800/50 border-gray-600",
};

const typeTextColors = {
  warning: "text-yellow-100",
  info: "text-blue-100",
  success: "text-green-100",
  urgent: "text-red-100",
  legal: "text-gray-100",
};

export function HighlightBox({
  type,
  icon,
  title,
  content,
}: HighlightBoxProps) {
  const renderContent = () => {
    if (Array.isArray(content)) {
      return content.map((text, index) => (
        <Body
          key={index}
          className={`${typeTextColors[type]} ${
            index < content.length - 1 ? "mb-3" : ""
          }`}
        >
          {text}
        </Body>
      ));
    } else {
      return <Body className={`${typeTextColors[type]}`}>{content}</Body>;
    }
  };

  return (
    <div className={`${typeStyles[type]} border rounded-lg p-6`}>
      <Subtitle className={`${typeTextColors[type]} font-bold mb-4 flex items-center gap-2`}>
        <div className="text-2xl">{icon}</div>
        {title}
      </Subtitle>
      <div className={`${typeTextColors[type]} space-y-3`}>
        {renderContent()}
      </div>
    </div>
  );
}
