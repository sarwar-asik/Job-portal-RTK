import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Main from "../layout/main/Main";



const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      
    ],
  },
]);

export default routes;