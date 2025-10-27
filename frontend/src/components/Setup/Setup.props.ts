import type { ESetupStep } from "@/types/setupSteps";

interface ISetupProps {
  currentStep: ESetupStep;
  onChangeStep: (step: ESetupStep) => void;
}

export type { ISetupProps };