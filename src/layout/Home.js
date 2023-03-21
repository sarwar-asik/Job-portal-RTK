import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import Header from "../pages/commonPages/Header";
import SignUp from "../pages/commonPages/SignUp";
import "sweetalert2/src/sweetalert2";

// /src/sweetalert2.scss
const Home = () => {

  const [user,setUser] = useState({})
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser)
    })
    return () => unSubscribe()
  },[])

  // console.table(user,"user...........")                  

  
  return (
    <div>
      <Header />
      <SignUp />
    </div>
  );
};

export default Home;
