import React from 'react'
import './about.css'
import {TbBuildingCastle} from 'react-icons/tb'
import aerial from '../../assets/aerial.jpeg'

import Explore from '../explore/Explore'


const About = () => {
  return (
    <main className='layout about-main'>
      <aside className='layout-aside'>
        <Explore/>
      </aside>
      <div className='layout-data about'>
          <div className='about-img-container'>
          <img src={aerial} alt="" />
          </div>
          <div className='about-wrapper'>
            <div>
              <TbBuildingCastle/>
              <h3>About castle rock</h3>
            </div>
              <article>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quis voluptatum consequuntur laudantium adipisci sit excepturi nulla eos nemo delectus odit, aspernatur officiis asperiores neque tempora temporibus, maiores magnam explicabo. consequuntur laudantium adipisci sit excepturi nulla eos nemo delectus odit, aspernatur officiis asperiores neque tempora temporibus, maiores magnam explicabo.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vero perspiciatis earum sapiente minus qui aliquam sunt saepe sequi amet commodi rem, repellat libero mollitia, ipsa aliquid atque ut accusamus eum ex soluta culpa dicta inventore. Magnam ullam alias consequatur!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur laudantium adipisci sit excepturi nulla eos nemo delectus odit, aspernatur officiis asperiores neque tempora temporibus, maiores magnam explicabo. Assumenda repudiandae quos, illo quis voluptatum ut odio necessitatibus, velit, officia nihil aliquid obcaecati asperiores quidem veniam.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repellendus veritatis ad excepturi fugit quo minus nobis harum, numquam tempore! Placeat officia assumenda molestias, esse doloribus aut eaque alias optio sapiente temporibus nihil ducimus at sed magnam labore adipisci voluptates.
                  consequuntur laudantium adipisci sit excepturi nulla eos nemo delectus odit, aspernatur officiis asperiores neque tempora temporibus, maiores magnam explicabo.
                  </p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, exercitationem autem minima eos ducimus, beatae aspernatur libero rerum quos expedita magnam sint, in dolor iure eius consectetur sunt doloremque quas provident quidem. Illo rem doloremque commodi perspiciatis necessitatibus nobis exercitationem ut a ducimus, deserunt iusto!</p>
              </article>
          </div>
      </div>
    </main>
  )
}

export default About