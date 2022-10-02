import React from 'react'
import './Sidebar.scss'
import Workspace from '../WorkSpace'

const Sidebar: React.FC = () => {
  
  return (
    <div 
      className='right_container'
    >
      <div className='sidebar_container'>
        <h1 style={{ textAlign: 'center', color: '#000', }}>Заметка</h1>
        <Workspace />
      </div>
    </div>
  )
}

export default Sidebar
