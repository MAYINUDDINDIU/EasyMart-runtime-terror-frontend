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
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <img src={selectedProduct?.img} alt="productImg" />
        <div className="text-left ml-10  p-5">
          <h1 class="text-5xl font-bold">{selectedProduct?.name}</h1>
          <p class="py-6">
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
          <div className="my-3">Quantity: </div>
          <div className=" flex justify-between">
            <button class="btn text-black bg-green-500 hover:bg-green-400  mt-10 w-1/2  border-0 b">
              Buy Now
            </button>
            <button class="btn   mt-10 w-1/2 ml-3 btn-warning border-0 ">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;