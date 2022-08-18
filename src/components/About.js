import React from 'react'
import'../styles/About.css'
import Image from '../cropped 1.png'

const About = () => {
  return (
    <div className='about'>
      <h2>
        Hi there, <br />
        I am Chibuzo Franklin Odigbo. <br />
        I am a Frontend Developer.
      </h2>
      <img src={Image} alt="franklin image" width={200} height={200} id="img" />
    </div>
  )
}

export default About
