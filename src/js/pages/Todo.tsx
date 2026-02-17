import React from 'react'
import { NewTodoForm } from '../components/todo/NewTodoForm'
import { TodoList } from '../components/todo/TodoList'
import { useAuth } from '../hooks/use-auth'
import { useTodoList } from '../hooks/use-todoList'
import { Avatar, Box, Button, Heading, HStack, Input } from '@chakra-ui/react'
import { TodoTable } from '../components/todo/TodoTable'

export const Todo = () => {
  const { todoList, addTodo, deleteTodo, filterWord, setFilterWord } =
    useTodoList()

  const { logout, userName } = useAuth()

  return (
    <Box as="main" w="850px" mx={'auto'} mt={20}>
      <HStack as="header" spacing="4" justifyContent={'space-between'}>
        <Heading as="h1" size="2xl">
          TODO
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
      <Box as="section" mt="20">
        <Heading as="h2" size="xl">
          新規TODO作成
        </Heading>
        <Box mt="10">
          <NewTodoForm addTodo={addTodo} />
        </Box>
      </Box>
      <Box as="section" mt="20">
        <Heading as="h2">TODO一覧</Heading>
        <Box mt="10">
          <Input
            id="todo"
            type="text"
            placeholder="絞り込み"
            value={filterWord}
            onChange={(e) => setFilterWord(e.target.value)}
            w={40}
          />
        </Box>
        <Box mt="10">
          <TodoTable
            todoList={todoList}
            deleteTodo={deleteTodo}
          />
        </Box>
      </Box>
    </Box>
  )
}
