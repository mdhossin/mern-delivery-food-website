import React from "react";
import { whatSpecialMain } from "../../assets";
import { whatSpecialData } from "../../utils/fakedata";
import { motion } from "framer-motion";
const WhatSpecial = () => {
  return (
    <section className="container-div special">
      <div className="special__container grid">
        <motion.div
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="special__container__left"
        >
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <img src={whatSpecialMain} alt="" />
          </motion.div>
        </motion.div>
        <div className="special__container__right">
          <h2>What Makes Our Menus Special ?</h2>
          <motion.div
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="special__container__right__desc grid"
          >
            {whatSpecialData.map(({ id, title, desc, img }) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                key={id}
                className="special__container__right__desc__col"
              >
                <img src={img} alt="" />
                <div className="special__container__right__desc__col-desc">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatSpecial;
