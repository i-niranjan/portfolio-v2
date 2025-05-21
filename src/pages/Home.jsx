import { div, section } from "motion/react-client";
import React from "react";
import Header from "../components/Header";

import { motion } from "motion/react";
import { RainbowButton } from "../components/magicui/rainbow-button";
import { ShimmerButton } from "../components/magicui/shimmer-button";
import { ArrowBigLeft, ArrowUpRight, Shield } from "lucide-react";
import { ShinyButton } from "../components/magicui/shiny-button";
import StaggerGrid from "../components/StaggerGrid";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiTypescript,
  SiReact,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiFramer,
  SiGreensock,
  SiPostgresql,
  SiRedux,
  SiReactquery,
  SiReacthookform,
  SiVercel,
  SiRailway,
  SiWordpress,
  SiPayloadcms,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiPostman,
  SiNginx,
  SiDocker,
  SiGithubactions,
  SiTailwindcss,
  SiLinux,
  SiGoogletagmanager,
  SiGoogleanalytics,
  SiFigma,
  SiShadcnui,
} from "react-icons/si";
import { LineShadowText } from "../components/magicui/line-shadow-text";
function Home() {
  return (
    <>
      <Header />
      <FixedBg />
      <HeroSection />
      <FeaturesSection />
    </>
  );
}

export default Home;

const HeroSection = () => {
  return (
    <>
      <section className="h-[50vh] flex items-center justify-center flex-col w-full max-w-screen-2xl mx-auto z-20 mt-[20vh] mb-[30vh]">
        <div>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-8 mt-8 relative bg-gradient-to-br font-medium from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl  tracking-tight text-transparent md:text-7xl"
          >
            <ShimmerButton
              className="cursor-default w-[20rem] text-base tracking-normal px-4 py-1 "
              // className="absolute cursor-default py-1 px-4 left-0 top-0 mt-[-40px] text-base tracking-normal "
              variant="default"
              borderRadius="10px"
              shimmerColor="#005980"
              background="#01162f"
              shimmerSize="0.10em"
            >
              // currently shipping cool stuff <ArrowUpRight className="ml-2" />
            </ShimmerButton>
            Hey, I'm Niranjan Chaudhari <br />{" "}
            <span className="text-4xl font-light bg-gradient-to-b from-slate-400 to-slate-800 bg-clip-text">
              A Full Stack Developer
            </span>
            <div className="flex gap-5 mt-20 justify-center w-full items-center">
              <RainbowButton
                variant="outline"
                className="w-1/4 py-6 rounded-full text-xl tracking-normal"
              >
                View Work
              </RainbowButton>
              <ShinyButton className="w-1/4 py-3">Hire Me</ShinyButton>
            </div>
          </motion.h1>
        </div>
      </section>
    </>
  );
};

const FixedBg = () => {
  return (
    <div className="fixed inset-0 w-full h-screen z-[-1]  overflow-hidden ">
      <video
        autoPlay
        muted
        loop
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src="/assets/blue-glass.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="z-20 fixed inset-0 pointer-events-none">
        <div className="fixed inset-0  bg-gradient-to-t from-black/90 via-transparent to-black/90" />
        <div className="fixed inset-0  bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>
    </div>
  );
};
const FeaturesSection = () => {
  const skills = [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "PHP", icon: SiPhp },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Express", icon: SiExpress },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Framer Motion", icon: SiFramer },
    { name: "GSAP", icon: SiGreensock },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Redux Toolkit", icon: SiRedux },
    { name: "Tanstack Query", icon: SiReactquery },
    { name: "React Hook Form", icon: SiReacthookform },
    { name: "ShadCn", icon: SiShadcnui },
    { name: "Vercel", icon: SiVercel },
    { name: "Railway", icon: SiRailway },
    { name: "WordPress", icon: SiWordpress },
    { name: "Payload CMS", icon: SiPayloadcms },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Postman", icon: SiPostman },
    { name: "Nginx", icon: SiNginx },
    { name: "Docker", icon: SiDocker },
    { name: "GitHub Actions", icon: SiGithubactions },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Linux", icon: SiLinux },
    { name: "Tag Manager", icon: SiGoogletagmanager },
    { name: "Google Analytics", icon: SiGoogleanalytics },
    { name: "Figma", icon: SiFigma },
  ];
  return (
    <section>
      <div>
        <span></span>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="max-w-screen-xl flex-col mx-auto gap-2  flex  items-start  py-2  relative bg-gradient-to-br font-medium from-slate-300 to-slate-500  bg-clip-text text-center text-4xl  tracking-tight text-transparent md:text-6xl"
        >
          <span
            className="cursor-default flex items-center justify-start gap-4 text-base tracking-normal py-1 "
            // className="absolute cursor-default py-1 px-4 left-0 top-0 mt-[-40px] text-base tracking-normal "
          >
            <span className="p-1 rounded-2xl bg-slate-400">
              <svg
                className=" "
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#01162f"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-code-icon lucide-code"
              >
                <path d="m16 18 6-6-6-6" />
                <path d="m8 6-6 6 6 6" />
              </svg>
            </span>
            Built with passion
          </span>
          Work I Love Doing
        </motion.h2>

        <div className="border border-white/5 backdrop-blur m-20 rounded-md h-full px-10 py-10 ">
          <h2 className="text-2xl flex justify-end items-center gap-2  bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-right pb-10 md:text-4xl  tracking-tight text-transparent  ">
            My Dev Arsenal 🛠️
          </h2>
          <StaggerGrid skills={skills} />
        </div>
      </div>
    </section>
  );
};
