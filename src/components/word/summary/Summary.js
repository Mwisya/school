import React from 'react'
import teacher from '../../../assets/teacher.jpeg'
import director from '../../../assets/director.jpeg'
import { Link } from 'react-router-dom'

import './summary.css'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'


const Summary = ({name, name1}) => {
    return (
        <div className='summary-wrapper transition'>
             <p className='summary-title'>Related articles</p>
            <div className='summaries'>

                <div className='summary transition'>
                    <div className='summary-info-container'>
                        <div className="summary-img-container">
                            <img src={teacher} alt="" />
                        </div>

                        <div className='summary-header'>
                            <h4>{name}</h4>
                            <p>Deputy Principal</p>
                        </div>
                    </div>
                    <p className='summary-p'>
                    <FaQuoteLeft/>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint illo facilis tempore doloribus nostrum aperiam quasi similique exercitationem?
                        <Link to={'/deputy'} className='summary-p-link'>See more</Link>
                    <FaQuoteRight/>

                    </p>
                </div>
                <div className='summary transition'>
                    <div className='summary-info-container'>
                        <div className="summary-img-container">
                            <img src={director} alt="" />
                        </div>

                        <div className='summary-header'>
                            <h4>{name1}</h4>
                            <p>Director</p>
                        </div>
                    </div>
                    <p className='summary-p'>
                    <FaQuoteLeft/>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint illo facilis tempore doloribus nostrum aperiam quasi similique
                        <Link to={'/director'} className='summary-p-link'>See more</Link>
                    <FaQuoteRight/>
                    </p>

                </div>

            </div>
        </div>
    )
}

export default Summary
