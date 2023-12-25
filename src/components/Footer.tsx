import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between items-center px-8">
        <p className="text-sm">
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/ninad-sajwan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size="30px"
              className="text-xl hover:text-blue-500 transition duration-300 ease-in-out"
            />
          </a>
          <a
            href="https://github.com/0xp0tato"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size="30px"
              className="text-xl hover:text-blue-500 transition duration-300 ease-in-out"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
