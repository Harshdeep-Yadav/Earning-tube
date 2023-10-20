import React, { useState } from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="relative flex flex-col w-screen">
      <div className="flex items-center w-full h-20 px-32 py-12 " >
        <div className="flex flex-row items-center gap-4 cursor-pointer" onClick={() => window.location.reload()}>
          <img
            className="flex items-center justify-center "
            src="src\assets\image 2.png"
            alt=""
          />
          <span className="text-2xl font-semibold text-white ">anchors</span>

          <div className=" inline-flex  bg-[#CCC] text-[13px] px-2 rounded-md mb-5 ">
            <span>Beta</span>
          </div>
        </div>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
