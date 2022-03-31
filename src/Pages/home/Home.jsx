import React from 'react'
import Featured from '../../Components/Featured/Featured'
import Chart from '../../Components/Chart/Chart'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Widgets from '../../Components/Widgets/Widgets'
import './home.scss'
import Tables from '../../Components/Table/Table'

function Home() {
  return (
    <div className='home'>
      <Sidebar/>

      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widgets type = "user"/>
          <Widgets type = "order"/>
          <Widgets type = "earnings"/>
          <Widgets type = "balance"/>
        </div>

        <div className="charts">
          <Featured/>
          <Chart title = "Last 6 Months Revenue" aspect ={2 / 1}/>
        </div>

        <div className="listContainer">
        <div className="listTitle">
          Latest Transactions
        </div>
          <Tables/>
      </div>

      </div>

    </div>
   
  )
}

export default Home