import React from "react";
import Navigation from "./Components/Navigation";
import Home from "./Page/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import Products from "./Page/Products";
import PageNotFound from "./Page/PageNotFound";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}
