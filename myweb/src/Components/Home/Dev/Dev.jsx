import React from "react";
 
import wmn from "../../assets/wmn1.png";
import man from "../../assets/man1.png";

function Dev() {
  return (
    <section className="  py-5">
      <div className="container mx-auto text-center">
        <h2 className="text-sky-500 text-2xl font-semibold mb-2">
          Developer Team
        </h2>
        <p className=" text-white mb-8">
          Expert team working behind the scenes.
        </p>
        <div className="flex flex-wrap justify-center space-x-4  ">
          <div className="w-40 mb-4">
            <img
              src={man}
              alt="Developer 1"
              className="w-full h-auto rounded-full"
            />
            <p className="text-slate-300 mt-2 font-semibold">Zaldi</p>
          </div>
          <div className="w-40 mb-4">
            <img
              src={wmn}
              alt="Developer 2"
              className="w-full h-auto rounded-full"
            />
            <p className="text-slate-300 mt-2 font-semibold">Ibu Kartika</p>
          </div>
          <div className="w-40 mb-4">
            <img
              src={man}
              alt="Developer 3"
              className="w-full h-auto rounded-full"
            />
            <p className="text-slate-300 mt-2 font-semibold">Bagas</p>
          </div>
          <div className="w-40 mb-4">
            <img
              src={wmn}
              alt="Developer 4"
              className="w-full h-auto rounded-full"
            />
            <p className="text-slate-300 mt-2 font-semibold">Ibu Diah</p>
          </div>
          <div className="w-40 mb-4">
            <img
              src={man}
              alt="Developer 4"
              className="w-full h-auto rounded-full"
            />
            <p className="text-slate-300 mt-2 font-semibold">Davi</p>
          </div>
          <div className="w-40 mb-4">
            <img
              src={wmn}
              alt="Developer 4"
              className="w-full h-auto rounded-full"
            />
            <p className="text-slate-300 mt-2 font-semibold">Ibu Tia</p>
          </div>{" "}
          <div className="w-40 mb-4">
            <img
              src={man}
              alt="Developer 4"
              className="w-full h-auto rounded-full"
            />
            <p className="text-slate-300 mt-2 font-semibold">Nevan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dev;
