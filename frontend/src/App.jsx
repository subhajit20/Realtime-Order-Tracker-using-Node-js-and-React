import { useState, useEffect } from "react";
import ProductPage from "./pages/ProductPage";
import OrderPage from "./pages/OrderPage";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductPage />
      <OrderPage />
    </div>
  );
}

export default App;
