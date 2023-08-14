import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from '../Components/Signup';
import Login from '../Components/Login';
import Home from '../Components/Home';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Login></Login>,
  },
  {
    path: "/signup",
    element:<SignUp></SignUp>,
  },
  {
    path: "/home",
    element:<Home></Home>,
  },
]);

const Routeutils = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Routeutils