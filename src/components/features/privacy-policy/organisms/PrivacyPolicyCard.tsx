import Link from "next/link";
import { Body, BodySmall, Subheading } from "@/components/atoms/Typography";
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
      className="bg-gray rounded-lg p-6 hover:bg-gray/80 transition-all duration-300 group"
    >
      <div className="h-full">
        <div className="flex items-center mb-3">
          <div className="mr-3 flex-shrink-0">{icon}</div>
          <Subheading>
            {title}
          </Subheading>
        </div>
        <BodySmall className="leading-relaxed">
          {summary}
        </BodySmall>
        <div className="mt-4 font-bold flex items-center text-secondary text-sm transition-colors">
          <span>Leer más</span>
          <ChevronRightIcon className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
