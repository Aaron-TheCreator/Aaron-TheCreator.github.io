import React from "react";
import ApplicationWindow from "./components/ApplicationWindow";
import GameWindow from "./components/GameWindow";
import HomeScreen from "./components/HomeScreen";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import InnerTerminal from "./components/InnerTerminal";
import "./css/appindex.css";

const VSApp = () => {
  const open = useSelector((state) => state.open);
  const terminalOpen = useSelector((state) => state.terminalOpen);
  const gameOpen = useSelector((state) => state.gameOpen);

  return (
    <div className="app-root">
      <HomeScreen />
      {open && (
        <AnimatePresence>
          <ApplicationWindow />
        </AnimatePresence>
      )}
      {terminalOpen && (
        <AnimatePresence>
          <InnerTerminal />
        </AnimatePresence>
      )}
      {gameOpen && (
        <AnimatePresence>
          <GameWindow />
        </AnimatePresence>
      )}
    </div>
  );
};

export default VSApp;
