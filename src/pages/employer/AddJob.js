import React, { useCallback, useState } from "react";
import { set, useForm } from "react-hook-form";

const AddJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [inputList, setInputList] = useState([]);

  const handleChange = useCallback(
    (e, index) => {
      const inputData = [...inputList];
      inputData[index] = e;

      setInputList(inputData);

      // console.log(
      //   e,
      //   "index==",
      //   index,
      //   inputList,
      //   "inputListLength",
      //   inputList.length
      // )
    },
    [inputList]
  );

  const addInput = () => {
    const addData = [...inputList, []];
    setInputList(addData);
  };

  const removeInputList = (i) => {
    const list = [...inputList];
    list.splice(i, 1);
    setInputList(list);
  };

  const onSubmit = useCallback((data) => {
    // const newData ={...data,skills:inputList}
    // console.log(newData);
    console.log(data);
  }, []);

  return (
    <div className="px-3">
      <h2> Add a Job</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                  <button
                    className="bg-red-300 p-2 "
                    onClick={() => removeInputList(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            );
          })}
        </section>
        <button className="bg-slate-200 p-3 " onClick={() => addInput()}>
          Add Skills
        </button>

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
