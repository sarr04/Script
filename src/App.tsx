import * as React from "react";
import Root from "./routes/root.tsx";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>About</h1>
          <Link to="about">About </Link>
        </div>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}

export default App;
