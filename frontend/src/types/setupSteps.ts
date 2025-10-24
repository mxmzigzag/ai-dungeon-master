enum ESetupStepOptionStyle {
  Fantasy = 'fantasy',
  Gothic = 'gothic',
  Steampunk = 'steampunk',
  Custom = 'custom',
}

interface ISetupStorytellingValue {
  title?: string;
  prompt: string;
}

interface ISetupStepOption {
  id: string;
  title: string;
  description?: string;
  style: ESetupStepOptionStyle;
  prompt: string;
}

interface ISetupStepOptionWithCustomPrompt extends ISetupStepOption {
  customPrompt: string;
}

export { ESetupStepOptionStyle }
export type { ISetupStorytellingValue, ISetupStepOption, ISetupStepOptionWithCustomPrompt };