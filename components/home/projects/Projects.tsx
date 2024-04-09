import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className='section-wrapper' id='projects'>
      <SectionHeader title='Projects' dir='r' />

      <div className={styles.projects}>
        {projects.map(project => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Unified Club Portal",
    imgSrc: "/project-imgs/ucp.png",
    code: "https://github.com/Harshiv07/unified-club-portal",
    projectLink: "https://unified-club-portal.vercel.app/",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Redux",
      "Authentication",
    ],
    description:
      "A solution for to manage clubs, events, and participants for an university",
    modalContent: (
      <>
        <p>
          Created a one-stop platform for clubs to reach out to the students and
          share information about their club and upcoming events. Won 2nd prize
          for it in a WMC 2.0 Hackathon
        </p>
        <p>
          A MERN stack web application with different role authentication,
          validation checks, live updates, event management, club management,
          and event feedback for clubs
        </p>
      </>
    ),
  },
  {
    title: "Gaze Following",
    imgSrc: "/project-imgs/gazef.png",
    code: "https://github.com/Harshiv07/Gaze-Following",
    projectLink:
      "https://drive.google.com/file/d/1Jlg33XQnuDJnJYCk4RBdGkMLSBoGT8om/view",
    tech: [
      "Artificial Intelligence",
      "Python",
      "Cloud Computing",
      "Flask",
      "AWS EC2",
    ],
    description: "A solution to detect the gazed objects.",
    modalContent: (
      <>
        <p>
          Built a pipeline to identify gazed objects from an uploaded image.
        </p>
        <p>
          Delivered the functionality as a SaaS to include services of uploading
          images, storing them to AWS EC2 instance, and executing trained ML
          models to generate outputs.
        </p>
      </>
    ),
  },
  {
    title: "BooXchange",
    imgSrc: "/project-imgs/bx.png",
    code: "https://github.com/Harshiv07/booxchange",
    projectLink: "https://booxchange-three.vercel.app/",
    tech: [
      "React.js",
      "NodeJS",
      "Express",
      "MongoDB",
      "Scrum",
      "Agile Development",
    ],
    description:
      "Web Application for all types of books and study notes rentals.",
    modalContent: (
      <>
        <p>
          The tech stack is based on MERN stack with the custom Styled
          components, connected to a Node.js backend, with data stored in
          MongoDB.
        </p>
        <p>
          Built a MERN stack web application through which people can rent and
          lend books, notes and tutorials easily.
        </p>
        <p>
          Agile software development principles were utilized to build the
          product, considering viable business planning strategies.
        </p>
      </>
    ),
  },
  {
    title: "Animax Infinite Scroll",
    imgSrc: "/project-imgs/ais.png",
    code: "https://github.com/Harshiv07/animax-infinite-scroll",
    projectLink: "https://animax-infinite-scroll.vercel.app/",
    tech: ["React.js", "Next.js", "framer motion", "Animation"],
    description:
      "Anime listing app to demonstrate lazy loading and beautiful animations.",
    modalContent: (
      <>
        <p>
          Displays the top-rated anime and keeps loading new ones as you scroll
          to the end with animation.
        </p>
      </>
    ),
  },
  {
    title: "Django Chat App",
    imgSrc: "",
    code: "https://github.com/Harshiv07/django-chat-app",
    projectLink: "#",
    tech: ["Django", "Python", "Web Sockets"],
    description: "Chat app for an ed-tech platform",
    modalContent: (
      <>
        <p>
          Implemented web socket connection handlers for the features of user
          join, leave and notifications.
        </p>
        <p>Real-time chat messaging app with custom rooms</p>
      </>
    ),
  },
  {
    title: "Process Scheduling Simulator",
    imgSrc: "/project-imgs/pss.png",
    code: "https://github.com/Harshiv07/Process-Scheduling-Simulator",
    projectLink:
      "https://github.com/Harshiv07/Process-Scheduling-Simulator/tree/master/Screenshots",
    tech: [
      "Java",
      "Object Oriented Programming",
      "Java GUI",
      "Operating Systems",
    ],
    description:
      "A Java application to demonstrate process scheduling algorithms' and its metrics.",
    modalContent: (
      <>
        <p>
          Implemented scheduling algorithms such as SJF, FCFS, and Round Robin
          using threads with visualizations of GANTT chart, Turnaround time, and
          simulating process execution
        </p>
        <p>
          The team in total consists of 2 developers. This is an educational
          project for the course of Operating Systems to strengthen our concepts
          in it.
        </p>
      </>
    ),
  },
  {
    title: "MERN To-do App",
    imgSrc: "/project-imgs/todo.png",
    code: "https://github.com/Harshiv07/mern-todo-app",
    projectLink: "https://mern-todo-app-hazel.vercel.app/",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Vercel"],
    description: "A MERN stack to-do app deployed using vercel",
    modalContent: (
      <>
        <p>Simple to-do app with features of task priority.</p>
      </>
    ),
  },
  {
    title: "Weather App",
    imgSrc: "/project-imgs/weather.png",
    code: "https://github.com/Harshiv07/react-weather-app",
    projectLink: "https://harshiv07.github.io/react-weather-app/",
    tech: ["React.js", "Axios", "React Hooks"],
    description:
      "A react weather app to understand react hooks, state updates and API calls",
    modalContent: (
      <>
        <p>
          A react weather app to understand react hooks, state updates and API
          calls.
        </p>
      </>
    ),
  },
];
