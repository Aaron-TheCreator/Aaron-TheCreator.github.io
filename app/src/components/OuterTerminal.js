import React from "react";
import Terminal from "terminal-in-react";
import Draggable from "react-draggable";
import { useDispatch } from "react-redux";
import { closeTerminal } from "../services/actions";
import { motion } from "framer-motion";

const OTWindow = () => {
  const dispatch = useDispatch();

  return (
    <Draggable handle=".sc-bxivhb">
      <motion.div
        transition={{ ease: "easeIn", duration: 0.3 }}
        animate={{
          width: ["0vw", "25vw"],
          height: ["0vh", "20vh"],
          opacity: [0, 1],
        }}
        style={{
          position: "fixed",

          top: "65%",
          left: "65%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Terminal
          actionHandlers={{ handleClose: () => dispatch(closeTerminal()) }}
          style={{
            position: "fixed",
            top: "70%",
            width: "35vw",
            left: "80%",
            transform: "translate(-50%, -50%)",
            fontSize: "1.5rem",
            fontWeight: 700,
          }}
          backgroundColor="black"
          barColor="#F8F8F8"
          commands={{
            showmsg: () => `thanks for visiting my site
          
                          type 'cheatcode' for a surprise
                          `,
            twitter: () => "https://twitter.com/thirdeyethuggin",
            "open-twitter": () =>
              window.open("https://twitter.com/thirdeyethuggin", "_blank"),
            three: () => "this scene is made using three.js, isn't it great?",
            cheatcode: () => `               
           click enter , find terminal and type cheatcode for you prize!`,
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
            cheatcode: false,
            twitter: false,
            "open-twitter": false,
            showmsg: "shows a message",
            three: "What is it?",
            roll_credits: "See who helped me create this experience",
          }}
          msg={`
            click 'A. Aaron Burns' to see
                GitHub profile
            click planet to see my world
            click enable viewer
                to look around
            click enter to learn
                about 'Aaron-TheCreator'
            enter help command
                for more`}
        />
      </motion.div>
    </Draggable>
  );
};

export default OTWindow;
