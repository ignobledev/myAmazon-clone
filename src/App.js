
import React from "react";
import { Routes, Route } from "react-router-dom";
import Carousel from "./Component/corousel";
import Navbar from "./Component/Navbar";
import Signup from "./Component/signup";
import Signin from "./Component/signin";
import Products from "./Component/products";
import  Home from "./Component/home";
import Cart from "./Component/cart";
import  Contact from "./Component/contact"
import About from "./Component/about"
function homes() {
  return <h1>Home Page</h1>;
  <>
      <Carousel />
    </>
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/products" element={<Products/>}/>
         <Route path="/contact"  element={<Contact/>}/>
         <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  );
}