import React, { useEffect, useState } from "react";

import { BsCurrencyDollar, BsMinecart, BsBag } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Summery = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="flex justify-center my-10">
      <div className="grid justify-between grid-cols-1 md:grid-cols-3 justify-items-center w-3/4">
        <div className="shadow-2xl flex h-24 w-64 items-center p-3">
          <BsCurrencyDollar className="text-5xl   bg-yellow-500 text-white rounded-full p-2"></BsCurrencyDollar>
          <div className="text-left ml-5">
            {" "}
            <p className="text-stone-400 font-bold">Total Sales</p>
            <h2 className="text-2xl font-bold">$2345.50</h2>
          </div>
        </div>
        <div className="shadow-2xl flex h-24 w-64 items-center p-3">
          <AiOutlineShoppingCart className="text-5xl bg-green-500  text-white rounded-full p-2"></AiOutlineShoppingCart>
          <div className="text-left ml-5">
            {" "}
            <p className="text-stone-400 font-bold">Total Orders</p>
            <h2 className="text-2xl font-bold">20</h2>
          </div>
        </div>
        <div className="shadow-2xl flex h-24 w-64 items-center p-3">
          <HiOutlineShoppingBag className="text-5xl bg-indigo-400 text-white rounded-full p-2"></HiOutlineShoppingBag>
          <div className="text-left ml-5">
            {" "}
            <p className="text-stone-400 font-bold">Total Products</p>
            <h2 className="text-2xl font-bold">{products?.length}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summery;
