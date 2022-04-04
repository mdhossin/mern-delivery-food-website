import React from "react";
import {
  Banner,
  Cuisines,
  NewsLetter,
  OurClients,
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
      <NewsLetter />
      <OurClients />
    </div>
  );
};

export default Home;
