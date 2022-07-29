import React from 'react';

const AllProduct = ({ pd }) => {
    const { name, img, price, quantity } = pd;
    return (
        <div className="card bordered rounded lg:w-60 w-72 hover:scale-105 duration-500 cardBg shadow-xl">
            <figure>
                <img className="h-40 lg:w-60 w-72" src={img} alt="Shoes" />
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
                <button className="btn btn-secondary btn-sm  rounded px-12 mt-3 ">
                    Edit
                </button>
                <button className="btn btn-error btn-sm  rounded px-12 mt-3 ">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default AllProduct;