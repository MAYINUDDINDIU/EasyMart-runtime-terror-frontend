import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleCatagory from "../CatagoryWiseProduct/SingleCatagory";

const FreeShipping = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const freeShippingProducts = products.filter(
    (p) => p.offer === "Free Shipping"
  );
  return (
    <section className="flex justify-center ">
      <div className="mt-20  w-5/6 ">
        <h1 className="text-4xl font-bold p-3 bg-accent text-white">
          Free Shipping
        </h1>
        <div className="flex mt-5 lg:flex-row md:flex-row sm:flex-col flex-col p-3">
          <section className="lg:w-1/4 md:w-1/4 sm:w-full w-full">
            <h1 className="text-4xl font-bold bg-accent p-3 text-white">
              Free Shipping
            </h1>
            <img
              src="https://blog.konga.com/wp-content/uploads/2019/07/Free-Shipping.png"
              alt="free_shipping"
              className="h-full"
            />
          </section>

          <section className=" lg:w-3/4 md:w-3/4 sm:w-full w-full">
            <div className="px-6 lg:px-12 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-5 mb-5 grid justify-center ">
              {freeShippingProducts.map((p) => (
                <SingleCatagory key={p._id} product={p}></SingleCatagory>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default FreeShipping;
