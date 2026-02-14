import React, { useContext } from 'react'
import { TodoItem } from './TodoItem'
import { Todo } from '../../App'
import { AuthContext } from '../../contexts/AuthContext'

type Props = {
  todoList: Todo[]
  deleteTodo: (id: number) => void
}

export const TodoList = ({ todoList, deleteTodo }: Props) => {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <>
      <ul className="bg-emerald-100 p-4 rounded">
        <li className="grid grid-cols-4 font-bold">
          <div>タスク名</div>
          <div>担当者名</div>
          <div>締め切り</div>
          <div>削除</div>
        </li>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            task={todo.task}
            person={todo.person}
            deadline={todo.deadline}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      <div>{isLoggedIn ? 'ログイン中' : 'ログアウト中'}</div>
    </>
  )
}
