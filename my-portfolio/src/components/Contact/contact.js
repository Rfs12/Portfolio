import React, { useRef } from 'react'
import './contact.css';
import facebookIcon from '../../assests/facebook (1).png';
import instagramIcon from '../../assests/instagram (2).png';
import linkedinIcon from '../../assests/linkedin.png';
import githubIcon from '../../assests/github-sign.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    console.log(form.current); // Check if the form reference is set correctly
    emailjs
      .sendForm('service_lshkkuj', 'template_w37474o', form.current, {
        publicKey: 'nwU9ohmv2cN0hrDfm',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  
  return (
    <section id='contactPage'>
   <div id='contact'>
    <h1 className='contactPageTitle'>Contact Me</h1>
    <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
    <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type='text' className='name' placeholder='Your Name' name='your_name' required/>
        <input type='email' className='email' placeholder='Your Email' name='your_email' required/>
        <textarea name='message' rows="5" placeholder='Your Message' className='msg' required></textarea>
        <button type='submit' className='submitBtn'>Submit</button>
        <div className='Links'>
          <a href="https://www.facebook.com/rfs.mhd?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} className='link' alt='Facebook' />
          </a>
          
          <a href="https://www.instagram.com/rfs_marsh?igsh=MTh6ZnV6YnFhN242bA==" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} className='link' alt='Instagram' />
          </a>
          
          <a href="https://www.linkedin.com/in/rifas-mohamed-a066aa325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} className='link' alt='Linkedin' />
          </a>
          
          <a href="https://github.com/Rfs12" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} className='link' alt='github' />
          </a>
      </div>
    </form>
   </div>
   </section>
  )
}

export default Contact