interface IHero {
  name: string;
  race: string;
  class: string;
  gender: string;
  personality: string;
  background: string;
  appearance: string;
  equipment: string;
  role: string;
}

interface IHeroWithStoryId extends IHero {
  story_id: string;
}

interface IRandomHeroesCreateResponse {
  heroesText: string;
  heroesList: IHero[];
}

export type { IHero, IHeroWithStoryId, IRandomHeroesCreateResponse };