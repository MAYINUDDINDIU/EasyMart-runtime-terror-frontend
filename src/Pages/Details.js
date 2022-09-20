import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../features/collectionSlice";
import auth from "../firebase.init";
import { BsFacebook, BsSkype, BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import "./Details.css";
const Details = () => {
  const [user] = useAuthState(auth);
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState(1);
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
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
    fetch("https://limitless-everglades-36569.herokuapp.com/product")
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
    <div>
      <div className=" details w-full ">
        <div className=" h-64	  bg-cover bg-no-repeat    bg-top  flex text-left items-center justify-around">
          <div className="hero-content    flex justify-start  w-1/2 text-left border">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl ">
                <span className="font-bold uppercase">Product Details</span>
              </h1>
            </div>
          </div>
          <div className="w-1/4"></div>
        </div>
      </div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="h-full w-1/2 ">
            <img
              src={selectedProduct?.img}
              alt="productImg"
              className="object-fill	 h-90 w-96"
            />
          </div>

          <div className="text-left uppercase ml-10  p-5 w-1/2">
            <h1 className="text-3xl font-bold">{selectedProduct?.name}</h1>
            {/* Ratings */}
            <section className="flex items-center">
              <div className="rating mt-5">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <span className="mt-5 ml-3 font-semibold">(3.5)</span>
            </section>
            {selectedProduct?.offer === "5% Off" ? (
              <div className="my-3 flex items-center">
                {" "}
                <h2 className="text-2xl font-bold text-orange-500 ">
                  ${" "}
                  {selectedProduct?.price - (selectedProduct?.price * 5) / 100}
                </h2>
                <small className="line-through text-gray-400 ml-3">
                  $ {selectedProduct?.price}&nbsp;&nbsp;
                </small>
                <span> {selectedProduct?.offer}</span>
              </div>
            ) : (
              <div>
                {" "}
                <h2 className="text-2xl font-bold text-orange-500 mt-3">
                  $ {selectedProduct?.price}
                </h2>
              </div>
            )}

            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <div className="my-3 w-full flex items-center">
              Quantity:{" "}
              <span className="ml-3 w-3/4">
                <button className="bg-gray-100 p-2" onClick={decreaseAmount}>
                  <ion-icon name="remove-outline"></ion-icon>
                </button>
                <input
                  type="number"
                  name="number"
                  className="border mx-3 w-1/4 p-2"
                  value={amount}
                />
                <button className="bg-gray-300 p-2" onClick={increaseAmount}>
                  <ion-icon name="add-outline"></ion-icon>
                </button>
              </span>
              {/* Add to cart button */}
              <div className="w-full flex items-start">
                <button
                  className="btn w-full btn-accent text-white border-0 rounded-none"
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <button
              className="btn w-full btn-accent text-white border-0 uppercase mt-5 rounded-none"
              onClick={() => {
                handleAddToCart();
                navigate("/addtocart");
              }}
            >
              Buy It Now
            </button>
            {/* Additional */}
            <ul className="mt-5">
              <li>
                <b>Barcode: </b>34567
              </li>
              <li>
                <b>Vendor: </b>
                FID
              </li>
              <li>
                <b>Catagory: </b>
                {selectedProduct?.catagory}
              </li>
              <li className="w-full flex items-center">
                <b>Social Share: </b>{" "}
                <BsFacebook className="text-2xl ml-3 text-blue-500"></BsFacebook>
                <AiFillTwitterCircle className="text-3xl ml-3 text-[#00acee]"></AiFillTwitterCircle>
                <IoLogoWhatsapp className="text-3xl ml-3 text-[#4FCE5D]"></IoLogoWhatsapp>
                <BsYoutube className="text-3xl ml-3 text-[#c4302b]"></BsYoutube>
                <span className="mt-2 mx-3 "></span>
              </li>
              <li></li>
            </ul>
            <h2 className="font-bold mt-3">Guaranteed Safe Checkout</h2>
            <div className="flex mt-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
                alt="visa"
                className="h-10 mr-5"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/179/179431.png"
                alt="amex"
                className="h-10 mr-5"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/196/196559.png"
                alt="jcb"
                className="h-10 mr-5"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/349/349230.png"
                alt="discover"
                className="h-10 mr-5"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/217/217449.png"
                alt="union Pay"
                className="h-9 mr-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
