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
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 flex items-center">
      <div className="w-1/2 mr-8 h-96 overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="rounded-lg object-cover w-full h-full md:h-auto md:w-full"
        />
      </div>
      <div className="w-1/2">
        <p className="text-2xl font-semibold mb-4">{title}</p>
        <p className="text-lg mb-4">{description}</p>
        <ul className="flex flex-wrap mb-4">
          {techStack.map((item, index) => (
            <li
              key={index}
              className="bg-gray-200 rounded-full px-3 py-1 text-sm mr-2 mb-2"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mr-4 text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
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
            <FiExternalLink className="mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
