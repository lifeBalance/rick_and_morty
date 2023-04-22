import { create } from 'zustand'

interface LoginState {
  isLoggedIn: boolean,
  login: () => void,
  logout: () => void
}

export const useLoginStore = create<LoginState>((set) => {
  return {
    isLoggedIn: false,
    login: () => set({ isLoggedIn: true }),
    logout: () => set({ isLoggedIn: false })
  }
})
