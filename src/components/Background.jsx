import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import EnergyCore from "./three/EnergyCore";
import Lights from "./three/Lights";
import { Environment } from "@react-three/drei";
const Background = ({ className }) => {
  return (
    <>
      <section
        className={` top-0 left-0  h-[100%] w-full flex items-center justify-center bg-black ${className}`}
      >
        <Canvas camera={{ position: [4, 4, 4] }}>
          <Lights />
          <EnergyCore />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </section>
    </>
  );
};

export default Background;
