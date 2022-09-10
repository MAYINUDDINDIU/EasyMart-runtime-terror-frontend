import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../features/collectionSlice";
import Modal from "../../features/Modal";
const SingleCatagory = ({ product }) => {
  const { _id, name, price, img, offer } = product;
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const handleDetail = (id) => {
    navigate(`/details/${id}`);
  };
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
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
        </figure>{" "}
        {isHovering && (
          <>
            {" "}
            <label
              for={`my-modal-${_id}`}
              className="btn modal-button bg-accent hover:bg-accent opacity-95 text-white border-0  absolute bottom-0 left-0 w-full rounded-none"
              onClick={() => {
                handleDetail(_id);
              }}
            >
              Details &nbsp;{" "}
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </label>
            {/* <Modal pd={product} key={_id}></Modal> */}
          </>
        )}
      </section>

      <div className="p-3 text-left">
        <h1 className=" text-lg text-black mt-1 font-semibold">{name}</h1>
        <div class="rating">
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
          />
        </div>
        <p className="">
          {" "}
          <span className="text-green-600 ">{offer}</span>
        </p>
        <p className="">
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
       
      </div>
    </div>
  );
};

export default SingleCatagory;
