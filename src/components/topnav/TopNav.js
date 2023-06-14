import {Link} from 'react-router-dom'
import './topnav.css'
import React from 'react'


const TopNav = () => {
  return (
    <>
      <nav role='navigation' className='top-navbar'>
        <Link to={'/'} className='navlink'>home</Link>
        <Link to={'/about'} className='navlink'>About</Link>
        <Link to={'/principal'} className='navlink'>Word</Link>
        <Link to={'/sports'} className='navlink'>Sports</Link>
        <Link to={'/gallery'} className='navlink'>gallery</Link>
        <Link to={'/career'} className='navlink'>Career</Link>
        <Link to={'/contact'} className='navlink contact'>Contact</Link>
        <Link to='/admissions' className='navlink admission'>Admission</Link>
      </nav>
    </>
  )
}

export default TopNav