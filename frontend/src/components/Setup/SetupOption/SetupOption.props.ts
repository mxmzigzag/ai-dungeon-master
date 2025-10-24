import type { ESetupStepOptionStyle, ISetupStepOption } from "@/types/setupSteps";

interface ISetupOptionProps {
  id: string;
  title: string;
  description?: string;  
  style: ESetupStepOptionStyle;
  isActive: boolean;
  prompt: string;
  customSettings: string;
  onCustomChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClick: (option: ISetupStepOption) => void;
}

export type { ISetupOptionProps };