import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleCatagory from "../../componets/CatagoryWiseProduct/SingleCatagory";

const SidebarCatagoryComponent = () => {
  const { catagory, subcatagory } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const subcatagories = products.filter(
    (product) =>
      product.catagory === catagory && product.subcatagory === subcatagory
  );
  return (
    <div className="h-screen">
      <div className=" px-6 lg:px-12 md:grid-cols-3 lg:grid-cols-4 gap-5  mt-20 mb-5 grid justify-center">
        {subcatagories.map((product) => (
          <SingleCatagory key={product._id} product={product}></SingleCatagory>
        ))}
      </div>
    </div>
  );
};

export default SidebarCatagoryComponent;
