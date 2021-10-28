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



const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row
`;

const OrbitButton = styled.button`
  position: absolute;
  width: 8%;
  background-color: #29750f;
  color: #a7adba;
  align-self: end;
  justify-self: center;
  z-index: 1;
`;

// const envMap = useCubeTexture(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], {
//   //     path: 'src/assets/textures/Standard-Cube-Map/',
//   //   })


function App() {
  const [orbitEnabled, setOrbitEnabled] = useState(false);
  return (
    <CanvasContainer>
      <Overlay />
      <OrbitButton onClick={() => setOrbitEnabled(!orbitEnabled)}>
        {orbitEnabled ? "Disable Viewer" : "Enable Viewer"}
      </OrbitButton>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [2, 1, 4]}} >
        <Suspense fallback={null}>
          <SkyBox />
          <StarSphere />
          <LapTop scale={[1, 1, 1]} />
          <TerminalPlanet />
          {orbitEnabled ? <OrbitControls enableZoom={false}/> : null}
          <ambientLight intensity={0.1} />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
