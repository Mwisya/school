import React from 'react'
import './word.css'
import {TbBuildingCastle} from 'react-icons/tb'

import computer from '../../assets/computer.jpg'
import principal from '../../assets/principal.jpeg'
import Summary from './summary/Summary'
import WordNav from '../explore/WordNav'



const Word = () => {
  

  return (
    <main className='layout'>
      <aside className='layout-aside position'>
          <WordNav/>
          <img src={principal} alt="" className='principal'/>
      </aside>
      <div className='layout-data word'>

          <div className='word-img-container'>
            <img src={computer} alt="" />
          </div>
          <div className='article-wrapper'>
            
            <div className='article-header'>
              <TbBuildingCastle/>
              <h2>Principal's Welcome</h2>
            </div>

            <article className='main-article'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, similique? Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consectetur iure reiciendis corporis, quaerat qui nam! Pariatur, rerum quod repellendus optio commodi, vero animi at odio, quisquam sed laborum impedit deleniti similique doloribus quidem cupiditate earum debitis unde dolore inventore!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, similique? Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consectetur iure reiciendis corporis, quaerat qui nam! Pariatur, rerum quod repellendus optio commodi, vero animi at odio, quisquam sed laborum impedit deleniti similique doloribus quidem cupiditate earum debitis unde dolore inventore!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, similique? Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati. Vero unde eos quam dolor dicta nemo aut rerum veniam sapiente, dolorum cumque, vel sunt? Neque amet vel, illo omnis provident tenetur ea perspiciatis explicabo quia eveniet reiciendis sint sed?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, similique? Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum Lorem ipsum dolor sit amet impedit deleniti similique doloribus quidem cupiditate earum debitis unde dolore inventore!
                </p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quas incidunt nulla sunt! Odio consequatur fugiat reiciendis consectetur dolor neque beatae fugit corporis. Voluptatibus quibusdam ab tenetur veritatis perspiciatis. Perspiciatis repellat commodi tempora, officia vitae quo quod tempore obcaecati totam sequi deserunt illo praesentium non quas. Repellat maxime, illum, ea officiis, libero ad rem aliquam a quisquam quia veritatis esse?.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic esse odit aliquid facilis odio alias eos architecto, perspiciatis quasi nihil, ipsa, ea nostrum quisquam dolorum atque molestiae! Corrupti, veritatis nisi?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, similique? Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nemo quis nesciunt accusantium impedit aut natus laboriosam voluptas quas minima iure eum dignissimos, eius quisquam quo ratione similique quod dolorum?</p>
            </article>

            <div className="article-signing-off">
                <i>signature</i>
                <p>Stanley Munguti</p>
                <p>Principal</p>
            </div>
          </div>


      <Summary name='Stanley Munguti' name1='Trevor Belmont'/>
      </div>
    </main>
  )
}

export default Word