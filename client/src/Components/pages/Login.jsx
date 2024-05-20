import React, { useState } from 'react'
import '../styles/Login.css'
import revenue from '../Assets/revenue.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiLoginCircleLine } from "react-icons/ri";


function Login() {

  const[email,setemail] = useState("");
  const[password,setpassword] = useState("")
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
  const formdata = {
    email,
    password
  }
  const sendlogin = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8000/login",formdata).then((res)=>{
      if(res.status===200)
        {
          localStorage.setItem("user",JSON.stringify(res.data))
          const storedUser = localStorage.getItem("user");
          const user = storedUser ? JSON.parse(storedUser) : null;
          setUserData(user)
          navigate('/stock')
        }
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className='stock-login-container'>
      <div className='stock-login-div'>
        <div className='stock-login-div-left'>
          <img src={revenue} alt='sample' ></img>
        </div>
          <div className='stock-login-div-right'>
            <form onSubmit={sendlogin}>
              <div className='stock-login-div-right-input'>
                <h3>StockInvesto</h3>
              </div>
              <div className='stock-login-div-right-input'>
                <label><MdEmail className='mail-icon'/></label>
                <input type='email' className='input-text' required autoComplete='off' autoSave='off' placeholder='abc@gmail.com' value={email} onChange={(event)=>setemail(event.target.value)}></input>
              </div>
              <div className='stock-login-div-right-input'>
                <label><RiLockPasswordFill className='mail-icon'/></label>
                <input type='password' className='input-text' required autoComplete='off' autoSave='off' placeholder='* * * * *' value={password} onChange={(event)=>setpassword(event.target.value)}></input>
              </div>
              <div className='stock-login-div-right-input'>
                <RiLoginCircleLine className='mail-icon' />
                <button type='submit'>Login</button>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Login
