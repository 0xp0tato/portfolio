import Project from "./Project";

import fashHubImage from "../assets/fashHub.jpg";
import cafeMenuAppImage from "../assets/cafeMenuApp.jpg";

export default function Projects() {
  const projects = [
    {
      image: fashHubImage,
      title: "FashHub",
      description:
        "A robust e-commerce application using Next.js, which incorporated MongoDB and Firebase for efficient storage and management of product data. Stripe integration ensured secure payment processing. To enhance user experience, RESTful APIs were designed for seamless authentication and product management. Tailwind CSS was used for responsive design across devices, and Server-Side Rendering (SSR) was implemented for optimal performance. The result is a production-ready platform that prioritizes security, efficiency, and an excellent user interface.",
      techStack: [
        "Next.js",
        "MongoDB",
        "Firebase",
        "Stripe",
        "RESTful APIs",
        "Tailwind CSS",
      ],
      githubLink: "https://github.com/0xp0tato/Fash-Hub",
      liveDemoLink: "https://fashhub.vercel.app/",
    },
    {
      image: cafeMenuAppImage,
      title: "Cafe Menu App",
      description:
        "a web-based cafe menu application utilizing ReactJS. It allowed users to explore the menu, search for specific food items, add selections to their cart, and complete orders through the use of Redux. Additionally, special attention was given to ensuring the application's responsiveness across various devices for a seamless user experience.",
      techStack: ["React.js", "Redux"],
      githubLink: "https://github.com/0xp0tato/cafe-menu-app/",
      liveDemoLink: "https://sacred-earth-cafe.netlify.app/",
    },
  ];

  return (
    <div className="bg-gray-100 py-16" id="projects-section">
      <div className="container mx-auto">
        <p className="text-3xl font-bold mb-4">Projects</p>
        <p className="text-lg mb-8">Each project is unique in its own way 🧩</p>
        {projects.map((item, index) => (
          <Project key={index} {...item} />
        ))}
      </div>
      <a href="https://github.com/0xp0tato">
      <p className="text-center text-xl md:text-2xl">And many more... ➡️ </p>
      </a>
      </div>
  );
}
