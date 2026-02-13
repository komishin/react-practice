import React from 'react'
import { Todo } from './type'

type TodoItemProps = {
  id: number
  task: string
  person: string
  deadline: string
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
}

// const TodoItem: React.FC<TodoItemProps> = ({task, deadline}) => {
export const TodoItem = ({
  id,
  task,
  person,
  deadline,
  setTodoList,
}: TodoItemProps) => {
  return (
    <li className="grid grid-cols-4 pb-1">
      <div>{task}</div>
      <div>{person}</div>
      <div>締め切り：{deadline}</div>
      <div>
        <button
          className="border bg-red-400 w-16 rounded"
          //filter=今の条件に合うものだけを残す（クリックして一致したidのもの以外残す）
          onClick={() => setTodoList((prev) => prev.filter((todo) => todo.id !== id))}
        >
          削除
        </button>
      </div>
    </li>
  )
}
