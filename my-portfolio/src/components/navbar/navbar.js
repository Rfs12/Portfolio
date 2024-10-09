import React, { useState } from 'react';
import './Navbar.css';
import contactImg from '../../assests/phone.png';
import menuIcon from '../../assests/icons8-menu-squared-50.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  const[showMenu,setShowMenu]=useState(false);
  return (
   <nav className='navbar'>
    <div className='desktopmenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenulistitem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenulistitem'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenulistitem'>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenulistitem'>Clients</Link>
    </div>
    <button className='desktopmenubtn' spy={true} smooth={true} offset={-10} duration={500} onClick={()=> {
      document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
    }}>
      <img src={contactImg} alt='' className='desktopmenuimg'/>Contact Me</button>

      <img src={menuIcon} alt='MobileMenu' className='mobMenu' onClick={()=> setShowMenu(!showMenu)}/>
      <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onclick={()=> setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onclick={()=> setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onclick={()=> setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onclick={()=> setShowMenu(false)}>Contact</Link>
    </div>
   </nav>
  )
}

export default Navbar;