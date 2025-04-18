import React from "react";
import ReactDOM from "react-dom/client";

// importing react-router functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// importing the routes
import routes from "./routes";
const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);