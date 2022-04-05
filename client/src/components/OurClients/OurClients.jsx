import React from "react";
import { brandData } from "../../utils/fakedata";
import SectionTitle from "../SectionTitle/SectionTitle";
import { motion } from "framer-motion";
const OurClients = () => {
  return (
    <section className="container-div clients">
      <SectionTitle title="Our Clients" />
      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="clients__brands grid"
      >
        {brandData.map(({ img, id }) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            key={id}
            className="clients__brands__item
                "
          >
            <img src={img} alt="" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OurClients;
