import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import SectionWrapper from "../common/SectionWrapper";

interface ISkill {
  title: string;
  level: "Experienced" | "Intermediate" | "Basic";
}

interface IListOfSkills {
  title: string;
  list: ISkill[];
}

const frontendSkills: ISkill[] = [
  {
    title: "HTML",
    level: "Experienced",
  },
  {
    title: "CSS",
    level: "Experienced",
  },
  {
    title: "JavaScript",
    level: "Experienced",
  },
  {
    title: "React",
    level: "Intermediate",
  },
  {
    title: "TypeScript",
    level: "Intermediate",
  },
  {
    title: "Redux",
    level: "Intermediate",
  },
];

const backendSkills: ISkill[] = [
  {
    title: "NodeJS",
    level: "Intermediate",
  },
  {
    title: "NestJS",
    level: "Basic",
  },
  {
    title: "MySQL",
    level: "Experienced",
  },
  {
    title: "MongoDB",
    level: "Basic",
  },
];

const allSkills: IListOfSkills[] = [
  {
    title: "Frontend Developer",
    list: frontendSkills,
  },
  {
    title: "Backend Developer",
    list: backendSkills,
  },
];

const Experience = () => {
  return (
    <SectionWrapper
      id="experience"
      title="My Experience"
      subtitle="What Skills I Have"
      containerClass="experience__container"
    >
      <>
        {allSkills.map(({ title, list }) => (
          <div>
            <h3>{title}</h3>
            <div className="experience__content">
              {list.map(({ title, level }) => (
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </>
    </SectionWrapper>
  );
};

export default Experience;
