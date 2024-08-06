import React, { useState } from "react";
import Header from "./Components/Header";
import SignIn from "./Components/SignIn";
import "./App.css";
import SignUp from "./Components/SignUp";
import Carousel from "./Components/Carousel";
import Features from "./Components/Features";
import BestSelling from "./Components/BestSelling";
import Footer from "./Components/Footer";
import { Pricing } from "./Components/Pricing";
import ShoppingCart from "./Components/ShoppingCart";

const App = () => {
  const images = ["/carousel/1.png", "/carousel/2.png", "/carousel/3.png"];

  return (
    <div>
      <Header />

      <Carousel images={images} />
      <Features />
      <BestSelling />
      <Pricing />
      
      <Footer />
      <ShoppingCart/>
      <SignIn />
      <SignUp />
      
      
    </div>
  );
};

export default App;
