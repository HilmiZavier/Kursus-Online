import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/navbar";
import Home from "../components/home";
import Dashboard from "../components/dashboard";
import Login from "../components/login";
import Register from "../components/register";
import Profile from "../components/profile";
import Materi from "../components/materi";
import Absensi from "../components/absensi";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/materi/:courseId",
        element: <Materi />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/absensi",
        element: <Absensi />,
      },
    ],
  },
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
]);

export default router;
