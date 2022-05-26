import React,{useState} from 'react'
import './new.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import { DriveFolderUploadOutlined } from '@mui/icons-material'



function New({inputs, title}) {

  const [file,setFile] =  useState("");

console.log(file)
  return (
    <div className = 'new'>
    <Sidebar/>
    <div className="newContainer">
    <Navbar/>
    <div className="top">
      <h1>{title}</h1>
    </div>


    <div className="bottom">
      <div className="left">
        <img 
          src= {file ? 
            URL.createObjectURL(file) :
            "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" 
          }
         
          alt="user" />
      </div>
      <div className="right">
        <form>
        <div className="formInput">
            <label htmlFor="file"> Change Avi : <DriveFolderUploadOutlined className='icon'/> </label>
            <input type="file" id = 'file'
            accept = 'image/*'
             style = {{display: 'none',border: '2px solid black   '}}
             onChange={(e) => setFile(e.target.files[0])}/>
            
          </div>

      {  inputs.map(input => (
          <div className="formInput" key = {input.id}>
          <label htmlFor={input.id}>{input.label} :</label>
          <input type={input.type} placeholder={input.placeholder} id = {input.id}/>
        </div>
        ))}
           
     

          <button>Send</button>
        </form>
      </div>
    </div>
    </div>

    </div>
  )
}

export default New