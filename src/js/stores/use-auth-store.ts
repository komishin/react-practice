import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type AuthState = {
  isLoggedIn: boolean
  setIsLoggedIn: (isLoggedIn: boolean) => void
  isLoginCheckDone: boolean
  setIsLoginCheckDone: (isLoginCheckDone: boolean) => void
  userName: string
  setUserName: (userName: string) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      setIsLoggedIn: (_isLoggedIn) => set({ isLoggedIn: _isLoggedIn }),
      isLoginCheckDone: false,
      setIsLoginCheckDone: (_isLoginCheckDone) =>
        set({ isLoginCheckDone: _isLoginCheckDone }),
      userName: '',
      setUserName: (_userName) => set({ userName: _userName }),
    }),
    {
      name: 'auth-state',
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
        userName: state.userName,
      }),
    }
  )
)
