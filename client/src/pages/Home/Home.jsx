import React from "react";
import {
  Banner,
  Cuisines,
  Products,
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
      <Products />
    </div>
  );
};

export default Home;
