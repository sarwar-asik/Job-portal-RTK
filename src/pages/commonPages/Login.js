import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { googleLogin, loginUser } from "../../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const { isLoading, email,isError,error } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && email) {
      Swal.fire("SuccessFully Login ","","success")
      navigate("/");
    }
  }, [isLoading, email, navigate]);

  useEffect(() => {
    if (isError && error) {
      Swal.fire(error,"","error")
   
    }
  }, [isError,error]);


  

  const onSubmit = ({ email, password }) => {
    // const email = data.email;
    // const password = data.password;
    if (password.length < 6) {
      Swal.fire("Please Provide Strong Password", "", "error");
    } else {
      dispatch(loginUser({ email, password }));

      // if (!isLoading && email && !isError &&error ==="" ) {
      //   Swal.fire("SuccessFully Login ", "", "success");
      //   navigate("/");
      // }
      // Swal.fire("Success", "Sign Up Success", "success");
      // console.log(email, password);
      //   dispatch(createUser({ email, password }));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  return (
    <div className="relative lg:max-w-[93%] mx-auto mt-3">
      <div className="absolute inset-0 object-cover bg-primary w-full h-full"></div>
      <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 f text-4xl font-bold font-serif tracking-tight text-white sm:text-4xl sm:leading-none">
                Sign Up <br /> take the position
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-[16px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
            </div>
            {/* start  form */}
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-4xl font-bold text-center sm:mb-6 sm:text-4xl">
                  Log In
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      {...register("email")}
                      placeholder="john.doe@example.org"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="password"
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      {...register("password")}
                      placeholder="john.doe@example.org"
                      required
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>
                  
                    {
                      isError && <span className="text-red-500 font-mono ">{error}</span>
                    }
                
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex  items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 bg-primary text-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <p className="text-xs font-[400] font-mono text-gray-600 sm:text-sm">
                  Did not create account ?
                  <Link to="/signup"> Sign Up, please ....</Link>
                </p>
                <button
                  onClick={handleGoogleLogin}
                  className="bg-blue-700 mt-2 w-full text-red-50 py-3 font-bold font-serif rounded"
                >
                  Google Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Login);
