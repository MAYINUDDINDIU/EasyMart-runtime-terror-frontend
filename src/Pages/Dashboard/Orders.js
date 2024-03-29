import React, { useEffect } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrder } from '../../features/cartSlice';

const Orders = () => {
    const { isLoading, product, error } = useSelector((state) => state.cartSlice);
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(fetchOrder());
      }, [dispatch]);
    return (
        <div className="">
           <div className="shadow-2xl flex h-24 w-80 mt-8 mx-auto items-center p-3">
          <AiOutlineShoppingCart className="text-5xl bg-secondary  text-white rounded-full p-2"></AiOutlineShoppingCart>
          <div className="text-left ml-5">
            <p className="text-cyan-700 font-bold"><span className='text-2xl'>{product.length}</span> Order From All Users</p>
          </div>
        </div>
        <div className="px-6 shadow-2xl mt-8"> 
        <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
{
    product.map((product,index)=>{
        const { _id, name, img, price ,quantity} = product;
        return (
            <tr >
            <th>{index+1}</th>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>${price*quantity}</td>
          </tr>
        )
    })
}
            </tbody>
          </table>
        </div>
        </div>
    );
};

export default Orders;