import React from "react";


import "./Product.css";
import { Link, Outlet } from "react-router-dom";

const Product = () => {

  return (
    <div className="justify-center mt-20 ">
      <h2 className="text-center lg:text-4xl drop-shadow mt-4 mb-10 font-bold">
        OUR BEST PRODUCTS
      </h2>

      <div className=" w-full mb-20">
        <ul className="menu flex-col md:flex-row justify-center gap-4 menu-horizontal">
          <button className='btn text-white font-bold'><li><Link to=''>All Collection</Link></li></button>
          <button className='btn text-white font-bold'><li><Link to='/mencollection'>Men's Collection</Link></li></button>
          <button className='btn text-white font-bold'><li><Link to='/womencollection'>Women's Collection</Link></li></button>
          <button className='btn text-white font-bold'><li><Link to='/kidcollection'>Kid's Collection</Link></li></button>
        </ul>
      </div>
      <Outlet></Outlet>


      {/* <Link to='/dashboard'><button className="btn text-white font-bold mt-2">See All Products</button></Link> */}
    </div>
  );
};

export default Product;
