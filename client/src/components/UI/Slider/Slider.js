import React from "react";
import Slider from "react-slick";
import classes from "./Slider.module.css";
import Button from "../Buton/Button";
import Cards from "../../Cards/Cards";

export default function SimpleSlider() {
  var settings = {
    // arrows: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    className: `${classes.Slider}`,
    nextArrow: <Button type="primary" />,
    prevArrow: <Button type="primary" />,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <Cards />
        </div>
        <div>
        <Cards />
        </div>
        <div>
        <Cards />
        </div>
        <div>
        <Cards />
        </div>
        <div>
        <Cards />
        </div>
        <div>
        <Cards />
        </div>
      </Slider>
    </>
  );
}
