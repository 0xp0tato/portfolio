import { FaGithubSquare } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveDemoLink: string;
}

const Project: React.FC<ProjectProps> = (props) => {
  const { image, title, description, techStack, githubLink, liveDemoLink } =
    props;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-8 mb-8 md:flex items-center">
      <div className="w-full md:w-1/2 mr-0 md:mr-8 h-64 md:h-96 overflow-hidden rounded-2xl mb-4 md:mb-0">
        <img
          src={image}
          alt={title}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="w-full md:w-1/2">
        <p className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">{title}</p>
        <p className="text-sm md:text-lg mb-4">{description}</p>
        <ul className="flex flex-wrap mb-4">
          {techStack.map((item, index) => (
            <li
              key={index}
              className="bg-gray-200 rounded-full px-2 md:px-3 py-1 text-xs md:text-sm mr-2 mb-2"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-col md:flex-row md:gap-4 items-center">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-2 md:mb-0 text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
          >
            <FaGithubSquare className="mr-2" />
            Code
          </a>
          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
          >
            Live Demo
            <FiExternalLink className="mr-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
