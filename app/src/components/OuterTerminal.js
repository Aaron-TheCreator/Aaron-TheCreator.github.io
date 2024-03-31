import React from "react";
import Terminal from "terminal-in-react";
import Draggable from "react-draggable";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeTerminal, enterApp } from "../services/actions";
import { motion } from "framer-motion";

const OTWindow = () => {
  const dispatch = useDispatch();
  let pres = (document.querySelectorAll(".sc-gzVnrw"));
  useEffect(() => {
    let prelist = document.getElementsByClassName("sc-gzVnrw duUAwb");
    let link = document.createElement("a")
    let p = document.createElement("pre")
    let p1 = document.createElement("pre")
    p.innerHTML = "google"
    link.href = "https://www.google.com"
    link.innerHTML = "here"
    p.innerHTML = "click"
    p1.innerHTML = "to go to link"
    let match = `
      click 'A. Aaron Burns' to see
          GitHub profile
      click planet to see my world
      click enable viewer
          to look around
      click enter to learn
          about 'Aaron-TheCreator'
      enter help command
          for more`;
    // prelist[0]
  
  }, );
  console.log(pres);
  // text[0].children[0] = link
  
  // for (let i = 0; i < links.length; i++) {

  // }
  

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
            enter: () => dispatch(enterApp()),
            showmsg: () => `thanks for visiting my site
          
                          type 'cheatcode' for a surprise
                          `,
            twitter: () => "https://twitter.com/thirdeyethuggin",
            "open-twitter": () =>
              window.open("https://twitter.com/thirdeyethuggin", "_blank"),
            three: () => "this scene is made using three.js, isn't it great?",
            cheatcode: () => `               
           click enter button or type 'enter' command , find terminal and type 'cheatcode' for your prize!`,
            roll_credits: () => `Thanks to:
            * author:	Blue Lantern (https://sketchfab.com/genoris2)
            * title:	CyberPunk Laptop
            * source:	https://sketchfab.com/3d-models/cyberpunk-laptop-8330c89e8431451db3aa9d15c5836ddf
            
            * title: Terminal In React
            * source: https://www.npmjs.com/package/terminal-in-react
            
             
            * author: Nathaniel Richards
            * title: vscodeportfolio
            * source: https://github.com/NateTheDev1/vscodeportfolio 
             
             
            * author: Mateusz Wisniowski
            * title: HDRI-to-CubeMap
            * source: https://matheowis.github.io/HDRI-to-CubeMap/
            
  
            * author: Unblocked Games
            * title: Smash Karts
            * source: https://smashkarts.io/ 
            
  
            * author: Unblocked Games
            * title: Highway Racer 3D
            * source: https://smashkartsonline.github.io/v5/highway-racer-3d
            `,
          }}
          descriptions={{
            show: false,
            cheatcode: false,
            enter: "Enter Portfolio OS",
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
