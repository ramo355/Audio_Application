import React from "react";
import Slider from "react-slick";
import classes from "./Slider.module.css";
import Button from "../Buton/Button";
import Cards from "../../Cards/Cards";

const cards = [
  {
    to: "/rock",
    src: process.env.PUBLIC_URL + "/images/rock-696x392.jpg",
    title: "Rock",
  },
  { to: "/pop", src: process.env.PUBLIC_URL + "/images/pop.jpg", title: "Pop" },
  {
    to: "/rap",
    src: process.env.PUBLIC_URL + "/images/RAP-696x387.jpg",
    title: "Rap",
  },
  {
    to: "/hiphop",
    src: process.env.PUBLIC_URL + "/images/hip-hop-grafiti-696x383.jpg",
    title: "Hip-Hop",
  },
  {
    to: "/electro",
    src: process.env.PUBLIC_URL + "/images/Electro-696x348.jpg",
    title: "Electro",
  },
  {
    to: "/jazz",
    src: process.env.PUBLIC_URL + "/images/jazz-3-696x461.jpg",
    title: "Jazz",
  },
  {
    to: "/trance",
    src: process.env.PUBLIC_URL + "/images/trance.jpg",
    title: "Trance",
  },
];

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

  const renderCards = () => {
    return cards.map((item, idx) => {
      return (
        <div key={idx}>
          <Cards to={item.to} src={item.src} title={item.title} />
        </div>
      );
    });
  };
  return (
    <>
      <Slider {...settings}>{renderCards()}</Slider>
    </>
  );
}
