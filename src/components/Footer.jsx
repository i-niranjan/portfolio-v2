import React from "react";
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
export default function Footer() {
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
}
