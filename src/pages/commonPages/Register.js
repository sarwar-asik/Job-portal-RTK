import React from "react";
import { Link } from "react-router-dom";
import mainApi from "../../shared/mainApi";

const Register = () => {
  console.log(mainApi,"main api");
  return (
    <main className="w-[80%] mx-auto block lg:flex justify-between mt-5">
      <Link
        to="/register/employer"
        className="flex flex-col gap-3 items-center p-5 shadow-xl rounded-lg"
      >
        <img
          src="https://img.freepik.com/premium-photo/employee-search-hr-concept-magnifier-with-abstract-employee-white-space_102583-2267.jpg?w=1060"
          className="h-[340px] w-[90%]  rounded-lg"
          alt="candidate"
        />
        <h4 className="text-xl font-bold font-serif">Candidate</h4>
      </Link>
      <Link
        to="/register/employer"
        className="flex flex-col gap-3 items-center p-5 shadow-xl rounded-lg"
      >
        <img
          src="https://img.freepik.com/free-vector/taking-notes-concept-illustration_114360-1059.jpg?w=740&t=st=1679744466~exp=1679745066~hmac=586cde292c0b01e07123265cdfe465fef0ea35f024bec61132d60c164bceece2"
          className="h-[350px] w-[90%]   rounded-lg"
          alt="Employer"
        />
        <h4 className="text-xl font-bold font-serif">Employer</h4>
      </Link>
    </main>
  );
};

export default Register;
