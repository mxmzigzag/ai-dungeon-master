import type { IStory } from "@/types/story";

interface IStoriesListProps {
  stories: IStory[];
  onDeleteStory: (storyID: string) => void;
} 

export type { IStoriesListProps };