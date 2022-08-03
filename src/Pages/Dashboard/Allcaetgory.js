import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Allcaetgory = () => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-8/12 mx-auto navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label for="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-none w-full hidden lg:block">
                        <ul className="menu menu-horizontal">
                            <button className='btn btn-primary text-white font-bold'><li><Link to='/dashboard/allcategory'>Men's Item</Link></li></button>
                            <button className='btn btn-secondary mx-6 text-white font-bold'><li><Link to='/dashboard/allcategory/womensitem'>Women's Item</Link></li></button>
                            <button className='btn text-white font-bold'><li><Link to='/dashboard/allcategory/kidsItem'>Kid's Item</Link></li></button>
                        </ul>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <button className='btn btn-primary text-white font-bold'><li><Link to='/dashboard/allcategory'>Men's Item</Link></li></button>
                    <button className='btn btn-secondary mx-6 my-4 md:my-0 text-white font-bold'><li><Link to='/dashboard/allcategory/womensitem'>Women's Item</Link></li></button>
                    <button className='btn text-white font-bold'><li><Link to='/dashboard/allcategory/kidsItem'>Kid's Item</Link></li></button>
                </ul>

            </div>
        </div>
    );
};

export default Allcaetgory;