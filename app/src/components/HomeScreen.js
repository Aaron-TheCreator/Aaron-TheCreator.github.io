import React from "react";
import "../css/HomeScreen.css";
import appleLogo from "../images/apple-logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { openCoder, openTerminal,openGame, exitApp } from "../services/actions";

import vsIcon from "../images/vcode-ico.svg";
import termIcon from "../images/terminal-ico.svg";
import gameIcon from "../images/video-game-svgrepo-com.svg";

const HomeScreen = () => {
  const open = useSelector((state) => state.open);
  const dispatch = useDispatch();

  const handleExit = () => {
    setTimeout(() => {
      dispatch(exitApp());
    }, 0);
  };

  return (
    <div className="hs-root">
      <div className="toolbar">
        <img src={appleLogo} alt="apple logo" />
        <p className="title">{open ? "Visual Studio Code" : "Mac"}</p>
        <p className="hidden">File</p>
        <p className="hidden">Edit</p>
        <p className="hidden">Documents</p>
        <p className="hidden">Settings</p>
        <p className="hidden">Format</p>
        <p className="hidden">Help</p>
        <p onClick={handleExit}>Exit Portal</p>
      </div>
      <div className="app-menu">
        <button
          className="app-btn"
          disabled={open}
          onClick={() => dispatch(openCoder())}
        >
          <img src={vsIcon} alt="portfolio" />
          <span className="app-btn-title">Portfolio Code</span>
        </button>
        <button className="app-btn" onClick={() => dispatch(openTerminal())}>
          <img src={termIcon} alt="terminal" />
          <span className="app-btn-title">Terminal</span>
        </button>
        <button className="app-btn" onClick={() => dispatch(openGame())}>
          <img src={gameIcon} alt="Video game controller "/>
          <span className="app-btn-title"> Play Game</span>
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
