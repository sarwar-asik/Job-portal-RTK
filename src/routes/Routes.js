import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Main from "../layout/main/Main";
import Login from "../pages/commonPages/Login";
import SignUp from "../pages/commonPages/SignUp";

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
    ],
  },
]);

export default routes;
