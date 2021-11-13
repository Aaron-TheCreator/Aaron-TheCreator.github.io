import React, { useState, useEffect } from "react";
import "../css/AWindow.css";
import StatusBar from "./StatusBar";
import Sidebar from "./Sidebar";
import FileWindow from "./FileWindow";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Draggable from "react-draggable";

const ApplicationWindow = () => {
  const open = useSelector((state) => state.open);
  const [boxSize, setBoxSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    setBoxSize({
      w: document.querySelector(".aw_root").clientWidth / -2,
      h: document.querySelector(".aw_root").clientHeight / -2,
    });
  }, []);
  return (
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
  );
};

export default ApplicationWindow;
