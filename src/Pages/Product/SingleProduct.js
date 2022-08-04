import React from 'react';

const SingleProduct = ({ pd }) => {
    const { img } = pd;
    return (
        <div className="card bordered rounded lg:w-60 w-72 h-80 hover:scale-105 duration-500 cardBg shadow-xl">
            <figure>
                <img className="h-48 lg:w-60 w-72" src={img} alt="Shoes" />
            </figure>
            <h6 className=" font-bold text-xl text-dark mt-3">Tops for Women</h6>
            <p className="text-center">
                {" "}
                <span className="text-secondary  text-lg font-bold">105$</span>
            </p>
            <div className="card-actions justify-center">
                <button className="btn btn-secondary btn-sm  rounded px-12 mt-3 ">
                    BUY NOW
                </button>
            </div>
        </div>
    );
};

export default SingleProduct;