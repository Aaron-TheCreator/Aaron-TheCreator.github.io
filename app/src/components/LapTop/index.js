import React, { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const LapTop = () => {
    const [model, setModel] = useState();
    useEffect(() => {
      new GLTFLoader().load("/cyberpunk_laptop/scene.gltf", setModel);
    },[]);
    // console.log(model);
    return model ? <primitive object={model.scene} /> : null;
};

export default LapTop;