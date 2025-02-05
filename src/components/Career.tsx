import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import infosysLogo from "../assets/infosys_logo.png";
import squareboatLogo from "../assets/squareboat_logo.png";

export default function Career() {
  const career = [
    {
      image: squareboatLogo,
      companyName: "Squareboat",
      title: "Software Engineer",
      date: "Jan 2024 - Sept 2024",
      work: [
        "• Implemented document upload functionality using AWS S3 for vendor registration and verification process.",

        "• Created entire backend service using NestJS. for an in-house job posting application.",

        "• Integrated G2 review system using ReactJS in frontend and ExpressJs in backend allowing users to review our products and services.",

        "• Integrated an emailing service and created custom email templates using Mailman allowing administrators to send mail to candidates, companies and vendors.",

        "• Leveraged Redis Queue as Message Queues for offloading tasks from server to queue workers.",

        "• Implemented data filtering using NextJs and antd.",

        "• Utilized MySQL for database management, ensuring data integrity and scalability of the platform.",

        "• Orchestrated deployment of applications using Docker, for consistency and scalability across environments.",

        "• Implemented best practices for process management and logging using PM2.",

        "• Refactored legacy code and updated all its dependencies to upgraded the project from node version 7, React 15 to node version 20, React 18.",

        "• Ensured scalability and efficiency in email distribution by integrating AWS services like AWS SQS & AWS Lambda.",

        "• Created custom script to retrieve authenticated users contacts using Google People Api.",

        "• Managed user sessions and profiles with Firebase.",

        "• Created custom functionalities like sending delayed emails and developed dynamic email templates in an Applicant Tracking System using Python3, Django & Celery, resulting smooth workflow for HR & Management and serving accurate information for more than 75000 candidates.",
      ],
    },
    {
      image: infosysLogo,
      companyName: "Infosys",
      title: "Software Engineer",
      date: "Feb 2021 - Jan 2024",
      work: [
        "• Developed a Sales Portal and a Digital Asset Library utilizing Oracle Content Management, catering to a user base of over 4000 individuals within the organization.",
        "• Designed and crafted over 50 unique layouts and user-friendly interfaces using HTML, CSS, and JavaScript.",
        "• Created a custom search functionality to search efficiently across more than 10,000 assets using AJAX & JQuery.",
        "• Strategically developed and maintained Java Bean components to implement business logic to streamline existing application by 15%.",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <p className="text-3xl font-bold mb-4">Career</p>
        <p className="text-lg mb-8">This has been my journey so far 🚶‍➡️</p>
        <VerticalTimeline>
          {career.map((job, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
              date={job.date}
              dateClassName="text-black"
              iconStyle={{ background: "white", color: "#fff" }}
              icon={
                <img
                  src={job.image}
                  alt={job.companyName}
                  className="w-full h-full object-contain"
                />
              }
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold mb-2">
                {job.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-lg font-semibold mb-4">
                {job.companyName}
              </h4>
              {job.work.map((work, idx) => (
                <p key={idx} className="text-base mb-2">
                  {work}
                </p>
              ))}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}
