import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './CarouselSlider.css'
import Slider from 'react-slick';
import products from './Products';


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
        // cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    return (
        <div className='slider'>
            <Slider {...settings}>
            {products.map(item =>(
                   <div className='card'>
                   <div className='card-top'>
                    <img className='w-60 h-60' src={item.image} alt={item.title} />
                    <h1>{item.title}</h1>
                     </div>
                       <div className='card-bottom'> 
                       <h3>{item.price}</h3>
                       <p>{item.category}</p>
                    </div> 
               </div>
                
            //    <div className=''>
            //      <div class="card w-96 bg-base-100 shadow-xl mt-10">
            //         <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            //         <div class="card-body">
            //             <h2 class="card-title">Shoes!</h2>
            //             <p>If a dog chews shoes whose shoes does he choose?</p>
            //             <div class="card-actions justify-end">
            //             <button class="btn btn-primary">Buy Now</button>
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