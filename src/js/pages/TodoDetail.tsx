import { Box } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useTodoList } from '../hooks/use-todoList'

export const TodoDetail = () => {
  let { id } = useParams()
  const {todoList} =useTodoList()

  const todo = todoList.find(todo => todo.id === id)

  return <Box>Todoの詳細ページ{id}</Box>
}
