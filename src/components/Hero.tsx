import myImage from "../assets/myself.jpg";
import myAvatar from "../assets/8bitpix.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <div
      className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-8"
      id="home-section"
    >
      <div className="w-[60%] mx-auto bg-white rounded-lg shadow-xl flex flex-col md:flex-row items-center p-16">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <p className="text-xl text-gray-500">$ whoami</p>
          <p className="text-3xl font-bold">{">"} Hi, I'm Ninad Sajwan.</p>
          <p className="text-lg text-gray-600 mb-4">
            {">"} A Passionate Software Engineer. SSE @ Infosys
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/ninad-sajwan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size="45px"
                className="text-blue-500 text-2xl hover:text-blue-700 transition duration-300 ease-in-out"
              />
            </a>
            <a
              href="https://github.com/0xp0tato"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size="45px"
                className="text-gray-700 text-2xl hover:text-gray-900 transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-8 flex justify-end">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front relative rounded-full overflow-hidden cursor-pointer w-[300px] h-[300px]">
                <img src={myAvatar} />
              </div>
              <div className="flip-card-back relative rounded-full overflow-hidden cursor-pointer w-[300px] h-[300px]">
                <img src={myImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8">
        <p className="text-xl font-semibold text-center">Tech Stack</p>
        <div className="flex gap-3 mt-4">
          <img
            src="https://skillicons.dev/icons?i=html,css,javascript,typescript,c,cpp,python,next,nodejs,express,firebase,tailwind,react,redux,mongodb,mysql"
            alt="Tech Stack"
          />
        </div>
      </div>
    </div>
  );
}
