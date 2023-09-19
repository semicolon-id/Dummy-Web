import React, { Fragment } from "react";

import "./Title.css";
import Nav from "../../Navbar/Nav";

function Title() {
  return (
    <Fragment>
      <div className="h-full w-full">
        <div className="h-screen w-full bg relative bg-cover object-bottom ">
          <div className=" md:absolute md:bottom-0 md:left-0 p-10 pt-20 md:w-[30%] text-justify ">
            <h1 className="text-4xl font-bold text-sky-500 bg-black bg-opacity-40 p-3 pr-8">
              Educourse{" "}
              <p className="mt-2 text-xl text-slate-300 pr-2">
                the solution for children who are addicted to gadgets
              </p>
            </h1>
          </div>
          <Nav />
        </div>
      </div>
    </Fragment>
  );
}

export default Title;
