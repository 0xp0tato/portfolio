import { CiMail } from "react-icons/ci";

export default function Contact() {

  const gradientStyle = {
    background: "-webkit-linear-gradient(45deg, #39425b, #586481)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="bg-gray-200 py-16 text-center" id="contact-section">
      <div className="container mx-auto">
        <p className="text-3xl font-bold mb-4" style={gradientStyle}>Contact</p>
        <p className="text-lg mb-8">Don't be shy! Hit me up</p>
        <a
          href="mailto:ninadmaster05@gmail.com"
          className="flex items-center justify-center gap-2 text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
        >
          <CiMail className="text-2xl" />
          <p className="text-lg">ninadmaster05@gmail.com</p>
        </a>
      </div>
    </div>
  );
}
