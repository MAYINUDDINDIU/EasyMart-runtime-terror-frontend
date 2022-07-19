import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItems = (
        <>
          {" "}
          <li>
            <Link to="/" className="font-bold">
              Home
            </Link>
          </li>
          <li tabIndex="0">
            <Link to="/completedTasks" className="justify-between font-bold">
              My Cart
            </Link>
          </li>
          <li tabIndex="0">
            <Link to="/todo" className="justify-between font-bold">
            Checkout
            </Link>
          </li>
          <li>
            <Link to="/calender" className="font-bold">
            Signup/Login
            </Link>
          </li>
        </>
      );
    return (
        <div class="navbar bg-[#005cb2] lg:px-24  sticky top-0 z-50">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                     {navItems}
                    </ul>
                </div>
                <Link class=" normal-case font-bold drop-shadow text-2xl text-white" to="/">EASY <span className='text-primary'>MART</span></Link> 
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 text-white">
                  {navItems}
                </ul>
            </div>
            <div class="navbar-end">
               <Link to="/login" className='text-white font-bold mr-3'>Login</Link>
               <Link to="/login"  className='text-white font-bold mr-3'>Register</Link>
            </div>
        </div>
    );
};

export default Navbar;