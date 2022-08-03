import React from "react";
import { links } from "./Mylinks";
import Offers from "./Offers";
const SidebarCatagory = () => {
  return (
    <div className="fixed w-1/5">
      <Offers></Offers>
      <div className="bg-white h-screen p-5">
        <h3 className="text-xl bg-green-600 p-3 text-white font-bold">
          Catagories
        </h3>
        {links.map((link) => (
          <div tabindex="0" class="collapse collapse-arrow  bg-base-100 ">
            <div class="collapse-title   font-medium text-left">
              {link.name}
            </div>
            <div class="collapse-content text-left">
              {link.sublinks.map((sublink) => (
                <p>{sublink.Head}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarCatagory;
