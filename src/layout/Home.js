import React, { useId } from "react";
import Header from "../pages/commonPages/Header";
import SignUp from "../pages/commonPages/SignUp";
import "sweetalert2/src/sweetalert2";
import MyJobs from "../pages/employer/MyJobs";

// /src/sweetalert2.scss
const Home = () => {
  // console.log(id, "unique id");
  // console.table(user,"user...........")
  return (
    <div>
      <Header />
      <MyJobs/>
      <SignUp />
    </div>
  );
};

export default Home;
