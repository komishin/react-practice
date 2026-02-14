import React, { PropsWithChildren } from 'react'

import { createContext } from 'react'

type AuthContextType = {
  isLoggedIn: boolean
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
})

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const isLoggedIn = false
  return <AuthContext.Provider value={{ isLoggedIn }}>
    {children}
  </AuthContext.Provider>
}
