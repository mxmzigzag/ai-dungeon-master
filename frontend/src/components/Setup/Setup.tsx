import { useState, type FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { STEP_OPTIONS_MAP, STORYTELLING_STEPS_MAP } from "@constants/setupSteps";
import { ESetupStep, type ISetupStepOption, type ISetupSteps, type ISetupStepSettingOption } from "@/types/setupSteps";
import { setupUtils } from "@/utils/setupUtils";

import { startStoryMutation } from "@api/mutations/stories";

import { PageLayout } from "../PageLayout/PageLayout";
import type { ISetupProps } from "./Setup.props";
import { StorytellingPanel } from "../StorytellingPanel";
import { SetupOption } from "./SetupOption/SetupOption";

const Setup: FC<ISetupProps> = ({ currentStep, onChangeStep }) => {
  const { storyID } = useParams();
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<Partial<ISetupSteps>>({

    [ESetupStep.Setting]: undefined,
    [ESetupStep.Heroes]: undefined,
    [ESetupStep.Opening]: undefined,
  });
  const [customSettings, setCustomSettings] = useState<Record<ESetupStep, string>>({
    [ESetupStep.Setting]: '',
    [ESetupStep.Heroes]: '',
    [ESetupStep.Opening]: '',
  });
  const [partySize, setPartySize] = useState<number>(4);

  const handlePartySizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPartySize(Number(event.target.value));
  }

  const stepTitle = STORYTELLING_STEPS_MAP[currentStep]?.title || 'unknown step';
  const promptText = STORYTELLING_STEPS_MAP[currentStep]?.prompt || 'unknown prompt';
  const stepOptions = STEP_OPTIONS_MAP[currentStep] || [];

  const usedSteps = Object.keys(STORYTELLING_STEPS_MAP);

  const { mutate: startStory, isPending } = useMutation({
    mutationFn: startStoryMutation,
    onSuccess: (data) => {
      console.log('START GAME SUCCESS:', data);
      navigate(`/stories/${storyID}`);
    },
    onError: (error) => {
      console.error('START GAME ERROR:', error);
    }
  });
  
  const handleOptionClick = (option: ISetupStepOption) => {
    setSelectedOptions({ ...selectedOptions, [currentStep]: option });
  }

  const handleCustomChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCustomSettings({ ...customSettings, [currentStep]: event.target.value });
  }

  const handleStartStory = () => {
    const readyInfo: Partial<ISetupSteps> = Object.fromEntries(
      Object.entries(selectedOptions)
        .map(([key, option]) => {
          return [
            key, 
            {
              ...option, 
              customPrompt: customSettings[key as ESetupStep] || '',
              ...(key === ESetupStep.Heroes ? { partySize: partySize } : {}),
            } 
          ];
        })
    );
    startStory({ setupInfo: readyInfo, storyID: storyID! });
  }

  return (
    <PageLayout title={stepTitle}>
      <StorytellingPanel text={promptText} />

      {currentStep === ESetupStep.Heroes && (
        <div className="flex items-center gap-4">
          <p className="text-white text-lg font-bold">Party Size:</p>
          <input 
            type="number" 
            value={partySize} 
            onChange={handlePartySizeChange} className="w-16 text-center bg-gray-900 border-2 border-gray-200 text-white rounded-md p-2" />
        </div>
      )}

      <div className="flex flex-col gap-4">
        {stepOptions.map((option) => (
          <SetupOption 
            key={option.id} 
            id={option.id}
            title={option.title} 
            description={option.description} 
            prompt={option.prompt}
            onClick={handleOptionClick} 
            style={option.style} 
            dmStyle={(option as ISetupStepSettingOption).dmStyle}
            tone={(option as ISetupStepSettingOption).tone}
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
            onClick={() => onChangeStep(setupUtils.getPreviousStep(currentStep))}
          >
              Previous Step
          </button>
        )}

        {usedSteps.indexOf(currentStep.toString()) < usedSteps.length - 1 ? (
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-80 disabled:bg-gray-500" 
            onClick={() => onChangeStep(setupUtils.getNextStep(currentStep))}
            disabled={!selectedOptions[currentStep]}
          >
            Next Step
          </button>
        ) : (
          <button 
            className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors" 
            onClick={handleStartStory}
            disabled={isPending}
          >
            Lets Roll! {isPending && <p>loading...</p>}
          </button>
        )}
      </div>
    </PageLayout>
  )
}

export { Setup };