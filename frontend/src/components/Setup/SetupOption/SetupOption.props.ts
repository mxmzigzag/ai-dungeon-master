import type { ESetupStepOptionStyle, ISetupStepOption } from "@/types/setupSteps";

interface ISetupOptionProps {
  id: string;
  title: string;
  description?: string;
  onClick: (option: ISetupStepOption) => void;
  style: ESetupStepOptionStyle;
  isActive: boolean;
  customSettings: string;
  onCustomChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export type { ISetupOptionProps };