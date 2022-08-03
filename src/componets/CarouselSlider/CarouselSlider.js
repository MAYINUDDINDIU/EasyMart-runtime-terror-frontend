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
              <h1 className="text-3xl bg-secondary  text-neutral font-bold   uppercase">
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

          //    <div className=''>
          //      <div className="card w-96 bg-base-100 shadow-xl mt-10">
          //         <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          //         <div class="card-body">
          //             <h2 class="card-title">Shoes!</h2>
          //             <p>If a dogs chews shoes whose shoes does he choose?</p>
          //             <div class="card-actions justify-end">
          //             <button class="btn btn-primary">Buy Now</button>
          //         <div className="card-body">
          //             <h2 className="card-title">Shoes!</h2>
          //             <p>If a dog chews shoes whose shoes does he choose?</p>
          //             <div className="card-actions justify-end">
          //             <button className="btn btn-primary">Buy Now</button>
          //             </div>
          //         </div>
          //     </div>
          //    </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlider;
