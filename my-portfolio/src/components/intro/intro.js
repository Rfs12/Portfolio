import React from "react";
import './intro.css';
import btnimg from '../../assests/hireme.png'
import bg from '../../assests/my.png'
import {Link} from 'react-scroll';
const Intro = () => {
  return (
    <section id="intro">
        <div className="introcontent">
            <span className="hello">Hello,</span>
            <span className="introtext">I'am<span className="introname"> Rifas</span><br/>Front-End Devoloper</span>
            <p className="intropara">I'm a skilled web devoloper in creating <br/>visually appealing and user friendly websites.</p>   
            <Link><button className="btn"><img src={btnimg} className="btnimg" alt="hire me"/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg"></img>
    </section>
  )
}
export default Intro
