import React from "react";
import { SideBar } from "../nav/SideBar";
import { Hero } from "./hero/Hero";
import styles from "./home.module.scss";
import { Heading } from "../nav/Heading";
import { Overview } from "./overview/Overview";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";

export const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main id='main'>
          <Heading />
          <Hero />
          <Overview />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  );
};
