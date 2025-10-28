import type { IApiResponse } from "@/types/api";
import type { IStory } from "@/types/story";
import axios from "axios";

export const getStoriesListQuery = async (): Promise<IApiResponse<IStory[]>> => {
  const response = await axios.get('http://localhost:3001/api/stories');
  return response.data;
}

export const getStoryByIdQuery = async (storyID: string): Promise<IApiResponse<IStory>> => {
  const response = await axios.get(`http://localhost:3001/api/stories/${storyID}`);
  return response.data;
}
