import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              <img src={assets.logo} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nisi in magni soluta, minus neque eius rerum ad consequuntur quam, voluptate recusandae? Architecto inventore non magnam sunt, error accusamus quis?</p>
             <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
             </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
             </ul>
            </div>
            
        </div>
    
      <hr/>
      <p className='footer-copyright-text'>
        Copyright 2024 Tomato.com - All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
