import myImage from "../assets/myself.jpg";
import myAvatar from "../assets/8bitpix.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {

  return (
    <div
      className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-4 lg:p-8"
      id="home-section"
    >
      <div className="w-full md:w-[80%] lg:w-[60%] mx-auto bg-white rounded-lg shadow-xl flex flex-col md:flex-row items-center p-6 md:p-12">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <p className="text-lg md:text-xl text-gray-500">$ whoami</p>
          <p className="text-xl md:text-3xl font-bold">{">"} Hi, I'm Ninad Sajwan.</p>
          <p className="text-sm md:text-lg text-gray-600 mb-4">
            {">"} A Passionate Software Engineer. SSE @ Infosys
          </p>
          <div className="flex gap-2 md:gap-3">
            <a
              href="https://www.linkedin.com/in/ninad-sajwan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size="30px"
                className="text-blue-500 text-xl md:text-2xl hover:text-blue-700 transition duration-300 ease-in-out"
              />
            </a>
            <a href="https://leetcode.com/0xp0tat0/" target="_blank" rel="noopener noreferrer">
              <img width="30" height="30" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo"/>
            </a>
            <a
              href="https://github.com/0xp0tato"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size="30px"
                className="text-gray-700 text-xl md:text-2xl hover:text-gray-900 transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-6 lg:ml-8 flex justify-center md:justify-end">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front relative rounded-full overflow-hidden cursor-pointer w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
                <img src={myAvatar} alt="Avatar Front" />
              </div>
              <div className="flip-card-back relative rounded-full overflow-hidden cursor-pointer w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
                <img src={myImage} alt="Avatar Back" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full md:max-w-7xl mx-auto mt-6 lg:mt-8">
        <p className="text-lg md:text-xl font-semibold text-center">Tech Stack</p>
        <div className="flex gap-2 md:gap-3 justify-center mt-3">
          <img
            src="https://skillicons.dev/icons?i=html,css,javascript,typescript,c,cpp,python,next,nodejs,express,firebase,tailwind,react,redux,mongodb,mysql"
            alt="Tech Stack"
          />
        </div>
      </div>
    </div>
  );
}
