import React from 'react'
import './single.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Chart from '../../Components/Chart/Chart'
import List from '../../Components/Table/Table'





function Single() {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="/images/user.jpg" alt="" className="itemImg" />

              <div className="details">
                <h1 className="itemName">Obed Favour</h1>
                <div className="detailItem">
                  <span className="itemkey">Email: </span>
                  <span className="itemValue">ObedFavour01@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Phone Number :</span>
                  <span className="itemValue">+44-967-645-239</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Address: </span>
                  <span className="itemValue"> 14 Peckham Street, Manchester</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Country: </span>
                  <span className="itemValue">United Kingdom</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">

            <Chart aspect = {3 / 1} title = 'User Ttansavtions(Last 6 MOnths)'/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>

      </div>
      </div>
  )
}

export default Single