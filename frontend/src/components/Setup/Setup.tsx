import { useState, type FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { ISetupStepOption, ISetupStepOptionWithCustomPrompt } from "@/types/setupSteps";
import { STEP_OPTIONS_MAP, STORYTELLING_STEPS_MAP } from "@constants/setupSteps";
import { PageLayout } from "../PageLayout/PageLayout";
import type { ISetupProps } from "./Setup.props";
import { StorytellingPanel } from "../StorytellingPanel";
import { SetupOption } from "./SetupOption/SetupOption";

const Setup: FC<ISetupProps> = ({ currentStep, onChangeStep }) => {
  const { gameID } = useParams<{ gameID: string }>();
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<Record<number, ISetupStepOption>>({});
  const [customSettings, setCustomSettings] = useState<Record<number, string>>({});
  

  const stepTitle = STORYTELLING_STEPS_MAP[currentStep]?.title || 'unknown step';
  const promptText = STORYTELLING_STEPS_MAP[currentStep]?.prompt || 'unknown prompt';
  const stepOptions = STEP_OPTIONS_MAP[currentStep] || [];

  const usedSteps = Object.keys(STORYTELLING_STEPS_MAP);
  
  const handleOptionClick = (option: ISetupStepOption) => {
    setSelectedOptions({ ...selectedOptions, [currentStep]: option });
  }

  const handleCustomChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCustomSettings({ ...customSettings, [currentStep]: event.target.value });
  }

  const handleStartGame = () => {
    const readyInfo: Record<number, ISetupStepOptionWithCustomPrompt > = Object.fromEntries(
      Object.entries(selectedOptions)
        .map(([key, option]) => {
          return [Number(key), {...option, customPrompt: customSettings[Number(key)] || ''}];
        })
    );
    
    console.log('ZXC', readyInfo);
    navigate(`/${gameID}/game`);
  }

  return (
    <PageLayout title={stepTitle}>
      <StorytellingPanel text={promptText} />

      <div className="flex flex-col gap-4">
        {stepOptions.map((option) => (
          <SetupOption 
            key={option.id} 
            id={option.id}
            title={option.title} 
            description={option.description} 
            onClick={handleOptionClick} 
            style={option.style} 
            isActive={selectedOptions[currentStep]?.id === option.id}
            customSettings={customSettings[currentStep]}
            onCustomChange={handleCustomChange}
          />
        ))}
      </div>

      <div className="flex justify-between gap-4">
        {usedSteps.indexOf(currentStep.toString()) > 0 && (
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors" 
            onClick={() => onChangeStep(currentStep - 1)}
          >
              Previous Step
          </button>
        )}

        {usedSteps.indexOf(currentStep.toString()) < usedSteps.length - 1 ? (
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-80 disabled:bg-gray-500" 
            onClick={() => onChangeStep(currentStep + 1)}
            disabled={!selectedOptions[currentStep]}
          >
            Next Step
          </button>
        ) : (
          <button 
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors" 
            onClick={handleStartGame}
          >
            Lets Roll!
          </button>
        )}
      </div>
    </PageLayout>
  )
}

export { Setup };