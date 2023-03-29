import React,{useState,useEffect} from "react";
import Product from "../components/product";
import { Routes, Route } from "react-router-dom";

function ProductPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </div>
  );
}

export default ProductPage;
