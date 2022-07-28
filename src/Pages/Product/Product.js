import React, { useEffect } from "react";

import p1 from "../../assets/products/product1.jpg";
import p2 from "../../assets/products/product2.jpg";
import p3 from "../../assets/products/product3.jpg";
import p4 from "../../assets/products/product4.jpg";
import p5 from "../../assets/products/product5.jpg";
import "./Product.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../features/productSlice";
import SingleProduct from "./SingleProduct";
import Loading from "../../utilities/Loading/Loading";

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
          product.map(pd => <SingleProduct key={pd._id} pd={pd}></SingleProduct>)
        }

      </div>
    </div>
  );
};

export default Product;
