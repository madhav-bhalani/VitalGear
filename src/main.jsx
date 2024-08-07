import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import "./index.css";
import "./App.css";
import Protein from "./Components/Protein";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gainers from "./Components/Gainers";
import PrePostWorkouts from "./Components/PrePostWorkouts";
import Vitamins from "./Components/Vitamins";
import ActiveWear from "./Components/ActiveWear";
import { ModalProvider } from "./ModalContext";
import BuyProduct from "./Components/BuyProduct";

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
  {
    path: "/Proteins/BuyProduct",
    element: <BuyProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </React.StrictMode>
);
