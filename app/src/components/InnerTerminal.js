import React from "react";
import Terminal from "terminal-in-react";
import { useDispatch } from "react-redux";
import { closeTerminal } from "../services/actions";
import { motion } from "framer-motion";

const TWindow = () => {
  const dispatch = useDispatch();

  return (
    <motion.div
      transition={{ ease: "easeIn", duration: 0.3 }}
      animate={{
        width: ["0vw", "85vw"],
        height: ["0vh", "80vh"],
        opacity: [0, 1],
      }}
      style={{
        position: "fixed",

        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Terminal
        actionHandlers={{ handleClose: () => dispatch(closeTerminal()) }}
        style={{
          position: "fixed",
          top: "50%",
          width: "80vw",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "1.2rem",
          fontWeight: 700,
        }}
        backgroundColor="black"
        barColor="#F8F8F8"
        commands={{
          showmsg: () => "thanks for visiting my site",
          twitter: () => "https://twitter.com/thirdeyethuggin",
          javascript: () =>
            "Me and JavaScript are the same age, AND we're besties :) <3 ",
          roll_credits: () => `Thanks to:
          * author:	Blue Lantern (https://sketchfab.com/genoris2)
          * title:	CyberPunk Laptop
          * source:	https://sketchfab.com/3d-models/cyberpunk-laptop-8330c89e8431451db3aa9d15c5836ddf
          
          * author: FOBABS (https://dev.to/fobabs)
          * title: HTML/CSS Ubuntu Terminal
          * source: https://github.com/fobabs/ubuntu-terminal
          
           
          * author: Nathaniel Richards
          * title: vscodeportfolio
          * source: https://github.com/NateTheDev1/vscodeportfolio 
           
           
          * author: Mateusz Wisniowski
          * title: HDRI-to-CubeMap
          * source: https://matheowis.github.io/HDRI-to-CubeMap/
          `,
        }}
        descriptions={{
          show: false,
          showmsg: "shows a message",
          twitter: "reveals my twitter link",
          javascript: "What do I Think?",
          roll_credits: "See who helped me create this experience",
        }}
        msg="You have found my terminal O_o ...type help for options"
      />
    </motion.div>
  );
};

export default TWindow;
