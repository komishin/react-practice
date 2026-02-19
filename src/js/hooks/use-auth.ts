import { useEffect } from 'react'
import { useAuthStore } from '../stores/use-auth-store'

export const useAuth = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    isLoginCheckDone,
    setIsLoginCheckDone,
    userName,
    setUserName,
    login,
    logout
  } = useAuthStore()

  return { isLoggedIn, isLoginCheckDone, login, logout, userName, setUserName }
}
