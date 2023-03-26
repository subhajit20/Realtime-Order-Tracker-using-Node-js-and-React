import { useState, useEffect } from "react";
import ProductPage from "./pages/ProductPage";

function App() {
  // const [prod, setProd] = useState([]);
  // const ws = new WebSocket("ws://localhost:4000");

  // useEffect(() => {
  //   if (prod.length <= 0) {
  //     ws.onmessage = ({ data }) => {
  //       setProd((prev) => [...prev, JSON.parse(data)]);
  //     };
  //   }
  // }, []);

  // useEffect(() => {
  //   if (prod.length > 0) {
  //     console.log(prod);
  //   }
  // }, [prod]);
  return (
    <div className="App">
      <ProductPage />
    </div>
  );
}

export default App;
