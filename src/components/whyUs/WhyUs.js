import { Email, Facebook, HighQualityOutlined, MoreOutlined, PaymentOutlined, Twitter } from '@material-ui/icons'
import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import './whyUs.css'
import AOS from 'aos';
import "aos/dist/aos.css"

const WhyUs = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-sine',
      delay: 7,
    });

  }, [])
  return (
    <div className='whyUs'>
      <div className='whyUs-wrapper'>
      <h3>Why School at Castle Rock</h3>

          <div data-aos="fade-right" className='whyUs-wrapper-item whyUs-wrapper-item1'>
            <HighQualityOutlined className='whyUs-svg'/>
            <h4 className='whyUs-title'>Highly trained teachers</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perspiciatis natus assumenda eos libero sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam mollitia expedita, eligendi quaerat sed iure magnam quos beatae nesciunt magni itaque. Corporis molestiae soluta officiis laborum! Laborum, dolores voluptas!</p>
          </div>
          <div data-aos="fade-left" className='whyUs-wrapper-item whyUs-wrapper-item2'>
            <MoreOutlined className='whyUs-svg'/>
            <h4 className='whyUs-title'>Guaranteed care </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, inventore. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur distinctio nobis eveniet explicabo ducimus, voluptatum adipisci sed cumque, pariatur aliquid, nisi similique culpa rerum sunt? Laboriosam dolores illum exercitationem repellendus eligendi, explicabo libero aperiam eum.</p>
          </div>
          <div data-aos="fade-right" className='whyUs-wrapper-item whyUs-wrapper-item3'>
            <PaymentOutlined className='whyUs-svg'/>
            <h4 className='whyUs-title'>Condusive learning environment</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloribus soluta est nihil aspernatur molestiae perspiciatis autem, voluptatibus commodi. hwere required. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum obcaecati accusantium dolore, velit facilis iste aspernatur laborum. Doloribus harum itaque mollitia consequatur delectus! Excepturi porro, dolores modi perferendis tempora natus, laudantium nisi sapiente enim amet accusantium iure quisquam cum animi.</p>
          </div>
          <div data-aos="fade-left" className='whyUs-wrapper-item whyUs-wrapper-item4'>
            <PaymentOutlined className='whyUs-svg'/>
            <h4 className='whyUs-title'>School transport available</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, perferendis? nsectetur adipisicing elit. Deserunt reprehenderit accusantium quia assumenda. Obcaecati ducimus quos, aut corporis, facere hic veniam repellendus illum itaque molestias quam facilis sequi eaque reprehenderit. Sunt velit aliquid incidunt consequatur eaque rem, illo animi officiis.</p>
          </div>
          
          {/* QUICK LINKS AND SOCIAL MEDIAL  */}
          
          <div className='whyUs-links-container'>
              <div className='whyUs-links'>
                <Link className='whyUs-link' to={'/contact'}>Request Visit</Link>
                <Link className='whyUs-link' to={'/admission'}>Admission in Progress</Link>
              </div>
             <div className='whyUs-socials'>
              <Twitter/>
              <Facebook/>
              <Email/>
             </div>
          </div>
          
      </div>

    </div>
  )
}

export default WhyUs