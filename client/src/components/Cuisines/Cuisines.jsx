import React from "react";
import { middleImg } from "../../assets";
import { cuisinesDataLeft, cuisinesDataRight } from "../../utils/fakedata";
import SectionTitle from "../SectionTitle/SectionTitle";

const Cuisines = () => {
  return (
    <section className="section container-div cuisines-div">
      <SectionTitle
        title="International Cuisines"
        desc="Incredibly Tasty International Dish"
      />

      <div className="cuisines grid">
        <div className="cuisines__left grid">
          {cuisinesDataLeft.map(({ title, id, desc, img }) => (
            <div key={id} className="cuisines__left__col">
              <div className="cuisines__left__col-img">
                <img src={img} alt="" />
              </div>
              <div className="cuisines__left__col-desc">
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cuisines__middle">
          <img src={middleImg} alt="" />
        </div>
        <div className="cuisines__right grid">
          {cuisinesDataRight.map(({ title, id, desc, img }) => (
            <div key={id} className="cuisines__left__col">
              <div className="cuisines__left__col-img">
                <img src={img} alt="" />
              </div>
              <div className="cuisines__left__col-desc">
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cuisines;
