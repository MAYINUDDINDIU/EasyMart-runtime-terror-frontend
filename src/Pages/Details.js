import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../features/collectionSlice";
import auth from "../firebase.init";

const Details = () => {
  const [user] = useAuthState(auth);
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState(1);
  const [disable, setDisable] = useState(false);
  const increaseAmount = () => {
    if (amount < selectedProduct.quantity) {
      setAmount(amount + 1);
    }
  };
  const decreaseAmount = () => {
    if (amount >= 1) {
      setAmount(amount - 1);
    }
  };
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const selectedProduct = products.find(
    (product) => product?._id === productId
  );
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    selectedProduct.amount = amount;
    selectedProduct.email = user?.email;
    dispatch(addToCart(selectedProduct));
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row shadow-2xl">
        <div className="h-90 w-90 ">
          <img
            src={selectedProduct?.img}
            alt="productImg"
            className="object-fill	 h-90 w-96"
          />
        </div>

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
              <button className="bg-gray-100 p-2" onClick={decreaseAmount}>
                <ion-icon name="remove-outline"></ion-icon>
              </button>
              <input
                type="number"
                name="number"
                className="border mx-3 w-1/5 p-2"
                value={amount}
              />
              <button className="bg-gray-300 p-2" onClick={increaseAmount}>
                <ion-icon name="add-outline"></ion-icon>
              </button>
            </span>
          </div>
          <div className=" flex justify-between">
            <button className="btn text-black bg-green-500 hover:bg-green-400  mt-10 w-1/2  border-0 b">
              Buy Now
            </button>
            <button
              className="btn   mt-10 w-1/2 ml-3 btn-warning border-0 "
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
