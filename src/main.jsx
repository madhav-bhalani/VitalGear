import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import "./index.css";
import "./App.css";
import Protein from "./Protein";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gainers from "./Gainers";
import PrePostWorkouts from "./PrePostWorkouts";
import Vitamins from "./Vitamins";
import ActiveWear from "./ActiveWear";
import { ModalProvider } from "./ModalContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Proteins",
    element: <Protein />,
  },
  {
    path: "/Gainers",
    element: <Gainers />,
  },
  {
    path: "/PrePostWorkouts",
    element: <PrePostWorkouts />,
  },
  {
    path: "/Vitamins",
    element: <Vitamins />,
  },
  {
    path: "/ActiveWear",
    element: <ActiveWear />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </React.StrictMode>
);
