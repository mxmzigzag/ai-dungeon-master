import { create } from 'zustand'
import { ESetupStep } from '@/types/setupSteps'

interface AppState {
  setupStep: ESetupStep
  changeSetupStep: (step: ESetupStep) => void
  story: string
  setStory: (story: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  setupStep: ESetupStep.Setting,
  changeSetupStep: (step: ESetupStep) => set({ setupStep: step }),
  story: '',
  setStory: (story: string) => set({ story }),
}))