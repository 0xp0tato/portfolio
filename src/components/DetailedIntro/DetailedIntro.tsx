import "./DetailedIntro.css";

import myImage from "../../Images/my-image.jpg";

const DetailedIntro = () => {
  return (
    <div className="DetailedIntro">
      <div className="my-image">
        <img src={myImage} />
      </div>
      <div className="about-me">
        <h1>About Me</h1>
        <h2>A dedicated Full Stack Developer</h2>
        <p>
          As a Full Stack Developer, I possess an impressive arsenal of skills
          in HTML, CSS, JavaScript, React & MongoDB.
          <br />I excel in designing and maintaining responsive websites as well
          as their backends that offer a smooth user experience.
          <br />I am also a team player who thrives in collaborating with
          cross-functional teams to produce outstanding web applications.
        </p>
      </div>
    </div>
  );
};

export default DetailedIntro;
