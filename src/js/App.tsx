import React, { useState } from 'react'
import { TodoList } from './components/TodoList'
import { Heading } from './components/Heading'
import { TextField } from './components/TextField'

export type Todo = {
  id: number
  task: string
  person: string
  deadline: string
}

export const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [newTask, setNewTask] = useState<string>('')
  const [newPerson, setNewPerson] = useState<string>('')
  const [newDeadline, setNewDeadline] = useState<string>('')

  const addNewTodo = () => {
    //...prevは前の入力値を残すという意味
    //...は一旦の中身を出す（露わにする）
    setTodoList((prev) => [
      ...prev,
      {
        id: Date.now(),
        task: newTask,
        person: newPerson,
        deadline: newDeadline,
      },
    ])

    setNewTask("")
    setNewPerson("")
    setNewDeadline("")
  }

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
      <button className="border bg-cyan-400" onClick={addNewTodo}>
        追加
      </button>
      <TodoList todoList={todoList} />
    </main>
  )
}
