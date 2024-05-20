import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css'
import Sample from '../Assets/sample2.png';
import logo from '../Assets/logo.png'
import Apple from '../Assets/Apple.png'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignUp() {
  const[name,setname] = useState("");
  const[email,setemail] = useState("");
  const[password,setpassword] = useState("")
  const formdata = {
    name,
    email,
    password
  }

  const navigate = useNavigate();

  const sendsignup = async(event) => {

    event.preventDefault();
    await axios.post("http://localhost:8000/signup",formdata).then((res)=>{
      if(res.status===200)
      {
          navigate('/login')
      }
    }).catch((err)=>{
      const notify = () => toast.error(err.response.data.message)
      notify()
    })
    }
  

  return (
    <div className='stock-signup-container'>
      <div className='stock-signup-div'>
        <div className='stock-signup-div-left'>
          <h4>
            StockInvesto
          </h4>
          <br/>
          <h5>Get Started Now</h5>
          <div className='stock-signup-div-left-oath'>
            <button><img src={logo} alt='logo'></img><h4>signup with Google</h4></button>
            <h5>or</h5>
            <button><img src={Apple} alt='logo'></img><h4>signup with Apple ID</h4></button>
          </div>
          <div className='divider'></div>
          <div className='stock-signup-div-left-input-container'>
            <form onSubmit={sendsignup}>
              <label>Name</label>
              <input
                type='text'
                required
                value={name}
                autoComplete='off'
                autoSave='off'
                placeholder='Name'
                onChange={(event)=>setname(event.target.value)}
              />
              <label>Email</label>
              <input
                type='email'
                required
                value={email}
                autoComplete='off'
                autoSave='off'
                placeholder='abc@gmail.com'
                onChange={(event)=>setemail(event.target.value)}
              />
              <label>Password</label>
              <input
                type='password'
                value={password}
                autoComplete='off'
                autoSave='off'
                placeholder='* * * * *'
                onChange={(event)=>setpassword(event.target.value)}
                required
              />
              <button
                type='submit'
                >
              signup
              </button>
              <h5>Already have an account ? <Link to='/login'>sign in</Link></h5>
              </form>
          </div>
        </div>
        <div className='stock-signup-div-right'>
          <img src={Sample} alt='alt2' className='img2' ></img> 
        </div>
        <ToastContainer/>
      </div>
    </div>
  )
}

export default SignUp
