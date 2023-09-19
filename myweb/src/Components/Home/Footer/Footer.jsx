import React from "react";

import ig1 from "../../assets/ig1.png";
import wa1 from "../../assets/wa1.png";
import tele1 from "../../assets/tele2.png";
import ttk1 from "../../assets/ttk1.png";
import icon from "../../assets/edu3.png";

function Footer() {
  return (
    <footer className="bg-gray-950  text-slate-300 py-10 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0 w-1/2">
          <img src={icon} alt="Company Icon" className="w-24 h-24 mr-4" />
          <div>
            <h2 className="text-base font-semibold">Contact</h2>
            <p className=" text-sm ">Contact us if you have any questions</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 w-1/2 pt-2 md:pt-0">
          <a
            href="# "
            className="text-sm text-gray-400 hover:text-white flex items-center space-x-2 "
          >
            <img src={ig1} alt="Company Icon" className="w-6 h-6 mr-4" />
            @educourse.id
          </a>
          <a
            href="# "
            className="text-sm text-gray-400 hover:text-white flex items-center space-x-2 "
          >
            <img src={wa1} alt="Company Icon" className="w-6 h-6 mr-4" />
            +62-895-****-****
          </a>
          <a
            href="# "
            className="text-sm text-gray-400 hover:text-white flex items-center space-x-2"
          >
            <img src={tele1} alt="Company Icon" className="w-6 h-6 mr-4" />
            @edu_tel
          </a>
          <a
            href="# "
            className="text-sm text-gray-400 hover:text-white flex items-center space-x-2"
          >
            <img src={ttk1} alt="Company Icon" className="w-6 h-6 mr-4" />
            @educourse
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
