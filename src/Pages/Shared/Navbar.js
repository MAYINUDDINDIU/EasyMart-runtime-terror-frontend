import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome ,AiFillInfoCircle} from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import {  BsFillTelephoneFill } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { getFromCart } from "../../features/cartSlice";
import { IoHelpCircleSharp } from "react-icons/io5";
const Navbar = () => {
  const { isLoading, product, error } = useSelector(state => state.cartSlice)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFromCart());
  }, [dispatch])


  const [user] = useAuthState(auth);
  //Checking Admin
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const selectedUser = users.find(u=>u.email===user?.email)
  const adminStatus = selectedUser?.role;
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    navigate("/login");
  };
  const navItems = (
    <>
    {console.log(user)}
      <li>
        <Link to="/" className="font-bold">
          <AiFillHome></AiFillHome>Home
        </Link>
      </li>
      <li className="indicator relative" tabIndex="0">
        <span className="indicator-item top-4 right-2 text-2xl bg-transparent border-none absolute badge text-red-500 font-bold">{product.length}</span>
        <Link to="/addtocart" className=" font-bold">
          <FaShoppingCart></FaShoppingCart>My Cart
        </Link>
      </li>
      {/* <li tabIndex="0">
        <Link to="/todo" className="font-bold">
          <BsFillBagCheckFill></BsFillBagCheckFill>Checkout
        </Link>
      </li> */}
      <li tabIndex="0">
        <Link to="/about" className="font-bold">
          <AiFillInfoCircle className="text-xl"></AiFillInfoCircle>About
        </Link>
      </li>
      {console.log(adminStatus)}
      <li tabIndex="0">
        <Link to="/help" className="font-bold">
          <IoHelpCircleSharp className="text-2xl"></IoHelpCircleSharp>Help
        </Link>
      </li>
      <li tabIndex="0">
        <Link to="/contact" className="font-bold">
          <BsFillTelephoneFill></BsFillTelephoneFill>Contact Us
        </Link>
      </li>
      {adminStatus? <li tabIndex="0">
        <Link to="/dashboard" className="font-bold">
          <AiFillHome></AiFillHome>Dashboard
        </Link>
      </li>:null}
     
    </>
  );
  return (

    <div className="navbar bg-[#E3F56C] text-black lg:px-24  sticky top-0 z-50">
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
        {
          !adminStatus?  <Link
          className=" normal-case font-bold drop-shadow text-2xl "
          to="/"
        >
          EASY <span className="text-primary">MART</span>
        </Link>:  <Link
          className=" normal-case font-bold drop-shadow text-2xl"
          to="/"
        >
           EASY <span className="text-primary">MART</span>  
        
          <small style={{fontSize:"15px"}} className="m-0 text-blue-400">(Admin)</small>
        </Link>
        }
      
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal p-0  ">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {/* <div className="form-control mr-10">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered text-black bg-white"
            />
            <button className="btn btn-square bg-success border-0 text-black hover:bg-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div> */}
        {user ? (
          <>
            <span className="text-primary mx-3 font-bold flex items-center w-1/2"> <div><img src={user?.photoURL} alt="profileImg" className="mr-5" style={{height:"50px",width:"70%", borderRadius:"50%"}}/></div>{user?.displayName} </span>{" "}
            <button className="btn btn-primary font-bold" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            {" "}
            <Link to="/login" className=" font-bold mr-3 text-3xl">
              <ion-icon name="log-in-outline" ></ion-icon>
            </Link>
            <Link to="/addtocart" className=" font-bold mr-3 text-3xl">
              <ion-icon name="cart-outline" ></ion-icon>
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
