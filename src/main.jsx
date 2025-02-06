import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./routes/Route.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* FIX: To resolve "React is not defined", make sure to import React at the top of your file.
        For example, add: import React from "react"; */}
    <RouterProvider router={route} />
  </StrictMode>
);
