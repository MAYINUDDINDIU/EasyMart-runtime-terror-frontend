import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/collectionSlice";
import Modal from "../../features/Modal";
const SingleCatagory = ({ product }) => {
  const { _id, name, price, img, quantity, offer } = product;
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className=" bordered rounded lg:w-60 w-72   hover:scale-105 duration-500 cardBg shadow-2xl cursor-pointer">
      <section
        className="relative "
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <figure className="card_image -z-10 overflow-clip">
          <div className="h-48 lg:w-60 w-72">
            <img className="h-48 lg:w-60 w-72 " src={img} alt="Shoes" />
          </div>
        </figure>
        {isHovering && (
          <>
            {" "}
            <label
              for={`my-modal-${_id}`}
              class="btn modal-button bg-secondary hover:bg-secondary text-black border-0  absolute bottom-0 left-0 w-full rounded-none"
            >
              Details &nbsp;{" "}
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </label>
            <Modal pd={product} key={_id}></Modal>
          </>
        )}
      </section>

      <div className="p-3">
        {" "}
        <h1 className=" font-bold text-2xl text-black mt-1">{name}</h1>
        <p className="text-center">
          {" "}
          <span className="text-green-600  text-lg font-bold">{offer}</span>
        </p>
        <p className="text-center">
          {" "}
          {offer === "5% Off" ? (
            <>
              <span className="text-gray-400  text-lg   line-through ">
                ${price}
              </span>
              <span className="text-black text-2xl mx-3 font-bold">
                ${price - (price * 5) / 100}
              </span>
            </>
          ) : (
            <span className="text-neutral   text-2xl  font-bold">${price}</span>
          )}
        </p>
        {/* <p className="text-center">
            {" "}
            <span className="text-neutral  text-lg font-bold">
              Available: {quantity}
            </span>
          </p> */}
        <div className="card-actions justify-center">
          <button
            onClick={handleAddToCart}
            className="btn btn-secondary btn-sm  rounded px-12 mt-3 "
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCatagory;
