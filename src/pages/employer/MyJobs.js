import React, { useEffect } from "react";
import { useGetJobsQuery, useJobByIdQuery } from "../../features/job/jobApi";
import useGetData from "../../hooks/useGetData";

const MyJobs = () => {
  // const data = useGetJobsQuery();

  const [data] = useGetData("http://localhost:30002/api/v1/jobs");

  // console.log(useJobByIdQuery("642bffc4680853685230b6a4"), "from id");

  // useEffect(()=>{

  //   fetch(`http://localhost:30002/jobs/all`)
  //   .then(res=>res.json()).then(data=>console.log(data))
  // },[])

  console.table("from useGetQuery", data, "my jobs");

  return (
    <div className="relative">
      <h2 className="text-3xl font-bold font-serif  my-3 text-center">
        Your Job {data.length}
      </h2>
      <section className="grid grid-cols-1 gap-3 sticky  max-h-[100vh] overflow-auto ">
        {data.map((item) => {
          const { _id, name, salary, skills, position, overView } = item;
          return (
            <div className="shadow-xl bg-slate-200 flex gap-3 lg:w-[80%] mx-auto">
              <img
                className="h-[140px] w-[200] rounded-sm"
                src="https://img.freepik.com/free-photo/rag-dolls-one-blue_1156-199.jpg?w=996&t=st=1681461928~exp=1681462528~hmac=88675e6769508db06ab6cb8ad746d52aefcdd1081c00d54a3b72e8254e24301c"
                alt="job"
              />

              <aside  className="px-3 pt-4">
              <h2 className="text-xl font-bold font-serif">
                    {name || position}
                  </h2>
                  <p>
                    {/* {overView} */}
                    consectetur adipisicing elit. Laboriosam possimus dicta
                    deleniti beatae. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                <div className="flex justify-between items-center mt-3">
                  
                  <h3 className="font-semibold text-blue-600">
                    Salary : $ {salary ? salary : "3500"}
                  </h3>
                  <button className="bg-[#122D61] p-2 text-white font-bold rounded">Apply</button>
                </div>
              </aside>
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default MyJobs;
