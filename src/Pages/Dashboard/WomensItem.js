import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../features/productSlice';

const WomensItem = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();

        const posts = {
            women: e.target.women.value,
            name: e.target.name.value,
            price: e.target.price.value,
            quantity: e.target.quantity.value,
            img: e.target.url.value
        };
        // setValue(posts);
        dispatch(createProduct(posts))
        navigate('/dashboard', { replace: true })
    }
    return (
        <div>
            <h1 className='text-4xl text-indigo-800 font-bold my-4'>Add Products For Women's</h1>
            <form onSubmit={handleSubmit} className='flex flex-col items-center mx-auto gap-2 mt-4'>
                <input type="text" name='women' value='women' disabled className="input input-borderedn text-center font-bold text-3xl input-info w-full max-w-xs" />
                <input type="text" name='name' placeholder="Name" className="input input-bordered input-info w-full max-w-xs" />
                <input type="text" name='price' placeholder="Price" className="input input-bordered input-info w-full max-w-xs" />
                <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered input-info w-full max-w-xs" />
                <input type="text" name='url' placeholder="Image" className="input input-bordered input-info w-full max-w-xs" />
                <button type='submit' className='btn text-white font-bold'>Add</button>
            </form>
        </div>
    );
};

export default WomensItem;