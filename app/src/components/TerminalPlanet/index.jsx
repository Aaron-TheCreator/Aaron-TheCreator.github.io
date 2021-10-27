import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "react-three-fiber";
// import { useRender } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";


import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import TermMap from "../../assets/textures/wallpaperflare.com_wallpaper.jpg";
import SignMap from "../../assets/textures/40acres-header-mobile.png";
import { TextureLoader } from "three";

export function TerminalPlanet(props) {
  const [termMap, normalMap, specularMap, cloudsMap, signMap] = useLoader(
    TextureLoader,
    [TermMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap, SignMap]
  );
  
  // hook for position switch
  const [active, setActive] = useState(false);
  // useSpring for auto animation transition for position and scale
  const properties = useSpring({
    position: active ? [0, 0, 3] : [0.6, 0.9, 0.01],
    scale: active ? [0.8, 0.8, 0.8] : [0.2, 0.2, 0.2],
    cubePos: active ? [3, 3, -5] : [0.6, 0.9, 0.01] ,
    cubeScale: active ? [1, 1, 1] : [0, 0, 0]
  })

  // useRefs for useFrame hook
  const earthRef = useRef();
  const cloudsRef = useRef();
  const cubeRef = useRef();
  
  
  // controls auto-rotate
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 3;
    cloudsRef.current.rotation.y = elapsedTime / 3.5;
    cubeRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={2.2} />
      {/* <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      /> */}
      {/* clouds mesh */}
      <animated.mesh ref={cloudsRef} onClick={() => setActive(!active)} scale={properties.scale} position={properties.position} >
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhysicalMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </animated.mesh>
      {/* earth mesh */}
      <animated.mesh ref={earthRef} onClick={() => setActive(!active)} scale={properties.scale} position={properties.position} >
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={termMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        
        {/* <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        /> */}
      </animated.mesh >
      {/* cube mesh */}
      <animated.mesh ref={cubeRef} position={properties.cubePos} scale={properties.cubeScale}>
        <boxBufferGeometry args={[2, 2, 2]}  />
        <meshPhongMaterial map={signMap} transparent={true} />
      </animated.mesh>
    </>
  );
}