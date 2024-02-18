import React from "react";
import SearchFilterToolbar from "./SearchFilterToolbar.jsx";
import ProductSummary from "./ProductSummary.jsx";
const Home = () => {
  return (
    <div>
      <div className="relative h-full">
        <h1 className="left-6 absolute font-playfair text-[5xl] font-bold">
          Orders                                                                                                                                {/* Home-page where the assignment is displayed*/}
        </h1>
        <button className="absolute right-0 bg-[#4942E4] text-white rounded py-2 px-8">
          CREATE NEW
        </button>
      </div>
      <SearchFilterToolbar />
      <ProductSummary />
    </div>
  );
};

export default Home;
