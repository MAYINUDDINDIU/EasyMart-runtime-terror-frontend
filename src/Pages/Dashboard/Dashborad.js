import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';

const Dashborad = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <h1 className='text-3xl m-6 text-indigo-700 font-bold flex gap-2'><AiFillHome></AiFillHome>Dashboard</h1>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
                    <button className='btn mt-2 text-white font-bold'><li><Link to='/dashboard'>All Products</Link></li></button>
                    <button className='btn btn-secondary mt-2 text-white font-bold'><li><Link to='/dashboard/addproduct'>Add Products</Link></li></button>
                </ul>

            </div>
        </div>
    );
};

export default Dashborad;