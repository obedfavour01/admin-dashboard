import React, { useContext} from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  ChatBubbleOutlineOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  LanguageOutlined,
  LightModeOutlined,
  ListOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";
import { DarkModeContext } from "../../context/darkModeContext";

function Navbar() {
  const { dispatch } = useContext(DarkModeContext);

    const {darkMode} = useContext(DarkModeContext);


  return (
    <div className="navbar">
      <div className="wrapper">
        {
        <button className="btn-toggle"> click</button>
        }
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined />
          </div>

          <div className="item" 
           onClick={() => dispatch({ type: "TOGGLE" })}
           style={{cursor: 'pointer'}}>

            {!darkMode ? <DarkModeOutlined/> :<LightModeOutlined/>}
          </div>

          <div className="item">
            <FullscreenExitOutlined />
          </div>

          <div className="item">
            <NotificationsNoneOutlined />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ChatBubbleOutlineOutlined />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ListOutlined />
          </div>
          <div className="item">
            <img src="/images/user.jpg" alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
