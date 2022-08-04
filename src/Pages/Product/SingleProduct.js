import React from "react";
import "./SingleProduct.css";
const SingleProduct = ({ pd }) => {
  const { name, img, price, quantity } = pd;

  return (
    <div className="card bordered rounded lg:w-60 w-72 h-80 hover:scale-105 duration-500 cardBg shadow-xl cursor-pointer">
      <figure className="card_image">
        <img className="h-48 lg:w-60 w-72 " src={img} alt="Shoes" />
      </figure>
      <div className="p-3">
        {" "}
        <h1 className=" font-bold text-2xl text-dark mt-1">{name}</h1>
        <p className="text-center">
          {" "}
          <span className="text-neutral  text-lg font-bold">{price}$</span>
        </p>
        <p className="text-center">
          {" "}
          <span className="text-neutral  text-lg font-bold">
            Available: {quantity}
          </span>
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-secondary btn-sm  rounded px-12 mt-3 ">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
