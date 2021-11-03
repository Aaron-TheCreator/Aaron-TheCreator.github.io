import React from "react";
import CodeBar from "../CodeBar";
import "../../css/Projects.css";
// import storysquadimg from "../../images/storysquadexample.png"

//https://gyazo.com/9675bebd442ae2b62aaf387370560403
const Projects = () => {
  return (
    <div className="pj-root">
      <CodeBar rowAmount={228} />
      <div className="pg-content">
        <h1>Professional Work</h1>
        <div className="project">
          <h2>Story Squad</h2>
          <div className="image-container">
            <img
              src="/assets/storysquadexample.png"
              alt="Story Squad Example"
            />
          </div>
          <h3>Overview</h3>
          <hr />
          <p>
            While working as Technical Project Manager - Intern at Story Squad I
            lead a team of Front-End and Back-End Engineers to build a UI
            feature set and extend functionality of database and API
            integration. I planned sprint tasks for engineers and also pair
            programmed to increase productivity. We developed refactored the
            application's database and completed new features before Story Squad
            begins Alpha testing for its new Scribble Stadium product.
          </p>

          <h3>Technologies</h3>
          <hr />
          <p>React, Redux, Auth0, Knex, PostgreSQL, Express, Node, Git, AWS</p>
          <div className="links">
            <a href="https://www.storysquad.education/" target="__blank">
              Story Squad Site
            </a>
            <a
              href="https://github.com/Aaron-TheCreator/scribble-stadium-be"
              target="__blank"
            >
              Public GitHub Repo
            </a>
          </div>
        </div>
        <div className="project">
          <h2>Melanated People</h2>
          <div className="image-container">
            <img
              src="/assets/melanatedppexample.png"
              alt="Melanated People Example"
            />
          </div>
          <h3>Overview</h3>
          <hr />
          <p>
            A social-media start up designed to cater to BIPOC for sharing
            ideas, information, photos and video and a marketplace and
            advertising tool for business. As a Full-Stack Developer Intern, I
            consulted with C-Level staff about design, program architecture, and
            ongoing upgrades. I also built a module for the site to integrated
            Google Translate functionality for the site.
          </p>

          <h3>Technologies</h3>
          <hr />
          <p>HTML, CSS, JavaScript, Zend, PHP, AWS, FTP, Git</p>
          <div className="links">
            <a href="https://www.melanatedpeople.net" target="__blank">
              Melanated People Site
            </a>
          </div>
        </div>
        <h1>Projects</h1>
        <div className="project">
          <h2>Med-Cabinet</h2>
          <div className="image-container">
            <img src="/assets/medcabinetexample.png" alt="" />
          </div>
          <h3>Overview</h3>
          <hr />
          <p>
            Med-Cabinet is a full-stack MVP built with a team of engineering
            students to demonstarate a full-stack medical-marijuana precription
            delivery web application. I built a custom introductory site to give
            prospective clients a aesthetically pleasing description of the
            app's features and a call to action to sign up or log back in. I
            imagined a sleek logo, then designed it with SVG.
          </p>

          <h3>Technologies</h3>
          <hr />
          <p>HTML, CSS, Less, React, jQuery, SVG</p>
          <div className="links">
            <a href="https://github.com/Build-Week-Med4" target="__blank">
              GitHub Repo
            </a>
            <a
              href="https://medcabinet4.netlify.app/index.html"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project">
          <h2>Sauti African Market API</h2>
          <div className="image-container">
            <img src="/assets/sautiexample.png" alt="Tweeter" />
          </div>
          <h3>Overview</h3>
          <hr />
          <p>
            Sauti Market is a online repository of buyer items and their
            categoric distinctions to be used to develop a marketplace
            application. I built this project for Lambda School students.
          </p>

          <h3>Technologies</h3>
          <hr />
          <p>Node, Express, Knex, JSON, PostgreSQL, Heroku CLI</p>
          <div className="links">
            <a
              href="https://github.com/Aaron-TheCreator/bw-sautimarket-be"
              target="__blank"
            >
              GitHub
            </a>
            <a
              href="https://sauti-african-market-db.herokuapp.com//"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
