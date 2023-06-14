import React from 'react'
import './sports.css'
import gamespitch from '../../../assets/gamespitch.jpg'
import SportsGallery from './SportsGallery'


const Sports = () => {
  return (
    <div className='sports'>
        
        <div className="sports-wrapper">
            <h4>Message from sports department</h4>
            <article className='sports-article'>
                <section className='sports-article-section'>
                    <img src={gamespitch} alt="" />
                </section>
                <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius est soluta natus laborum maxime ab nam odit ducimus ut. Fuga ipsa id eaque odit accusamus maxime amet placeat ullam incidunt!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro sint, amet veniam commodi doloremque dolorem distinctio esse reiciendis, ullam repellendus impedit? Doloremque vitae earum architecto dolor ullam libero eos corrupti. Impedit, placeat repudiandae inventore et omnis provident ducimus architecto dolores!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perspiciatis quo est ab in sit, laudantium quam, voluptas eos corrupti rem alias fuga eius quod delectus itaque eligendi sunt? Quidem!</p>
                </div>
            </article>
        </div>
        <SportsGallery/>
    </div>
  )
}

export default Sports