import React,{useContext, useEffect} from 'react'
import  './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NotificationsActive ,Logout,LocalShipping,Settings, InsertChart, ReceiptLong, AccountCircle} from '@mui/icons-material';
import {Link, useLocation} from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext';
import { ToggleContext } from '../../context/toggleContext';
import { useState } from 'react';
function Sidebar() {


  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const {dispatch} = useContext(DarkModeContext)
  const {open,setOpen} = useContext(ToggleContext)
  const pathName = useLocation().pathname;

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
   
    setOpen(false)
  }, [pathName, setOpen,])


  useEffect(() =>{
      window.addEventListener('resize', () => {
        setScreenWidth(window.innerWidth)
          if(screenWidth > 768){
            setOpen(false)
          }
      })  
  },[screenWidth])
  return ( 
    <div className = {open  ? 'sidebar responsive' : 'sidebar'}>

      <div className="top" >

        <div className = 'btn-close' onClick = {handleClose}>
          <MenuIcon style={{width: "100%", height: "100%"}}/>
        </div>
        
        <Link to = '/' style= {{textDecoration: 'none'}}>
        <span className= 'logo'>
          ObedBaby
        </span>
        </Link>

      </div>

      <hr/>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>

        <Link to = '/' style= {{textDecoration: 'none'}}>
            
           <DashboardIcon className = 'icon'/>
            <span>Dashboard</span>
        </Link>
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
        <div className="colorOptions" onClick={() => dispatch({type:'LIGHT'})}></div>
        <div className="colorOptions" onClick={() => dispatch({type:'DARK'})}></div>

      </div>
    </div>

  )
}

export default Sidebar