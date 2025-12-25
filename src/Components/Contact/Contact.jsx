import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
  return (
    <div className='contact' id='contact'>
       <div className="contact-col">
           <h3>Send us a message<img src={msg_icon} alt=''/></h3>
           <p>Feel free to reach out through contact form or find our contact
              information below. your feedback, questions and suggestions are 
              important to us as we strive to provide exceptional service to our
              EduMerge community.
           </p>
           <ul>
            <li><img src={mail_icon} alt="" />Contact@EduMerge.com</li>
            <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
            <li><img src={location_icon} alt="" />77, Nehru road, Chennai.<br/>
            pincode-123456</li>
           </ul>
       </div>
       <div className="contact-col">
           <form>
               <label>Your Name</label>
               <input type="text" name='name' required placeholder='Enter your name' />
               <label>Your Name</label>
               <input type="tel" name='phone' required placeholder='Enter your mobile number' />
               <label>Write your messages here</label>
               <textarea name="message" row='6' required placeholder='Enter your message'></textarea>
               <button type='submit' className='btn dark-btn'>Submit now<FontAwesomeIcon icon={faArrowRight} className='icon' /></button>
           </form>
       </div>
    </div>
  )
}
