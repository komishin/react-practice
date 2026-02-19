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


  //マウント時にローカルストレージからユーザー名を取得する
  //ユーザー名が取得できた場合はログイン中として扱う
  useEffect(() => {
    setIsLoginCheckDone(true)
  }, [])

  return { isLoggedIn, isLoginCheckDone, login, logout, userName, setUserName }
}
