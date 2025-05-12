import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import EnergyCore from "../three/EnergyCore";
import Lights from "../three/Lights";
import { Environment } from "@react-three/drei";
const Hero = () => {
  return (
    <>
      <section className="h-screen w-full flex items-center justify-center bg-black">
        <Canvas className="" camera={{ position: [0, 1, 5] }}>
          <Lights />
          <EnergyCore />

          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </section>
      <section></section>
    </>
  );
};

export default Hero;
