import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaAward, FaFolder, FaUserAlt } from "react-icons/fa";
import SectionWrapper from "../common/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper
      subtitle={"Get To Know"}
      title={"About Me"}
      containerClass={"about__container"}
      id={"about"}
    >
      <>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5 Years Working</small>
            </article>
            <article className="about__card">
              <FaUserAlt className="about__icon" />
              <h5>Clients</h5>
              <small>5 Worldwide</small>
            </article>
            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Projects</h5>
              <small>5 Completed</small>
            </article>
          </div>

          <p>
            I have good skills in HTML, CSS, and JavaScript. I also know how to
            make sites on the Tilda platform. I have skills in working with
            SQLite, MySQL, and MongoDB. A few years ago I started to learn
            React. Now I am dive into NestJS.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </>
    </SectionWrapper>
  );
};

export default About;
