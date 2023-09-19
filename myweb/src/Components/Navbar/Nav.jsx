import React, { useState } from "react";

import Button from "./Button";
import edu1 from "../assets/edu1.png";

const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 opacity-100">
      <div className="md:flex items-center justify-between dark:bg-slate-950 py-4 md:px-10 px-7">
        <a href="# " class="flex items-center">
          <img src={edu1} class="h-8 mr-3 " alt="Flowbite Logo" />
        </a>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden "
        >
         <span className="text-gray-200"><ion-icon name={open ? "close" : "menu"}></ion-icon></span>
        </div>
        <div>
          <ul
            className={`md:flex  md:items-center md:pb-0 pb-12 absolute md:static dark:bg-slate-950 md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-sm md:my-0 my-7  text-center"
              >
                <a
                  href={link.link}
                  className="text-slate-300 hover:text-gray-400 duration-500 px-7 "
                >
                  {link.name}
                </a>
              </li>
            ))}
            <div className="sm:block md:hidden text-center ">
            <Button>Login</Button>

            </div>
          </ul>
        </div>
        <div className="hidden md:block">
        <Button>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Nav; 