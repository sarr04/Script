import * as React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Speakers from "./components/home/Speakers";
import Schedule from "./pages/Schedule";
import BookATicket from "./pages/BookATicket";
import Hero from "./components/home/Hero";
import Aboutt from "./components/home/Aboutt";
import Box from "./components/box";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/speakers",
    element: <Speakers />,
  },
  {
    path: "/schedule",
    element: <Schedule />,
  },
  {
    path: "/BookATicket",
    element: <BookATicket />,
  },
]);

export default function () {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
