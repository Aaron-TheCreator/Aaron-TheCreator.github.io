import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
// import { useCubeTexture } from "@react-three/drei";
import  LapTop  from "./components/LapTop";
import { StarSphere } from "./components/StarSphere";
import "./style/index.css";
import styled from "styled-components";
// import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { TerminalPlanet } from "./components/TerminalPlanet";



const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;


// function Scene() {
//   const envMap = useCubeTexture(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], {
//     path: 'src/assets/textures/Standard-Cube-Map/',
//   })

//   return (
//     <>
//       <mesh>
//         <boxBufferGeometry args={[50, 50, 50]} />
//         <meshStandardMaterial envMap={envMap} />
//       </mesh>
//     </>
//   )
// };

function App() {
  
  return (
    <CanvasContainer>
      {/* <TopSection /> */}
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [2, 1, 4]}} >
        <Suspense fallback={null}>
          {/* <Sun /> */}
          {/* <Scene /> */}
          <StarSphere />
          <LapTop scale={[1, 1, 1]} />
          <TerminalPlanet />
          <OrbitControls />
          <ambientLight intensity={1} />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
