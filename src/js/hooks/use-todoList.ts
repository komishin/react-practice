import { useEffect, useState } from 'react'
import { Todo } from '../types/todo'

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([])

  //マウント時に、一度だけlocalStorageからtodo一覧のデータを取得する
  useEffect(() => {
    const todoListData = localStorage.getItem('todo-list')
    if (todoListData) {
      setTodoList(JSON.parse(todoListData))
    }
  }, [])

  //todoListが更新されるたびに、localStorageにデータを保存する
  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todoList))
  }, [todoList])

  const addTodo = (newTask: string, newPerson: string, newDeadline: string) =>
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

  const deleteTodo = (id: number) =>
    setTodoList((prev) => prev.filter((todo) => todo.id !== id))

  return { todoList, addTodo, deleteTodo }
}
