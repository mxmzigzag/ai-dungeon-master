import type { IStory } from "@/types/story";

interface IStoryListItemProps {
  story: IStory;
  onDeleteStory: (storyID: string) => void;
}

export type { IStoryListItemProps };