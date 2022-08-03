import React from "react";
import { links } from "./Mylinks";
const SidebarCatagory = () => {
  return (
    <div className="fixed w-1/4">
      <div className="bg-white h-screen">
        <h3 className="text-3xl bg-green-600 p-3 text-white font-bold">
          Catagories
        </h3>
        {links.map((link) => (
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 "
          >
            <div class="collapse-title text-xl font-medium text-left">
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
