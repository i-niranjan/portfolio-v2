import React from "react";
import { ShinyButton } from "./magicui/shiny-button";

function Header() {
  return (
    <nav className="flex justify-center">
      <div className="flex w-full border-b backdrop-blur-md fixed border-gray-700 max-w-screen-2xl mx-auto justify-between items-center  px-5 py-5 ">
        <div className="text-white">LOGO</div>
        <div>
          <ul className="flex gap-10 px-5 text-white ">
            <li className="text-xl  ">Home</li>
            <li className="text-xl ">Skills & Tools</li>
            <li className="text-xl ">Recent Work</li>
            <li className="text-xl ">About Me</li>
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
