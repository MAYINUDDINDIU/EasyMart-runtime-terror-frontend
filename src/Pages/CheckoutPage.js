import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import Payment from "./Payment";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import "./CheckoutPage.css";
import CodForm from "./Shared/CodForm";
const CheckoutPage = () => {
  const [user] = useAuthState(auth);
  const stripePromise = loadStripe(
    "pk_test_51L1AzLJrLiGvRoTN0Zc3UV5YdQvGLf66Wu5iMzkoYa0vD9I1iGQRZfn1lvv5lBfs8ZjPUJ1iUGfm1tSMHUV0RY8y00FJtpQCeM"
  );
  const [cod, setCod] = useState(true);
  const [card, setCard] = useState(false);
  const [bkash, setBkash] = useState(false);
  return (
    <div className="flex justify-center ">
      <section className="mt-10 flex   lg:w-3/4 md:w-3/4 sm:w-full w-full justify-around  p-5 lg:flex-row md:flex-row sm:flex-col flex-col">
        <div className="lg:w-1/2 md:w-1/2 sm:w-full w-full text-left  p-5 uppercase text-gray-500">
          <h1 className="text-3xl mb-3 font-semibold">Checkout</h1>
          <h3>Personal Details</h3>
          <hr />
          <form className="form-control w-1/2 my-5 ">
            <label className="label ">
              <span className="label-text text-gray-400">Name</span>
            </label>
            <input
              type="text"
              className="textarea input-bordered  disabled:bg-slate-100 border-0"
              value={user?.displayName}
              disabled
            />
            <label className="label">
              <span className="label-text text-gray-400">Email</span>
            </label>
            <input
              type="email"
              className="textarea input-bordered  disabled:bg-slate-100 border-0"
              value={user?.email}
              disabled
            />
          </form>
          <h3>Choose Payment Method</h3>
          <hr />
          <div className="flex justify-between mt-5 text-gray-400 text-xs">
            <span className="flex items-center">
              {" "}
              <input
                type="radio"
                id="cod"
                name="radio-1"
                class="radio  "
                value="Cash On Delivery"
                checked={cod}
                onClick={(e) => {
                  setCod(e.target.value);
                  setCard(!e.target.value);
                  setBkash(!e.target.value);
                }}
              />
               {" "}
              <label
                for="cod"
                className={`${cod ? "text-blue-500 font-bold" : null}`}
              >
                Cash On Delivery
              </label>
            </span>
            <span className="flex items-center">
              {" "}
              <input
                type="radio"
                id="card"
                name="radio-2"
                class="radio"
                value="Card Payment"
                checked={card}
                onClick={(e) => {
                  setCod(!e.target.value);
                  setCard(e.target.value);
                  setBkash(!e.target.value);
                }}
              />
               {" "}
              <label
                for="card"
                className={`${card ? "text-blue-500 font-bold" : null}`}
              >
                Card Payment
              </label>
            </span>
            <span className="flex items-center">
              {" "}
              <input
                type="radio"
                id="bkash"
                name="radio-3"
                class={`radio`}
                value="Bkash Payment"
                checked={bkash}
                onClick={(e) => {
                  setCod(!e.target.value);
                  setCard(!e.target.value);
                  setBkash(e.target.value);
                }}
              />
               {" "}
              <label
                for="bkash"
                className={`${bkash ? "text-blue-500 font-bold" : null}`}
              >
                Bkash Payment
              </label>
            </span>
          </div>
          {/* Relevent Images */}
          {cod && (
            <div>
              {/* For  COD */}
              <img
                src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2017/08/2.jpg"
                className="h-48 w-full mt-10 object-fill"
                alt="COD"
              />
            </div>
          )}
          {card && (
            <div>
              {/* For  COD */}
              <img
                src="https://i0.wp.com/www.inventiva.co.in/wp-content/uploads/2022/02/Best-Credit-Cards-Accepted-Everywhere.jpg?resize=780%2C470&ssl=1"
                className="h-48 w-full mt-10 object-fill"
                alt="COD"
              />
            </div>
          )}
          {bkash && (
            <div>
              {/* For  COD */}
              <img
                src="https://i0.wp.com/motoautobd.com/wp-content/uploads/2020/06/5a39d37486e4b-resize-710x380-1.jpg?fit=710%2C380&ssl=1"
                className="h-48 w-full mt-10 object-fill"
                alt="Bkash"
              />
            </div>
          )}
        </div>
        <div className="lg:w-1/4 md:w-1/4 sm:w-full w-full ">
          {card && (
            <div className="shadow-xl">
              {" "}
              <p className="text-xl   bg-blue-500 text-white p-3 mb-5">
                Pay With Bank Card
              </p>{" "}
              <div className="flex mt-10 w-3/4 justify-center mb-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
                  alt="visa"
                  className="h-7 mr-2"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/179/179431.png"
                  alt="amex"
                  className="h-7 mr-2"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/196/196559.png"
                  alt="jcb"
                  className="h-7 mr-2"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/349/349230.png"
                  alt="discover"
                  className="h-7 mr-2"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/217/217449.png"
                  alt="union Pay"
                  className="h-7 mr-2"
                />
              </div>
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </div>
          )}
          {cod && (
            <div className="shadow-xl">
              <p className="text-xl mb-3 bg-green-500 text-white p-3">
                Order Form
              </p>
              <CodForm></CodForm>
            </div>
          )}
          {bkash && (
            <>
              <p className="text-xl   bg-pink-500 text-white p-3 mb-5">
                Pay With Bkash
              </p>
              <div>
                <img
                  src="https://www.bdshop.com/pub/media/catalog/product/b/k/bkash-payment-gateway-plugin-for-magento-2.png"
                  alt="bkash"
                />
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
