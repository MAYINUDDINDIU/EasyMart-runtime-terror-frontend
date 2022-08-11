import React from 'react';
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/collectionSlice";

const SingleWomenCollection = ({ pd }) => {
    const { name, img, price, quantity } = pd;

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(pd))
    }
    return (
        <div className="card bordered rounded lg:w-60 w-72 h-80 hover:scale-105 duration-500 cardBg shadow-xl">
            <figure>
                <img className="h-48 lg:w-60 w-72" src={img} alt="Shoes" />
            </figure>
            <h6 className=" font-bold text-xl text-dark mt-3">{name}</h6>
            <p className="text-center">
                {" "}
                <span className="text-secondary  text-lg font-bold">{price}$</span>
            </p>
            <p className="text-center">
                {" "}
                <span className="text-secondary  text-lg font-bold">Available: {quantity}</span>
            </p>
            <div className="card-actions justify-center">
                <button onClick={handleAddToCart} className="btn btn-secondary btn-sm  rounded px-12 mt-3 ">
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default SingleWomenCollection;