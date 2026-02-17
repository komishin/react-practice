import React from 'react'

import { useAuth } from '../hooks/use-auth'
import { Box, Button, Heading, HStack, Input } from '@chakra-ui/react'

export const Login = () => {
  const { login, userName, setUserName } = useAuth()
  return (
    <Box as="main" w={400} mx={"auto"} mt={20}>
      <Heading as="h1" size="xl">
        ログイン
      </Heading>
      <HStack spacing={4} mt={10}>
        <Input
          placeholder="ユーザー名"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          w={40}
        />
        {/* <Button onClick={login} color="blue">
          ログイン
        </Button> */}
        <Button colorScheme="blue" onClick={login}>
          ログイン
        </Button>
      </HStack>
    </Box>
  )
}
