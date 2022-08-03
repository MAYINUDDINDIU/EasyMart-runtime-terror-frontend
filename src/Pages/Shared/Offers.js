import React from "react";

const Offers = () => {
  return (
    <div>
      <div className="bg-white text-left p-5 font-semibold">
        <h3 className="text-xl bg-green-600 p-3 text-white font-bold text-center mb-3">
          Offers
        </h3>
        <div className="flex">
          <p>Coupons</p>{" "}
          <p className="mx-3 h-7 w-7 p-1 border border-red-500 rounded-full text-sm text-red-500 text-center font-bold">
            1
          </p>
        </div>
        <p>Gift</p>
        <p>
          Discounts{" "}
          <span className="mx-3 h-7 w-7 p-1 border border-red-500 rounded-full text-sm text-red-500 text-center font-bold">
            86
          </span>
        </p>
      </div>

      <hr />
    </div>
  );
};

export default Offers;
