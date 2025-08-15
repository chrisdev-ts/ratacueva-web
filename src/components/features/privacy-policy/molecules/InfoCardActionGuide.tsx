import { Subheading, Body, BodySmall } from "@/components/atoms/Typography";
import {
  CheckCircleIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import type { ActionGuide } from "./InfoCardTypes";

interface InfoCardActionGuideProps {
  actionGuide: ActionGuide;
}

export function InfoCardActionGuide({ actionGuide }: InfoCardActionGuideProps) {
  return (
    <div className="bg-gray-800/30 hover:bg-gray-800/50 border-gray-600/50 border rounded-lg p-4">
      <div className="flex items-center gap-2 mb-3">
        <CheckCircleIcon className="h-5 w-5 text-success" />
        <Subheading className="text-success">
          {actionGuide.title}
        </Subheading>
      </div>

      <Body className="mb-4 leading-relaxed">
        {actionGuide.description}
      </Body>

      <div className="space-y-3">
        <BodySmall className="text-success">
          Pasos a seguir:
        </BodySmall>
        <ol className="space-y-2">
          {actionGuide.steps.map((step, stepIndex) => (
            <li key={stepIndex} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-success text-dark rounded-full flex items-center justify-center text-xs font-bold">
                {stepIndex + 1}
              </div>
              <Body className="leading-relaxed pt-0.5">
                {step}
              </Body>
            </li>
          ))}
        </ol>
      </div>

      {actionGuide.nextAction && (
        <div className="mt-4 pt-4 border-t border-gray-600/50">
          <a
            href={actionGuide.nextAction.href}
            target={actionGuide.nextAction.external ? "_blank" : undefined}
            rel={
              actionGuide.nextAction.external
                ? "noopener noreferrer"
                : undefined
            }
            className="inline-flex items-center gap-2 px-4 py-2 bg-success text-dark font-bold rounded-full transition-colors text-sm">
            <span>{actionGuide.nextAction.label}</span>
            {actionGuide.nextAction.external && (
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            )}
          </a>
        </div>
      )}
    </div>
  );
}
