import React from 'react'
import { Login } from './pages/Login'
import { Todo } from './pages/Todo'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { RouterProvider } from 'react-router'
import { TodoDetail } from './pages/TodoDetail'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/todo/:id" element={<TodoDetail />} />
    </>
  )
)

export const App = () => <RouterProvider router={router} />
