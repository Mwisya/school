import React from 'react'
import sis from '../../assets/sis.png'
import hmc from '../../assets/hmc.png'
import edexcel from '../../assets/edexcel.jpg'
import campbridge from '../../assets/campbridge.jpg'
import './trustedby.css'

const TrustedBy = () => {
    return (
        <div className='trustedby-container'>
            <h3>Trusted By</h3>
        <div className='trustedby-wrapper'>
            <div className='trustedby'><img src={sis} alt="" /></div>
            <div className='trustedby'><img src={hmc} alt="" /></div>
            <div className='trustedby'><img src={campbridge} alt="" /></div>
            <div className='trustedby'><img src={edexcel} alt="" /></div>
        </div>
        </div>
    )
}

export default TrustedBy
