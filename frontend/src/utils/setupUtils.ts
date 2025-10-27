import { ESetupStep } from "@/types/setupSteps";


const getPreviousStep = (currentStep: ESetupStep): ESetupStep => {
  const steps = Object.values(ESetupStep);
  const index = steps.findIndex(step => step === currentStep);
  return index > 0 ? steps[index - 1] : ESetupStep.Setting;
}

const getNextStep = (currentStep: ESetupStep): ESetupStep => {
  const steps = Object.values(ESetupStep);
  const index = steps.findIndex(step => step === currentStep);
  return index < steps.length - 1 ? steps[index + 1] : ESetupStep.Opening;
}

const setupUtils = {
  getPreviousStep,
  getNextStep,
}

export { setupUtils };