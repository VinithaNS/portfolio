import React from 'react'
import Button from '@mui/material/Button';

import "../Styles/Contact.css";
import contact from "../images/contact.png";
import Email from "../images/email.png";
import Github from "../images/github.png";
import LinkedIn from "../images/linkedin.png";
import Phone from "../images/phone.png";
const Contact = () => {
return (
    <div className='contact'>
      <div className="contact-bg"></div>
      <div className='contact-wrapper'>
        <div className='contact-left'>
         <h1 className='contact-title'>Get In Touch</h1>
          <div className='contact-info'>
            <div className='contact-info-item'>
          <img src={Phone} alt="" className="contact-icon" />
              +91-9626597049
            </div>
            <div className='contact-info-item'>
             <img src={Email} alt="" className="contact-icon" />
              vinithaneyashree2901@gmail.com
            </div>
            <div className='contact-info-item'>
            <a href="https://www.linkedin.com/in/vinitha-neyashree-59040622a/" target="_blank" className="btn btn-outline-secondary av" rel="noreferrer"><i className="bi bi-linkedin" style={{color:"rgb(65, 201, 255)"}}></i> LinkedIn</a>
  <a href="https://github.com/VinithaNS" target="_blank" className="btn btn-outline-secondary av" rel="noreferrer"><i className="bi bi-github" style={{color:"rgb(65, 201, 255)"}}></i> Github</a>
          </div>
            
         </div>
        </div>
        <div className='contact-right'>
           <img src={contact} alt={contact} className="contact-icons" />
        </div>
      </div>
    </div>
  )
}

export default Contact