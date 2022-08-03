import React from "react";
import { RiCoupon2Fill } from "react-icons/ri";
import { TbDiscount2 } from "react-icons/tb";
import { AiOutlineGift } from "react-icons/ai";
const Offers = () => {
  return (
    <div>
      <div className="bg-white text-left p-5 font-semibold">
        <h3 className="text-xl bg-[#E3F56C] p-3 text-black font-bold text-center mb-3">
          Offers
        </h3>
        <div className="flex">
          <p className="flex items-center">
            <RiCoupon2Fill className="mr-2"></RiCoupon2Fill> Coupons
          </p>{" "}
          <p className="mx-3 h-7 w-7 p-1 border border-red-500 rounded-full text-sm text-red-500 text-center font-bold">
            1
          </p>
        </div>
        <p className="flex items-center">
          <AiOutlineGift className="mr-2"></AiOutlineGift>Gift
        </p>
        <p className="flex items-center">
          <TbDiscount2 className="mr-2"></TbDiscount2>
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
