import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="block lg:flex justify-between gap-5 mb-5 mt-4 px-2">
      <section className="text-[16px] flex lg:flex-col gap-2 font-bold lg:w-[15%] bg-slate-200 shadow lg:min-h-[500px] py-3 rounded-md">
        <Link
          to="/dashboard/addJob"
          className="hover:bg-slate-100 hover:shadow-xl rounded-md p-2 "
        >
          Add Job
        </Link>
        <Link
          to="/dashboard/myJob"
          className="hover:bg-slate-100 hover:shadow-xl rounded-md p-2 "
        >
          My Job
        </Link>
      </section>
      <aside className="lg:w-[85%] mx-auto ">
        <Outlet />
      </aside>
    </div>
  );
};
export default Dashboard;
