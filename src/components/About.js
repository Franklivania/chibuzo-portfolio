import React from 'react'
import'../styles/About.css'
import Image from '../cropped 1.png'
import PDF from '../others/Chibuzo Franklin_Odigbo_Resume.pdf'

const About = () => {
  return (
    <div className='about'>

<img src={Image} alt="franklin image" width={200} height={200} id="img" />
      <h2>
        Hi there, <br />
        I am Chibuzo Franklin Odigbo. <br />
        I am a Frontend Developer. <br /><br />

        <button type='button' ><a href={PDF}>Download my Resume</a></button>
      </h2>  
      
    </div>
  )
}

export default About
