

import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import StockLinechart from './StockLinechart';
import '../styles/StockModal.css';
import axios from 'axios'
import { UserContext } from '../../Context/UserContext'
import { useContext } from 'react'

const stockValues = [
  { day: 'Monday', price: 150.75 },
  { day: 'Tuesday', price: 153.50 },
  { day: 'Wednesday', price: 149.25 },
  { day: 'Thursday', price: 155.00 },
  { day: 'Friday', price: 157.75 },
  { day: 'Saturday', price: 154.50 },
  { day: 'Sunday', price: 156.00 }
];


function StockComponent({ show, onHide, stock }) {
  const { userData } = useContext(UserContext);
  const userid = userData.user_id;
    const data = {
      stock,
      userid
    }
    const handlebuystock = async() => {
      await axios.post('http://localhost:8000/create-checkout-session',data).then((res)=>{
        window.location.href=res.data.url;
      });
    }
  return (
    <Modal className="custom-modal" show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>{stock.name} Details  </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StockLinechart data={stockValues}></StockLinechart>
        <div className='stock-details-list'>
          <h4>Current:</h4> <h5>{stock.prices[0].current}</h5>
          <h4>Open:</h4> <h5>{stock.prices[0].open}</h5>
          <h4>Close:</h4> <h5>{stock.prices[0].close}</h5>
          <h4>High:</h4> <h5>{stock.prices[0].high}</h5>
          <h4>Low:</h4> <h5>{stock.prices[0].low}</h5>
          <h4>Volume:</h4> <h5>{stock.prices[0].volume}</h5>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant='primary' onClick={()=>handlebuystock()} >
          Buy stock
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StockComponent;
