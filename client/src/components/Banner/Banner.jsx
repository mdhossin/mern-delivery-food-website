import { Carousel } from "react-bootstrap";
import React from "react";

import sliderOne from "../../assets/images/slide1-bg.webp";
import sliderTwo from "../../assets/images/slide2-bg.webp";

const Banner = () => {
  const bannerData = [
    {
      id: 1,
      imgPath: sliderOne,
      title: "Tasty Bites Healthy Foods",
      desc: "Mega Discounts On",
      discount: "10 - 50% OFF",
    },

    {
      id: 2,
      imgPath: sliderTwo,
      title: "eat Dish @ Great Price  ",
      desc: "Home Made Dish On Your Doorstep",
      discount: "10 - 15% OFF",
    },
  ];

  return (
    <Carousel fade className="banner">
      {bannerData.map((banner, i) => (
        <Carousel.Item key={`banner-${i}`}>
          <img
            className="d-block w-100"
            src={banner.imgPath}
            alt="First slide"
          />
          <Carousel.Caption className="banner__desc container-div">
            <p>{banner.desc}</p>
            <h1>{banner.title}</h1>
            <p>{banner.discount}</p>
            <button>View Dishes</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
