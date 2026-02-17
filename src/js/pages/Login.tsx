import React from 'react'
import { Heading } from '../components/parts/Heading'
import { TextField } from '../components/parts/TextField'

import { useAuth } from '../hooks/use-auth'
import { Button } from '@chakra-ui/react'

export const Login = () => {
  const { login, userName, setUserName } = useAuth()
  return (
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h1">ログイン</Heading>
      <div className="flex gap-1">
        <TextField
          id="user-name"
          label="ユーザー名"
          type="text"
          value={userName}
          onChange={setUserName}
        ></TextField>
        {/* <Button onClick={login} color="blue">
          ログイン
        </Button> */}
        <Button colorScheme='blue' onClick={login}>ログイン</Button>
      </div>
    </main>
  )
}
