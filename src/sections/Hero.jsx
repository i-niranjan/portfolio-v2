import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import EnergyCore from "../three/EnergyCore";
import Lights from "../three/Lights";
import { Environment } from "@react-three/drei";
const Hero = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-black">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <Lights />
        <EnergyCore />

        <Environment preset="city" />
        <OrbitControls />
      </Canvas>
      <div className="absolute text-white text-center">
        <h1 className="text-4xl font-bold">Hey, I'm Niranjan 👋</h1>
        <p className="text-lg">MERN Stack Developer | Tech Explorer</p>
      </div>
    </section>
  );
};

export default Hero;
