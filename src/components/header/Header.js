import './header.css'
import React,{useState} from 'react'
import { Menu } from '@material-ui/icons'
import TopNav from '../topnav/TopNav'
import Logo from '../logo/Logo'
import SideNav from '../sidenav/SideNav'


const Header = () => {
  const [toggle, setToggle]= useState(false)
    function open (){
      setToggle(true)
    };
    function close (){
      setToggle(false);
    };

  return (
    <header>
      <div className='header-wrapper'>
          <div className='logo-section'>
            <Logo/>
            <div className='school-name'>
              <h4>CASTLE ROCK SCHOOL</h4>
              <span>foundation of kwowledge</span>
            </div>
          </div>
          <div className='topnav-section'>
            <TopNav />
            <Menu onClick={open}/>
            {toggle && <SideNav onClick={close}/> }
          </div>
      </div>
    </header>
  )
}

export default Header