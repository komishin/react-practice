import React from 'react'
import { createRoot } from 'react-dom/client'
import { TodoList } from './components/TodoList'

// document.body.innerHTML = '<div id="app"></div>'

// const todoItem = "掃除と洗濯"
// // const element = <h1 className='hello'>Hello, World</h1>

// const handleClick = () => {
//     alert("ボタンがクリックされました")
// }

// const element = (
//   <div>
//     <h1>Hello, World</h1>
//     <p>Reactの学習をしていきましょう&#xff01;</p>
//     <p>{todoItem}</p>
//     <button onClick={handleClick}>ボタン</button>
//   </div>
// )

// const element = <h1>Task: {todoItem}</h1>

// ReactDOM.render(<TodoItem task="掃除" deadline="明日まで"/>, document.getElementById('root'))

const root = createRoot(document.getElementById('app')!)
root.render(<TodoList />)
