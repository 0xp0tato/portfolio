import React from 'react'
import "./Navbar.css"

import titleLogo from "../../Images/title-logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={titleLogo}/>
        <div className="nav-items">
          <div>Home</div>
          <div>About</div>
          <div>Projects</div>
          <div>Contact</div>
          <div>Resume</div>
        </div>
      </div>
  )
}

export default Navbar