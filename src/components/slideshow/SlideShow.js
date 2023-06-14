import React from 'react'
import './slideshow.css'

const SlideShow = () => {
  return (
    <div className='slideshow'>
      <div className="slide-wrapper">
        <div className='flex-c slide-item slide-item1'>1</div>
        <div className='flex-c slide-item'>2</div>
        <div className='flex-c slide-item'>3</div>
        <div className='flex-c slide-item'>4</div>
      </div>
    </div>
  )
}

export default SlideShow