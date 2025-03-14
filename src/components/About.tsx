import ReactMarkdown from 'react-markdown'

export default function About() {
  const gradientStyle = {
    background: "-webkit-linear-gradient(45deg, #39425b, #586481)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div
      className="bg-gray-200 flex flex-col justify-center items-center p-8 rounded-lg shadow-xl"
      id="about-section"
    >
      <p className="text-4xl font-bold mb-4 text-center text-gray-800" style={gradientStyle}>
        About me
      </p>
      <p className="text-lg text-center text-gray-700">
        Greetings! 🌟 I'm Ninad Sajwan, a tech enthusiast specializing in
        crafting dynamic web experiences as a Software Engineer 💻. My toolkit
        includes an array[ ] of skills encompassing HTML{"<"}
        {"/>"}, CSS 💅, JavaScript ⚙️, TypeScript, React.js ⚛️, Next.js,
        Node.js, Firebase 🔥, Stripe 💵, Tailwind CSS, and more. Check out my
        work below! 🚀👨‍💻
      </p>
      <ReactMarkdown className="mt-8">
      ![LeetCode Stats](https://leetcard.jacoblin.cool/0xp0tato?ext=contest&border=0&radius=20)
      </ReactMarkdown>
    </div>
  );
}
