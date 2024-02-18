import React from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
const SearchFilterToolbar = () => {
  return (
    <div className="mt-[8vh] absolute flex justify-between w-4/5 text-[0.75em] ">
      <div className="relative w-[40%] pl-[2%]">
        <h2 className="text-bold absolute font-playfair text-[3xl] font-bold">
          What are you looking for?
        </h2>                                                                                                                                 {/*Search functionality */}
        <SearchIcon                                                                                                   
          color="disabled"
          className="absolute left-5 top-[3.5dvh] z-10  h-[3%]"                                                                 
        />
        <input
          type="search"
          className="w-[80%] mt-[25px] mb-[px] h-[3dvh] pl-[4dvh] absolute left-5 "  
          placeholder="Search for name, category, company etc"
        ></input>
      </div>
      <div className="relative w-[20%] flex-shrink-2">
        <h2 className="text-bold absolute font-playfair text-[3xl] font-bold ">
          Category
        </h2>

        <select
          id="category"
          name="category"
          className="mt-[25px] absolute left-0 w-[50%]"
        >
          <option value="category1">All</option>
          <option value="category1">category1</option>
          <option value="category2">category2</option>                                       {/*Category dropdown  */}
          <option value="category3">category3</option>
          <option value="category4">category4</option>
        </select>
      </div>
      <div className="relative w-[20%] flex-shrink-2 h-[6.5dvh]">
        <h2 className="text-bold absolute font-playfair text-[3xl] font-bold ">
          Status
        </h2>
        <select
          id="status"
          name="status"
          className="mt-[25px] absolute left-0 w-[50%]"
        >
          <option value="status1">All</option>
          <option value="status1">status1</option>
          <option value="status2">status2</option>                                               {/*Status dropdown  */}
          <option value="status3">status3</option>
          <option value="status4">status4</option>
        </select>
      </div>

      <button className="flex-shrink-2 bg-gray-200 rounded">
        <KeyboardDoubleArrowDownIcon style={{ color: "grey" }} />
      </button>
      <button className="mr-[2%] w-[9%] flex-shrink-2 bg-[#4942E4] text-white rounded">
        SEARCH
      </button>
    </div>
  );
};

export default SearchFilterToolbar;
