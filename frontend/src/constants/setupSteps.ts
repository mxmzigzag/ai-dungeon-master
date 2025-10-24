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
      prompt:
        "The story unfolds in a high-fantasy realm filled with kingdoms, dragons, and ancient prophecies. Magic flows through the land, and heroes rise from humble beginnings to face destiny itself.",
    },
    {
      id: "steampunk-realms",
      title: "⚙️ Steampunk Realms",
      description: "Gears and magic power cities of brass and smoke — where science meets sorcery.",
      style: ESetupStepOptionStyle.Steampunk,
      prompt:
        "The tale begins in a sprawling world of steam and sorcery — airships drift over smog-choked cities, and invention rivals ancient magic. Progress and peril move hand in hand.",
    },
    {
      id: "post-apocalyptic",
      title: "🔥 Post-Apocalyptic Wasteland",
      description: "Civilization has fallen. Survivors fight for power, purpose, or simple survival in a ruined world.",
      style: ESetupStepOptionStyle.Gothic,
      prompt:
        "The world as it once was has crumbled. In the ashes of fallen empires, scattered survivors cling to hope, scavenging through the ruins of what came before. Danger is everywhere — and unity is rare.",
    },
    {
      id: "mythic-ancient",
      title: "🏛️ Mythic & Ancient Legends",
      description: "Echoes of gods and heroes — epic tales set in worlds inspired by ancient myths and forgotten civilizations.",
      style: ESetupStepOptionStyle.Fantasy,
      prompt:
        "In an age when gods walked among mortals and legends shaped the world, heroes rose to challenge fate itself. The air hums with divine power, and ancient secrets lie buried beneath sacred stones.",
    },
    {
      id: "custom",
      title: "🌍 Custom Setting",
      description: "Describe your own unique world — or blend elements to create something new.",
      style: ESetupStepOptionStyle.Custom,
      prompt: '',
    },
  ],

  1: [
    {
      id: "random-heroes",
      title: "🎲 Random Heroes",
      description: "I'll generate a balanced group of adventurers with dynamic personalities.",
      style: ESetupStepOptionStyle.Fantasy,
      prompt: '',
    },
    {
      id: "custom",
      title: "🗡️ Create My Own Party",
      description: "You'll design each hero — their race, class, and story background.",
      style: ESetupStepOptionStyle.Custom,
      prompt: '',
    },
  ],

  2: [
    {
      id: "let-fate-decide",
      title: "🎲 Let Fate Decide",
      description: "I'll surprise you with a unique opening scene tailored to your chosen setting.",
      style: ESetupStepOptionStyle.Custom,
      prompt: 
        "Allow fate to stitch the beginning: generate a distinctive, setting-aware opening scene that brings the party together. The scene should reflect the chosen world tone, introduce a clear immediate hook (danger, mystery, or opportunity), and present an inciting incident that naturally involves the whole group.",
    },
    {
      id: "royal-summons",
      title: "🏰 The Royal Summons",
      description:
        "At dawn, a messenger arrives with an urgent letter from the king. He gathers the capable and the daring for a purpose not yet revealed.",
      style: ESetupStepOptionStyle.Custom,
      prompt:
        "At sunrise, a royal summons reaches your party — a sealed message bearing the king’s crest. You are called to the capital, where destiny begins to unfold beneath the vaulted halls of power.",
    },
    {
      id: "battlefield",
      title: "⚔️ The Battlefield",
      description: "Steel clashes, smoke rises, and your story begins in the chaos of war.",
      style: ESetupStepOptionStyle.Custom,
      prompt:
        "The thunder of battle fills the air. Smoke and screams mix as your group fights for survival amid the carnage — allies and enemies alike caught in a storm that will reshape the world.",
    },
    {
      id: "tavern-gathering",
      title: "🎭 The Tavern Gathering",
      description: "A crowded tavern, a chance meeting, and a rumor that will change everything.",
      style: ESetupStepOptionStyle.Custom,
      prompt:
        "Within the warmth and chaos of a crowded tavern, your party crosses paths for the first time. Laughter, music, and whispers of danger fill the air — and a single rumor sparks the beginning of something far greater.",
    },
    {
      id: "custom",
      title: "Custom Opening",
      description: "Describe your own unique opening scene — or blend elements to create something new.",
      style: ESetupStepOptionStyle.Custom,
      prompt: '',
    },
  ],
}

export { STORYTELLING_STEPS_MAP, STEP_OPTIONS_MAP };