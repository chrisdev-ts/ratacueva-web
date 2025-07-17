"use client";

import { useState } from "react";
import { H2, Body, H3 } from "@/components/common/Typography";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  category?: "general" | "derechos" | "tecnico" | "legal";
}

const categoryIcons = {
  general: "❓",
  derechos: "⚖️",
  tecnico: "🔧",
  legal: "📜",
};

export function FAQItem({
  question,
  answer,
  category = "general",
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neutral-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 bg-[hsl(var(--medium))] hover:bg-[hsl(var(--medium))]/80 transition-colors flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{categoryIcons[category]}</span>
          <H3 className="text-[hsl(var(--primary))]">{question}</H3>
        </div>
        <svg
          className={`w-5 h-5 text-[hsl(var(--primary))] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-[hsl(var(--dark))] border-t border-neutral-700">
          <Body className="text-neutral-300 leading-relaxed">{answer}</Body>
        </div>
      )}
    </div>
  );
}
