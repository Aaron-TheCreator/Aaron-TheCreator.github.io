import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
// import { useRender } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";

// import StarsTexture from "../../assets/textures/8k_stars_milky_way.jpeg";
import { TextureLoader } from "three";

export function StarSphere(props) {
    // const [ colorMap ] = useLoader(
    //     TextureLoader,
    //     [StarsTexture]
    // );

    const starRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
    
        starRef.current.rotation.y = elapsedTime / 500;
        
      });

    return (
      <>
        <ambientLight intensity={.05} />
        <Stars
            ref={starRef}
            radius={300}
            depth={40}
            count={40000}
            factor={7}
            saturation={0}
            fade={true}
        />
        {/* <animated.mesh>
            <sphereGeometry args={[700, 64, 64]} />
            <meshPhongMaterial 
                map={colorMap}
                opacity={1}
                transparent={true}
            />
        </animated.mesh> */}
      </>
    );
}