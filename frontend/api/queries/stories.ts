import type { IApiResponse } from "@/types/api";
import type { IStory } from "@/types/story";
import axios from "axios";

export const getStoryQuery = async (storyID: string): Promise<IApiResponse<IStory>> => {
  const response = await axios.get(`http://localhost:3001/api/stories/${storyID}`);
  return response.data;
}