import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../features/productSlice';

const AddProducts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();

        const posts = {
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
            <h1 className='text-4xl text-purple-800 font-bold'>Add Products</h1>
            <form onSubmit={handleSubmit} className='flex flex-col items-center gap-2 mt-4'>
                <div className="form-control">
                    <label className="input-group input-group-lg">
                        <span>Name</span>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered input-group-lg" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>Price</span>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered input-group-lg" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>Quantity</span>
                        <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered input-group-lg" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>URL</span>
                        <input type="text" name='url' placeholder="Image" className="input input-bordered input-group-lg" />
                    </label>
                </div>
                <button type='submit' className='btn text-white font-bold'>Add</button>
            </form>
        </div>
    );
};

export default AddProducts;