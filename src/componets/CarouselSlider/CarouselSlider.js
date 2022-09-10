import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselSlider.css";
import Slider from "react-slick";
import products from "./Products";

const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider ">
      <h1 className="uppercase font-bold text-4xl mb-10">Deals of the day</h1>
      <Slider {...settings}>
        {products.map((item) => (
          <div className="card bg-neutral">
            <div className="card-top">
              <img className="w-60 h-60" src={item.image} alt={item.title} />
              <h1 className="text-3xl bg-accent  text-white font-bold   uppercase">
                {item.title}
              </h1>
            </div>
            <div className="bg-neutral">
              {" "}
              <div className="card-bottom bg-neutral">
                <h3 className="text-3xl font-bold">{item.price}</h3>
                <p className="text-2xl">{item.category}</p>
              </div>
            </div>
          </div>

        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlider;
