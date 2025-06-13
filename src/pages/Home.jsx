import Header from "../components/Header";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { motion } from "motion/react";
import { RainbowButton } from "../components/magicui/rainbow-button";
import { ShimmerButton } from "../components/magicui/shimmer-button";
import { ArrowUpRight } from "lucide-react";
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
import { ServiceCard } from "../components/ServiceCard";
import { PinContainer } from "../components/ui/3d-pin";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import {
  IconHomeFilled,
  IconSettingsFilled,
  IconBriefcase2Filled,
  IconUserFilled,
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandInstagramFilled,
  IconBrandXFilled,
} from "@tabler/icons-react";

function Home() {
  return (
    <>
      <Header />
      <FixedBg />
      <HeroSection />
      <FeaturesSection />
      <RecentWork />
      <Footer />
    </>
  );
}

export default Home;

const HeroSection = () => {
  return (
    <>
      <section
        id="home"
        className="h-[50vh] mb:w-full flex items-center justify-center flex-col w-full max-w-screen-2xl mx-auto z-20 mt-[15vh] mb-[15vh] md:mt-[30vh] md:mb-[30vh]"
      >
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
              className="cursor-default w-[20rem] text-white text-base tracking-normal px-4 py-1 "
              // className="absolute cursor-default py-1 px-4 left-0 top-0 mt-[-40px] text-base tracking-normal "
              variant="default"
              borderRadius="10px"
              shimmerColor="#005980"
              background="#01162f"
              shimmerSize="0.10em"
            >
              <span className="text-white">
                // currently shipping cool stuff
              </span>
              <ArrowUpRight color="white" className="ml-2" />
            </ShimmerButton>
            Hey, I'm Niranjan
            <br />{" "}
            <span className="text-4xl font-light bg-gradient-to-b from-slate-400 to-slate-800 bg-clip-text">
              A Full Stack Developer
            </span>
            <div className="flex  gap-2 mt-20 justify-center w-full items-center">
              <RainbowButton
                variant=""
                className="md:w-1/4 py-5 hidden md:flex md:py-6   rounded-full text-xl tracking-normal"
              >
                View Work
              </RainbowButton>
              <ShinyButton className="block md:hidden md:w-1/4 py-3">
                View Work
              </ShinyButton>
              <ShinyButton className="md:w-1/4 py-3">Hire Me</ShinyButton>
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
    <section id="tools" className="max-w-screen-xl w-full mx-auto  ">
      <div className="relative">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className=" w-fit sticky-heading   flex-col  gap-2  flex  items-start  py-2 px-5 md:px-auto   bg-gradient-to-br font-medium from-slate-300 to-slate-500  bg-clip-text  text-4xl  tracking-tight text-transparent md:text-6xl"
        >
          <span
            className="cursor-default flex items-center justify-start gap-4 text-base tracking-normal py-1 "
            // className="absolute cursor-default py-1 px-4 left-0 top-0 mt-[-40px] text-base tracking-normal "
          >
            <span className="p-1 rounded-2xl bg-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#01162f"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-code-icon lucide-code"
              >
                <path d="m16 18 6-6-6-6" />
                <path d="m8 6-6 6 6 6" />
              </svg>
            </span>
            Built with passion
          </span>
          Work I Love Doing
        </motion.h2>

        {/* DEV ARSENAL */}
        <div className="border border-white/5 backdrop-blur md:m-20 rounded-md h-full px-10 py-10 ">
          <h2 className="text-2xl flex justify-end items-center gap-2  bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-right pb-10 md:text-4xl  tracking-tight text-transparent  ">
            My Dev Arsenal 🛠️
          </h2>
          <StaggerGrid skills={skills} />
        </div>

        {/* Services I Offer */}
        <div className="px-5 md:px-auto  md:m-20 py-10">
          <h2 className="text-2xl flex justify-start items-center gap-2  bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-left pb-10 md:text-4xl  tracking-tight text-transparent  ">
            Things I Can Help You With
          </h2>
          <div className="flex gap-x-5">
            <ServiceCard />
          </div>
        </div>
      </div>
    </section>
  );
};

