import React from "react";
import CodeBar from "../CodeBar";
import "../../css/About.css";
import resume from "../../images/AveryAaronBurnsResume26.pdf";

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
          I build high-impact software with a focus on the people who use it.
          From my roots in community building and API advocacy to my current
          work in engineering, I specialize in technical solutions that bridge
          the gap between complex code and seamless customer value.
        </p>
        <p>
          As a designated AI Change Champion, I lead the integration of LLMs to
          transform technical ecosystems and workflows. My engineering approach
          is defined by a commitment to the user: whether I&apos;m prototyping
          conversational interfaces for data visualization or architecting
          AI-driven tools that simplify complex system analysis, I ensure every
          feature serves a practical, user-first purpose.
        </p>
        <p>
          I thrive at the intersection of AI innovation, robust engineering, and
          customer-centric design, building the next generation of intuitive
          software solutions.
        </p>
        <a href={resume} alt="resume" className="resume">
          Resume
        </a>
        <br />
        <br />
        <a
          href="https://www.credly.com/badges/6d1bd084-082c-4e61-9035-241f1d042e54/public_url"
          alt="Bloom Institute Full-Stack Certiicate"
          className="resume"
        >
          Bloom Institute of Technology Certificate
        </a>
      </div>
    </div>
  );
};

export default About;
