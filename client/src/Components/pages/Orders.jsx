import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/Orders.css'
import { FaWallet } from "react-icons/fa";
import Button from '@mui/material/Button'
import WalletModal from './WalletModal';

function Orders() {

    const [orders,setOrders] = useState([])
    const [showModal, setShowModal] = useState(false);
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;
    const fetchorders = () => {

            axios.post('https://stockinvesto-2.onrender.com/getorders',{user_id:user.user_id}).then((res)=>{
                setOrders(res.data)
            }).then((err)=>{
                console.log(err);
            })
    }

    const fetchuserdata = () => {
      axios.post("https://stockinvesto-2.onrender.com/getuser",{user_id:user.user_id}).then((res)=>{
        console.log(res);
      })
    }
    useEffect(()=>{
        fetchorders()
        // eslint-disable-next-line
    },[])

    const handleCloseModal = () => {
      setShowModal(!showModal);
    };

    const handlesell = (order) => {
      
      axios.post("https://stockinvesto-2.onrender.com/sellorder",{"order":order}).then((res)=>{
        if(res.status===200)
          {
            fetchorders()
            fetchuserdata(order.user_id);
          }
      }).catch((err)=>{
        console.log(err);
      })
    }
  return (
    <div className="orders-main">
      <div className='xyx-container'>
        <h4>My Orders</h4>
        <Button variant="contained" color="primary" sx={{width:130,height:45,borderRadius:2}} onClick={()=>setShowModal(true)}>Wallet
          <FaWallet sx={{margin:"5px"}} className='wallet-icon' /> 
        </Button>
      </div>
      {showModal && <WalletModal show={showModal} onHide={handleCloseModal} wallet={user.wallet} />}
      <div className='orders-container'>
        {orders.length > 0 && orders.map((order) => {
          return (
            <>
            <div key={order.order_id} className="order-card">
              <div className="order-id">Order ID: {order.order_id}</div>
              <img src={order.stock_img} alt="logo" />
              <div className="stock-symbol">{order.stock_symbol}</div>
              <div className="stock-name">{order.stock_name}</div>
              <div className='stock-name'>&#x20B9; {order.stock_price}</div>
              <button onClick={()=>handlesell(order)}>sell</button>
            </div>
            </>
          );
        })}
        </div>
    </div>
  )
}

export default Orders
