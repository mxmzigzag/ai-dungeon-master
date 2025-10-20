import axios from "axios";
import type { ISetupStepOptionWithCustomPrompt } from "@/types/setupSteps";

export const startGameMutation = async (readyInfo: Record<number, ISetupStepOptionWithCustomPrompt >) => {
  const response = await axios.post('http://localhost:3001/api/game/start', readyInfo);
  return response.data;
}