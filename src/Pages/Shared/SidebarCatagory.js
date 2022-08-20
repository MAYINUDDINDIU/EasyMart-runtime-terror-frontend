import { toLower } from "lodash";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Offers from "./Offers";
const SidebarCatagory = () => {
  const links = [{name:"Men"},{name:"Women"},{name:"Kids"}]
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/product").then(res=>res.json()).then(data=>setProducts(data))
  },[])
  const [providedCatagory,setProvidedCatagory] = useState([]);
  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}


  const findSubcatagory = (catagory)=>{
    const subcatagories = products.filter(product=>product.catagory===catagory && product.subcatagory)
    const uniqueSubcatagories = getUniqueListBy(subcatagories,"subcatagory")
    console.log(uniqueSubcatagories);
    setProvidedCatagory(uniqueSubcatagories)
  }
  return (
    <div className="fixed w-1/5  border-r-gray border-t-0 border-2">
      <Offers></Offers>
      <div className="bg-white h-screen p-5">
        <h3 className="text-xl bg-[#E3F56C] p-3 text-black font-bold">
          Catagories
        </h3>
        {links.map((link) => (
          <div tabIndex="0" className="collapse collapse-arrow  bg-base-100 ">
    
            <div className="collapse-title  bg-base-100 font-medium text-left" onClick={()=>findSubcatagory(toLower(link.name))}>
              {link.name}
              
            </div>
            <div className="collapse-content  text-left" >
             

              {providedCatagory.map(sub=><p><Link to={`/${sub?.catagory}/${sub?.subcatagory}`} className=" text-left block border my-2">{sub?.subcatagory}</Link></p>)}
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarCatagory;
