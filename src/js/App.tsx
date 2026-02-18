import React from 'react'
import { Login } from './pages/Login'
import { Todo } from './pages/Todo'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { RouterProvider } from 'react-router'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/todo" element={<Todo />} />
    </>
  )
)

export const App = () => <RouterProvider router={router} />
