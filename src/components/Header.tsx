export default function Header() {
  function handleScroll(area?: string) {
    if (area) {
      const element = document.getElementById(area);

      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
  }

  return (
    <header className="bg-gray-900 text-white py-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-8">
        <button
          onClick={() => handleScroll()}
          className="text-3xl font-semibold hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
        >
          Ninad Sajwan
        </button>
        <nav className="flex gap-6">
          <button
            className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => handleScroll("home-section")}
          >
            Home
          </button>
          <button
            className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => handleScroll("about-section")}
          >
            About
          </button>
          <button
            className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => handleScroll("projects-section")}
          >
            Projects
          </button>
          <button
            className="hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => handleScroll("contact-section")}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
