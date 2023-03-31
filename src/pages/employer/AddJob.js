import React, { useState } from "react";
import { set, useForm } from "react-hook-form";

const AddJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [inputList, setInputList] = useState([""]);

  const handleChange = (e, index) => {
    // console.log(e, "index==", index,inputList, "inputListLength", inputList.length);

    if (index) {
      inputList[index - 1] = e;
      // const newValue = [...inputList]

      setInputList(inputList);

      //   console.log(e, "index==", index,inputList, "inputListLength", inputList.length);
    }

    //   const inputList2 = inputList.filter((str) => str !== '')
    //    inputList =  inputList2

    // if (index === inputList.length - 1) {
    //   const newValue = [...inputList, e];
    //   setInputList(newValue);
    // } else {
    //   console.log("beshi hoice");
    // }

    // console.log(inputList, "inputList=", inputList.length);
  };

  const addInput = () => {
    setInputList([...inputList, ""]);
  };

  const removeInputList = (i) => {
    // const list = [...inputList];
    inputList.splice(i-1, 1);
    // const newList = inputList.filter((value, index) => index !== i - 1);
    // delete list[i+1]
    // setInputList([...list]);
    console.log( "index=", i, "list=", inputList);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="px-3">
      <h2> Add a Job</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputList.map((item, index) => {
          return (
            <div key={index} className="mb-1 sm:mb-2">
              <label htmlFor="skills" className="inline-block mb-1 font-medium">
                Skills
              </label>
              <input
                //   {...register("Skills")}
                // required
                type="text"
                //   multiple
                onBlur={(e) => handleChange(e.target.value, index + 1)}
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                // defaultValue={inputList[index+1]}
                id="Skills"
                name="Skills"
              />
              {inputList.length > 1 && (
                <button
                  className="bg-red-300 p-2 "
                  onClick={() => removeInputList(index + 1)}
                >
                  Remove
                </button>
              )}
            </div>
          );
        })}
        <button className="bg-slate-200 p-3 " onClick={() => addInput()}>
          Add Skills
        </button>

        {/* fist name */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 px-3">
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="Experience"
              className="inline-block mb-1 font-medium"
            >
              Position
            </label>
            <input
              {...register("Position")}
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="Position"
              name="Position"
            />
          </div>
          {/* last Name */}
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="Experience"
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
              htmlFor="Experience"
              className="inline-block mb-1 font-medium"
            >
              Experience
            </label>
            <input
              {...register("Experience")}
              // defaultValue={user.Experience}
              type="text"
              className=" 
              flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="Experience"
              name="Experience"
            />
          </div>
          {/* div */}
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="Experience"
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
              htmlFor="Experience"
              className="inline-block mb-1 font-medium"
            >
              Location
            </label>
            <input
              {...register("Location")}
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="Location"
              name="Location"
            />
          </div>
          {/* div */}
          <div className="col-span-full mb-1 sm:mb-2">
            <label htmlFor="OverView" className="inline-block mb-1 font-medium">
              OverView
            </label>
            <textarea
              {...register("OverView")}
              required
              className=" w-full  h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="OverView"
              name="OverView"
            />
          </div>
          {/* div */}
          {/* <div className="mb-1 sm:mb-2">
            <label
              htmlFor="skills"
              className="inline-block mb-1 font-medium"
            >
              Skills
            </label>
            <input
              {...register("Skills")}
              required
              type="text"
              multiple
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="Skills"
              name="Skills"
            />
          </div> */}
        </section>

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

export default AddJob;
