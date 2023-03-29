import { useState, useEffect } from "react";
import ProductPage from "./pages/ProductPage";
import OrderPage from "./pages/OrderPage";
import Navbar from "./components/navbar/Navbar";
import { useDispatch,useSelector } from "react-redux";

function App() {
  const [products,setProducts] = useState([]);
  const {connectionReducer} = useSelector((state)=> state);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch({type:"CREATE_CONNECTION"})

  },[])
  return (
    <div className="App">
      <Navbar />
      <ProductPage />
      <OrderPage />
    </div>
  );
}

export default App;
