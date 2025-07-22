
export interface InfoCardSection {
  subtitle: string;
  list?: string[];
  plainText?: string;
  variant?: "normal" | "highlight";
  collapsible?: boolean;
  basicContent?: string;
  detailedContent?: string | string[];
}

export const legalBadgeMap = {
  mandatory: "danger",
  optional: "neutral",
  recommendation: "secondary",
};

export interface LegalBadge {
  type: keyof typeof legalBadgeMap;
  lawReference?: string;
  tooltip?: string;
}

export const footerNoteMap = {
  tip: "secondary",
  warning: "warning",
};

export interface FooterNote {
  type: keyof typeof footerNoteMap;
  text: string;
}

export interface ActionGuide {
  title: string;
  description: string;
  steps: string[];
  nextAction?: {
    label: string;
    href: string;
    external?: boolean;
  };
}

export interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  sections?: InfoCardSection[];
  footerNote?: FooterNote;
  id?: string;
  legalBadge?: LegalBadge;
  actionGuide?: ActionGuide;
  basicDescription?: string;
  collapsible?: boolean;
  defaultExpanded?: boolean;
}
