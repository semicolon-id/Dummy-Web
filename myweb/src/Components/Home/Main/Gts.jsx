import React from "react";

import img1 from "../../assets/edu2.jpg";

function Gts() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row py-8 ">
      {/* Bagian Kiri */}
      <div className="w-full md:w-1/2">
        <img src={img1} alt="Image" className="w-full h-auto" />
      </div>
      {/* Bagian Kanan */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
        <h1 className="text-slate-300 text-5xl font-bold mb-2">
          Empowering <p className="text-sky-500 text-4xl">Student Development</p>
        </h1>
       
        <p className="text-slate-300 mb-4">
          Our carefully crafted programs are specifically designed to foster
          holistic development in students. Led by our certified teachers,
          students will dive into coding using a STEM-based curriculum that
          sparks creativity and critical thinking. Over 30 schools in Indonesia
          have already joined our program, paving the way for innovative
          education and empowering students with cutting-edge learning
          opportunities.
        </p>
        <a
          href="# "
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-3 rounded-md text-center self-start opacity-80"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Gts;
