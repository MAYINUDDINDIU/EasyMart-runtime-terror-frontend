import React, { useState } from "react";

const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div className="mt-6 mb-[-25px]">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered w-full max-w-xs"
        onChange={(event) => {
          setSearchItem(event.target.value);
        }}
      />
    </div>
  );
};

export default Search;
