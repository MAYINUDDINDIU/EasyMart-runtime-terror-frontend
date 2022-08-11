import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/collectionSlice";
import "./SingleProduct.css";
const SingleProduct = ({ pd }) => {
  const { name, img, price, quantity } = pd;
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(pd))
  }
  return (
    <div className="card bordered rounded lg:w-60 w-72 h-80 hover:scale-105 duration-500 cardBg shadow-xl cursor-pointer">
      <section
        className="relative"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <figure className="card_image">
          <div>
            <img className="h-48 lg:w-60 w-72 " src={img} alt="Shoes" />
          </div>
        </figure>
        {isHovering && (
          <button className="btn  bg-secondary hover:bg-secondary text-black border-0  absolute bottom-0 left-0 w-full rounded-none">
            Details &nbsp;
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        )}
      </section>

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
          <button onClick={handleAddToCart} className="btn btn-secondary btn-sm  rounded px-12 mt-3 ">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
