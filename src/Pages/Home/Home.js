import React from 'react';
import CarouselSlider from '../../componets/CarouselSlider/CarouselSlider';
import Carousel from '../../utilities/Carousel/Carousel';

import Product from '../Product/Product';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Product></Product>
            <CarouselSlider></CarouselSlider>

        </div>
    );
};

export default Home;