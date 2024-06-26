import React, { Suspense, useState } from "react";
import { Canvas } from "react-three-fiber";
import styled from "styled-components";
// 3D Models
import { useSelector, useDispatch } from "react-redux";
import { enterApp, runProgram } from "./services/actions";
import LapTop from "./components/LapTop";
import { StarSphere } from "./components/StarSphere";
import SkyBox from "./components/SkyBox";
import { OrbitControls } from "@react-three/drei";
import { TerminalPlanet } from "./components/TerminalPlanet";
// jsx component
import OuterTerminal from "./components/OuterTerminal";
import Overlay from "./components/SpaceTop";
import Fallback from "./components/Fallback";
import ApplicationWindow from "./components/ApplicationWindow";
// vscodeportfolio app
import VSApp from "./VSApp";
// stylesheets
import "./style/index.css";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  // text-shadow: 0 0 5px #c8c8c8;
  // border: 1px solid red;
`;

const OrbitButton = styled.button`
  position: absolute;
  width: auto;
  font: Inconsolata, monospace;
  font-size: 1.5rem;
  background-image: radial-gradient(rgba(0, 150, 0, 0.75), black 120%);
  border: 4px solid black;
  border-radius: 5%;
  color: white;
  align-self: flex-start;
  margin-bottom: 2%;
  margin-left: 2%;
  z-index: 1;
  transition: all 0.4s ease 0s;
  &:hover {
    border: 4px solid #47443f;
    transition: all 0.4s ease 0s;
  }
  &:after {
    content: "";
    position: absolute;
    background: repeating-linear-gradient(
      0deg,
      rgba(black, 0.15),
      rgba(black, 0.15) 1px,
      transparent 1px,
      transparent 2px
    );
  }
`;

export const EnterButton = styled.button`
  position: absolute;
  width: auto;
  font: Inconsolata, monospace;
  font-size: 1.5rem;
  background-image: radial-gradient(rgba(0, 150, 0, 0.75), black 120%);
  border: 4px solid black;
  border-radius: 5%;
  color: white;
  padding-left: 2%;
  padding-right: 2%;
  margin-bottom: 2%;
  align-self: center;
  justify-self: right;
  z-index: 1;
  transition: all 0.4s ease 0s;
  &:hover {
    border: 4px solid #47443f;
    transition: all 0.4s ease 0s;
  }
  &:after {
    content: "";
    position: absolute;
    background: repeating-linear-gradient(
      0deg,
      rgba(black, 0.15),
      rgba(black, 0.15) 1px,
      transparent 1px,
      transparent 2px
    );
  }
`;

function SpaceApp() {
  const [orbitEnabled, setOrbitEnabled] = useState(false);
  // const [enter, setEnter] = useState(false);
  const dispatch = useDispatch();

  const handleEnter = () => {
    setTimeout(() => {
      dispatch(enterApp());
    }, 0);
  };

  const enter = useSelector((state) => state.enter);
  const runProgram = useSelector((state) => state.runProgram);

  return (
    <>
      {!runProgram ?
       (<ApplicationWindow />):
        enter ? (
        <VSApp />
      ) : (
        <Suspense fallback={<Fallback />}>
          <CanvasContainer>
            <Canvas
              camera={{ fov: 75, near: 0.1, far: 1000, position: [2, 1, 4] }}
            >
              <SkyBox />
              <StarSphere />
              <LapTop scale={[1, 1, 1]} />
              <TerminalPlanet />
              {orbitEnabled ? <OrbitControls enableZoom={false} /> : null}
              <ambientLight intensity={0.2} />
            </Canvas>
            <Overlay />
            <OrbitButton onClick={() => setOrbitEnabled(!orbitEnabled)}>
              {orbitEnabled ? (
                <pre>
                  <output>disable viewer</output>
                </pre>
              ) : (
                <pre>
                  <output>enable viewer</output>
                </pre>
              )}
            </OrbitButton>
            <EnterButton onClick={handleEnter}>
              <pre>
                <output>enter</output>
              </pre>
            </EnterButton>
            <OuterTerminal />
          </CanvasContainer>
        </Suspense>
      )}
    </>
  );
}

export default SpaceApp;
