import React from "react";
import Section from "../components/Section";
import Skill from "../components/Skill";

const Skills = () => {
  const data = {
    skills: [
      { title: "HTML" },
      { title: "CSS" },
      { title: "Javascript" },
      { title: "Nodejs" },
      { title: "C Programming" },
      { title: "OOP Java" },
      { title: "MongoDB" },
    ],
    frameworks: [
      { title: "React.js" },
      { title: "Next.js" },
      { title: "Express.js" },
      { title: "Bootstrap" },
      { title: "Material-UI" },
      { title: "Photoshop / Figma" },
    ],
  };

  const { skills, frameworks } = data;

  const skillsJsx = skills.map((skill, index) => {
    return (
      <div className="col-md-8 py-1" key={index}>
        <Skill skill={skill} />
      </div>
    );
  });

  const frameworksJsx = frameworks.map((skill, index) => {
    return (
      <div className="col-md-8 py-1" key={index}>
        <Skill skill={skill} secondary />
      </div>
    );
  });

  return (
    <div id="skills">
      <Section title="Skills">
        <div className="subheading mb-3">Coding Languages</div>
        <div className="row mb-4">{skillsJsx}</div>
        <div className="subheading mb-3">Frameworks / Libraries</div>
        <div className="row mb-4">{frameworksJsx}</div>
      </Section>

      <Section id="services" title="Services for you">
        <div className="subheading mb-3">Simple Website</div>
        <p>
          I develop a beautiful website like landing website, personal website,
          showcase website and other stunning websites using HTML, CSS and
          Javascript.
        </p>

        <div className="subheading mb-3">Interactive Website</div>
        <p>
          I design user friendly interactive website like dashboards for
          mananging business, booking websites, and other stunning websites
          using Javascript, React.js and Next.js.
        </p>

        <div className="subheading mb-3">Complete Web Development</div>
        <p>
          I develop and engineer a complete functioning website from design to
          development and hosting live on the internet like Ecommerce websites,
          Hotel management, travelling websites, etc and other cool websites
          using MERN Stack.
        </p>
      </Section>
    </div>
  );
};

export default Skills;
