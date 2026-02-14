import React, { useContext } from 'react'
import { TodoList } from './components/todo/TodoList'
import { Heading } from './components/parts/Heading'
import { NewTodoForm } from './components/todo/NewTodoForm'
import { Todo } from './components/todo/type'
import { useTodoList } from './components/todo/use-todoList'
import { AuthContext } from './contexts/AuthContext'
import { TextField } from './components/parts/TextField'
import { Button } from './components/parts/Button'
import { useAuth } from './contexts/use-auth'

export const App = () => {
  const { todoList, addTodo, deleteTodo } = useTodoList()

  const { isLoggedIn, login, logout, userName, setUserName } =
    useAuth()

  if (!isLoggedIn)
    return (
      <main className="my-0 mx-auto w-4/5 text-center">
        <Heading level="h1">ログイン</Heading>
        <div className='flex gap-1'>
          <TextField
            id="user-name"
            label="ユーザー名"
            type="text"
            value={userName}
            onChange={setUserName}
          ></TextField>
          <Button onClick={login} color="blue">
            ログイン
          </Button>
        </div>
      </main>
    )

  return (
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h1">TODO</Heading>
      <div>{userName}</div>
      <div>
          <Button onClick={logout} color="red">
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
          <TodoList todoList={todoList} deleteTodo={deleteTodo} />
        </div>
      </div>
    </main>
  )
}
export { Todo }
