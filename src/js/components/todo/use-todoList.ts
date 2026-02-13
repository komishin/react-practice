import { useEffect, useState } from 'react'
import { Todo } from './type'

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

  return { todoList, setTodoList }
}
