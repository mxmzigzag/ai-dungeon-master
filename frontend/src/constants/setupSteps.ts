import { ESetupStepOptionStyle, type ISetupStepOption, type ISetupStorytellingValue } from "@/types/setupSteps";

const STORYTELLING_STEPS_MAP: Record<number, ISetupStorytellingValue> = {
  0: { 
    title: "Choose the World & Tone",
    prompt: "Where will our story unfold? What kind of atmosphere do you want?",
  },
  1: { 
    title: "Meet the Heroes",
    prompt: "Who will walk this path? Choose or let me craft them for you.",
  },
  2: { 
    title: "Begin the Journey",
    prompt: "Where does our tale begin? Set the opening scene, or leave it to fate.",
  },
}

const STEP_OPTIONS_MAP: Record<number, ISetupStepOption[]> = {
  0: [
    {
      id: "classic-fantasy",
      title: "🌄 Classic Fantasy",
      description: "A world of knights, dragons, prophecies, and hidden magic waiting to be uncovered.",
      style: ESetupStepOptionStyle.Fantasy,
    },
    {
      id: "dark-gothic",
      title: "🌌 Dark Gothic",
      description: "Haunted castles, forbidden rituals, and heroes walking the line between light and shadow.",
      style: ESetupStepOptionStyle.Gothic,
    },
    {
      id: "steampunk-realms",
      title: "⚙️ Steampunk Realms",
      description: "Gears and magic power cities of brass and smoke — where science meets sorcery.",
      style: ESetupStepOptionStyle.Steampunk,
    },
    {
      id: "grimdark-survival",
      title: "💀 Grimdark Survival",
      description: "In this world, hope is rare. Every victory costs blood, and heroes are hard to find.",
      style: ESetupStepOptionStyle.Fantasy,
    },
    {
      id: "whimsical-fairytale",
      title: "🪄 Whimsical Fairytale",
      description: "A vibrant world full of wonder, absurdity, and peculiar creatures with curious rules.",
      style: ESetupStepOptionStyle.Fantasy,
    },
    {
      id: "custom",
      title: "🌍 Custom Setting",
      description: "Describe your own unique world — or blend elements to create something new.",
      style: ESetupStepOptionStyle.Custom,
    }
  ],
  1: [
    {
      id: "random-heroes",
      title: "🎲 Random Heroes",
      description: "I'll generate a balanced group of adventurers with dynamic personalities.",
      style: ESetupStepOptionStyle.Custom,
    },
    {
      id: "custom",
      title: "🗡️ Create My Own Party",
      description: "You'll design each hero — their race, class, and story background.",
      style: ESetupStepOptionStyle.Custom,
    },
  ],
  2: [
    {
      id: "royal-summons",
      title: "🏰 The Royal Summons",
      description: "At dawn, a messenger arrives with an urgent letter from the king.",
      style: ESetupStepOptionStyle.Custom,
    },
    {
      id: "whispering-forest",
      title: "🌲 The Whispering Forest",
      description: "Strange lights flicker between the trees — and the air hums with forgotten magic.",
      style: ESetupStepOptionStyle.Custom,
    },
    {
      id: "ruined-chapel",
      title: "⛪ The Ruined Chapel",
      description: "You awaken in a crumbling chapel, something ancient stirring beneath the stones.",
      style: ESetupStepOptionStyle.Custom,
    },
    {
      id: "battlefield",
      title: "⚔️ The Battlefield",
      description: "Steel clashes, smoke rises, and your story begins in the chaos of war.",
      style: ESetupStepOptionStyle.Custom,
    },
    {
      id: "tavern-gathering",
      title: "🎭 The Tavern Gathering",
      description: "A crowded tavern, a chance meeting, and a rumor that will change everything.",
      style: ESetupStepOptionStyle.Custom,
    },
    {
      id: "let-fate-decide",
      title: "🎲 Let Fate Decide",
      description: "I'll surprise you with a unique opening scene tailored to your chosen setting.",
      style: ESetupStepOptionStyle.Custom,
    }
  ]
}

export { STORYTELLING_STEPS_MAP, STEP_OPTIONS_MAP };