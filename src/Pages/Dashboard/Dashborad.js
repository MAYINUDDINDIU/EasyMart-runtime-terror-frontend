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
const Dashborad = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          for="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>

        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <div className="w-76 border-r-gray border-t-0 border-2">
          <ul className="menu p-4 overflow-y-auto   text-base-content text-xl ">
            <li className="rounded-none w-full">
              <Link
                to="/dashboard"
                className="  border-2 border-orange-600 text-2xl p-3  my-5  justify-center font-bold"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="">
                <BsFillInboxesFill className="mr-3"></BsFillInboxesFill> All
                Products
              </Link>
            </li>

            <li>
              <Link to="/dashboard/allcategory">
                <AiFillProfile className="mr-3"></AiFillProfile>Add category
                wise products
              </Link>
            </li>
            <li>
              <Link to="/dashboard/orders">
                <BsFillCartFill className="mr-3"></BsFillCartFill>Orders
              </Link>
            </li>
            <li>
              <Link to="/dashboard/customers">
                <FaUsers className="mr-3 text-2xl"></FaUsers>Reviews
              </Link>
            </li>
            <li>
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
            <li>
              <Link to="/dashboard/allcategory">
                <BsGlobe className="mr-3 text-2xl"></BsGlobe>Sellers
              </Link>
            </li>
            <li>
              <Link to="/dashboard/allcategory">
                <MdLocalOffer className="mr-3 text-2xl"></MdLocalOffer>Hot
                Offers
              </Link>
            </li>
            <br />
            <hr />
            <li>
              <Link to="/dashboard/allcategory">
                <BsFillBrushFill className="mr-3 text-2xl"></BsFillBrushFill>
                Appearance
              </Link>
            </li>
            <li>
              <Link to="/dashboard/allcategory">
                <AiFillSetting className="mr-3 text-2xl"></AiFillSetting>
                Settings
              </Link>
            </li>

            {/* <button className='btn btn-secondary mt-2 text-white font-bold'><li><Link to='/dashboard/addproduct'>Add Products</Link></li></button> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashborad;
