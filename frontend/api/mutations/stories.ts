import axios from "axios";
import type { ISetupSteps } from "@/types/setupSteps";

export const startStoryMutation = async ({ setupInfo, storyID }: { setupInfo: Partial<ISetupSteps>, storyID: string }) => {
  const response = await axios.post('http://localhost:3001/api/stories/start', { setupInfo, storyID });
  return response.data;
}

export const deleteStoryMutation = async (storyID: string) => {
  const response = await axios.delete(`http://localhost:3001/api/stories/${storyID}`);
  return response.data;
}