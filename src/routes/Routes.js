import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <h1>asdfa</h1>,
      },
      
    ],
  },
]);

export default routes;