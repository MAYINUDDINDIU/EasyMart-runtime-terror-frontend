import React from "react";

const PriceRange = () => {
  return (
    <div>
      <div className="text-3xl p-5 shadow-2xl my-5">
        <h3 className="text-xl   p-3  bg-accent text-white font-bold mb-10">
          Select Range
        </h3>
        <input type="range" min="0" max="100" value="40" className="range " />
        <div className="flex justify-between p-3 items-center">
          <p className="text-lg">Price: $0 - $1000</p>
          <button className="btn btn-secondary">Filter</button>
        </div>
        <div>{/* Sececting Colors */}</div>
      </div>
      <div className="mt-10 shadow-xl p-5">
        <h3 className="text-xl    bg-accent text-white	p-3   font-bold mb-5">
          Colors
        </h3>
        <ul className="text-lg text-left">
          <li>Red</li>
          <li>Blue</li>
          <li>Green</li>
          <li>Purple</li>
          <li>Orange</li>
        </ul>
      </div>
      <div className="mt-10 shadow-xl p-5">
        <h3 className="text-xl   bg-accent text-whites p-3   font-bold mb-5">
          Sizes
        </h3>
        <ul className="text-lg text-left">
          <li>Large</li>
          <li>Medium</li>
          <li>Extra Large</li>
        </ul>
      </div>
      <div className="mt-10 h-20"></div>
    </div>
  );
};

export default PriceRange;
