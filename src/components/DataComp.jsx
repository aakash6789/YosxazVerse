import React from "react";

import { EditIcon } from "@chakra-ui/icons";

const DataComp = () => {
  return (
    <div className="flex justify-between mt-[15px] text-[0.4rem] md:text-[1em] w-full ">
      <input type="checkbox" className="ml-[2%]"></input>
      <p className="w-[7%] text-left">1077620</p>
      <div className="w-[5%]">17713</div>
      <div className="w-[7%] text-left">22 Jan 2020</div>                                                 {/*Data component ie containing values of all the fields */}
      <div className="w-[5%] text-left">Pending</div>
      <div className="w-[7%] text-left">Ahmed</div>
      <div className="w-[10%] xs:overflow-x-scroll">ahmed.123@gmail.com</div>
      <div className="w-[8%] overflow-wrap-break-word">Australia</div>
      <div className="w-[8%]">Australain Post Api</div>
      <div className="w-[5%] overflow-clip">ShopifyAU</div>
      <div className="w-[7%] text-left">Customer</div>
      <button className="mr-[1.5%]">
        <EditIcon />
      </button>
    </div>
  );
};

export default DataComp;
