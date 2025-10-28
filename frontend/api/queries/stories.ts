import axios from "axios";

export const getStoryQuery = async (storyID: string) => {
  const response = await axios.get(`http://localhost:3001/api/stories/${storyID}`);
  return response.data;
}