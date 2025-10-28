import type { IHero } from "./heroes";

interface IStoryStep {
  id: string;
  text: string;
  created_at: string;
}

interface IStory {
  id: string;
  title: string;
  description: string;
  style: string;
  tone: string;
  dmStyle: string;
  heroes: IHero[];
  story_steps: IStoryStep[];
}

export type { IStory, IStoryStep };