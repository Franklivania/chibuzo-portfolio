import React from 'react'
import'../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <div className="head">
      
      <nav className="navbar">
        <h1>Chibuzo Franklin Odigbo</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Skills</a>
            <a href="/">Projects</a>
            <a href="/">Contact</a>

            {/* <a href="https://github.com/Franklivania"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
            <a href="https://linkedin.com/in/franklin-odigbo-706886202/"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
            <a href="https://twitter.com/OdigboF"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
            <a href="https://franklivania.hashnode.dev/"><FontAwesomeIcon icon="fa-brands fa-hashnode" /></a>
            <a href="https://discord.com/channels/@me"><FontAwesomeIcon icon="fa-brands fa-discord" /></a> */}
        </div>
      </nav>
    
    </div>

  )
}

export default Header