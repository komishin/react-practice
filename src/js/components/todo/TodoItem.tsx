import React, { useContext } from 'react'
import { Button } from '../parts/Button'
import { AuthContext } from '../../contexts/AuthContext'
import { useAuth } from '../../hooks/use-auth'

type TodoItemProps = {
  id: number
  task: string
  person: string
  deadline: string
  deleteTodo: (id: number) => void
}

// const TodoItem: React.FC<TodoItemProps> = ({task, deadline}) => {
export const TodoItem = ({
  id,
  task,
  person,
  deadline,
  deleteTodo,
}: TodoItemProps) => {
  const { userName } = useAuth()
  const style = userName === person ? 'text-red-600 font-bold' : ''

  return (
    <li className="grid grid-cols-4 pb-1">
      <div>{task}</div>
      <div className={style}>{person}</div>
      <div>締め切り：{deadline}</div>
      <div>
        {/* filter=今の条件に合うものだけを残す（クリックして一致したidのもの以外残す） */}
        <Button onClick={() => deleteTodo(id)} color="red">
          削除
        </Button>
      </div>
    </li>
  )
}
