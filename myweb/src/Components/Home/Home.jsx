import React, { Fragment } from "react";

import Title from "./Main/Title";
import Footer from "./Footer/Footer";
import Dev from "./Dev/Dev";
import Gts from "./Main/Gts";

function Home() {
  return (
    <Fragment>
      <div className="dark:bg-gray-900">
        <Title />
        <Gts />
        <Dev />
        <Footer />
      </div>
    </Fragment>
  );
}

export default Home;
