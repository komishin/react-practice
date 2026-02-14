import React, { useState } from 'react'
import { TextField } from '../parts/TextField'
import { Todo } from '../../App'
import { Button } from '../parts/Button'

type Props = {
  addTodo: (newTask: string, newPerson: string, newDeadline: string) => void
}

export const NewTodoForm = ({addTodo }: Props) => {
  const [newTask, setNewTask] = useState<string>('')
  const [newPerson, setNewPerson] = useState<string>('')
  const [newDeadline, setNewDeadline] = useState<string>('')

  const addNewTodo = () => {

    addTodo(newTask, newPerson, newDeadline)
    setNewTask('')
    setNewPerson('')
    setNewDeadline('')
  }

  return (
    <div className="flex gap-5">
      <TextField
        id="new-task"
        label="タスク名"
        type="text"
        value={newTask}
        onChange={setNewTask}
      ></TextField>
      <TextField
        id="new-person"
        label="担当者名"
        type="text"
        value={newPerson}
        onChange={setNewPerson}
      ></TextField>
      <TextField
        id="new-deadline"
        label="締切"
        type="date"
        value={newDeadline}
        onChange={setNewDeadline}
      ></TextField>
      <Button onClick={addNewTodo} color="blue">追加</Button>
    </div>
  )
}
