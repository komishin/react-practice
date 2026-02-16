import { useCallback, useEffect, useMemo, useState } from 'react'
import { Todo } from '../types/todo'

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [filterWord, setFilterWord] = useState<string>('')

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

  const deleteTodo = useCallback(
    (id: number) =>
      setTodoList((prev) => prev.filter((todo) => todo.id !== id)),
    []
  )

  const filteredTodoList = useMemo(() => todoList.filter(
    (todo) => todo.task.includes(filterWord) || todo.person.includes(filterWord)
  ),[todoList, filterWord])

  return {
    todoList: filteredTodoList,
    addTodo,
    deleteTodo,
    filterWord,
    setFilterWord,
  }
}
