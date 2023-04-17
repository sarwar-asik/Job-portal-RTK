import React from "react";
import loader from "../assets/loader.gif";

const Loader = () => {
  return (
    <div className="w-[300px] h-[200px] mx-auto">
      <img src={loader} className="max-h-[100px] w-[200px]" alt="" />
      <h2 className="text-xl font-serif font-[500] text-center ">Loading Data...</h2>
    </div>
  );
};

export default Loader;
