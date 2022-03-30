import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './List.scss'

function List() {
  return (
    <div className = 'list'>

      <Sidebar/>
      <div className="list-container">
        <Navbar/>
      </div>
    </div>
  )
}

export default List