"use client";

import { H2, Body } from "@/components/common/Typography";

interface HighlightBoxProps {
  type: "warning" | "info" | "success" | "urgent" | "legal";
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
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
  children,
}: HighlightBoxProps) {
  return (
    <div className={`${typeStyles[type]} border rounded-lg p-6`}>
      <H2 className={`${typeTextColors[type]} mb-4 flex items-center gap-2`}>
        <div className="text-2xl">{icon}</div>
        {title}
      </H2>
      <div className={`${typeTextColors[type]} space-y-3`}>{children}</div>
    </div>
  );
}
