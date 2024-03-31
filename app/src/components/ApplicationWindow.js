import React, { useState, useEffect } from "react";
import "../css/AWindow.css";
import StatusBar from "./StatusBar";
import Sidebar from "./Sidebar";
import FileWindow from "./FileWindow";
import { EnterButton } from "../App";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { runProgram } from "../services/actions";
import Draggable from "react-draggable";

const ApplicationWindow = () => {
  const open = useSelector((state) => state.open);
  const runProgramState = useSelector((state) => state.runProgram);
  const dispatch = useDispatch();
  const [boxSize, setBoxSize] = useState({ w: 0, h: 0 });

  const handleRunProgram = () => {
    setTimeout(() => {
      dispatch(runProgram());
    }, 0);
  };

  useEffect(() => {
    if (!runProgramState) {
      const none = null;
    } else {
      setBoxSize({
        w: document.querySelector(".aw_root").clientWidth / -2,
        h: document.querySelector(".aw_root").clientHeight / -2,
      });
    }
    
  }, [runProgramState]);
  return (
    <>
    {!runProgramState ? (
        <div style={{background: "#222b33", height: "100vh", width: "100vw", overflow: "hidden"}}>
          <StatusBar />
          <div className="middle">
            <Sidebar />
            <FileWindow />
            <EnterButton style={{position: "relative", display: "flex", alignSelf: "end", marginBottom: "10vh", marginRight: "10vw"}} onClick={handleRunProgram}>
              <pre>
                <output>run_program</output>
              </pre>
            </EnterButton>
          </div>
        </div>
    ) : (
      <Draggable handle="#status-bar-vs" defaultPosition={{ x: 10, y: 10 }}>
      <motion.div
        className="aw_root"
        key={open}
        style={{
          marginLeft: boxSize.w,
          marginTop: boxSize.h,
        }}
        transition={{ ease: "easeIn", duration: 0.3 }}
        animate={{
          width: ["0vw", "85vw"],
          height: ["0vh", "80vh"],
        }}
      >
        <StatusBar />
        <div className="middle">
          <Sidebar />
          <FileWindow />
        </div>
      </motion.div>
    </Draggable>
    )}
    </>
  );
};

export default ApplicationWindow;
