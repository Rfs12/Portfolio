import React from "react";
import './intro.css';
import bg from '../../assests/my.png'
const Intro = () => {
  return (
    <section id="intro">
        <div className="introcontent">
            <span className="hello">Hello</span>
            <span className="introtext">I'am</span><span className="introname">Rifas</span><br/>Front-End Devoloper
            
        </div>
        <img src={bg} alt="profile" className="bg"></img>
    </section>
  )
}
export default Intro
