import React from "react";
import { ShinyButton } from "./magicui/shiny-button";

function Header() {
  return (
    <nav className="flex justify-center z-50 relative">
      <div className="flex w-full border-b bg-black/50 backdrop-blur-md fixed border-gray-700 max-w-screen-2xl mx-auto justify-between items-center  px-5 py-2 ">
        <div className="text-white">LOGO</div>
        <div>
          <ul className="flex gap-10 px-5 text-white ">
            <li className="text-base  ">Home</li>
            <li className="text-base ">Skills & Tools</li>
            <li className="text-base ">Recent Work</li>
            <li className="text-base ">About Me</li>
          </ul>
        </div>
        <div className="">
          <ShinyButton>Contact Me</ShinyButton>
        </div>
      </div>
    </nav>
  );
}

export default Header;
