import React from 'react'
import { useNavigate } from 'react-router-dom'
import './reUse.css'
import { Link } from 'react-router-dom'

import basketball1 from '../../assets/basketball1.jpeg'
import schoolbus1 from '../../assets/schoolbus1.jpeg'
import lib from '../../assets/lib.webp'
import games from '../../assets/games.jpg'
import gallery6 from '../../assets/gallery6.jpg'
import schoolbuilding from '../../assets/schoolbuilding.jpeg'



const ReUse = ({name}) => {
  const navigate = useNavigate()
  return (
    <div className='re-use'>
      <div className='re-use-wrapper'>
        <h3>{name}</h3>
        <p>media</p>
        <div className='re-use-items'>
          <div className='re-use-item'>
            <img src={basketball1} alt=""/>
            <button className='re-use-btn'onClick={()=> navigate('/sports')} >Games</button>
          </div>
          <div className='re-use-item'>
            <img src={schoolbus1} alt="" />
            <button className='re-use-btn' onClick={()=> navigate('/gallery')}>Trips</button>
          </div>
          <div className='re-use-item'>
            <img src={lib} alt="" />
            <button className='re-use-btn' onClick={()=> navigate('/sports')}>Library</button>
          </div>
          <div className='re-use-item'>
            <img src={schoolbuilding} alt="" />
            <button className='re-use-btn' onClick={()=> navigate('/gallery')}>Facilities</button>
          </div>
          <div className='re-use-item'>
            <img src={games} alt="" />
            <button className='re-use-btn' onClick={()=> navigate('/sports')}>Activities</button>
          </div>
          <div className='re-use-item'>
            <img src={gallery6} alt="" />
            <button className='re-use-btn' onClick={()=> navigate('/gallery')}>media</button>
          </div>
          <span className='last-item'>
            <Link to={'/gallery'} className='last-item-link'> Gallery</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ReUse