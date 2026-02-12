import React, { useState } from 'react'
import { TodoList } from './components/TodoList'
import { Heading } from './components/Heading'
import { TextField } from './components/TextField'

export const App = () => {
  const [newTask, setNewTask] = useState<string>('')
  const [newPerson, setNewPerson] = useState<string>('')
  const [newDeadline, setNewDeadline] = useState<string>('')

  console.log(newTask)

  return (
    <main className="my-0 mx-auto w-4/5 text-center">
      <Heading level="h1">TODO</Heading>
      <TextField
        label="タスク名"
        type="text"
        value={newTask}
        onChange={setNewTask}
      ></TextField>
      <TextField
        label="担当者名"
        type="text"
        value={newPerson}
        onChange={setNewPerson}
      ></TextField>
      <TextField
        label="締切"
        type="date"
        value={newDeadline}
        onChange={setNewDeadline}
      ></TextField>
      <p>{newTask}</p>
      <p>{newPerson}</p>
      <p>{newDeadline}</p>
      <TodoList />
    </main>
  )
}
