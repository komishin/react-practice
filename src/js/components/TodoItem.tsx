import React from 'react'

type TodoItemProps = {
  task: string
  deadline: string
}

// const TodoItem: React.FC<TodoItemProps> = ({task, deadline}) => {
export const TodoItem = ({ task, deadline }: TodoItemProps) => {
  return (
    <li className="text-3xl font-bold underline">
      {task}締め切り：{deadline}
    </li>
  )
}
