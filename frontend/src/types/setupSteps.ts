enum ESetupStep {
  Setting = 'setting',
  Heroes = 'heroes',
  Opening = 'opening',
}

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
  customPrompt?: string;
}

interface ISetupStepSettingOption extends ISetupStepOption {
  tone: string;
  dmStyle: string;
}

interface ISetupStepHeroesOption extends ISetupStepOption {
  partySize: number;
}

interface ISetupSteps {
  [ESetupStep.Setting]: ISetupStepSettingOption;
  [ESetupStep.Heroes]: ISetupStepHeroesOption;
  [ESetupStep.Opening]: ISetupStepOption;
}

interface ISetupStepOptionsMap {
  [ESetupStep.Setting]: ISetupStepSettingOption[];
  [ESetupStep.Heroes]: ISetupStepOption[];
  [ESetupStep.Opening]: ISetupStepOption[];
}

export { ESetupStep, ESetupStepOptionStyle }
export type { ISetupStorytellingValue, ISetupStepOption, ISetupStepHeroesOption, ISetupSteps, ISetupStepOptionsMap };