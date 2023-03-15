import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Main from "../layout/main/Main";
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
    ],
  },
]);

export default routes;
