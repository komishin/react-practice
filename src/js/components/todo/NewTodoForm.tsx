import React, { useState } from 'react'
import { TextField } from '../parts/TextField'
import { Todo } from '../../App'

type Props = {
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const NewTodoForm = ({ setTodoList }: Props) => {
  const [newTask, setNewTask] = useState<string>('')
  const [newPerson, setNewPerson] = useState<string>('')
  const [newDeadline, setNewDeadline] = useState<string>('')

  const addNewTodo = () => {
    //...prevは前の入力値を残すという意味
    //...は一旦の中身を出す（露わにする）
    setTodoList((prev: Todo[]) => [
      ...prev,
      {
        id: Date.now(),
        task: newTask,
        person: newPerson,
        deadline: newDeadline,
      },
    ])

    setNewTask('')
    setNewPerson('')
    setNewDeadline('')
  }

  return (
    <>
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
    </>
  )
}
