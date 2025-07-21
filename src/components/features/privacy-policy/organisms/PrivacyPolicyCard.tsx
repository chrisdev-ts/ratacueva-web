import Link from "next/link";
import { Body, Subtitle } from "@/components/atoms/Typography";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface PrivacyPolicyCardProps {
  id: string;
  title: string;
  summary: string;
  href: string;
  icon: React.ReactNode;
}

export function PrivacyPolicyCard({
  id,
  title,
  summary,
  href,
  icon,
}: PrivacyPolicyCardProps) {
  return (
    <Link
      key={id}
      href={href}
      className="bg-[hsl(var(--medium))] rounded-lg p-6 hover:bg-[hsl(var(--medium))]/80 transition-all duration-300 hover:border-[hsl(var(--primary))] group"
    >
      <div className="h-full">
        <div className="flex items-center mb-3">
          <div className="text-white mr-3 flex-shrink-0">{icon}</div>
          <Subtitle className="text-[hsl(var(--primary))] font-bold text-lg group-hover:text-[hsl(var(--accent))] transition-colors">
            {title}
          </Subtitle>
        </div>
        <Body className="text-neutral-300 text-sm leading-relaxed">
          {summary}
        </Body>
        <div className="mt-4 font-bold flex items-center text-[hsl(var(--secondary))] text-sm transition-colors">
          <span>Leer más</span>
          <ChevronRightIcon className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
