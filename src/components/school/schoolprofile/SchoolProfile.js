import React from 'react'
import './schoolprofile.css'
import study from '../../../assets/study.webp'

const SchoolProfile = () => {
  return (
    <div className='schoolprofile'>
        <div className='schoolprofile-header'>
            <img src={study} alt="" />
            <h3>CASTLE ROCK PROFILE</h3>
        </div>
        <div className='schoolprofile-paragraph'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit expedita obcaecati vero explicabo neque incidunt accusamus maxime aperiam quia asperiores corporis id velit facere provident praesentium alias tenetur, dolorem eveniet!</p>
        </div>
        <ul className='schoolprofile-list'>
            <li>Adrress: <span>Nairobi, Mombasa Rd.</span></li>
            <li>Founded: <span>since 1990</span></li>
            <li>Other names: <span>Casterly</span></li>
            <li>Colors: <span>Gold, Crimson, darkblue</span></li>
            <li>school type: <span>High school</span></li>

            <li>Phone: <a href="tel:+254723341899" className='phone-no'>+254-723-341899</a></li>
            <li>Email: <a href="mailto:info@naske.co.ke" className='email-link'>info@naske.co.ke</a></li>
        </ul>
        
    </div>
  )
}

export default SchoolProfile