import React from 'react';
import CarouselSlider from '../../componets/CarouselSlider/CarouselSlider';
import Carousel from '../../utilities/Carousel/Carousel';

import Product from '../Product/Product';
import MegaNavbar from '../Shared/MegaNavbar';

const Home = () => {
    return (
        <div>
            <MegaNavbar></MegaNavbar>
            <Carousel></Carousel>
            <Product></Product>
            <CarouselSlider></CarouselSlider>

        </div>
    );
};

export default Home;