import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/navbar";
import Home from "../components/home";
import Dashboard from "../components/dashboard";
import Login from "../components/login";
import Register from "../components/register";
import Profile from "../components/profile";
import Materi from "../components/materi";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/materi",
        element: <Materi />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default route;
