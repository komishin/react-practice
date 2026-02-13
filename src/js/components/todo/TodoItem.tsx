import React from 'react'
import { Todo } from './type'
import { Button } from '../parts/Button'

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
  const deleteTodo = () =>
    setTodoList((prev) => prev.filter((todo) => todo.id !== id))

  return (
    <li className="grid grid-cols-4 pb-1">
      <div>{task}</div>
      <div>{person}</div>
      <div>締め切り：{deadline}</div>
      <div>
        {/* filter=今の条件に合うものだけを残す（クリックして一致したidのもの以外残す） */}
        <Button onClick={deleteTodo} color="red">
          削除
        </Button>
      </div>
    </li>
  )
}
