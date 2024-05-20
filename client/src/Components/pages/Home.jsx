import React from 'react'
import '../styles/Home.css'
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import homeimg from '../Assets/oda_sem_main.png'
import { FaMobileAlt } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { SiTicktick } from "react-icons/si";


function Home() {
  const navigate = useNavigate()

  const year = new Date().getFullYear();
  return (
    <div className='stock-home-container'>
      <h4>Made for Stock Market <br/> Trading and Investing</h4>
      <h5>Open your free StockInvesto Account now!</h5>
      <div className='stock-home-input-div'>
        <div className='div1'>
          <MdEmail className='maill-icon'/>
          <input type='email' placeholder='abc@gmail.com'></input>
          <button onClick={()=>navigate('/signup')}>open Account now</button>
        </div>
      </div>
      <div className='div2'>
          <img src={homeimg} alt='xyx'></img>
      </div>
      <div className='div4'>
        <h4>Open StockInvesto Account in 3 steps</h4>
      </div>
      <div className='div3'>
            <div className="slide">
              <FaMobileAlt className='home-icon' />
              <h6>1.Verify Mobile & Email</h6>
              <p>This takes less than a minute and is super convenient!</p>
            </div>
            <div className="slide">
              <GrDocumentText className='home-icon' />
              <h6>2.Submit KYC Documents</h6>
              <p>Upload required documents using
              your phone, laptop, or desktop!</p>
            </div>
            <div className="slide">
              <SiTicktick className='home-icon' />
              <h6>
                3.Account Ready
              </h6>
              <p>
              Complete your e-sign and your a/c
will be ready to trade & invest!
              </p>
            </div>
      </div>
      <div className='div5'>
          <section className='footer-section'>
            <footer className='footer'>
                <div className='footer-div'>
                   <ul className='ul1'>
                    <h4>Why StockInvesto ?</h4>
                    <li>Customers</li>
                    <li>Composable Web Platform</li>
                    <li>Security</li>
                    <li>Agency Partner Program</li>
                    <li>Technology Partner Program</li>
                   </ul>
                   <ul className='ul1'>
                    <h4>Explore</h4>
                    <li>Docs</li>
                    <li>Integrations</li>
                    <li>Jamstack Book</li>
                    <li>Community</li>
                    <li>Resources & Guides</li>
                   </ul>
                   <ul className='ul1'>
                    <h4>Contact Us</h4>
                    <li>Sales</li>
                    <li>Support</li>
                    <li>Status</li>
                    <li>Forums</li>
                    <li>Hire an Agency</li>
                   </ul>
                  <ul className='ul1'>
                  <h4>Quick Links</h4>
                  <li>Special offers</li>
                  <li>New arrivals</li>
                  <li>Clearance</li>
                  <li>Terms and conditions</li>
                  <li>Privacy policy</li>
                  <li>Return policy</li>
                  </ul>
                </div>
            </footer>
            <h4 className='copyrights'>© {year} StockInvesto . All Rights Reserved.</h4>
        </section>
      </div>
    </div>
  )
}

export default Home

