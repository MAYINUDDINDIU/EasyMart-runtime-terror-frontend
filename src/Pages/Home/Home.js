import React, { useEffect, useState } from "react";
import CarouselSlider from "../../componets/CarouselSlider/CarouselSlider";
import CatagorySelection from "../../componets/CatagorySelection/CatagorySelection";
import FreeShipping from "../../componets/CatagoryWiseComponents/FreeShipping";
import Carousel from "../../utilities/Carousel/Carousel";
import Hero from "../../utilities/Hero";

const Home = () => {
  const [desktop, setDesktop] = useState(window.innerWidth > 650);
  const updatePic = () => {
    setDesktop(window.innerWidth > 650);
  };
  useEffect(() => {
    window.addEventListener("resize", updatePic);
    return () => window.removeEventListener("resize", updatePic);
  });
  return (
    <div>
      {/* {
                desktop?<MegaNavbar></MegaNavbar>:null
            } */}

      <Carousel></Carousel>
      <CatagorySelection></CatagorySelection>
      {/* <Product></Product> */}
      <div className="my-10"></div>
      <Hero></Hero>
      <FreeShipping></FreeShipping>
      <CarouselSlider></CarouselSlider>
    </div>
  );
};

export default Home;
