import React, { useEffect, useState } from 'react';
import CarouselSlider from '../../componets/CarouselSlider/CarouselSlider';
import CatagorySelection from '../../componets/CatagorySelection/CatagorySelection';
import Carousel from '../../utilities/Carousel/Carousel';

import Product from '../Product/Product';
import MegaNavbar from '../Shared/MegaNavbar';

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
            <CarouselSlider></CarouselSlider>

        </div>
    );
};

export default Home;