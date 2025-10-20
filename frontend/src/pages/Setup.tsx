import { Setup } from "@components/Setup/Setup"
import { useAppStore } from "@/stores/useAppStore";

export function SetupPage() {
  const { setupStep, changeSetupStep } = useAppStore();

  return <Setup currentStep={setupStep} onChangeStep={changeSetupStep} />;
}
