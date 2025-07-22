"use client";

import { Subheading, Body } from "@/components/atoms/Typography";

interface HighlightBoxProps {
  icon: React.ReactNode;
  title: string;
  content: string | string[];
}

export function HighlightBox({
  icon,
  title,
  content,
}: HighlightBoxProps) {

  const renderContent = () => {
    if (Array.isArray(content)) {
      return content.map((text, index) => (
        <Body key={index} className={index < content.length - 1 ? "mb-3" : ""}>
          {text}
        </Body>
      ));
    } else {
      return <Body>{content}</Body>;
    }
  };

  return (
    <div className={`bg-gray rounded-lg p-6`}>
      <Subheading className={`mb-4 flex items-center gap-2`}>
        <div className="text-2xl">{icon}</div>
        {title}
      </Subheading>
      <div className={`space-y-3`}>{renderContent()}</div>
    </div>
  );
}
