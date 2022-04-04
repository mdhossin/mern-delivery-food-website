import React from "react";
import {
  Banner,
  Cuisines,
  SimpleDelicious,
  WhatSpecial,
} from "../../components";

const Home = () => {
  return (
    <div className="section">
      <Banner />
      <Cuisines />
      <WhatSpecial />
      <SimpleDelicious />
    </div>
  );
};

export default Home;
