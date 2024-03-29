import React from "react";
import CodeBar from "../CodeBar";
import "../../css/Skills.css";

const Skills = () => {
  return (
    <div className="sk-root">
      <CodeBar rowAmount={95} />
      <div className="sk-content">
        <p>
          {" "}
          <span className="purp">import</span> React{" "}
          <span className="purp">from</span>{" "}
          <span className="green">{`"react"`}</span>;
        </p>
        <p>
          {" "}
          <span className="purp">import</span> SoftwareEngineer{" "}
          <span className="purp">from</span>{" "}
          <span className="green">{`"a-aaron-burns"`}</span>;
        </p>
        <div className="component" style={{ marginTop: "10%" }}>
          <p>
            <span className="purp">const</span>{" "}
            <span className="blu">Skills = </span>
            <span className="orange">()</span>
            <span className="purp">{` =>`} </span>
            <span className="orange">SoftwareEngineer.Create()</span>
            <span className="purp">{` =>`} </span>
            <span className="bracket">{` {`}</span>
          </p>
          <p style={{ paddingLeft: "3%" }}>
            <span className="purp">return</span>
            <span className="orange"> (</span>
          </p>
          <p style={{ paddingLeft: "5%" }}>
            <span className="red">{`<>`}</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<h1>`} </span> CORE SKILLS{" "}
            <span className="red">{`</h1>`}</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<p>`}</span>
          </p>
          <ul style={{ paddingLeft: "20%" }}>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Git And Repo Management</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>LESS</li>
            <li>SCSS</li>
            <li>SQL</li>
            <li>RDBMS</li>
            <li>NoSQL</li>
            <li>Docker</li>
            <li>SSO & IAM</li>
            <li>Cloud CI/CD</li>
            <li>Agile Development / SDLC</li>
          </ul>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`</p>`}</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<h1>`} </span> FRONTEND TECHNOLOGIES{" "}
            <span className="red">{`</h1>`}</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<p>`}</span>
          </p>
          <ul style={{ paddingLeft: "20%" }}>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>Context API</li>
            <li>Bootstrap & Reactstrap</li>
            <li>Styled-Components</li>
            <li>THREE.js</li>
            <li>SVG</li>
          </ul>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`</p>`}</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<h1>`} </span> BACKEND TECHNOLOGIES{" "}
            <span className="red">{`</h1>`}</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<p>`}</span>
          </p>
          <ul style={{ paddingLeft: "20%" }}>
            <li>NodeJS</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>SQLite</li>
            <li>DynamoDB</li>
            <li>AWS</li>
            <li>Okta</li>
            <li>Github Actions</li>
            <li>Vercel</li>
            <li>Heroku</li>
          </ul>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`</p>`}</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<h1>`} </span> TESTING{" "}
            <span className="red">{`</h1>`}</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<p>`}</span>
          </p>
          <ul style={{ paddingLeft: "20%" }}>
            <li>Cypress.io</li>
            <li>Jest</li>
            <li>supertest</li>
          </ul>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`</p>`}</span>
          </p>
          <p style={{ paddingLeft: "5%" }}>
            <span className="red">{`</>`}</span>
          </p>
          <span className="orange"> )</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
