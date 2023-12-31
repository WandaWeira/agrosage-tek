import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import About from "./components/About.jsx";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ServiceDetails from "./components/ServiceDetails.jsx";
import Products from "./components/Products.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "/services/:id", element: <ServiceDetails /> },
      { path: "/products/:id", element: <ProductDetails /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
