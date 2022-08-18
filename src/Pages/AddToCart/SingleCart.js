import React from "react";
import { useDispatch } from "react-redux";
import { deleteCartData } from "../../features/cartSlice";

const SingleCart = ({ pd }) => {
    const { _id, img, price, name, quantity } = pd;

    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteCartData(id));
    };
    return (
        <div className="flex px-6 py-4 justify-between items-center border ">
            <section className="flex">
                <div>
                    <img className="w-20 mr-5" src={img} alt="" />
                </div>
                <div className=" font-bold text-left">
                    <p>Name: {name}</p>
                    <p>Price: ${price}</p>
                    <p>Available: {quantity}</p>
                    <p>
                        Quantity: <button className=" btn btn-active btn-ghost">-</button>{" "}
                        {quantity} <button className=" btn btn-active btn-ghost">+</button>
                    </p>
                    <p>Sub Total: ${price * quantity}</p>
                </div>
            </section>

            <div className="flex gap-4">
                <button className="btn btn-info text-white font-bold">Buy Now</button>
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-error rounded p-4 font-bold "
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default SingleCart;
