import React from "react";
import "./Navbar.css";

import titleLogo from "../../Images/title-logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/">
        <img className="logo" src={titleLogo} />
      </a>
      <div className="nav-items">
        <button>Home</button>
        <button>About</button>
        <button>Projects</button>
        <button>Contact</button>
        <button>Resume</button>
      </div>
    </div>
  );
};

export default Navbar;
