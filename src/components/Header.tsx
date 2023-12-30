import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleScroll(area?: string) {
    if (area) {
      const element = document.getElementById(area);

      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
  }

  function handleResumeClick() {
    const resumeLink = "https://drive.google.com/file/d/19lQOVQmQtDza8ql9ARjs5SZMlbVFvtox/view"
    window.open(resumeLink, '_blank');
  }

  return (
    <header className="bg-gray-900 text-white py-4 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <button
          onClick={() => handleScroll()}
          className="text-3xl font-semibold hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
        >
          Ninad Sajwan
        </button>
        <div className="lg:flex items-center space-x-6 hidden">
          <button
            className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => handleScroll('home-section')}
          >
            Home
          </button>
          <button
            className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => handleScroll('about-section')}
          >
            About
          </button>
          <button
            className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => handleScroll('projects-section')}
          >
            Projects
          </button>
          <button
            className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => handleScroll('contact-section')}
          >
            Contact
          </button>
          <button
            className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
            onClick={handleResumeClick}
          >
            Resume
          </button>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-white focus:outline-none"
          >
            {isOpen ? 'X' : '☰'}
          </button>
          {isOpen && (
            <nav className="bg-gray-900 absolute top-full left-0 right-0 px-4 py-2">
              <div className="container mx-auto flex flex-col gap-2">
                <button
                  className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
                  onClick={() => {
                    handleScroll('home-section');
                    setIsOpen(false);
                  }}
                >
                  Home
                </button>
                <button
                  className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
                  onClick={() => {
                    handleScroll('about-section');
                    setIsOpen(false);
                  }}
                >
                  About
                </button>
                <button
                  className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
                  onClick={() => {
                    handleScroll('projects-section');
                    setIsOpen(false);
                  }}
                >
                  Projects
                </button>
                <button
                  className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
                  onClick={() => {
                    handleScroll('contact-section');
                    setIsOpen(false);
                  }}
                >
                  Contact
                </button>
                <button
            className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
            onClick={handleResumeClick}
          >
            Resume
          </button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
