import React from "react";
import { brandData } from "../../utils/fakedata";
import SectionTitle from "../SectionTitle/SectionTitle";

const OurClients = () => {
  return (
    <section className="container-div clients">
      <SectionTitle title="Our Clients" />
      <div className="clients__brands grid">
        {brandData.map(({ img, id }) => (
          <div
            key={id}
            className="clients__brands__item
                "
          >
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurClients;
