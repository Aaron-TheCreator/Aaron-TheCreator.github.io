import React from "react";
import CodeBar from "../CodeBar";
import "../../css/About.css";
import resume from "../../images/_A. Aaron Burns - WebResume.pdf";

const About = () => {
  return (
    <div className="ab-root">
      <CodeBar rowAmount={35} />
      <div className="ab-content">
        <h2>A. Aaron Burns</h2>
        <h3>Software Engineer</h3>
        {/* will replace img href with https://avatars.githubusercontent.com/u/53560051?s=400&u=6c965a360cba0f5e314e9583667ae1103fa57313&v=4 */}
        <img
          src="https://avatars.githubusercontent.com/u/53560051?s=400&u=6c965a360cba0f5e314e9583667ae1103fa57313&v=4"
          alt="Aaron Burns"
        />
        <p>
          I am a full-stack web developer because I learned to be one. I am an
          engineer and a big tech nerd because I was born to be one. I have a
          passion for using cutting-edge technology to create amazing products
          and serve customers. I am from San Diego, California, and plan to move
          back there from Pensacola, Florida as soon as possible. Before I
          discovered my my love for Software Engineering, I specialized in tech
          sales and customer service. Let's work together and see what we can
          build!
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
