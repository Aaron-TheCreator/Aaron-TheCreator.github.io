import React from "react";
import CodeBar from "../CodeBar";
import "../../css/About.css";
import resume from "../../images/_A. Aaron Burns - WebResume (2).pdf";

const About = () => {
  return (
    <div className="ab-root">
      <CodeBar rowAmount={35} />
      <div className="ab-content">
        <h2>A. Aaron Burns</h2>
        <h3>Software Engineer</h3>
        <img
          src="https://avatars.githubusercontent.com/u/53560051?s=400&u=6c965a360cba0f5e314e9583667ae1103fa57313&v=4"
          alt="Aaron Burns"
        />
        <p>
          I am a Software Engineer with diverse experience in developer evangelism and common services engineering. Built developer communities, created technical content, and introduced new API/SDK features as a Webex Developer Evangelist. This honed my communication and technical skills, enabling me to connect with audiences and explain complex concepts clearly. As a Common Services Engineer, I tackled process streamlining, innovative solutions, and issue resolution, solidifying my problem-solving and teamwork abilities.
        </p>
        <p>
          Now, I'm eager to learn and grow in a way that leverages my existing skills and expands my potential. I'm particularly interested in opportunities that allow me to combine my technical expertise with my passion for community building and user experience, contributing to the development of cutting-edge software solutions.
        </p>
        <a href={resume} alt="resume" className="resume">
          Resume
        </a>
        <br />
        <br />
        <a
          href="https://www.credly.com/badges/6d1bd084-082c-4e61-9035-241f1d042e54/public_url"
          alt="Lambda School Full-Stack Certiicate"
          className="resume"
        >
          Lambda School Certificate
        </a>
      </div>
    </div>
  );
};

export default About;
