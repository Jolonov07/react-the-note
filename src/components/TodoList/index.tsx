import React from 'react'
import TodoItem from '../TodoItem'
import { TodoContext } from '../../context'
import './TodoList.scss'
import { BiSearchAlt as Search } from 'react-icons/bi'

const TodoList: React.FC = () => {
  const { todos } = React.useContext(TodoContext)
  const [search, setSearch] = React.useState<string>('')
  console.log(search)

  return (
    <div className='todoListRoot'>
      <div className='navbar'>
        <div className='search_input'>
          <input
            id='standard-basic' 
            placeholder='Поиск заметок' 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className='search_icon' />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '50px 50px',
        }}
      >
        {
          todos
          .filter((todo) => todo.title.toLocaleLowerCase().includes(search.toLowerCase()) && todo)
          .map((todo) => (
            <TodoItem 
              key={todo.id}
              {...todo}
            />
          ))
        }
      </div>
    </div>
  )
}

export default TodoList
