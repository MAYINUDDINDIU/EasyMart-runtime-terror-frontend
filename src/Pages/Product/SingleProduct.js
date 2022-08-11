import React, { useState } from "react";
import Modal from "../../features/Modal";
import "./SingleProduct.css";
const SingleProduct = ({ pd }) => {
  const { _id, name, img, price, quantity } = pd;
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className="card bordered rounded lg:w-60 w-72 h-80 hover:scale-105 duration-500 cardBg shadow-xl cursor-pointer">
      <section
        className="relative "
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <figure className="card_image">
          <div>
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
            <Modal pd={pd} key={_id}></Modal>
          </>
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
          <button className="btn btn-secondary btn-sm  rounded px-12 mt-3 ">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
