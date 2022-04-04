import React from "react";
import { whatSpecialMain } from "../../assets";
import { whatSpecialData } from "../../utils/fakedata";

const WhatSpecial = () => {
  return (
    <section className="container-div special">
      <div className="special__container grid">
        <div className="special__container__left">
          <img src={whatSpecialMain} alt="" />
        </div>
        <div className="special__container__right">
          <h2>What Makes Our Menus Special ?</h2>
          <div className="special__container__right__desc grid">
            {whatSpecialData.map(({ id, title, desc, img }) => (
              <div key={id} className="special__container__right__desc__col">
                <img src={img} alt="" />
                <div className="special__container__right__desc__col-desc">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSpecial;
