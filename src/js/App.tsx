import React, { useState } from 'react'
import { TodoList } from './components/todo/TodoList'
import { Heading } from './components/parts/Heading'
import { TextField } from './components/parts/TextField'
import { NewTodoForm } from './components/todo/NewTodoForm'

export type Todo = {
  id: number
  task: string
  person: string
  deadline: string
}

export const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([])

  return (
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h1">TODO</Heading>
      <NewTodoForm setTodoList={setTodoList} />
      <TodoList todoList={todoList} />
    </main>
  )
}
