import React from 'react'
import './skills.css';
import webimg from '../../assests/webdesign.png' 
const Skills = () => {
  return (
    <section id='skills'>
    <span className="skilltitle">What I do</span><br/>
    <span className="skilldesc">I am a Skilled and Passionate Softwere Developer</span>
    <div className="skillbars">
        <div className='skillbar'>
            <img src={webimg} alt="Web design" className="skillbarimg"/>
            <div className="skillbartext">
                <h2>Frontend Design</h2>
            </div>
        </div>
        <div className='skillbar'>
            <img src={webimg} alt="Fullstack" className="skillbarimg"/>
            <div className="skillbartext">
                <h2>Full Stack Design</h2>
            </div>
        </div>
        <div className='skillbar'>
            <img src={webimg} alt="App design" className="skillbarimg"/>
            <div className="skillbartext">
                <h2>Mobile App Design</h2>
            </div>
        </div>
    </div>
</section>
  )
}

export default Skills
