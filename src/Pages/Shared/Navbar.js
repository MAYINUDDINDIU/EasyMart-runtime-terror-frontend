import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
const Navbar = () => {
  const navItems = (
    <>
     

      <li>
        <Link to="/" className="font-bold">
          <AiFillHome></AiFillHome>Home
        </Link>
      </li>
      <li tabIndex="0">
        <Link to="/completedTasks" className=" font-bold">
          <FaShoppingCart></FaShoppingCart>My Cart
        </Link>
      </li>
      <li tabIndex="0">
        <Link to="/todo" className="font-bold">
          <BsFillBagCheckFill></BsFillBagCheckFill>Checkout
        </Link>
      </li>
    </>
  );
  return (
    <div class="navbar bg-[#005cb2] lg:px-24  sticky top-0 z-50">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-screen ml-0"
          >
            {navItems}
          </ul>
        </div>
        <Link
          class=" normal-case font-bold drop-shadow text-2xl text-white"
          to="/"
        >
          EASY <span className="text-primary">MART</span>
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex ">
        <ul class="menu menu-horizontal p-0 text-white ">{navItems}</ul>
      </div>
      <div class="navbar-end">
      <div class="form-control mr-10">
          <div class="input-group">
            <input
              type="text"
              placeholder="Search…"
              class="input input-bordered text-black bg-white"
            />
            <button class="btn btn-square bg-success border-0 text-black hover:bg-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <Link to="/login" className="text-white font-bold mr-3">
          Login
        </Link>
        <Link to="/register" className="text-white font-bold mr-3">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
