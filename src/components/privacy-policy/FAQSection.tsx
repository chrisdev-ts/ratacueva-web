"use client";

import React, { useState } from "react";
import { Body, Subtitle } from "@/components/common/Typography";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export function FAQSection({
  faqs,
  title = "Preguntas frecuentes",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <h2 className="text-2xl text-white font-bold mb-6">
        {title}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[hsl(var(--medium))] rounded-lg"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-700/50 transition-colors rounded-lg"
              aria-expanded={openIndex === index}
            >
              <Subtitle className="text-white font-medium pr-4">
                {faq.question}
              </Subtitle>
              <ChevronDownIcon
                className={`w-5 h-5 text-neutral-400 transition-transform flex-shrink-0 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 pt-2">
                <Body className="text-neutral-300 leading-relaxed">
                  {faq.answer}
                </Body>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
