import React, { useEffect } from "react";


import "./Product.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../features/productSlice";
import SingleProduct from "./SingleProduct";
import Loading from "../../utilities/Loading/Loading";
import { Link } from "react-router-dom";

const Product = () => {
  const { isLoading, product, error } = useSelector(state => state.productReducer)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch])
  return (
    <div className="justify-center mt-20 ">
      <h2 className="text-center lg:text-4xl drop-shadow mt-4 mb-10 font-bold">
        OUR BEST PRODUCTS
      </h2>
      {isLoading && <Loading></Loading>}
      {error && <h3>{error}</h3>}
      <div className=" px-6 lg:px-12 md:grid-cols-3 lg:grid-cols-4 gap-4  mt-5 mb-5 grid justify-center ">
        {
          product.slice(0, 4).map(pd => <SingleProduct key={pd._id} pd={pd}></SingleProduct>)
        }

      </div>
      <Link to='/dashboard'><button className="btn text-white font-bold mt-2">See All Products</button></Link>
    </div>
  );
};

export default Product;
