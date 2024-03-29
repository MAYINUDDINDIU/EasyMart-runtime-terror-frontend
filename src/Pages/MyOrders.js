import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';

const MyOrders = () => {
 
    const [user] = useAuthState(auth);
    const [cart, setCart] = useState([]);
    useEffect(() => {
      fetch("https://limitless-everglades-36569.herokuapp.com/displayOrders")
        .then((res) => res.json())
        .then((data) => setCart(data));
    }, []);
    const filteredProductsByEmail = cart.filter((p) => p.email === user?.email);
    const navigate = useNavigate();
    const handleReview = (id)=>{
        navigate(`/review/${id}`);
    }
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th></th>
        <th>Product </th>
        <th>Amount</th>
        <th>Review</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
filteredProductsByEmail.map((product,index=1)=> <tr>
    <th key={product._id}>{index+1}</th>
    <td>{product?.name}</td>
    <td>{product?.amount}</td>
    <td><button className='btn btn-secondary' onClick={()=>{handleReview(product?._id)}}>Review</button></td>
    <td><button className='btn btn-secondary'>Pay</button></td>
   </tr>)
      }
     
   
     
 
      
    </tbody>
  </table>
</div>
    );
};

export default MyOrders;