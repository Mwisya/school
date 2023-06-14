import React from 'react'
import './contactnav.css'

import { Link } from 'react-router-dom'
import gmailicon from '../../assets/gmailicon.jpg'

const ContactNav = () => {
    return (
        <div className='explore-contact'>
            <h4>EXPLORE</h4>
            <div className='links-container'>
                <Link to={'/contact'} className='explore-contact-links'>Contact us</Link>
                <Link to={'/connect'} className='explore-contact-links'>Castle socials</Link>  
                <Link to={'/map-us'} className='explore-contact-links'>find us on map</Link>  
              

            </div>
            <ul className='contact-ul'>
                <li>
                <Link to={'/admissions'} className='admission-link'>online admission</Link>  
                </li>

                <li className='email-list-item'>
               <img src={gmailicon} alt="" /> 
                <a href="mailto:info@naske.co.ke" className='email-link'>info@castlerock.sc.ke</a>   
                </li>
    
                <li>
                    <Link to={'/'} className='students-portal-link'>Students Portal</Link>
                </li>
            </ul>
        </div>
    )
}

export default ContactNav
