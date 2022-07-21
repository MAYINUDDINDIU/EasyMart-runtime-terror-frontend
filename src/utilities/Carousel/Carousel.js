import React from 'react';

const Carousel = () => {
  return (
    <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://icms-image.slatic.net/images/ims-web/a2fb9e8e-46c5-406f-9a98-1c347d038e0f.jpg" className="w-full" alt='firstImg' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://icms-image.slatic.net/images/ims-web/06cbef66-4555-4e8a-8181-d42215207e35.jpg_1200x1200.jpg" className="w-full" alt='secondImg' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://icms-image.slatic.net/images/ims-web/b6fe4c0f-b340-4855-bb7e-bbf6a172eb01.jpg" className="w-full" alt='thirdImg' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://icms-image.slatic.net/images/ims-web/87102e2a-3ce2-482f-bc45-4a1df2d3f00e.jpg" className="w-full" alt='fourthImg' />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;