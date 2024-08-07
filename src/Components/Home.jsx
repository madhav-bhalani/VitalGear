import React, { useState } from "react";
import Header from "./Header";
import SignIn from "./SignIn";
import "../App.css";
import SignUp from "./SignUp";
import Carousel from "./Carousel";
import Features from "./Features";
import BestSelling from "./BestSelling";
import Footer from "./Footer";
import { Pricing } from "./Pricing";
import ShoppingCart from "./ShoppingCart";

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

      <ShoppingCart />
      <SignIn />
      <SignUp />
    </div>
  );
};

export default App;
