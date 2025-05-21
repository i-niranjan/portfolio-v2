import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StaggerGrid = ({ skills }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const grid = [4, 8]; // rows x columns
    gsap.set(".skill-box", {
      scale: 0.1,
      y: 20,
      opacity: 0,
      transformOrigin: "center center", // crucial for smooth scale
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true, // runs only once
        },
      })
      .to(".skill-box", {
        duration: 1,
        scale: 1,
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
        stagger: {
          amount: 1.5,
          grid: grid,
          axis: null,
          ease: "none",
          from: "center",
        },
      });
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-3 md:grid-cols-8  gap-6 justify-center items-center   "
    >
      {skills.map(({ name, icon: Icon }, index) => (
        <div
          key={index}
          className="flex flex-col gap-5 items-center skill-box text-4xl text-white  "
        >
          <Icon />
          <span className="text-sm font-medium text-[#ACDDEE]">{name}</span>
        </div>
      ))}
    </div>
  );
};

export default StaggerGrid;
