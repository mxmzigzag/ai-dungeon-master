import { useAppStore } from "@stores/useAppStore";
import { Setup } from "@components/Setup"

export function SetupPage() {
  const { setupStep, changeSetupStep } = useAppStore();

  return <Setup currentStep={setupStep} onChangeStep={changeSetupStep} />;
}
