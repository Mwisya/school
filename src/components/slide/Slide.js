import React from 'react'
import { Link } from 'react-router-dom'
import './slide.css'
const Slide = () => {
    return (
        <div className='slide'>
              <h3>TOUR CASTLE ROCK MEDIA</h3>
            <div className='slide-wrapper'>
              <div className="slide-image-wrapper">
                <img src="" alt="" />
              </div>
              <div className="slide-image-wrapper">
                <img src="" alt="" />
              </div>
              <div className="slide-image-wrapper">
                <img src="" alt="" />
              </div>
              <div className="slide-image-wrapper">
                <img src="" alt="" />
              </div>
              <div className="slide-image-wrapper">
                <img src="" alt="" />
              </div>
              <div className="slide-image-wrapper">
                <img src="" alt="" />
              </div>
              <div className="slide-image-wrapper">
                <img src="" alt="" />
              </div>
              <div>
                <Link to={'/gallery'}>Gallery</Link>
              </div>
            </div>
        </div>
    )
}

export default Slide
