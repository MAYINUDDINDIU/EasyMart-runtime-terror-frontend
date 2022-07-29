import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../features/productSlice';

const EditProduct = () => {
    const location = useLocation();
    const [id, setId] = useState(location.state._id);
    console.log(id)
    const [name, setName] = useState(location.state.name);
    const [price, setPrice] = useState(location.state.price);
    const [quantity, setQuantity] = useState(location.state.quantity);
    const [img, setImg] = useState(location.state.img);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateProduct({ id, name, price, quantity, img }))
        navigate('/dashboard', { replace: true })
    }
    return (
        <div>
            <h1 className='text-4xl text-green-500 font-bold'>Edit Product</h1>
            <form onSubmit={handleSubmit} className='flex flex-col items-center gap-2 mt-4'>
                <div className="form-control">
                    <label className="input-group input-group-lg">
                        <span>Name</span>
                        <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} className="input input-bordered input-group-lg" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>Price</span>
                        <input type="text" name='price' value={price} onChange={(e) => setPrice(e.target.value)} className="input input-bordered input-group-lg" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>Quantity</span>
                        <input type="text" name='quantity' onChange={(e) => setQuantity(e.target.value)} value={quantity} className="input input-bordered input-group-lg" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>URL</span>
                        <input type="text" name='url' value={img} onChange={(e) => setImg(e.target.value)} className="input input-bordered input-group-lg" />
                    </label>
                </div>
                <button type='submit' className='btn text-white font-bold'>Edit</button>
            </form>
        </div>
    );
};

export default EditProduct;