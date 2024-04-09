import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./overview.module.scss";
import { Skills } from "./Skills";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

export const Overview = () => {
  return (
    <section id='overview' className='section-wrapper'>
      <SectionHeader title='Overview' dir='l' />
      <div className={styles.overview}>
        <div>
          <Reveal>
            <p className={`${styles.overviewText}`}>
              Hey! I am pursuing a Master's in Computer Science at Lakehead
              University and recently completed my co-op as a software developer
              intern at Ceridian.
              <br />
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.overviewText}>
              Passionate about writing well-structured and clean code. My
              expertise lies in building web applications and products using
              technologies such as the MERN stack, Typescript, and the Django
              framework.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.overviewText}>
              Skilled in documentation and technical presentations, holding
              certifications in Python, Web Development, and Machine Learning.
              Adept at organization, planning, and communication, facilitating
              effective collaboration in team environments.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.overviewText}>
              Proficient in programming languages including JavaScript, Python,
              TypeScript, C#, C++, and Java. Experienced in backend development
              with NodeJS, Django, MySQL, and MongoDB. Knowledgeable in testing
              frameworks, and Machine Learning concepts.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.overviewText}>
              I am always open to discussing collaborating opportunities,
              technical solutions, jobs, and hackathon ideas to become a 100x
              developer. If you&apos;re interested in working together or have
              any questions, please reach out!{" "}
              <Link
                href='https://www.linkedin.com/in/harshiv07/'
                target='_blank'
                rel='nofollow'
              >
                🔗
              </Link>
            </p>
          </Reveal>
        </div>
        <Skills />
      </div>
    </section>
  );
};
