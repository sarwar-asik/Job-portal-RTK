import React from "react";
import loader from "../assets/loader.gif";

const Loader = () => {
  return (
    <div className="w-[90%]  mx-auto">
      <img src={loader} className="max-h-[100px] w-[200px]" alt="" />
    </div>
  );
};

export default Loader;
