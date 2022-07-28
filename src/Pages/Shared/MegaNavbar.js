import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./Navlink";


const MegaNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-slate-600 flex ">
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
        {/* <div className="md:mr-44">
          <h1 className="text-2xl  text-sky-300">Easy Mart</h1>
        </div> */}

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

      <div className="flex font-medium justify-center">
        {/* For mobile topBar  */}
        <div className="z-50 p-5 md:w-auto w-full flex  justify-between">
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
          {/* <h1 className="md:cursor-pointer md:hidden h-9 text-sky-400 text-2xl">
            Easy Mart
          </h1> */}

          <div className="text-3xl md:hidden">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>

        <ul className="md:flex hidden  uppercase items-center gap-8 font-[poppins]">
          <li>
            <Link to="/" className="py-7 px-2 inline-block text-white">
              Catagories
            </Link>
          </li>
          <NavLink />
        </ul>

        {/* For  Mobile  nav  */}
        <ul
          className={`
                md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4
                duration-500 ${open ? "left-0" : "left-[-100%]"}
                `}
        >
          <li>
            <div className="md:ml-10 border-b border-gray-500 py-2 w-[310px] flex justify-center items-center">
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-1 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Search Products"
              ></input>
              <div className="text-2xl text-gray-400">
                <ion-icon name="search-outline"></ion-icon>
              </div>
            </div>

            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLink />
        </ul>
      </div>
    </nav>
  );
};

export default MegaNavbar;
