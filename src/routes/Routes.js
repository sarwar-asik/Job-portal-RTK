import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Home from "../layout/Home";
import Main from "../layout/main/Main";
import CandidateRegister from "../pages/candidate/CandidateRegister";
import Login from "../pages/commonPages/Login";
import Register from "../pages/commonPages/Register";
import SignUp from "../pages/commonPages/SignUp";
import AddJob from "../pages/employer/AddJob";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
        children:[
          {
            path: "/dashboard/addJob",
            element: <AddJob/>,
          },
        ]
      },
     
      {
        path: "/register",
        element: <PrivateRoutes>
          <Register/>
        </PrivateRoutes>,
      },
      {
        path: "/register/employer",
        element: <PrivateRoutes>
          <CandidateRegister/>
        </PrivateRoutes>,
      },
    ],
  },
]);

export default routes;
