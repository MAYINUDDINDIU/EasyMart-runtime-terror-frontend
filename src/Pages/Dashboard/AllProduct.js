import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../features/productSlice';

const AllProduct = ({ pd }) => {
    const { _id, name, img, price, quantity } = pd;
    const dispatch = useDispatch();

    const handleDelete = id => {
        dispatch(deleteProduct(id))
    }
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
                <Link to='/dashboard/editproduct' state={{ _id, name, price, quantity, img }}><button className="btn btn-secondary btn-sm  rounded px-12 mt-3 ">
                    Edit
                </button></Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm  rounded px-12 mt-3 ">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default AllProduct;