import React from 'react'
import { Heading } from '../components/parts/Heading'
import { NewTodoForm } from '../components/todo/NewTodoForm'
import { TodoList } from '../components/todo/TodoList'
import { useAuth } from '../hooks/use-auth'
import { useTodoList } from '../hooks/use-todoList'
import { TextField } from '../components/parts/TextField'
import { Button } from '@chakra-ui/react'

export const Todo = () => {
  const { todoList, addTodo, deleteTodo, filterWord, setFilterWord } = useTodoList()

  const { logout, userName } = useAuth()

  return (
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h1">TODO</Heading>
      <div>{userName}</div>
      <div>
        <Button onClick={logout} colorScheme='red' size="xs">
          ログアウト
        </Button>
      </div>
      <div className="mt-8">
        <Heading level="h2">新規TODO作成</Heading>
        <div className="mt-8">
          <NewTodoForm addTodo={addTodo} />
        </div>
      </div>
      <div className="mt-8">
        <Heading level="h2">TODO一覧</Heading>
        <div className="mt-8">
          <TextField
            label="絞り込み"
            id={'filter-word'}
            value={filterWord}
            onChange={setFilterWord}
            type='text'
          />
        </div>
        <div className="mt-8">
          <TodoList todoList={todoList} deleteTodo={deleteTodo} />
        </div>
      </div>
    </main>
  )
}
