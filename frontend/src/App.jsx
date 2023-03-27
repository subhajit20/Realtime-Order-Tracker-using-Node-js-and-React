import { useState, useEffect } from "react";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductPage />
    </div>
  );
}

export default App;
