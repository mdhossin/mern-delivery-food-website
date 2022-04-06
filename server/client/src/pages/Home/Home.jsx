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
import Footer from "../../components/Footer/Footer";

const Home = () => (
  <div style={{ marginTop: "5rem" }}>
    <Banner />
    <Cuisines />
    <WhatSpecial />
    <SimpleDelicious />
    <Products />
    <NewsLetter />
    <OurClients />
    <Footer />
  </div>
);

export default Home;
