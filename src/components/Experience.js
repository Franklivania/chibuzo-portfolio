import React from 'react'
import'../styles/Experience.css';
import HTML from '../HTML logo.png'
import CSS from '../css logo.jpg'
import JS from '../JavaScript logo.png'
import REC from '../react.png'
import ENGLISH from '../english.png'
import IGBO from '../igbo.gif'
import SPANISH from '../spanish.jpg'
import JAP from '../japanese.png'

const Experience = () => {
  return (
    <div className='experience'>
      <div className="skills">

        <h1>CODING SKILLS</h1>

        <div className="skill-pod">
          <h2>HTML</h2>
          <img src={HTML} alt="html logo" id="skill" />
        </div>

        <div className="skill-pod">
          <h2>CSS</h2>
          <img src={CSS} alt="html logo" id="skill" />
        </div>

        <div className="skill-pod">
          <h2>JavaScript</h2>
          <img src={JS} alt="html logo" id="skill" />
        </div>

        <div className="skill-pod">
          <h2>REACT</h2>
          <img src={REC} alt="html logo" id="skill" id="rs" />
        </div>

        <h1>LANGUAGES</h1>

        <div className="skill-pod">
          <h2>ENGLISH</h2>
          <img src={ENGLISH} alt="html logo" id="skill" />
        </div>

        <div className="skill-pod">
          <h2>IGBO</h2>
          <img src={IGBO} alt="html logo" id="skill" />
        </div>

        <div className="skill-pod">
          <h2>SPANISH</h2>
          <img src={SPANISH} alt="html logo" id="skill" />
        </div>

        <div className="skill-pod">
          <h2>JAPANESE</h2>
          <img src={JAP} alt="html logo" id="skill" id="rs" />
        </div>
        
      </div>

    </div>
  )
}

export default Experience