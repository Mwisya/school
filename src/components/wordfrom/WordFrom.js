import React from 'react'
import './wordfrom.css'
import {FaQuoteLeft} from 'react-icons/fa'

const WordFrom = () => {
    return (
        <div className='quote-container'>
            <img src="" alt="" />
            <div className="quote">
                <FaQuoteLeft/>
                <summary>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, explicabo accusantium? Expedita nostrum quo quos vitae in iusto at accusantium similique tenetur voluptates maiores dignissimos ea ratione, dolorem ad accusamus.</summary>
                <Link to={'/principal'}>
                    <h4>Dr Trevor Belmont</h4>
                    <h5>Principal</h5>
                </Link>

            </div>
        </div>
    )
}

export default WordFrom
