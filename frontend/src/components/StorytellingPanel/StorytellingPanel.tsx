import type { FC } from "react";
import type { IStorytellingPanelProps } from "./StorytellingPanel.props";

const StorytellingPanel:FC<IStorytellingPanelProps> = ({ text }) => {
  return (
    <div className="bg-neutral-900 rounded-2xl shadow-md p-4 w-full max-w-2xl mx-auto text-center">
      <div className="text-[#00a67d]">
        <p>{text}</p>
      </div>
    </div>
  )
}

export { StorytellingPanel };