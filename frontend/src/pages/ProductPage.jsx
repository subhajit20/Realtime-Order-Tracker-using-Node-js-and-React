import React from "react";
import Product from "../components/product";
import { Routes, Route } from "react-router-dom";

function GetProduct() {
  return <Product />;
}

function ProductPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GetProduct />} />
      </Routes>
    </div>
  );
}

export default ProductPage;
