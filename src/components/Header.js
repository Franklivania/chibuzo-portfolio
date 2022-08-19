import React from 'react'
import'../styles/Header.css'


// function toggleMobileMenu(menu){
//   menu.classList.toggle('open');
// }

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
        </div>
      </nav>

      {/* <div id="hamburger-icon" onClick={toggleMobileMenu(this)}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
                <div class="mobile-menu">
                  <a href="/">Home</a> <br/>
                  <a href="/">About</a> <br/>
                  <a href="/">Skills</a> <br/>
                  <a href="/">Projects</a> <br/>
                  <a href="/">Contact</a> <br/>
                </div>
      </div> */}
    
    </div>

  )
}

export default Header