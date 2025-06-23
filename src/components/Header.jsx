import React from "react";
import { ShinyButton } from "./magicui/shiny-button";
import { Button } from "@/components/ui/button";

import {
  IconBrandGithub,
  IconMail,
  IconMenuDeep,
  IconMenu2,
} from "@tabler/icons-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Link } from "react-router";

function Header() {
  return (
    <nav id="head" className="flex w-full justify-center z-50 relative">
      <div className="flex w-[100%] justify-between  md:w-full border-b bg-black/50 backdrop-blur-md fixed border-gray-700 md:max-w-screen-2xl md:mx-auto md:justify-between items-center py-1  md:px-5 md:py-2 ">
        <div className=" text-white md:border border-white/30 mx-1 px-4 py-2 dark:text-white rounded-2xl ">
          <Link to={"/#head"} className="font-semibold">
            NIRANJAN
          </Link>
        </div>
        <div className="flex gap-2 md:hidden mx-1 px-4  items-center">
          <ShinyButton
            onClick={() => {
              window.location.href = "mailto:iniranjanchaudhari@gmail.com";
            }}
            className="px-2"
          >
            <IconMail />
          </ShinyButton>
          <ShinyButton
            onClick={() => {
              window.location.href = "https://github.com/i-niranjan";
            }}
            className="px-2"
          >
            <IconBrandGithub />
          </ShinyButton>
          <div className="block md:hidden">
            <Sheet className="">
              <SheetTrigger asChild>
                <IconMenu2
                  className="p-0 cursor-pointer hover:text-gray-300 transition-colors"
                  size={22}
                />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-80 p-0 bg-gradient-to-br from-black via-gray-900 to-neutral-400 backdrop-blur-2xl"
              >
                <SheetHeader className="px-6 py-4 border-b">
                  <SheetTitle className="text-left text-2xl font-normal">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="py-6">
                  <nav>
                    <ul className="space-y-1 px-3">
                      <li>
                        <Link
                          to="/#head"
                          className="flex  items-center px-3 py-3 text-xl  rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/#tools"
                          className="flex  items-center px-3 py-3 text-xl  rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          Skills & Tools
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/#work"
                          className="flex  items-center px-3 py-3 text-xl  rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          Recent Work
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog#head"
                          className="flex  items-center px-3 py-3 text-xl  rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          Blogs
                        </Link>
                      </li>

                      {/* <li className="pt-4 px-3">
                        <Button
                          onClick={() => {
                            window.location.href =
                              "mailto:iniranjanchaudhari@gmail.com";
                          }}
                          className="w-full"
                        >
                          Contact Me
                        </Button>
                      </li> */}
                    </ul>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-10 px-5 text-white ">
            <li className="text-base  ">
              {" "}
              <Link to={"/#head"}>Home</Link>
            </li>
            <li className="text-base ">
              <Link to="/#tools">Skills & Tools</Link>
            </li>
            <li className="text-base ">
              <Link to={"/#work"}>Recent Work</Link>
            </li>
            <li className="text-base ">
              <Link to={"/blog#head"}>Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <ShinyButton
            onClick={() => {
              window.location.href = "mailto:iniranjanchaudhari@gmail.com";
            }}
          >
            Contact Me
          </ShinyButton>
        </div>
      </div>
    </nav>
  );
}

export default Header;
