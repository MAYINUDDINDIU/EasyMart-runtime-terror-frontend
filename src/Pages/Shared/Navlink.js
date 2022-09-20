import { toLower } from "lodash";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const NavLink = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const links = [{ name: "Men" }, { name: "Women" }, { name: "Kids" }];
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://limitless-everglades-36569.herokuapp.com/product")
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
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group font-sans normal-case font-bold">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group text-black"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
                findSubcatagory(toLower(link.name));
              }}
            >
              {link.name}

              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>

              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"> </ion-icon>
              </span>
            </h1>
          </div>

          {/* mobile menues  */}
          <div
            className={`
                       ${heading === link.name ? "md:hidden" : "hidden"}
                    `}
          >
            {/* {sublinks}  */}
            {providedCatagory.map((sub) => (
              <div>
                <div>
                  <Link
                    to={`/${sub?.subcatagory}`}
                    onClick={() =>
                      subHeading !== sub.subcatagory
                        ? setSubHeading(sub.subcatagory)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-bold md:pr-0 pr-5 flex justify-between items-center"
                  >
                    {sub.subcatagory}
                  </Link>
                  <div
                    className={`${
                      subHeading === sub.subcatagory ? "md:hidden" : "hidden"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLink;
