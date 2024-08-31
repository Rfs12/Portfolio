import React from 'react';
import './Navbar.css';
import contactImg from '../../assests/phone.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
   <nav className='navbar'>
    <div className='desktopmenu'>
        <Link className='desktopmenulistitem'>Home</Link>
        <Link className='desktopmenulistitem'>About</Link>
        <Link className='desktopmenulistitem'>Portfolio</Link>
        <Link className='desktopmenulistitem'>Clinets</Link>
    </div>
    <button className='desktopmenubtn'>
      <img src={contactImg} alt='' className='desktopmenuimg'/>Contact Me</button>
   </nav>
  )
}

export default Navbar;