import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import React,{useContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./Pages/list/List";
import Single from "./Pages/single/Single";
import New from "./Pages/new/New";
import {userInputs,productInputs} from './formSource'
import './style/dark.scss'
import { DarkModeContext } from "./context/darkModeContext";

function App() {

  const {darkMode} = useContext(DarkModeContext)
  return(
<div className = {darkMode ? 'app dark' : 'app'}>
    <BrowserRouter>  
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New inputs = {userInputs} title = 'Add New User'/>} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New inputs = {productInputs} title = 'Add new products'/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
