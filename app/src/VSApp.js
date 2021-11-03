import React from "react";
import ApplicationWindow from "./components/ApplicationWindow";
import HomeScreen from "./components/HomeScreen";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import InnerTerminal from "./components/InnerTerminal";
import "./css/appindex.css";

const VSApp = () => {
  const open = useSelector((state) => state.open);
  const terminalOpen = useSelector((state) => state.terminalOpen);

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
    </div>
  );
};

export default VSApp;
