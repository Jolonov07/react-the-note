import React from 'react'
import { TodoContext } from './context'
import { TodoActions } from './context/todoActions'
import Components from './components'
import './index.css'

function App() {
  const {
    actions,
    todos
  } = TodoActions()

  return (
    <TodoContext.Provider 
      value={{ 
        ...actions,
        todos, 
      }}
    >
      <div className='container'>
        <Components.Sidebar />
        <Components.TodoList /> 
      </div>
    </TodoContext.Provider>
  )
}

export default App
