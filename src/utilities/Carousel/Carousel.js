import React from 'react';

const Carousel = () => {
  return (
    <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://img.freepik.com/premium-vector/online-shopping-banner-design-with-3d-cart-with-red-gift-white-background-with-balloons-shopping-bags-vector-illustration_548887-141.jpg?w=2000" className="w-full" alt='firstImg' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://img.freepik.com/premium-psd/creative-concept-social-media-post-promotion-sale-coming-soon-template-square-premium_287053-158.jpg?w=2000" className="w-full" alt='secondImg' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/f/AmazonStores/A21TJRUUN4KGV/e1adec1e6d29ba6f6a5c3f836dda0880.w1600.h800.jpg" className="w-full" alt='thirdImg' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://hungamadeal.co.in/wp-content/uploads/2018/10/flipkart-1.jpg" className="w-full" alt='fourthImg' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;