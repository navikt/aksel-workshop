import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Step1 from "./step-1/step";
import Step2 from "./step-2/step";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Step1 />,
  },
  {
    path: "/steg-1",
    element: <Step1 />,
  },
  {
    path: "/steg-2",
    element: <Step2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<div>oops</div>} />
  </React.StrictMode>
);
