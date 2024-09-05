import React from 'react'
import './skills.css';
import webimg from '../../assests/webdesign.png' 
const Skills = () => {
  return (
   <section id='skills'>
        <span classname="skilltitle">What I do</span><br/>
        <span className="skilldesc">I am a skilled and passionate web designer with experience </span>
        <div className="skillbars">
            <div className='skillbar'>
                <img src={webimg} alt="Web design" className="skillbarimg"/>
                <div className="skillbartext">
                    <h2>Frontend Design</h2>
                    <p>this is a website for   a Frontend design</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={webimg} alt="fullstack" className="skillbarimg"/>
                <div className="skillbartext">
                    <h2>Fullstack Design</h2>
                    <p>this a website with a frontend with backend.</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={webimg} alt="appdesign" className="skillbarimg"/>
                <div className="skillbartext">
                    <h2>Mobile App Design</h2>
                    <p>Mobile App design this is a website</p>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Skills