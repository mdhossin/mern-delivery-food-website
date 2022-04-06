import React from "react";
import { middleImg } from "../../assets";
import { cuisinesDataLeft, cuisinesDataRight } from "../../utils/fakedata";
import SectionTitle from "../SectionTitle/SectionTitle";
import { motion } from "framer-motion";

const Cuisines = () => (
  <section className="section container-div cuisines-div">
    <SectionTitle
      title="International Cuisines"
      desc="Incredibly Tasty International Dish"
    />

    <div className="cuisines grid">
      <motion.div className="cuisines__left grid">
        {cuisinesDataLeft.map(({ title, id, desc, img }) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            key={id}
            className="cuisines__left__col"
          >
            <div className="cuisines__left__col-img">
              <img src={img} alt="" />
            </div>
            <div className="cuisines__left__col-desc">
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="cuisines__middle">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 2 }}
        >
          <img src={middleImg} alt="" />
        </motion.div>
      </motion.div>
      <motion.div className="cuisines__right grid">
        {cuisinesDataRight.map(({ title, id, desc, img }) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            key={id}
            className="cuisines__left__col"
          >
            <div className="cuisines__left__col-img">
              <img src={img} alt="" />
            </div>
            <div className="cuisines__left__col-desc">
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Cuisines;
