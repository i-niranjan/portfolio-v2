import React from "react";
import Background from "../components/Background";
import Header from "../components/Header";
import { LampContainer } from "../components/ui/Lamp";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
export default function Home() {
  return (
    <>
      <Background className={"fixed"} />
      {/* <Header /> */}
      <HeroSection />
    </>
  );
}

const HeroSection = () => {
  return (
    <>
      <div className="my-10  relative h-screen max-w-screen-xl w-full mx-auto">
        <div className="mx-10  w-full h-screen mt-[-8rem]">
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="uppercase mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-5xl  tracking-tight text-transparent md:text-7xl font-bold"
            >
              Niranjan Chaudhari
            </motion.h1>
            <motion.p className=" bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-2xl">
              Full-stack developer focused on clarity, usability, and speed.
            </motion.p>
            <Button variant={"outline"} className={"mt-4 rounded-sm shadow-xl"}>
              Hire Me
            </Button>
          </LampContainer>
        </div>
      </div>
    </>
  );
};
