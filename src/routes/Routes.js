import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Home from "../layout/Home";
import Main from "../layout/main/Main";
import Login from "../pages/commonPages/Login";
import Register from "../pages/commonPages/Register";
import SignUp from "../pages/commonPages/SignUp";
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
      },
      {
        path: "/register",
        element: <PrivateRoutes>
          <Register/>
        </PrivateRoutes>,
      },
    ],
  },
]);

export default routes;
