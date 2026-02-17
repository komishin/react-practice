import React from 'react'

import { useAuth } from '../hooks/use-auth'
import { Button, Heading, Input } from '@chakra-ui/react'

export const Login = () => {
  const { login, userName, setUserName } = useAuth()
  return (
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading as="h1" size="2xl">
        ログイン
      </Heading>
      <div className="flex gap-1">
        <Input
          placeholder="ユーザー名"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {/* <Button onClick={login} color="blue">
          ログイン
        </Button> */}
        <Button colorScheme="blue" onClick={login}>
          ログイン
        </Button>
      </div>
    </main>
  )
}
