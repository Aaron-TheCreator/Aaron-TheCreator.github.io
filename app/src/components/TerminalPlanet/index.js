import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "react-three-fiber";
// import { useRender } from "react-three-fiber";
// import { OrbitControls, Stars } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";

import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import TermMap from "../../assets/textures/wallpaperflare.com_wallpaper.jpg";
import FaceMap from "../../assets/textures/newprofsmll.jpeg";
import { TextureLoader } from "three";

export function TerminalPlanet(props) {
  const [termMap, normalMap, specularMap, cloudsMap, faceMap] = useLoader(
    TextureLoader,
    [TermMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap, FaceMap]
  );

  // hook for position switch
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  // useSpring for auto animation transition for position and scale
  const properties = useSpring({
    position: active ? [0, 0, 3] : [0.6, 0.9, 0.01],
    scale: active ? [0.8, 0.8, 0.8] : [0.2, 0.2, 0.2],
    cubePos: active ? [3, 3, -5] : [0.6, 0.9, 0.01],
    cubeScale: active ? [1, 1, 1] : [0, 0, 0],
  });

  // useRefs for useFrame hook
  const earthRef = useRef();
  const cloudsRef = useRef();
  const cubeRef = useRef();

  // controls auto-rotate
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (active && hover) {
      cubeRef.current.rotation.y = elapsedTime / 8;
    }
    earthRef.current.rotation.y = elapsedTime / 3;
    cloudsRef.current.rotation.y = elapsedTime / 3.5;
    cubeRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={2.2} />
      {/* clouds mesh */}
      <animated.mesh
        ref={cloudsRef}
        onClick={() => setActive(!active)}
        scale={properties.scale}
        position={properties.position}
      >
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
      <animated.mesh
        ref={earthRef}
        onClick={() => setActive(!active)}
        scale={properties.scale}
        position={properties.position}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={termMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
      </animated.mesh>
      {/* cube mesh */}
      <animated.mesh
        ref={cubeRef}
        position={properties.cubePos}
        scale={properties.cubeScale}
        onMouseEnter={() => {
          setHover(!hover);
        }}
        onMouseLeave={() => {
          setHover(!hover);
        }}
      >
        <boxBufferGeometry args={[2, 2, 2]} />
        <meshPhongMaterial map={faceMap} transparent={true} />
      </animated.mesh>
    </>
  );
}
