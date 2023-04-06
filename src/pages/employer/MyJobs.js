import React from "react";
import { useGetJobQuery } from "../../features/job/jobApi";

const MyJobs = () => {
  const data = useGetJobQuery();

  console.table("from useGetQuery",data, "my jobs");
  return (
    <div className="grid grid-cols-2  ">
      <section>
        <h2 className="text-3xl font-bold font-serif  my-3">Your Job </h2>
      </section>
    </div>
  )
}
export default MyJobs;
