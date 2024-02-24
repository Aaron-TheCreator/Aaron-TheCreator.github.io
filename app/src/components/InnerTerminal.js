import React from "react";
import Terminal from "terminal-in-react";
import { useDispatch } from "react-redux";
import { closeTerminal, openGame, openCoder, exitApp } from "../services/actions";
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
          fontSize: "1.4rem",
          fontWeight: 700,
        }}
        backgroundColor="black"
        barColor="#F8F8F8"
        commands={{
          showmsg: () => `thanks for visiting my site
          
                          press exit portal and type showmsg
                          to pass through worm hole
                          ________________________________         
                          /                                "-_          
                         /      .  |  .                       \          
                        /      : \ | / :                       \         
                       /        '-___-'                         \      
                      /_________________________________________ \      
                           _______| |________________________--""-L 
                          /       F J                              \ 
                         /       F   J                              L
                        /      :'     ':                            F
                       /        '-___-'                            / 
                      /_________________________________________--"  
          `,
          twitter: () => "https://twitter.com/thirdeyethuggin",
          open_twitter: () =>
            window.open("https://twitter.com/thirdeyethuggin", "_blank"),
          javascript: () =>
            "Me and JavaScript are the same age, AND we're besties :) <3 ",
          cheatcode: () => `
          ██╗    ██╗██╗███╗   ██╗███╗   ██╗███████╗██████╗ 
          ██║    ██║██║████╗  ██║████╗  ██║██╔════╝██╔══██╗
          ██║ █╗ ██║██║██╔██╗ ██║██╔██╗ ██║█████╗  ██████╔╝
          ██║███╗██║██║██║╚██╗██║██║╚██╗██║██╔══╝  ██╔══██╗
          ╚███╔███╔╝██║██║ ╚████║██║ ╚████║███████╗██║  ██║
           ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝
           You win this object! Revel in its glory!
           .----------------------------------------------------------------.
          |_.-._.-._.-._.-._.-.    _.-._.-._.-.    _.-._.-._.-._.-._.-._.-._.|
          |_.-._.-._.-._.-._. .::db .-._.-._. .::db .-._.-._.-._.-._.-._.-._.|
          |_.-._.-._.-._.-._ .::d88b -._.-._ .::d88b -._.-._.-._.-._.-._.-._.|
          |_.-._.-._.-._.-. .::d8888b       .::d8888b ._.-._.-._.-._.-._.-._.|
          |_.-._.-._.-._.- .::d88!::::::::::::d888888b _.-._.-._.-._.-._.-._.|
          |_.-._.-._.-._.- \  Y88\_________\  Y888888P _.-._.-._.-._.-._.-._.|
          |_.-._.-._.-._.-. \  Y8888P ._.-. \  Y8888P ._.-._.-._.-._.-._.-._.|
          |_.-._.-._.-._.-._ /dbY88Pdb _.-._ /dbY88Pdb _.-._.-._.-._.-._.-._.|
          |_.-._.-._.-._.-. /d8P_YP Y8b .-. /d8P_YP Y8b .-._.-._.-._.-._.-._.|
          |_.-._.-._.-     /d8P .-.\ Y8b   /d8P .- \ Y8b -._.-._.-._.-._.-._.|
          |_.-._.-._ .::db/d8P _.-. \.::db/d8P _.-. \ Y8b ._.-._.-._.-._.-._.|
          |_.-._.-. .::d88bYP ._.-. .::d88LSP ._.-._ \ Y8b    ._.-._.-._.-._.|
          |_.-._.- .::d8888b       .::d8888b'b _.-._. \ Y8b:db _.-._.-._.-._.|
          |_.-._. .::d88!::::::::::::d888888b'b .-._.- \ YPd88b .-._.-._.-._.|
          |_.-._. \  Y88\_________\  Y888888Pd8b       .::d8888b -._.-._.-._.|
          |_.-._.- \  Y8888P -._.- \  Y8888P!::::::::::::d888888b ._.-._.-._.|
          |_.-._.-. \  Y88Pdb ._.-. \  Y88Pdb_________\  Y888888P ._.-._.-._.|
          |_.-._.-._ \__YP Y8b _.-._ \__YP Y8b'P -._.- \  Y8888P -._.-._.-._.|
          |_.-._.-._.-._. \ Y8b .-._.-. /d\ Y8b .-._.-. /dbY88P .-._.-._.-._.|
          |_.-._.-._.-._.- \ Y8b -._.- /d8P\ Y8b -._.- /d8P_YP _.-._.-._.-._.|
          |_.-._.-._.-._.-. \ Y8b     /d8P _\ Y8b     /d8P _.-._.-._.-._.-._.|
          |_.-._.-._.-._.-._ \ Y8b:db/d8P ._ \ Y8b:db/d8P ._.-._.-._.-._.-._.|
          |_.-._.-._.-._.-._. \ YPd88bYP -._. \ YPd88bYP -._.-._.-._.-._.-._.|
          |_.-._.-._.-._.-._. .::d8888b       .::d8888b .-._.-._.-._.-._.-._.|
          |_.-._.-._.-._.-._ .::d88!::::::::::::d888888b -._.-._.-._.-._.-._.|
          |_.-._.-._.-._.-._ \  Y88\_________\  Y888888P -._.-._.-._.-._.-._.|
          |_.-._.-._.-._.-._. \  Y8888P .-._. \  Y8888P .-._.-._.-._.-._.-._.|
          |_.-._.-._.-._.-._.- \  Y88P _.-._.- \  Y88P _.-._.-._.-._.-._.-._.|
          |_.-._.-._.-._.-._.-. \__YP ._.-._.-. \__YP ._.-._.-._.-._.-._.-._.|
          '-----------------------------------------------------------------'
                              Thanks    For    Playing`,
          // popup: () => alert('Terminal in React'),
          open_game: () => {dispatch(openGame())},
          code: () => {dispatch(openCoder())},
          exit: () => {dispatch(exitApp())},
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
          * source: 
          `,
        }}
        descriptions={{
          show: false,
          cheatcode: false,
          showmsg: "shows a message",
          twitter: "reveals my twitter link",
          open_twitter: "redirects to twiiter page",
          javascript: "What do I Think?",
          open_game: "Play a game without leaving my website",
          code: "Open my portfolio code",
          exit: "Return to the void of space",
          roll_credits: "See who helped me create this experience",
        }}
        msg="You have found my terminal O_o ...type help for options"
      />
    </motion.div>
  );
};

export default TWindow;
