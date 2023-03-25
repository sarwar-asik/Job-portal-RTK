import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import "../App.css";
import { setUser } from "../features/auth/authSlice";
import auth from "../firebase/firebase.config";

const PrivateRoutes = ({ children }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          dispatch(setUser(currentUser?.email));
        });
        return () => unSubscribe();
      }, [dispatch]);

      
  const { pathname } = useLocation();
  const { isLoading, email } = useSelector((state) => state.auth);

  if (isLoading) {
    return <h1 className="text-xl font-bold ">Loading Data .....</h1>;
  }
  if (isLoading && email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }
  return children;
};

export default PrivateRoutes;
