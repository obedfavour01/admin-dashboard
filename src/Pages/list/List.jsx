import React from 'react'
import Datatable from '../../Components/Datatable/Datatable'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './List.scss'

function List() {
  return (
    <div className = 'list'>

      <Sidebar/>
      <div className="list-container">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List