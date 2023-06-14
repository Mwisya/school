import React,{useState} from 'react'
import { HomeOutlined,PhoneAndroid , InfoOutlined,  Notifications, Sports, PinDrop} from '@material-ui/icons'
import {NavLink} from 'react-router-dom'
import './sidenav.css'
import { Avatar} from '@material-ui/core'
import { CameraOutlined} from '@material-ui/icons'


const sidenavIcons = {
  home: <HomeOutlined/> ,
  about: <InfoOutlined/>,
  notification: <Notifications/>,
  contact:<PhoneAndroid />,
  sports:<Sports/>,
  arrow: <PinDrop/>,
  avatar:<Avatar/>,
  camera:<CameraOutlined/>
}


const SideNav = ({onClick}) => {
   const [dropDown, setDropDown]= useState(false)
   const [schoolMenu, setSchoolMenu]= useState(false)
  
    function showMenu() {
     setDropDown(true)
    }
    function closeMenu() {
      setDropDown(false)
     }
    function showSchool() {
      setSchoolMenu(true)
    }
    function closeSchoolMenu() {
      setSchoolMenu(false)
    }
    
  
 
  return (
    <div className='sidenav transition'>
        <nav onClick={onClick} >
          <NavLink to='/' className='sidenav-link'> {sidenavIcons.home} home</NavLink>
          <NavLink to='/sports' className='sidenav-link'> {sidenavIcons.sports }sports</NavLink>

          
          <NavLink to='/about' className='sidenav-link'>{sidenavIcons.about} About</NavLink>
          <NavLink to='/notice' className='sidenav-link'>{sidenavIcons.notification}Notice</NavLink> 
        </nav>
         <p className='dropdown-menu' onClick={dropDown? closeMenu : showMenu }> {sidenavIcons.arrow} Explore</p>
           {
             dropDown 
             ?
             <nav onClick={onClick} className='dropdown-container'>
                <NavLink to='/principal' className='dropdown-link'>Principal's Welcome</NavLink>
                <NavLink to='/director' className='dropdown-link'>Director's word</NavLink>
                <NavLink to='/deputy' className='dropdown-link'>Deputy Principal</NavLink>
              </nav>
               : 
             null
            }

          <p className='dropdown-menu' onClick={schoolMenu? closeSchoolMenu : showSchool }> {sidenavIcons.arrow} School</p>
           {
             schoolMenu 
             ?
             <nav onClick={onClick} className='dropdown-container'>
                <NavLink to='/school' className='dropdown-link'>Mission</NavLink>
                <NavLink to='/school' className='dropdown-link'>Vision</NavLink>
                <NavLink to='/casterly-life' className='dropdown-link'>Life at castle Rock</NavLink>
              </nav>
               : 
             null
            }

        <nav onClick={onClick}>
          <NavLink to='/gallery' className='sidenav-link'>{sidenavIcons.camera} Gallery</NavLink>
          <NavLink to='/contact' className='sidenav-link'>{sidenavIcons.contact}Contact Us</NavLink>
          <NavLink to='/admissions' className='sidenav-admission-link'>{sidenavIcons.avatar1}Online Admission</NavLink>
        </nav>
    </div>
  )
}

export default SideNav