import { CubeTextureLoader } from "three";
import { useThree } from "react-three-fiber";

function SkyBox() {
    // get access to THREE scene set up by <Canvas />
    const { scene } = useThree();
    // class to load cuber texture
    const loader = new CubeTextureLoader();
    // texture loaded by class's method, takes an array or URL representing all 6 sides of cube
    const texture = loader.load([
      '/nerdspace/px.jpg',
      '/nerdspace/nx.jpg',
      '/nerdspace/py.jpg',
      '/nerdspace/ny.jpg',
      '/nerdspace/pz.jpg',
      '/nerdspace/nz.jpg'
    ]);
    scene.background = texture;
    return null;
  
};

export default SkyBox;