import React, { useState, useEffect } from "react";
import "../css/GWindow.css";
import StatusBar from "./StatusBar";
// import Sidebar from "./Sidebar";
// import FileWindow from "./FileWindow";
import SmashKarts from "./games/SmashKarts";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Draggable from "react-draggable";

const GameWindow = () => {
  const open = useSelector((state) => state.open);
  const [boxSize, setBoxSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    setBoxSize({
      w: document.querySelector(".gw_root").clientWidth / -2,
      h: document.querySelector(".gw_root").clientHeight / -2,
    });
  }, []);
  return (
    <Draggable handle="#status-bar-gw" defaultPosition={{ x: 10, y: 10 }}>
      <motion.div
        className="gw_root"
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
            <SmashKarts />
          {/* <Sidebar />
          <FileWindow /> */}
          
        </div>
      </motion.div>
    </Draggable>
  );
};

export default GameWindow;