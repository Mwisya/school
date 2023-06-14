import React from 'react'
import './display.css'
import welcome from '../../assets/welcome.jpeg'


const Display = () => {
  return (
    <section className='display'>
      <div className='transition display-wrapper'>
        <img src={welcome} alt="" />
        <div className='display-info'>
          <h3 className='display-info-h'>ZEAL OF A MAASAI</h3>
          <p className='display-info-p'>passion and determination reaches the stars</p>
          
        </div>
      </div>
    </section>
  )
}

export default Display