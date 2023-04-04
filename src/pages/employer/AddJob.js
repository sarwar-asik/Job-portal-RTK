import React, { useCallback, useState } from "react";
import { set, useForm } from "react-hook-form";
import { usePostJobMutation } from "../../features/job/jobApi";
import useDynamicInput from "../../hooks/useDynamicInput";

const AddJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [postJobDB,{isError,isSuccess,isLoading}] = usePostJobMutation()

 
  const [handleChange, addInput, removeInputList, inputList] =
    useDynamicInput();

  const onSubmit = useCallback(
    (data) => {
      const newData = { ...data, skills: inputList };
      console.log(newData);
      postJobDB(newData)
      // console.log(data);
    },
    [inputList,postJobDB]
  );

  return (
    <div className="px-3">
      <h2> Add a Job</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* fist name */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 px-3">
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="experience"
              className="inline-block mb-1 font-medium"
            >
              Position
            </label>
            <input
              {...register("position")}
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="position"
              name="position"
            />
          </div>
          {/* last Name */}
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="experience"
              className="inline-block mb-1 font-medium"
            >
              Company Name
            </label>
            <input
              {...register("company")}
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="company"
              name="company"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="experience"
              className="inline-block mb-1 font-medium"
            >
              Experience
            </label>
            <input
              {...register("experience")}
              // defaultValue={user.experience}
              type="text"
              className=" 
              flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="experience"
              name="experience"
            />
          </div>
          {/* div */}
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="experience"
              className="inline-block mb-1 font-medium"
            >
              Work Place
            </label>
            <input
              {...register("workPlace")}
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="workPlace"
              name="workPlace"
            />
          </div>
          {/* div */}
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="experience"
              className="inline-block mb-1 font-medium"
            >
              Location
            </label>
            <input
              {...register("location")}
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="location"
              name="location"
            />
          </div>
          {/* div */}
          <div className="col-span-full mb-1 sm:mb-2">
            <label htmlFor="overView" className="inline-block mb-1 font-medium">
              OverView
            </label>
            <textarea
              {...register("overView")}
              required
              className=" w-full  h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="overView"
              name="overView"
            />
          </div>
          {/* div */}
        </section>
        <section className="grid grid-cols-2 gap-3">
          {inputList.map((item, index) => {
            return (
              <div key={index} className="mb-1 sm:mb-2">
                <label className="inline-block mb-1 font-medium">Skills</label>
                <input
                  value={item}
                  // defaultValue={item}

                  onChange={(e) => handleChange(e.target.value, index)}
                  // {...register("skills")}
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  // name="skills"
                />
                {inputList.length > 1 && (
                  <p
                    className="bg-red-300 p-2 "
                    onClick={() => removeInputList(index)}
                  >
                    Remove
                  </p>
                )}
              </div>
            );
          })}
        </section>
        <p className="bg-slate-200 p-3 " onClick={() => addInput()}>
          Add Skills
        </p>

        <div className="mt-4 mb-2 sm:mb-4">
          <button
            type="submit"
            className="inline-flex  items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 bg-primary text-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(AddJob);
