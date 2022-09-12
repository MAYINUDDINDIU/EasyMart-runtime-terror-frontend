import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const MyReviewCollection = () => {
  const [user] = useAuthState(auth);
  const [reviewedProducts, setReviewedProducts] = useState([]);
  useEffect(() => {
    fetch("https://limitless-everglades-36569.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviewedProducts(data));
  }, []);
  const filteredReviewedProducts = reviewedProducts.filter(
    (product) => product.email === user?.email
  );
  //Loading all ordered products
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("https://limitless-everglades-36569.herokuapp.com/addtocart")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  const findProductById = (id) => {
    const foundProductById = products.find((p) => p._id === id);
    return foundProductById;
  };
  return (
    <div className=" flex justify-center mt-20">
      <div className="overflow-x-auto w-3/4">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Your Ordered Products </th>
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
                <td>{product?.ratings}</td>
                <td>{product?.review}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviewCollection;
