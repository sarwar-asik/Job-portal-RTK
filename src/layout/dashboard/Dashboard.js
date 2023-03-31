import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="block lg:flex justify-between mt-4 px-2 bg-blue-300">
      <section className="text-[16px] font-bold lg:w-[15%]">
        <Link
          to="/dashboard/addJob"
          className="hover:bg-slate-200 shadow-xl rounded-md p-2"
        >
          Add Job
        </Link>
      </section>
      <aside onClick={useNavigate("/dashboard")} className="lg:w-[85%] mx-auto">
        <Outlet />
      </aside>
    </div>
  );
};

export default Dashboard;
