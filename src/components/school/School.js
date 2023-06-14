import React from 'react'
import Mission from './mission/Mission'
import Vision from './vision/Vision'
import './school.css'
import Explore from '../explore/Explore'
import SchoolProfile from './schoolprofile/SchoolProfile'

const School = () => {
  return (
    <>
    <main className='layout'>
        <aside className='layout-aside'>
            <Explore/>
        </aside>
        <div className='layout-data school'>
          <div className='school-wrapper'>
            <Mission/>
            <Vision/>
            <SchoolProfile/>
          </div>
        </div>
    </main>
    </>
  )
}

export default School