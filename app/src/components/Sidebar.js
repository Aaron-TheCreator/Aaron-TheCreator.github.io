import React from "react";
import "../css/Sidebar.css";

// Images
import fileIcon from "../images/file_ico.svg";
import githubIcon from "../images/github_ico.svg";
import npmIcon from "../images/npm_ico.svg";
import linkedinIcon from "../images/linkedin_ico.svg";
import mailIcon from "../images/mail_ico.svg";

const handleCopy = () => {
  navigator.clipboard.writeText("a.aburns95@gmail.com");
  alert("Email Copied To Clipboard");
};

const Sidebar = () => {
  return (
    <div className="sb-root">
      <div className="sb-item active">
        <a href="#">
          <img src={fileIcon} alt="home menu" />
        </a>
      </div>
      <div className="sb-item">
        <a href="https://github.com/Aaron-TheCreator" target="__blank">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
      <div className="sb-item">
        <a href="https://leetcode.com/Aaron-TheCreator/" target="__blank">
          <img src={npmIcon} alt="NPM Icon, LeetCode Link" />
        </a>
      </div>
      <div className="sb-item">
        <a href="https://www.linkedin.com/in/aaaronburns/" target="__blank">
          <img src={linkedinIcon} alt="LinkedIn" className="linkedin" />
        </a>
      </div>
      <div className="sb-item" onClick={handleCopy}>
        <a href="mailto:a.aburns95@gmail.com">
          <img src={mailIcon} alt="Email" className="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
