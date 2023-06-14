import React from 'react'
import ContactNav from './ContactNav'
import './contactUs.css'

import Connect from './connect/Connect'
// import gmailicon from '../../assets/gmailicon.jpg'
// import { Avatar } from '@material-ui/core'
// import { Dialpad } from '@material-ui/icons'


// const icons = {
//   sender:<Avatar/>,
//   telephone: <Dialpad/>
// }

const ContactUs = () => {
  return (
    <main className='layout'>
        <aside className='layout-aside '>
            <ContactNav/>
        </aside>
    <div className='layout-data contact-us'>
        <div className="contact-us-wrapper">
          <div className="left">
            <form action="">
            <h3>Friends of Castle Rock</h3>
            <p>Send us a message</p>
              <input type="text" name="senders-name" placeholder='Enter name'/>
              <input type="text" name="phone-no" placeholder='Telephone'/>
              
              <textarea name="message" id="" cols="30" rows="10" placeholder='Type here...'></textarea>
              <button>Send</button>
            </form>
          </div>
          <Connect/>
        </div>
    </div>
    </main>
  )
}

export default ContactUs