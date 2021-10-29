import React, { Suspense, useState } from "react";
import { Canvas } from "react-three-fiber";
import  LapTop  from "./components/LapTop";
import { StarSphere } from "./components/StarSphere";
import SkyBox from "./components/SkyBox";
import "./style/index.css";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { TerminalPlanet } from "./components/TerminalPlanet";
import Overlay from "./components/SpaceTop";
import Terminal from "./components/Terminal";



const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  flex-direction: row;
  text-shadow: 0 0 5px #C8C8C8;
  border: 1px solid red;
`;

const OrbitButton = styled.button`
  position: absolute;
  width: auto;
  font: Inconsolata, monospace;
  background-color: #black;
  background-image: radial-gradient(
    rgba(0, 150, 0, 0.75), black 120%
  );
  border: 4px solid black;
  border-radius: 5%;
  color: white;
  align-self: end;
  justify-self: left;
  z-index: 1;
  transition: all 0.4s ease 0s;
  &:hover {
    border: 4px solid #47443f;
    transition: all 0.4s ease 0s;
  };
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

const ActiveButton = styled.button`
  position: absolute;
  width: auto;
  font: Inconsolata, monospace;
  background-color: #black;
  background-image: radial-gradient(
    rgba(0, 150, 0, 0.75), black 120%
  );
  border: 4px solid black;
  border-radius: 5%;
  color: white;
  margin-top: 20%;
  align-self: end;
  justify-self: center;
  z-index: 1;
  transition: all 0.4s ease 0s;
  &:hover {
    border: 4px solid #47443f;
    transition: all 0.4s ease 0s;
  };
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



function App() {
  const [orbitEnabled, setOrbitEnabled] = useState(false);
  // const [planetActive, setPlanetActive] = useState(false);
  return (
    <CanvasContainer>
      <Overlay />
      <OrbitButton onClick={() => setOrbitEnabled(!orbitEnabled)}>
        {orbitEnabled ? <pre><output>disable viewer</output></pre> : <pre><output>enable viewer</output></pre>}
      </OrbitButton>
      {/* <ActiveButton onClick={() => setPlanetActive(!planetActive)}>
        {planetActive ? <pre><output>compress</output></pre> : <pre><output>activate</output></pre>}
      </ActiveButton> */}
      <ActiveButton><pre><output>enter</output></pre></ActiveButton>
      <Terminal />
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [2, 1, 4]}} >
        <Suspense fallback={null}>
          <SkyBox />
          <StarSphere />
          <LapTop scale={[1, 1, 1]} />
          <TerminalPlanet />
          {orbitEnabled ? <OrbitControls enableZoom={true}/> : null}
          <ambientLight intensity={0.1} />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
