import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, fetchProduct } from "../../features/productSlice";
import Loading from "../../utilities/Loading/Loading";
import AllProduct from "./AllProduct";
import SalesStatistics from "./Statistics/SalesStatistics";
import Summery from "./Summery";

const AllProducts = () => {
  const { isLoading, product, error } = useSelector(
    (state) => state.productReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <div>
      {" "}
      <Summery></Summery>
      <SalesStatistics></SalesStatistics>
      <div className="flex justify-center my-10">
        <div class="overflow-x-auto w-3/4 shadow-2xl">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Offers</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {product.map((pd, index = 0) => (
                <AllProduct key={pd._id} pd={pd}></AllProduct>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
