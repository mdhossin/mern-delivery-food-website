import { Carousel } from "react-bootstrap";
import React from "react";
import { sliderData } from "../../utils/fakedata";

const Banner = () => (
  <Carousel fade className="banner">
    {sliderData.map((banner, i) => (
      <Carousel.Item key={`banner-${i}`}>
        <img className="d-block w-100" src={banner.imgPath} alt="First slide" />
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

export default Banner;
