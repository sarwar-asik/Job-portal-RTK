import React, { useEffect } from "react";
import { useGetJobsQuery, useJobByIdQuery } from "../../features/job/jobApi";

const MyJobs = () => {
  const data = useGetJobsQuery();

  // console.log(useJobByIdQuery("642bffc4680853685230b6a4"), "from id");

  // useEffect(()=>{

  //   fetch(`http://localhost:30002/jobs/all`)
  //   .then(res=>res.json()).then(data=>console.log(data))
  // },[])

  console.table("from useGetQuery", data, "my jobs");
  return (
    <div className="grid grid-cols-2  ">
      <section>
        <h2 className="text-3xl font-bold font-serif  my-3">Your Job </h2>
      </section>
    </div>
  );
};
export default MyJobs;
