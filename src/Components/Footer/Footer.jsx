import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={logo} alt="" />
            <p>Helping you build modern, responsive, and beautiful web interfaces.</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2026 Novi Amelia Kristanti. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
