import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../utilities/Loading/Loading";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
const Payment = () => {
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const [user] = useAuthState(auth);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addtocart")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
  const filteredProductsByEmail = cart.filter((p) => p.email === user?.email);
  const navigate = useNavigate();

  if (transactionId) {
    //Adding products to order after paying
    fetch(`http://localhost:5000/addToOrders`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ filteredProductsByEmail }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    //Removing Products from cart
    fetch(
      `http://localhost:5000/removeFromCart/${user?.email}`,
      {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  const { totalAmountToPay } = useParams();
  const totalPayment = {
    totalAmountToPay: totalAmountToPay,
  };
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    fetch(
      "http://localhost:5000/create_payment_intent",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(totalPayment),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, []);
  const handleSubmit = async (event) => {
    // Block native form submission.
    await event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    // Getting a reference to a mounted CardElement
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // Using card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error?.message || "");
      setProcessing(true);
      setSuccess("");
    } else {
      setCardError("");
      setSuccess("Congrats! your payment is done!");
    }
    if (processing) {
      return <Loading></Loading>;
    }
    //Confirming card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {},
        },
      });
    if (intentError) {
      setProcessing(false);
      setCardError(intentError.message);
      setSuccess("");
    } else {
      setCardError("");
      setProcessing(false);
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);
      //Updating Payment info in Orders
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {cardError && <p className="mt-2 text-red-500 text-left">{cardError}</p>}
      {success && (
        <div>
          <p className="mt-2 text-green-500 text-left">{success}</p>
          <p className="mt-2  text-left">
            <b className="text-purple-500">Transaction Id: </b>
            {transactionId}
          </p>
        </div>
      )}
      <p>
        Please Pay: <b>{totalPayment.totalAmountToPay}</b>
      </p>
      <button
        type="submit"
        disabled={!stripe || !clientSecret || success}
        className="btn btn-xs btn-secondary"
      >
        Pay
      </button>
    </form>
  );
};

export default Payment;
