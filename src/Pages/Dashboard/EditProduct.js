import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../features/productSlice';

const EditProduct = () => {
  const location = useLocation();
  const [id, setId] = useState(location.state._id);
  console.log(id)
  //For selection
  const options = [
    { value: "", text: "--Choose an option--" },
    { value: "Free Shipping", text: "Free Shipping" },
    { value: "5% Off", text: "5% Off" },
    { value: "Buy One Get One", text: "Buy One Get One" },
  ];
  const [offer, setOffer] = useState(options[0].value);
  const handleChange = (event) => {
    console.log(event.target.value);
    setOffer(event.target.value);
  };

  const [name, setName] = useState(location.state.name);
  const [price, setPrice] = useState(location.state.price);
  const [quantity, setQuantity] = useState(location.state.quantity);
  const [img, setImg] = useState(location.state.img);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateProduct({ id, name, price, quantity, img, offer }))
    navigate('/dashboard', { replace: true })
  }
  return (
    <div className='mt-2'>
      <h1 className='text-3xl font-bold'>Edit Product</h1>
      <div className='flex justify-center text-black'>
        <form onSubmit={handleSubmit} className='card flex-shrink-0 w-full text-black max-w-sm p-2 shadow-2xl bg-base-100'>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product's Name</span>
            </label>
            <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} className="input input-bordered input-group-lg text-black" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product's Price</span>
            </label>
            <input type="text" name='price' value={price} onChange={(e) => setPrice(e.target.value)} className="input input-bordered input-group-lg text-black" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product's Quantity</span>
            </label>
            <input type="text" name='quantity' onChange={(e) => setQuantity(e.target.value)} value={quantity} className="input input-bordered input-group-lg text-black" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product's Image</span>
            </label>
            <input type="text" name='url' value={img} onChange={(e) => setImg(e.target.value)} className="input input-bordered input-group-lg text-black" />
          </div>
          <div className="form-control mb-2">
            <label className="label">
              <span className="label-text">Which Offer you want to add?</span>
            </label>
            <div className="input-group text-black">
              <select
                value={offer}
                onChange={handleChange}
                className="select select-bordered w-[365px] text-black"
              >
                {options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="text-black"
                  >
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button type='submit' className='btn text-white font-bold uppercase'>Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;