import React from 'react'
import  './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NotificationsActive ,Logout,LocalShipping,Settings, InsertChart, ReceiptLong, AccountCircle} from '@mui/icons-material';
import {Link} from 'react-router-dom'
function Sidebar() {
  return (
    <div className='sidebar'>


      <div className="top" >

        <Link to = '/' style= {{textDecoration: 'none'}}>
        <span className="logo">
          ObedBaby
        </span>
        </Link>
      </div>

      <hr/>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
           <DashboardIcon className = 'icon'/>
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>

          <li>
        <Link to = '/users' style= {{textDecoration: 'none'}}>
            <PersonOutlineIcon className = 'icon'/>
            <span>Users</span>
            </Link>
          </li>
          <li>
      <Link to = '/products' style= {{textDecoration: 'none'}}>
            
            <Inventory2Icon className = 'icon'/>
            <span>Product</span>
          </Link>
          </li>
          <li>
            <ShoppingCartIcon className = 'icon'/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className = 'icon'/>
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL</p>

          <li>
            <InsertChart className = 'icon'/>
            <span>Stats </span>
          </li>
          <li>
            <NotificationsActive className = 'icon'/>
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>

          <li>
            <ReceiptLong className = 'icon'/>
            <span>System Logs</span>
          </li>
          <li>
            <Settings className = 'icon'/>
            <span>Settings</span>
          </li>
          
          <p className="title">USER</p>
          <li>

            <AccountCircle className = 'icon'/>
            <span>Profile</span>
          </li>
          <li>
            <Logout className = 'icon'/>
            <span>Log Out</span>
          </li>
        </ul>
      </div>

      
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>

      </div>
    </div>
  )
}

export default Sidebar