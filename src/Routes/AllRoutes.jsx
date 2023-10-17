import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default AllRoutes;
