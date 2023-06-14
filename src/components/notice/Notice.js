import React from 'react'
import './notice.css'
import Logo from '../logo/Logo'
const Notice = () => {
  return (
    <div className='noticeboard'>
      <div className="transition noticeboard-wrapper">

        <div className="heading-logo"> <Logo /> </div>
        <h4>CASTLE ROCK HIGH SCHOOL</h4>
        
        <div className="address">
          <p>16/Nov/2022</p>
          <h5>RE:SCH/22/N/01</h5>
        </div>

        <div className="ref">
          <h4>RE:</h4>
          <h4>NOTICE: OF THE NOTICE</h4>
        </div>

        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore veritatis aut consequuntur mollitia vitae cumque iusto fugiat nihil veniam? Nostrum id corporis ipsa quae quidem aliquam pariatur quia eaque provident ipsam itaque, voluptas sint vitae voluptatibus saepe ratione eveniet, quo illo quos iste adipisci at sunt. Harum rerum suscipit, illum cupiditate debitis eligendi <hr/>
          Doloremque fuga officiis maiores corporis qui quisquam sapiente molestias odit similique itaque amet iusto ad nobis esse consectetur. Est itaque labore, ullam cupiditate impedit quisquam eius pariatur necessitatibus qui excepturi quo doloremque maxime voluptatem corrupti nesciunt?<hr/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel vero odio itaque expedita minus est voluptas laudantium quia earum explicabo minima officia eos, cupiditate quaerat eveniet soluta saepe sit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae doloribus, cumque, debitis voluptatibus vel odit deleniti non perferendis eos quisquam voluptate corporis, assumenda maxime. Nesciunt nostrum deserunt inventore ab!lorem5
        </article>
        <div className="signing-off">
          <span>Regards</span>
          <i>Signature</i>
          <p className='signing-off-name'>Trevor Belmont</p>
          <p className='signing-off-position'>Director</p>
        </div>
      </div>
    </div>
  )
}

export default Notice