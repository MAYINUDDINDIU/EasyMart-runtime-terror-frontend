import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import Payment from "./Payment";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

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
      <section className="mt-10 flex   lg:w-3/4 md:w-3/4 sm:w-full w-full justify-around border p-5 lg:flex-row md:flex-row sm:flex-col flex-col">
        <div className="lg:w-1/2 md:w-1/2 sm:w-full w-full text-left border p-5 uppercase text-gray-500">
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
                class="radio"
                value="Cash On Delivery"
                checked={cod}
                onClick={(e) => {
                  setCod(e.target.value);
                  setCard(!e.target.value);
                  setBkash(!e.target.value);
                }}
              />
                <label for="cod">Cash On Delivery</label>
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
                <label for="card">Card Payment</label>
            </span>
            <span className="flex items-center">
              {" "}
              <input
                type="radio"
                id="bkash"
                name="radio-3"
                class="radio"
                value="Bkash Payment"
                checked={bkash}
                onClick={(e) => {
                  setCod(!e.target.value);
                  setCard(!e.target.value);
                  setBkash(e.target.value);
                }}
              />
                <label for="bkash">Bkash Payment</label>
            </span>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/4 sm:w-full w-full border">
          {card && (
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          )}
          {cod && (
            <>
              <p>Cash on delivery</p>
            </>
          )}
          {bkash && (
            <>
              <p>Bkash Payment</p>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
