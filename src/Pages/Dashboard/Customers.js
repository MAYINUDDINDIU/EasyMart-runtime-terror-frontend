import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { BsCurrencyDollar, BsMinecart, BsStarHalf } from "react-icons/bs";

const Customers = () => {
    const [user] = useAuthState(auth);
  const [reviewedProducts, setReviewedProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviewedProducts(data));
  }, []);
  const filteredReviewedProducts = reviewedProducts.filter(
    (product) => product.email === user?.email
  );
  //Loading all ordered products
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addtocart")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  const findProductById = (id) => {
    const foundProductById = products.find((p) => p._id === id);
    return foundProductById;
  };
    return (
        <div className=" flex justify-center mt-20">
        <div class="overflow-x-auto w-3/4">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Your Ordered Product </th>
                <th>Your Given Ratings</th>
                <th>Your Review</th>
              </tr>
            </thead>
            <tbody>
              {filteredReviewedProducts.map((product, index = 1) => (
                <tr>
                  <th key={product._id}>{index + 1}</th>
                  <td className="flex items-center">
                    {" "}
                    <img
                      src={findProductById(product?.productId)?.img}
                      alt="productImg"
                      className="h-20 w-20"
                    />{" "}
                    &nbsp;&nbsp;{findProductById(product?.productId)?.name}
                  </td>
                  <td><div className="flex items-center gap-1"><span>{product?.ratings}</span><span><BsStarHalf className="text-xl text-yellow-500"></BsStarHalf></span></div></td>
                  <td>{product?.review}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Customers;