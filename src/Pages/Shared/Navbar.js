import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome, AiFillInfoCircle, AiFillStar } from "react-icons/ai";
import { FaShoppingCart, FaUserAlt,FaSortDown } from "react-icons/fa";
import { BsFillTelephoneFill, BsStar, BsCart } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { getFromCart } from "../../features/cartSlice";
import { IoHelpCircleSharp } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  const { isLoading, product, error } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFromCart());
  }, [dispatch]);

  const [user] = useAuthState(auth);
  const filteredProducts = product.filter((p) => p?.email === user?.email);
  //Checking Admin
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://limitless-everglades-36569.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const selectedUser = users.find((u) => u.email === user?.email);
  const adminStatus = selectedUser?.role;
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    navigate("/login");
  };
  const navItems = (
    <>
      {console.log(selectedUser)}
      <li>
        <Link to="/" className="font-bold">
          <AiFillHome className="mr-[-8px]"></AiFillHome>Home
        </Link>
      </li>
      <li className="indicator relative" tabIndex="0">
        <span className="indicator-item top-4 right-2 text-2xl bg-transparent border-none absolute badge text-red-500 font-bold">
          {filteredProducts.length}
        </span>
        <Link to="/addtocart" className=" font-bold">
          <FaShoppingCart className="mr-[-8px]"></FaShoppingCart>My Cart
        </Link>
      </li>

      <li tabIndex="0">
        <Link to="/about" className="font-bold">
          <AiFillInfoCircle className="text-xl mr-[-8px]"></AiFillInfoCircle>About
        </Link>
      </li>
      {console.log(adminStatus)}
      <li tabIndex="0">
        <Link to="/help" className="font-bold">
          <IoHelpCircleSharp className="text-2xl mr-[-8px]"></IoHelpCircleSharp>Help
        </Link>
      </li>
      <li tabIndex="0">
        <Link to="/contact" className="font-bold">
          <BsFillTelephoneFill className="mr-[-8px]"></BsFillTelephoneFill>Contact Us
        </Link>
      </li>
      {adminStatus ? (
        <li tabIndex="0">
          <Link to="/dashboard" className="font-bold">
            <AiFillHome className="mr-[-8px]"></AiFillHome>Dashboard
          </Link>
        </li>
      ) : null}
    </>
   
  );
  return (
    <div className="navbar shadow-xl border-0  text-white  lg:px-24  sticky top-0 z-50 bg-secondary">
    
      {isLoading && <p>.</p>}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-screen ml-0"
          >
            {navItems}
          </ul>
        </div>
        {!adminStatus ? (
          <Link className=" normal-case font-bold drop-shadow text-2xl " to="/">
            EASY <span className="text-red-400">MART</span>
          </Link>
        ) : (
          <Link className=" normal-case font-bold drop-shadow text-2xl" to="/">
            EASY <span className="text-green-300">MART</span>
            <small style={{ fontSize: "15px" }} className="m-0 text-green-400">
              (Admin)
            </small>
          </Link>
        )}
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal p-0  ">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <label
              className=" mx-3 font-bold flex items-center cursor-pointer"
              for="my-modal-3"
            >
              <FaUserAlt className="mr-[-8px]"></FaUserAlt>&nbsp;&nbsp; {user?.displayName}{" "}<FaSortDown className="text-2xl mb-1"></FaSortDown>
            </label>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className=" modal-box absolute w-64 right-0 top-16 rounded-none text-left text-black">
                <label
                  for="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <Link
                  className="py-2 flex items-center hover:text-lime-500 cursor-pointer"
                  to="/profile"
                >
                  <CgProfile className="text-xl"></CgProfile> &nbsp;
                  &nbsp;Profile
                </Link>
                <Link
                  className="py-2 flex items-center hover:text-lime-500 cursor-pointer"
                  to="/orders"
                >
                  <BsCart className="text-xl"></BsCart> &nbsp; &nbsp;My Orders
                </Link>
                <Link
                  className="py-2 flex items-center hover:text-lime-500 cursor-pointer"
                  to="/myReviewCollection"
                >
                  <BsStar className="text-xl"></BsStar> &nbsp; &nbsp;My Reviews
                </Link>
                <h3 className="py-2 flex items-center hover:text-lime-500 cursor-pointer">
                  <MdOutlineCancel className="text-xl"></MdOutlineCancel> &nbsp;
                  &nbsp;My Returns
                </h3>
                <h3
                  className="py-2 flex items-center hover:text-lime-500 cursor-pointer"
                  onClick={logout}
                >
                  <RiLogoutBoxLine className="text-xl"></RiLogoutBoxLine>
                  &nbsp;&nbsp;Logout
                </h3>
              </div>
            </div>

            
          </>
        ) : (
          <>
            {" "}
            <Link to="/login" className=" font-bold mr-3 text-3xl">
              <ion-icon name="log-in-outline"></ion-icon>
            </Link>
            <Link to="/addtocart" className=" font-bold mr-3 text-3xl">
              <ion-icon name="cart-outline"></ion-icon>
            </Link>
            <Link to="/profile" className=" font-bold mr-3 text-3xl">
              <ion-icon name="person-outline"></ion-icon>
            </Link>
            {/* <Link to="/register" className="text-white font-bold mr-3">
              Register
            </Link> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
