import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../features/productSlice";

const Details = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const selectedProduct = products.find(
    (product) => product?._id === productId
  );
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row shadow-2xl">
        <img src={selectedProduct?.img} alt="productImg" />
        <div className="text-left ml-10  p-5">
          <h1 className="text-5xl font-bold">{selectedProduct?.name}</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <hr />
          {selectedProduct?.offer === "5% Off" ? (
            <div className="my-3">
              {" "}
              <h2 className="text-4xl font-bold text-orange-500 mt-3">
                $ {selectedProduct?.price - (selectedProduct?.price * 5) / 100}
              </h2>
              <small className="line-through text-gray-400">
                $ {selectedProduct?.price}&nbsp;&nbsp;
              </small>
              <span> {selectedProduct?.offer}</span>
            </div>
          ) : (
            <div>
              {" "}
              <h2 className="text-4xl font-bold text-orange-500">
                $ {selectedProduct?.price}
              </h2>
            </div>
          )}
          <hr />
          <div className="my-3">
            Quantity:{" "}
            <span className="ml-3">
              <button className="bg-gray-100 p-2">
                <ion-icon name="remove-outline"></ion-icon>
              </button>
              <input
                type="number"
                name="number"
                className="border mx-3 w-1/5 p-2"
              />
              <button className="bg-gray-300 p-2">
                <ion-icon name="add-outline"></ion-icon>
              </button>
            </span>
          </div>
          <div className=" flex justify-between">
            <button className="btn text-black bg-green-500 hover:bg-green-400  mt-10 w-1/2  border-0 b">
              Buy Now
            </button>
            <button className="btn   mt-10 w-1/2 ml-3 btn-warning border-0 ">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
