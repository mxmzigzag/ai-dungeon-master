import { create } from 'zustand'

interface AppState {
  setupStep: number
  changeSetupStep: (step: number) => void
}

export const useAppStore = create<AppState>((set) => ({
  setupStep: 0,
  changeSetupStep: (step: number) => set({ setupStep: step }),
}))