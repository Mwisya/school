import React from 'react'
import './sportsGallery.css'
import { Link } from 'react-router-dom'

import gamespitch from '../../../assets/gamespitch.jpg'
import basketball from '../../../assets/basketball.jpg'
import basketball1 from '../../../assets/basketball1.jpeg'
import games from '../../../assets/games.jpg'



const SportsGallery = () => {
  return (
    <div className='re-use'>
      <div className='re-use-wrapper'>
        <h3>Sports Gallery</h3>
        <p>media</p>
        <div className='re-use-items'>
          <div className='re-use-item'>
            <img src={basketball} alt=""/>
            <span className='re-use-btn'>Games</span>
          </div>
          <div className='re-use-item'>
            <img src={basketball1} alt="" />
            <span className='re-use-btn' >Trips</span>
          </div>
        
          <div className='re-use-item'>
            <img src={gamespitch} alt="" />
            <span className='re-use-btn' >Facilities</span>
          </div>
          <div className='re-use-item'>
            <img src={games} alt="" />
            <span className='re-use-btn'>Activities</span>
          </div>
         
          <span className='last-item'>
            <Link to={'/gallery'} className='last-item-link'> Gallery</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SportsGallery