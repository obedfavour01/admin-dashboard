import React from 'react'
import './Navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined } from '@mui/icons-material'

function Navbar() {
  return (
    <div className='navbar'>

      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search'/>
            <SearchOutlinedIcon/>
        </div>
          <div className="items">
            <div className="item">
              <LanguageOutlined/>
            </div>

            <div className="item">
            <DarkModeOutlined/>
            </div>

            <div className="item">
              <FullscreenExitOutlined/>
            </div>

            <div className="item">
              <NotificationsNoneOutlined/>
              <div className="counter">1</div>
            </div>

            <div className="item">
              <ChatBubbleOutlineOutlined/>
              <div className="counter">1</div>

            </div>

            <div className="item">
              <ListOutlined/>
            </div>
            <div className="item">
            <img src="./images/user.jpg" 
            alt="" 
            className = 'avatar'/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar