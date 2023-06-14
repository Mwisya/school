import React from 'react'
import './preFooter.css'
import { Link } from 'react-router-dom'
import gmap from '../../assets/gmap.jpg'

import {EmailOutlined,LocationOn,PhoneAndroid } from '@material-ui/icons'
import {IoCallOutline} from 'react-icons/io5'





const PreFooter = () => {
  return (

    <div className='prefooter'id='prefooter'>
        <div className="transition prefooter-wrapper">
          {/* QUICK LINKS LIST */}
            <div className="quicklinks">
                <h4>Quick Links</h4>
                <p>
                 <Link to={'/contact'} className='quicklink'>Request visit</Link>
                 </p>
                <p>
                 <Link to={'/contact'} className='quicklink'>Online Admission</Link></p>
                <p> <Link to={'/contact'} className='quicklink'>Contact Registra</Link></p>
                <p> 
                <a href="http://smsportal.naske.co.ke" className='quiclink bulksms'>Castle rock media</a>
                </p>    
                <p> 
                  <a href="http://api.whatsapp.com/send?phone=+254723341899">WhatsApp us</a>
                </p>               
  
            </div>
            {/* GOOGLE MAP SHOWING CASTLE ROCK LOCATION */}
            <div className="map">
              <img className='map-img' src={gmap} alt={gmap} />
            </div>

            {/* ADSRESSES */}
            <div className="contact-address">    
                <h4>Contact Details</h4> 

                <p className='contact-last-child'> <LocationOn/> Castle Rock School PO BOX 0000-0000 </p>
                <p> <IoCallOutline/> <a href="tel:+254723341899">+(254) 07233 341 899</a> </p>
                <p> <PhoneAndroid/> <a href="tel:+254723341899">+(254) 07233 341 899</a> </p>
             
                <p> <EmailOutlined/> <a href="mailto:info@naske.co.ke" className='email-link email-color'>info@castlerockschool.sc.ke</a></p>
            </div>
        </div>
    </div>
  )
}

export default PreFooter