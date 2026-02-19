import { create } from 'zustand'

type AuthState = {
  isLoggedIn: boolean
  setIsLoggedIn: (isLoggedIn: boolean) => void
  isLoginCheckDone: boolean
  setIsLoginCheckDone: (isLoginCheckDone: boolean) => void
  userName: string
  setUserName: (userName: string) => void
}

 export const useAuthStore = create<AuthState>()((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (_isLoggedIn) => set({ isLoggedIn: _isLoggedIn }),
  isLoginCheckDone: false,
  setIsLoginCheckDone: (_isLoginCheckDone) =>
    set({ isLoginCheckDone: _isLoginCheckDone }),
  userName: '',
  setUserName: (_userName) => set({ userName: _userName }),
}))
