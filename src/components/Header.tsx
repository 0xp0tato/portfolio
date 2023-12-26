export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-8">
        <p className="text-3xl font-semibold">Ninad Sajwan</p>
        <nav className="flex gap-6">
          <a
            className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
            href="#home-section"
          >
            Home
          </a>
          <a
            className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
            href="#about-section"
          >
            About
          </a>
          <a
            className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
            href="#projects-section"
          >
            Projects
          </a>
          <a
            className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
            href="#contact-section"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
