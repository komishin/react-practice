import React from 'react'

type TodoItemProps = {
  task: string
  deadline: string
}

// const TodoItem: React.FC<TodoItemProps> = ({task, deadline}) => {
export const TodoItem = ({ task, deadline }: TodoItemProps) => {
  return (
    <li>
      {task}締め切り：{deadline}
    </li>
  )
}
