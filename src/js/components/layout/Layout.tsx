import { Box, HStack, Heading, Avatar, Button } from '@chakra-ui/react'
import React, { PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../stores/use-auth-store'

type Props = {
    title: string
}

export const Layout = ({ title, children }: PropsWithChildren<Props>) => {
  const { isLoggedIn, isLoginCheckDone, logout, userName } = useAuthStore()
    const navigate = useNavigate()

  //ログアウト中にアクセスされたら、/loginに背にさせる
    useEffect(() => {
      if ( isLoginCheckDone && !isLoggedIn) {
        navigate('/login')
      }
    }, [isLoginCheckDone, isLoggedIn])

    if(!isLoginCheckDone || !isLoggedIn) return null

  return (
    <Box as="main" w="850px" mx={'auto'} mt={20}>
      <HStack as="header" spacing="4" justifyContent={'space-between'}>
        <Heading as="h1" size="2xl">
          {title}
        </Heading>
        <HStack spacing="4" justifyContent={'end'}>
          <HStack spacing={2}>
            <Avatar bg="teal.500" size={'xs'} />
            <Box>{userName}</Box>
          </HStack>
          <Box>
            <Button onClick={logout} colorScheme="red" size="xs">
              ログアウト
            </Button>
          </Box>
        </HStack>
      </HStack>
      {children}
    </Box>
  )
}
