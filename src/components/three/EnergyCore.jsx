import { useGLTF } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { MeshStandardMaterial, Color } from "three";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
const EnergyCore = () => {
  const { scene } = useGLTF("/models/cube_energy_core/scene.gltf");
  const modelRef = useRef();
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.0001; // Adjust speed here
    }
  });

  // To check the Object naems i
  // useEffect(() => {
  //   console.log("GLTF Scene:", scene);
  //   scene.traverse((child) => {
  //     console.log("Object Name:", child.name);
  //   });
  // }, [scene]);
  scene.traverse((child) => {
    if (child.isMesh) {
      if (child.name.includes("Sphere")) {
        child.material.color.set(0x008cff); // Bright blue
        child.material.emissive = new THREE.Color(0x0044ff); // Deep blue glow
        child.material.emissiveIntensity = 1; // Increase glow
        child.material.toneMapped = false; // Ensure proper glowing
      }
    }
  });

  return (
    <group ref={modelRef}>
      {/* 3D Model */}
      <primitive object={scene} scale={0.3} />

      {/* Point Light Inside the Core */}
      <pointLight
        color={0x008cff}
        intensity={40} // Brighter light
        position={[0, 0, 0]} // Centered inside core
        distance={20} // Adjust glow spread
      />
    </group>
  );
};

export default EnergyCore;
