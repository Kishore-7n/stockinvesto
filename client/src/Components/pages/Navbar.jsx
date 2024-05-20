import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
function Navbar() {

  const { userData } = useContext(UserContext);
  const {setUserData} = useContext(UserContext)
  const navigate = useNavigate()


    const handlelogout = () =>{
        localStorage.removeItem('user')
        setUserData(null);
        navigate('/login')
    }

  return (
    <div className='navbar-container'>
      <ul>
        <li><Link className='link' to='/'>Home</Link></li>
        <li><Link className='link' to='/stock'>Stocks</Link></li>
        <li>{userData ? (<h4>Welcome {userData.username}</h4>):(<Link className='link' to='/signup'>Signup</Link>)}</li>
        <li> {userData ? (<div onClick={handlelogout}><Link className='link' to='/'>Logout</Link></div>):(<Link className='link' to='/login'>Login</Link>)}</li>
        <li>{userData ? (<Link className='link' to='/order'>Myorders</Link>):(<></>)}</li>
        <li><Link className='link' to='/news'>Feed</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
