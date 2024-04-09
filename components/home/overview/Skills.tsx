import styles from "./skills.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Skills = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size='2.4rem' color='var(--brand)' />
            <span>Skills</span>
          </h4>
          <div className={styles.statGrid}>
            <span className='chip'>JavaScript</span>
            <span className='chip'>TypeScript</span>
            <span className='chip'>Python</span>
            <span className='chip'>HTML</span>
            <span className='chip'>CSS</span>
            <span className='chip'>Django</span>
            <span className='chip'>React.js</span>
            <span className='chip'>Nextjs</span>
            <span className='chip'>C++</span>
            <span className='chip'>Redux</span>
            <span className='chip'>NodeJS</span>
            <span className='chip'>Tailwind</span>
            <span className='chip'>Express</span>
            <span className='chip'>MySQL</span>
            <span className='chip'>NoSQL</span>
            <span className='chip'>MongoDB</span>
            <span className='chip'>Firebase</span>
            <span className='chip'>GitHub</span>
            <span className='chip'>Postman</span>
            <span className='chip'>Vscode</span>
            <span className='chip'>Docker</span>
            <span className='chip'>Heroku</span>
            <span className='chip'>CI/CD</span>
            <span className='chip'>Jira</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size='2.4rem' color='var(--brand)' />
            <span>Interests</span>
          </h4>
          <div className={styles.statGrid}>
            <span className='chip'>Problem-solving</span>
            <span className='chip'>Custom GPTs</span>
            <span className='chip'>Natural language processing</span>
            <span className='chip'>Machine Learning</span>
            <span className='chip'>Games</span>
            <span className='chip'>Chess</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
