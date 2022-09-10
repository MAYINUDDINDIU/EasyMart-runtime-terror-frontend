import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Offers from "./Offers";
import {
  FaTshirt,
  FaMale,
  FaFemale,
  FaBaby,
  FaHome,
  FaChair,
} from "react-icons/fa";
import {
  GiArmoredPants,
  GiRunningShoe,
  GiCookingPot,
  GiSoap,
} from "react-icons/gi";
import {
  MdLocalGroceryStore,
  MdFitnessCenter,
  MdSportsBaseball,
} from "react-icons/md";
import { BsSmartwatch, BsBicycle } from "react-icons/bs";
import PriceRange from "./PriceRange";
const SidebarCatagory = () => {
  const links = [
    { name: "Men" },
    { name: "Women" },
    { name: "Kids" },
    { name: "Groceries" },
    { name: "Electronic Accessories" },
    { name: "Home & Lifestyle" },
    { name: "Sports & Outdoors" },
  ];
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const [providedCatagory, setProvidedCatagory] = useState([]);
  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }

  const findSubcatagory = (catagory) => {
    const subcatagories = products.filter(
      (product) => product.catagory === catagory && product.subcatagory
    );
    const uniqueSubcatagories = getUniqueListBy(subcatagories, "subcatagory");
    console.log(uniqueSubcatagories);
    setProvidedCatagory(uniqueSubcatagories);
  };
  return (
    <div className="fixed w-1/5   h-screen overflow-y-scroll p-3">
      <Offers></Offers>

      <div className="bg-white  p-5 shadow-2xl mb-5">
        <h3 className="text-xl   bg-accent text-white p-3   font-bold  ">
          Catagories
        </h3>
        {links.map((link) => (
          <div tabIndex="0" className="collapse collapse-arrow  bg-base-100 ">
            <input type="checkbox" onClick={() => findSubcatagory(link.name)} />
            <div className="collapse-title  bg-base-100 text-xl text-left flex items-center">
              {link.name === "Men" && <FaMale></FaMale>}
              {link.name === "Women" && <FaFemale></FaFemale>}
              {link.name === "Kids" && <FaBaby></FaBaby>}
              {link.name === "Groceries" && (
                <MdLocalGroceryStore></MdLocalGroceryStore>
              )}
              {link.name === "Electronic Accessories" && (
                <BsSmartwatch></BsSmartwatch>
              )}
              {link.name === "Home & Lifestyle" && <FaHome></FaHome>}
              {link.name === "Sports & Outdoors" && (
                <MdSportsBaseball></MdSportsBaseball>
              )}
              &nbsp;&nbsp;{link.name}
            </div>
            <div className="collapse-content text-left ml-5">
              {providedCatagory.map((sub) => (
                <p>
                  <Link
                    to={`/catagories/${sub?.catagory}/${sub?.subcatagory}`}
                    className=" text-left flex items-center  my-2"
                  >
                    {sub.subcatagory === "Topwear" && <FaTshirt></FaTshirt>}
                    {sub.subcatagory === "Bottomwear" && (
                      <GiArmoredPants></GiArmoredPants>
                    )}
                    {sub.subcatagory === "Footerwear" && (
                      <GiRunningShoe></GiRunningShoe>
                    )}
                    {sub.subcatagory === "Cooking Ingredients" && (
                      <GiCookingPot></GiCookingPot>
                    )}
                    {sub.subcatagory === "Bath & Body" && <GiSoap></GiSoap>}
                    {sub.subcatagory === "Smart Watch" && (
                      <BsSmartwatch></BsSmartwatch>
                    )}
                    {sub.subcatagory === "Cycling" && <BsBicycle></BsBicycle>}
                    {sub.subcatagory === "Fitness" && (
                      <MdFitnessCenter></MdFitnessCenter>
                    )}
                    {sub.subcatagory === "Furniture" && <FaChair></FaChair>}
                    <span className="text-left mx-3">{sub?.subcatagory}</span>
                  </Link>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <PriceRange></PriceRange>
      </div>
    </div>
  );
};

export default SidebarCatagory;
