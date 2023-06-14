import React,{useEffect} from 'react'
import  './posters.css'
import schoolbus1 from '../../assets/schoolbus1.jpeg'
import swimming from '../../assets/swimming.jpg'

import AOS from 'aos';
import "aos/dist/aos.css"

const Posters = () => {
   
    useEffect(() => {
        AOS.init({
          duration: 600,
          easing: 'ease-in-sine',
          delay: 7,
        });
    
      }, [])
  
  return (
    <section className='updates-container'>
        <h3>Castle Rock Updates</h3>
        <div data-aos="fade-up"  className='updates'>
            <div className="update">
                <img src={schoolbus1} alt="" />
                <span className="description">school trip scheduled on 10/4/2023.</span>
            </div>
            <div data-aos="fade-up"  className="update">
                <img src={swimming} alt="" />
                <span className="description">inter classes swimming competition scheduled on 15/3/2023</span>
            </div>
        </div>
        
    </section>
  )
}

export default Posters