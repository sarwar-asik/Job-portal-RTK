import React from "react";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../../features/auth/authApi";

const CandidateRegister = () => {
  const [postCandidate, { isLoading, isError, isSuccess }] =
    useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    postCandidate({ ...data, role: "Employer" });
  };

  return (
    <div className="w-[90%] mx-auto mt-5">
      <h2 className="text-2xl  font-bold font-serif my-3">
        {" "}
        Candidate Registration
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* fist name */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 px-3">
          <div className="mb-1 sm:mb-2">
            <label htmlFor="email" className="inline-block mb-1 font-medium">
              First Name
            </label>
            <input
              {...register("FirstName")}
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="FirstName"
              name="FirstName"
            />
          </div>
          {/* last Name */}
          <div className="mb-1 sm:mb-2">
            <label htmlFor="email" className="inline-block mb-1 font-medium">
              Last Name
            </label>
            <input
              {...register("LastName")}
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="LastName"
              name="LastName"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="email" className="inline-block mb-1 font-medium">
              E-mail
            </label>
            <input
              {...register("email")}
              required
              type="email"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="email" className="inline-block mb-1 font-medium">
              Company Name
            </label>
            <input
              {...register("CompanyName")}
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="CompanyName"
              name="CompanyName"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="email" className="inline-block mb-1 font-medium">
              Your role
            </label>
            <input
              {...register("CompanyRole")}
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="CompanyRole"
              name="CompanyRole"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="password" className="inline-block mb-1 font-medium">
              Employee Number
            </label>
            <input
              {...register("employeeNumber")}
              required
              type="number"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="password"
              name="employeeNumber"
            />
          </div>
        </section>

        {/* {
                      isError && <span className="text-red-500 font-mono ">{error}</span>
                    } */}

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

export default CandidateRegister;
