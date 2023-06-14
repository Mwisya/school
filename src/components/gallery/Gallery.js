import './gallery.css'
import React,{useState} from 'react'
import gallery from '../../assets/gallery.jpg'
import gallery1 from '../../assets/gallery1.jpg'
import gallery4 from '../../assets/gallery4.jpg'
import gallery5 from '../../assets/gallery5.jpg'
import gallery6 from '../../assets/gallery6.jpg'
import gallery7 from '../../assets/gallery7.jpg'
import schoolbus1 from '../../assets/schoolbus1.jpeg'
import basketball from '../../assets/basketball.jpg'


const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  
  const images = [
    {img:gallery},
    {img:gallery1},
    {img:gallery4},
    {img:gallery5},
    {img:gallery6},
    {img:schoolbus1},
    {img:gallery7},
    {img:gallery},
    {img:gallery1},
    {img:gallery4},
    {img:basketball},
    {img:gallery5},
  ]
  
  const getimage = (item)=>{
    setModalImage(item.img);
    setModal(true);
  }

  const closemodal = ()=>{
    setModal(false) 
  }
  return (
    <div className='studio'>
        <h3>CASTLE ROCK GALLERY</h3>
        <div className='studio-wrapper'>
          {
            images.map((item,index)=>{
              return(
              <div className={modal? 'modal open' : 'modal'}>
                <i className="close" onClick={closemodal}>&times;</i>
                <img src={modalImage} alt={modalImage} />
              </div>

              )
            })
          }
          
          {
            images.map((item,index)=>{
              return(
              <div className='studio-img-container'>
                <img src={item.img} className='studio-img' alt={item.img} key={index} onClick={()=> getimage(item)} />

              </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Gallery