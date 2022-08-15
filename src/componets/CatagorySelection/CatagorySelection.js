import React, { useEffect, useState } from "react";
import { BsCurrencyDollar, BsMinecart, BsBag } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SingleCatagory from "../CatagoryWiseProduct/SingleCatagory";
import { FaMale, FaFemale } from "react-icons/fa";
import { TbMoodKid } from "react-icons/tb";
const CatagorySelection = () => {
  const [products, setProducts] = useState([]);
  const [menProducts, setMenProducts] = useState([]);
  const [menClick, setMenClick] = useState(false);
  const [womenClick, setWomenClick] = useState(false);
  const [kidClick, setKidClick] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const catagoryWiseProductHandler = (catagory) => {
    const allMenProducts = products.filter(
      (product) => product.catagory === catagory
    );
    setMenProducts(allMenProducts);
  };
  const showAllProducts = () => {
    setWomenClick(false);
    setMenClick(false);
    setKidClick(false);
  };
  return (
    <section>
      <div className="flex justify-center my-10">
        <div className="px-6 lg:px-12 md:grid-cols-3 lg:grid-cols-4 gap-4  mt-5 mb-5 grid justify-center">
          <div
            className="shadow-2xl flex h-24 w-64 items-center p-3 cursor-pointer"
            onClick={showAllProducts}
          >
            <HiOutlineShoppingBag className="text-5xl   bg-blue-500 text-white rounded-full p-2"></HiOutlineShoppingBag>
            <div className="text-left ml-5">
              {" "}
              <p className="text-stone-400 font-bold">All Products</p>
            </div>
          </div>
          <div
            className="shadow-2xl flex h-24 w-64 items-center p-3 cursor-pointer"
            onClick={() => {
              setWomenClick(false);
              setMenClick(true);
              setKidClick(false);
              catagoryWiseProductHandler("men");
            }}
          >
            <FaMale className="text-5xl   bg-yellow-500 text-white rounded-full p-2"></FaMale>
            <div className="text-left ml-5">
              {" "}
              <p className="text-stone-400 font-bold">Men's Collection</p>
            </div>
          </div>
          <div
            className="shadow-2xl flex h-24 w-64 items-center p-3 cursor-pointer"
            onClick={() => {
              setWomenClick(true);
              setMenClick(false);
              setKidClick(false);
              catagoryWiseProductHandler("women");
            }}
          >
            <FaFemale className="text-5xl bg-green-500  text-white rounded-full p-2"></FaFemale>
            <div className="text-left ml-5">
              {" "}
              <p className="text-stone-400 font-bold">Women's Collection</p>
            </div>
          </div>
          <div
            className="shadow-2xl flex h-24 w-64 items-center p-3 cursor-pointer"
            onClick={() => {
              setWomenClick(false);
              setMenClick(false);
              setKidClick(true);
              catagoryWiseProductHandler("kids");
            }}
          >
            <TbMoodKid className="text-5xl bg-indigo-400 text-white rounded-full p-2"></TbMoodKid>
            <div className="text-left ml-5">
              {" "}
              <p className="text-stone-400 font-bold">Kid's Collection</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-6 lg:px-12 md:grid-cols-3 lg:grid-cols-4 gap-4  mt-5 mb-5 grid justify-center ">
        {!menClick && !womenClick && !kidClick
          ? products.map((product) => (
              <SingleCatagory
                key={product._id}
                product={product}
              ></SingleCatagory>
            ))
          : menProducts.map((product) => (
              <SingleCatagory
                key={product._id}
                product={product}
              ></SingleCatagory>
            ))}
      </div>
    </section>
  );
};

export default CatagorySelection;
