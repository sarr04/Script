import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Speakers from "./pages/Speakers";
import Schedule from "./pages/Schedule";
import BookATicket from "./pages/BookATicket";
import Chat from "./pages/BookTicket/Chat";
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
  {
    path: "/Chat",
    element: <Chat />,
  },
]);

export default function () {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
