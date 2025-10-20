import type { FC } from "react";
import type { IStorytellingPanelProps } from "./StorytellingPanel.props";

const StorytellingPanel:FC<IStorytellingPanelProps> = ({ text }) => {
  return (
    <div className="bg-black rounded-lg shadow-md p-4 border border-white w-1/2 mx-auto text-center">
      <div className="text-white">
        <p>{text}</p>
      </div>
    </div>
  )
}

export { StorytellingPanel };