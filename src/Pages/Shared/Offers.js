import React, { useEffect, useState } from "react";
import { RiCoupon2Fill } from "react-icons/ri";
import { TbDiscount2 } from "react-icons/tb";
import { AiOutlineGift } from "react-icons/ai";
const Offers = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
   
  const offers = products.filter(product=>product?.offer )
  return (
    <div>
      <div className="bg-white text-left p-5 font-semibold shadow-2xl my-5">
        <h3 className="text-xl border-2 border-orange-600 p-3   font-bold text-center mb-3 mt-5">
          Offers
        </h3>
        <div className="flex">
          <p className="flex items-center">
            <RiCoupon2Fill className="mr-2 text-2xl"></RiCoupon2Fill> Coupons
          </p>{" "}
          <p className="mx-3 h-7 w-7 p-1 border border-red-500 rounded-full text-sm text-red-500 text-center font-bold">
            1
          </p>
        </div>
        <p className="flex items-center">
          <AiOutlineGift className="mr-2 text-2xl"></AiOutlineGift>Gift
        </p>
        <p className="flex items-center">
          <TbDiscount2 className="mr-2 text-2xl"></TbDiscount2>
          Discounts{" "}
          <span className="mx-3 h-7 w-7 p-1 border border-red-500 rounded-full text-sm text-red-500 text-center font-bold">
            {offers.length}
          </span>
        </p>
      </div>

      <hr />
    </div>
  );
};

export default Offers;
