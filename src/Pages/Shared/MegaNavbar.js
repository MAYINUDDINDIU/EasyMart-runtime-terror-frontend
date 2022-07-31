import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillBagCheckFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavLink from "./Navlink";

const MegaNavbar = () => {
  const [open, setOpen] = useState(false);
  const [desktop, setDesktop] = useState(window.innerWidth > 650);
  const updatePic = () => {
    setDesktop(window.innerWidth > 650);
  };
  useEffect(() => {
    window.addEventListener("resize", updatePic);
    return () => window.removeEventListener("resize", updatePic);
  });
  const menuItems = (
    <>
      <li>
        <Link to="/" className="font-bold flex items-center my-3">
          <AiFillHome></AiFillHome>&nbsp;&nbsp;
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link to="/" className="font-bold flex items-center my-3">
          <FaShoppingCart></FaShoppingCart>&nbsp;&nbsp;
          <span>My Cart</span>
        </Link>
      </li>
      <li>
        <Link to="/" className="font-bold flex items-center  my-3">
          <BsFillBagCheckFill></BsFillBagCheckFill>&nbsp;&nbsp;
          <span>Checkout</span>
        </Link>
      </li>
      <li>
        <Link to="/contact" className="font-bold flex items-center my-3">
          <BsFillTelephoneFill></BsFillTelephoneFill>&nbsp;&nbsp;
          <span>Contact Us</span>
        </Link>
      </li>
      <li>
        <Link to="/contact" className="font-bold flex items-center">
          <AiFillHome></AiFillHome>&nbsp;&nbsp;
          <span>Dashboard</span>
        </Link>
      </li>
    </>
  );
  const [showCatagories, setShowCatagories] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(true);
  const handleShowCatagories = () => {
    setShowCatagories(true);
    setShowMenuItems(false);
  };
  const handleShowMenuItems = () => {
    setShowMenuItems(true);
    setShowCatagories(false);
  };
  return (
    <nav className={` lg:flex ${desktop ? "bg-gray-600" : "bg-[#005cb2]"}`}>
      {/* Top Navbar it only show large screen  */}
      <div className="mx-20 p-5 md:flex hidden items-center justify-between">
        <div className="md:ml-10 border-b border-gray-500 py-2 flex justify-center items-center">
          <input
            class="appearance-none bg-transparent border-none w-full text-white mr-1 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Products"
          ></input>
          <div className="text-2xl text-white">
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </div>
        <div className="md:mr-44 ">
          {desktop ? null : (
            <h1 className="text-2xl  text-sky-300">Easy Mart</h1>
          )}
        </div>

        {/* <div className="flex gap-3 text-2xl cursor-pointer">
          <div>
            <ion-icon name="log-in-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="person-outline"></ion-icon>
          </div>
          <div>
            {" "}
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div> */}
      </div>

      {/* center navigation bar  */}

      <div className="flex font-medium justify-center ">
        {/* For mobile topBar  */}
        <div className="z-50 p-5 md:w-auto w-full flex  justify-between text-white">
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
          <h1 className="md:cursor-pointer md:hidden h-9 text-sky-400 text-2xl">
            <Link
              className=" normal-case font-bold drop-shadow text-2xl text-white"
              to="/"
            >
              EASY <span className="text-primary">MART</span>
            </Link>
          </h1>

          <div className="text-3xl md:hidden">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>

        <ul className="md:flex hidden  uppercase items-center gap-8 font-[poppins]">
          {/* <li>
            <Link to="/" className="py-7 px-2 inline-block text-white">
              Catagories
            </Link>
          </li> */}
          <NavLink />
        </ul>

        {/* For  Mobile  nav  */}
        <ul
          className={`
                md:hidden bg-[#005cb2] absolute w-full h-full bottom-0 py-24 pl-4 z-10 duration-500 text-white ${
                  open ? "left-0" : "left-[-100%]"
                }
                `}
        >
          <li>
            <div className="md:ml-10 border-b border-gray-500 py-2 w-[310px] flex justify-center items-center">
              <input
                class="appearance-none bg-transparent border-none w-full text-white mr-1 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Search Products"
              ></input>
              <div className="text-2xl text-white">
                <ion-icon name="search-outline"></ion-icon>
              </div>
            </div>
          </li>
          <li className="flex justify-between">
            <div className="w-1/2 cursor-pointer">
              <h4
                className={`text-center my-3 p-3 ${
                  showMenuItems ? "bg-primary" : "bg-gray-400 "
                }`}
                onClick={handleShowMenuItems}
              >
                Menu
              </h4>
              {showMenuItems ? menuItems : null}
              {showCatagories ? <NavLink /> : null}
            </div>
            <div className="w-1/2 cursor-pointer">
              {" "}
              <h4
                className={`text-center my-3 p-3 ${
                  showCatagories ? "bg-primary" : "bg-gray-400 "
                }`}
                onClick={handleShowCatagories}
              >
                Catagories
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MegaNavbar;
