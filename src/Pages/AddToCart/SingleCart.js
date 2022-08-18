import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartData } from '../../features/cartSlice';
import { fetchProduct } from '../../features/productSlice';

const SingleCart = ({ pd }) => {
    const { _id, img, price, name, quantity } = pd;
    const [order, setOrder] = useState(0);

    const { isLoading, product, error } = useSelector(state => state.productReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    const handleIncrease = products => {
        if (order < quantity) {
            setOrder(order + 1)
        }

        const exist = product.filter(pd => pd._id === products._id)
        if (exist) {
            exist.pd.quantity = parseInt(exist.pd.quantity) - 1;
            const increseQuantity = exist.pd.quantity;

            const url = `http://localhost:5000/products/${pd._id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ increseQuantity })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }

    const handleReduce = products => {
        if (order >= 1) {
            setOrder(order - 1)
        }

        const exist = product.find(pd => pd._id === products._id)
        if (exist) {
            exist.quantity = parseInt(exist.quantity) + 1;
            const reduceQuantity = exist.quantity;

            const url = `http://localhost:5000/products/${pd._id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ reduceQuantity })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }


    const handleDelete = id => {
        dispatch(deleteCartData(id))
    }
    return (
        <div className="flex shadow-xl px-6 py-4 justify-between items-center">
            <div>
                <img className='w-36' src={img} alt="" />
            </div>
            <div className='text-xl font-bold'>
                <p>Name: {name}</p>
                <p>Price: ${price}</p>
                <p>Available: {quantity}</p>
                <p>Quantity: <button onClick={() => handleReduce(pd)} className='text-2xl btn btn-active btn-ghost'>-</button> {order} <button onClick={() => handleIncrease(pd)} className='text-2xl btn btn-active btn-ghost'>+</button></p>
            </div>
            <div className='flex gap-4'>
                <button className='btn btn-info text-white font-bold'>Buy Now</button>
                <button onClick={() => handleDelete(_id)} className="btn btn-error rounded p-4 font-bold ">
                    X
                </button>
            </div>
        </div>
    );
};

export default SingleCart;