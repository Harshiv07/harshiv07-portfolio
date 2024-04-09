import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className='section-wrapper' id='experience'>
      <SectionHeader title='Experience' dir='l' />
      {experience.map(item => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Dayforce",
    position: "Software Developer Intern",
    time: "May 2023 - December 2023",
    location: "Remote",
    description:
      "Ensured code quality and reliability through code reviews and debugging, achieving zero disrepair tests out of 20+. I led the development of an innovative Smart Copy Week feature, showcasing skills in machine learning and data analysis. Additionally, I wrote automation tests in C# for APIs and UI components, ensuring functionality and performance. With over 80% code coverage on multiple backend modules through unit testing, I upheld robust development standards. As a Scrum master, I facilitated meetings and sprint planning sessions, driving project success.",
    tech: [
      "C#",
      "Python",
      "Data Visualization",
      "Unit Testing",
      "Test Automation",
      "Object-oriented Programming",
      "Specflow",
      "Jira",
      "React.js",
      "Git",
      "Agile development",
    ],
  },
  {
    title: "Curl",
    position: "Project Engineer",
    time: "April 2022 - December 2022",
    location: "Bangalore, India",
    description:
      "I contributed to Sara CF, an Intelligent Data Extraction platform, focusing on extracting pertinent information from digitized documents. My responsibilities included developing a scalable and responsive UI, implementing required features, and delivering end-to-end development for web and single-page applications.",
    tech: [
      "TypeScript",
      "React.js",
      "Redux",
      "CSS",
      "Docker",
      "REST APIs",
      "Jira",
      "Agile development",
      "Git",
      "GitLab",
    ],
  },
  {
    title: "SnowM",
    position: "R & D Engineer",
    time: "July 2021 - May 2022",
    location: "Remote",
    description:
      "Built APIs and UI features for the company's internal product, focusing on managing client devices, users, and businesses. Additionally, I addressed defects to ensure product integrity. I conducted regression tests to maintain deliverable quality, guided by the Scrum master.",
    tech: [
      "Node.js",
      "React.js",
      "Chakra-UI",
      "Quality assurance",
      "Bitbucket",
      "Docker",
      "Agile development",
    ],
  },
  {
    title: "KlaasX",
    position: "Web Developer Intern",
    time: "December 2020 - June 2021",
    location: "Remote",
    description:
      "Created a timer-based quiz akin to Google Forms and a chat application facilitating tutor-student communication, enhancing client engagement. Using Django and d3.js, I incorporated features to visualize attendance and grades across multiple learning institutions. Additionally, I optimized loading times for the ed-tech platform's landing pages by implementing React.js components as per design specifications, resulting in a notable reduction from an average of 8 seconds to 3 seconds.",
    tech: [
      "Django",
      "Python",
      "Bootstrap",
      "HTML",
      "CSS",
      "MySQL",
      "Javascript",
      "React.js",
      "Data visualization",
    ],
  },
  {
    title: "Ahmedabad University",
    position: "Teaching Assistant (Website & Social Media committee)",
    time: "January 2020 - May 2021",
    location: "Ahmedabad, India",
    description:
      "Tutored several junior students in web development and was part of the core committee to design and develop the university's website.",
    tech: ["Bootstrap", "HTML", "CSS", "Javascript"],
  },
];
