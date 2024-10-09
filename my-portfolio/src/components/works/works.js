import React, { useState } from 'react'
import './works.css';
import projectimg1 from '../../assests/portt1 (1).png';
import projectimg2 from '../../assests/portt1 (2).png';
import projectimg3 from '../../assests/portt1 (3).png';
import projectimg4 from '../../assests/igm.png';
import projectimg5 from '../../assests/img2.png';
const Works = () => {
    const [showMore, setShowMore] = useState(false);
    const handleShowMore = () => {
      setShowMore(!showMore); // Toggle between showing more or less
    };
  
  return (
    <section id='works'>
        <h2 className='workstitle'>My Portfolio</h2>
        <span className='workdesc'>I take gride in paying attention to the smallest details and my work is pixel perfect.I am excited to bring my skills and experience to help businessess achives their goals and create a strong online presence.</span>
        <div className='worksimgs'>
        <a href="https://github.com/Rfs12/rajarata" target="_blank" rel="noopener noreferrer">
          <img src={projectimg1} className='worksimg' alt='Project 1'/>
        </a>
        <a href="https://github.com/Rfs12/Portfolio" target="_blank" rel="noopener noreferrer">
          <img src={projectimg5} className='worksimg' alt='Project 2'/>
        </a>
        <a href="https://github.com/Rfs12/e-commerce" target="_blank" rel="noopener noreferrer">
          <img src={projectimg3} className='worksimg' alt='Project 3'/>
        </a>
        {showMore && (
          <>
            <a href="https://" target="_blank" rel="noopener noreferrer">
              <img src={projectimg4} className='worksimg' alt='Project 4'/>
            </a>
            <a href="https://link-to-project5" target="_blank" rel="noopener noreferrer">
              <img src={projectimg2} className='worksimg' alt='Project 5'/>
            </a>
          </>
        )}
        </div>
        <button className='workBtn' onClick={handleShowMore}>
        {showMore ? 'Show Less' : 'See More'}</button>
    </section>
  );
}

export default Works