const RecentWork = () => {
  const proj1Tooltip = [
    {
      id: 1,
      name: "Javascript",
      image: "/assets/icons8-javascript.svg",
    },

    {
      id: 3,
      name: "Headless wordpress",
      image: "/assets/icons8-wordpress.svg",
    },
    {
      id: 4,
      name: "TailwindCSS",
      image: "/assets/icons8-tailwindcss.svg",
    },
    {
      id: 2,
      name: "Next.js",
      image: "/assets/icons8-nextjs.svg",
    },
  ];
  const proj2Tooltip = [
    {
      id: 1,
      name: "React",
      image: "/assets/icons8-react.svg",
    },
    {
      id: 2,
      name: "MongoDB",
      image: "/assets/icons8-mongodb.svg",
    },
    {
      id: 3,
      name: "Gemeni",
      image: "/assets/icons8-gemini-ai.svg",
    },
  ];
  return (
    <>
      <div
        id="work"
        className="relative max-w-screen-xl mx-auto rounded-xl   md:px-20"
      >
        <div className="h-full backdrop-blur-2xl pb-20 rounded-xl p-5 md:p-10">
          <div>
            <h2 className="text-4xl md:text-4xl my-5 md:my-auto bg-gradient-to-br font-medium from-slate-300 to-slate-500  bg-clip-text   tracking-tight text-transparent">
              Recent Work
            </h2>
            <div className="flex flex-wrap justify-center md:justify-around items-center gap-y-20 md:gap-2  md:p-10">
              <PinContainer
                className={"900 "}
                title="www.yonnovascientificconsultancy.com"
                href="https://www.yonnovascientificconsultancy.com/"
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-lg text-slate-100">
                    Yonnova Scientific Solutions
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                      Modern website built with Next.js and Headless WordPress
                      backend.
                    </span>
                  </div>
                  <div className="flex mt-2">
                    <AnimatedTooltip items={proj1Tooltip} />
                  </div>
                  <div className="bg-[url(/assets/yonnova-2.webp)]  bg-cover flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                </div>
              </PinContainer>
              <PinContainer
                className={"900 "}
                title="fixmywords.com"
                href="https://fixmywords.iniranjan.com/"
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-lg text-slate-100">
                    FixMyWords
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                      Gemini powered text tool built for instant editing
                    </span>
                  </div>
                  <div className="flex mt-2">
                    <AnimatedTooltip items={proj2Tooltip} />
                  </div>
                  <div className="bg-[url(/assets/fixmywords.webp)]  bg-cover flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                </div>
              </PinContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  const menuItems = [
    { name: "Home", icon: IconHomeFilled, href: "#home" },
    { name: "Skills & Tools", icon: IconSettingsFilled, href: "#skills" },
    { name: "Recent Work", icon: IconBriefcase2Filled, href: "#work" },
    { name: "About Me", icon: IconUserFilled, href: "#about" },
  ];
  const socialIcons = [
    {
      icon: IconBrandGithubFilled,
      url: "https://github.com/i-niranjan",
    },
    {
      icon: IconBrandLinkedinFilled,
      url: "https://www.linkedin.com/in/niranjan-chaudhari-26157b194/",
    },
    {
      icon: IconBrandInstagramFilled,
      url: "https://www.instagram.com/imniranjann/",
    },
    {
      icon: IconBrandXFilled,
      url: "https://x.com/imniranjann", // formerly Twitter
    },
  ];
  return (
    <>
      <footer className="relative backdrop-blur-2xl bg-gradient-to-br from-gray-900 via-black to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-500 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl  bg-gradient-to-br font-medium from-slate-300 to-slate-500 bg-clip-text text-transparent">
                  Let's Connect
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Ready to bring your ideas to life? I'd love to hear about your
                  next project.
                </p>
              </div>

              <div className="flex space-x-4">
                {socialIcons.map((Item) => (
                  <a
                    target="_blank"
                    href={Item.url}
                    key={Item.url}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-pointer group"
                  >
                    <Item.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Right side - Navigation */}
            <div className="space-y-8">
              <h3 className="text-2xl bg-gradient-to-br font-medium from-slate-300 to-slate-500 bg-clip-text text-transparent">
                Menu
              </h3>
              <nav className="grid grid-cols-2 gap-4">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="group relative overflow-hidden p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center space-x-3">
                      <div className=" p-1 bg-gradient-to-r from-blue-400 to-cyan-900 rounded-full group-hover:scale-150 transition-transform duration-300">
                        <item.icon size={20} />
                      </div>
                      <span className="text-white/80 group-hover:text-white font-medium transition-colors duration-300">
                        {item.name}
                      </span>
                    </div>

                    {/* Hover effect line */}
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-900 w-0 group-hover:w-full transition-all duration-500"></div>
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 Niranjan Chaudhari. |{" "}
                <a href="mailto:iniranjanchaudhari@gmail.com">
                  iniranjanchaudhari@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400"></div>
            </div>
          </div>
        </div>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600  to-cyan-900"></div>
      </footer>
    </>
  );
};
