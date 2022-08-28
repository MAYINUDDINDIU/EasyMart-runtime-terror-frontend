import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const Payment = () => {
  const { totalAmountToPay } = useParams();
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = (event) => {
    // Block native form submission.
    event.preventDefault();
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
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default Payment;
