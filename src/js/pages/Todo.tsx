import React, { useEffect } from 'react'
import { NewTodoForm } from '../components/todo/NewTodoForm'
import { useAuth } from '../hooks/use-auth'
import { useTodoList } from '../hooks/use-todoList'
import { Avatar, Box, Heading, Input } from '@chakra-ui/react'
import { TodoTable } from '../components/todo/TodoTable'
import { useNavigate } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'

export const Todo = () => {
  const { todoList, addTodo, deleteTodo, filterWord, setFilterWord } =
    useTodoList()

  const { isLoggedIn, logout, userName } = useAuth()
  const navigate = useNavigate()

  //ログアウト中にアクセスされたら、/loginに背にさせる
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
  }, [isLoggedIn])

  return (
    <Layout>
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
          <TodoTable todoList={todoList} deleteTodo={deleteTodo} />
        </Box>
      </Box>
    </Layout>
  )
}
