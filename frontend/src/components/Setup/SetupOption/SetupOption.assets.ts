import { ESetupStepOptionStyle } from "@/types/setupSteps";

// active
const getOptionStyles = (style: ESetupStepOptionStyle, isActive: boolean) => {
  switch (style) {
    case ESetupStepOptionStyle.Fantasy:
      return `bg-blue-600 border-2 hover:border-gray-200 ${isActive ? 'border-white' : 'border-transparent'}`;
    case ESetupStepOptionStyle.Gothic:
      return `bg-green-600 border-2 hover:border-gray-200 ${isActive ? 'border-white' : 'border-transparent'}`;
    case ESetupStepOptionStyle.Steampunk:
      return `bg-yellow-600 border-2 hover:border-gray-200 ${isActive ? 'border-white' : 'border-transparent'}`;
    case ESetupStepOptionStyle.Custom:
      return `bg-gray-700 border-2 hover:border-gray-200 ${isActive ? 'border-white' : 'border-transparent'}`;
  }
}

export { getOptionStyles }