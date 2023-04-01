import "./Intro.css";

import linkedinLogo from "../../Images/linkedin-logo.svg";
import githubLogo from "../../Images/github-logo.svg";
import avatar from "../../Images/avatar.png";

const Intro = () => {
  return (
    <div className="Intro">
      <div className="introduction">
        <h1>Full Stack React Developer</h1>
        <p>
          Hi, I'm Ninad Sajwan. A passionate Full Stack Developer based in New
          Delhi, India
        </p>
        <div className="icons">
          <img src={linkedinLogo} />
          <img src={githubLogo} />
        </div>
      </div>
      <div className="avatar">
        <img src={avatar}></img>
      </div>
    </div>
  );
};

export default Intro;
