import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className='section-wrapper' id='contact'>
      <div className={styles.contactWrapper}>
        <Reveal width='100%'>
          <h4 className={styles.contactTitle}>Let&apos;s Connect!</h4>
        </Reveal>
        <Reveal width='100%'>
          <p className={styles.contactCopy}>
            I&apos;m open to discussing any opportunities, hackathon events, and
            projects. Please reach out via my email or
            <Link
              href='https://www.linkedin.com/in/harshiv07/'
              target='_blank'
              rel='nofollow'
            >
              Linkedin
            </Link>
          </p>
        </Reveal>
        <Reveal width='100%'>
          <Link href='mailto:pharshiv10@gmail.com'>
            <div className={styles.contactEmail}>
              <AiFillMail size='2.4rem' />
              <span>Email Me</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
