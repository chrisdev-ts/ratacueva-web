export interface InfoCardSection {
  subtitle: string;
  list?: string[];
  plainText?: string;
  variant?: "normal" | "highlight";
  collapsible?: boolean;
  basicContent?: string;
  detailedContent?: string | string[];
}

export interface LegalBadge {
  type: "mandatory" | "optional" | "recommendation";
  lawReference?: string;
  tooltip?: string;
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

export interface FooterNote {
  type: "tip" | "warning";
  text: string;
}

export type AccentColor = "blue" | "green" | "purple" | "orange" | "red" | "yellow";

export interface ColorScheme {
  border: string;
  bg: string;
  text: string;
  hover: string;
}

export interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  sections?: InfoCardSection[];
  footerNote?: FooterNote;
  id?: string;
  accentColor?: AccentColor;
  legalBadge?: LegalBadge;
  actionGuide?: ActionGuide;
  basicDescription?: string;
  collapsible?: boolean;
  defaultExpanded?: boolean;
}
