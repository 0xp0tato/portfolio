import React from 'react'
import "./TechStack.css"

import htmlLogo from "../../Images/html-logo.svg";
import cssLogo from "../../Images/css-logo.svg";
import jsLogo from "../../Images/js-logo.svg";
import reactLogo from "../../Images/react-logo.svg";
import mongodbLogo from "../../Images/mongodb-logo.svg";

const TechStack = () => {
  return (
    <div className='TechStack'>
        <h1>Tech Stack |</h1>
        <div className='tech-icons'>
            <img src={htmlLogo}/>
            <img src={cssLogo}/>
            <img src={jsLogo}/>
            <img src={reactLogo}/>
            <img src={mongodbLogo}/>
        </div>
    </div>
  )
}

export default TechStack