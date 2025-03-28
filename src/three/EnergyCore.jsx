import { useGLTF } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { MeshStandardMaterial, Color } from "three";
import { useFrame } from "@react-three/fiber";

const EnergyCore = () => {
  const { scene } = useGLTF("/models/cube_energy_core/scene.gltf");
  const modelRef = useRef();
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Adjust speed here
    }
  });

  useEffect(() => {
    console.log("GLTF Scene:", scene);
    scene.traverse((child) => {
      console.log("Object Name:", child.name);
    });
  }, [scene]);
  scene.traverse((child) => {
    if (child.isMesh) {
      if (child.name.includes("Sphere_Material001_0")) {
        child.material.color.set(0x008cff); // Bright blue
        child.material.emissive = new THREE.Color(0x0044ff); // Deep blue glow
        child.material.emissiveIntensity = 3; // Adjust glow strength
      }
      if (child.name.includes("Sphere001")) {
        child.material.color.set(0x008cff); // Bright blue
        child.material.emissive = new THREE.Color(0x0044ff); // Deep blue glow
        child.material.emissiveIntensity = 3; // Adjust glow strength
      }
      child.material.flatShading = false;
      child.material.needsUpdate = true;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={0.3} />;
};

export default EnergyCore;
