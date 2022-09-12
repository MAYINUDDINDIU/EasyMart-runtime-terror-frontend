import React from "react";
import { AiFillSetting, AiFillProfile } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import {
  BsFillInboxesFill,
  BsFillCartFill,
  BsGlobe,
  BsFillBrushFill,
  BsBarChartFill,
} from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdReviews, MdLocalOffer } from "react-icons/md";
import "./Dashboard.css";
import { useState } from "react";
const Dashborad = () => {
  const [open,setOpen]=useState(false);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          for="my-drawer-2"
          className=" drawer-button cursor-pointer lg:hidden sticky ml-[400px] top-0 z-50"
          
        >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg> */}
        </label>

        <Outlet></Outlet>
      </div>
      <div className="drawer-side border">
        <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className={`menu p-4 overflow-y-auto w-96 bg-base-100 text-base-content text-xl`}>
            <li className="rounded-none w-full hidden lg:block">
              <Link
                to="/dashboard"
                className=" bg-accent text-white text-2xl p-3 my-5 justify-center font-bold"
              >
                Dashboard
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link to="/dashboard" className="">
                <BsFillInboxesFill className="mr-3"></BsFillInboxesFill> All
                Products
              </Link>
            </li>

            <li onClick={() => setOpen(false)}>
              <Link to="/dashboard/allcategory">
                <AiFillProfile className="mr-3"></AiFillProfile>Add category
                wise products
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link to="/dashboard/orders">
                <BsFillCartFill className="mr-3"></BsFillCartFill>Orders
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link to="/dashboard/customers">
                <FaUsers className="mr-3 text-2xl"></FaUsers>Reviews
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link to="/dashboard/statistics">
                <BsBarChartFill className="mr-3 text-2xl"></BsBarChartFill>
                Statistics
              </Link>
            </li>
            {/* <li>
              <Link to="/dashboard/reviews">
                <MdReviews className="mr-3 text-2xl"></MdReviews>Reviews
              </Link>
            </li> */}
            <li onClick={() => setOpen(false)}>
              <Link to="/dashboard/allcategory">
                <BsGlobe className="mr-3 text-2xl"></BsGlobe>Sellers
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link to="/dashboard/allcategory">
                <MdLocalOffer className="mr-3 text-2xl"></MdLocalOffer>Hot
                Offers
              </Link>
            </li>
            <br />
            <hr />
            <li onClick={() => setOpen(false)}>
              <Link to="/dashboard/allcategory">
                <BsFillBrushFill className="mr-3 text-2xl"></BsFillBrushFill>
                Appearance
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link to="/dashboard/allcategory">
                <AiFillSetting className="mr-3 text-2xl"></AiFillSetting>
                Settings
              </Link>
            </li>

            {/* <button className='btn btn-secondary mt-2 text-white font-bold'><li><Link to='/dashboard/addproduct'>Add Products</Link></li></button> */}
          </ul>
      </div>
    </div>
  );
};

export default Dashborad;
