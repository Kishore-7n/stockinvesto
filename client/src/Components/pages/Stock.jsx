import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StockComponent from './StockComponent'
import '../styles/Stock.css'
import { Button } from '@mui/material';
function Stock() {
    
    const [Stocks,SetStocks] = useState([])
    const [filtertext,setfiltertext] = useState("")
    const getstocks = () => {
        axios.get("https://stockinvesto-2.onrender.com/stocks").then((res)=>{
            SetStocks(res.data)
        })
    }

    const [showModal, setShowModal] = useState(false);
    const [selectedStock, setSelectedStock] = useState(null);
    const [isBlurred, setIsBlurred] = useState(false);

  
    const handleStockClick = (stock) => {
      setSelectedStock(stock);
      console.log(selectedStock);
      setShowModal(true);
      setIsBlurred(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
      setSelectedStock(null);
      setIsBlurred(false);
    };

    const handlebyname = (s) => {

      if(s==='')
      {
          getstocks()
      }
      else{
        const filteredstocks = Stocks.filter((stock) => {
          const values = Object.values(stock).join(' ').toLowerCase();
          let something = values.includes(s.toLowerCase());
          return something
        })
    
        SetStocks(filteredstocks)
      }
    }
    

    useEffect(()=>{
      handlebyname(filtertext)
         // eslint-disable-next-line
    },[filtertext])

    useEffect(()=>{
        getstocks()
    },[])

  return (
    <div className={`stock-stockpage-container ${isBlurred ? 'blur-background' : ''}`}>
      <div className='search-container'>
            <input type='search' placeholder='search the stock'  value={filtertext} onChange={(e)=>setfiltertext(e.target.value)}></input>
            <Button variant="contained" sx={{width:130,height:45,borderRadius:2}} onClick={()=>setfiltertext("")}> clear
            </Button>
        </div>
      <div  className='stockpage-div'>
        {Stocks && Stocks.map((stock,ind)=>{
            return(
                <div className='stock-card' onClick={() => handleStockClick(stock)} key={ind}> 
                  <div className='stock-img' >
                    <span className='span1'>
                      <img src={stock.img} alt='sampleimg' ></img>
                    </span>
                    <span className='span2'>
                      <h4>{stock.symbol}</h4>
                      <h3>{stock.name}</h3>
                    </span>
                    <span className='span3'>
                      <h3> ${stock.prices[0].current}</h3>
                    </span>
                  </div>
                  <div className='stock-details'>
                  <span className='open'>
                    <h4>Open</h4> <h5>{stock.prices[0].close}</h5>
                  </span>
                  <span className='high'>
                    <h4>High</h4> <h5>{stock.prices[0].high}</h5>
                  </span>
                  <span className='low'>
                    <h4>Low </h4> <h5>{stock.prices[0].low}</h5>
                  </span>
                </div>
                </div>
            )
        })}
        {showModal && 
          <StockComponent show={showModal} onHide={handleCloseModal} stock={selectedStock} />
        }
      </div>
    </div>
  )
}

export default Stock
