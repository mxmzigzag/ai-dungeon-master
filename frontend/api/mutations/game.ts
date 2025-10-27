import axios from "axios";
import type { ISetupSteps } from "@/types/setupSteps";

export const startGameMutation = async (readyInfo: Partial<ISetupSteps>) => {
  const response = await axios.post('http://localhost:3001/api/game/start', readyInfo);
  return response.data;
}