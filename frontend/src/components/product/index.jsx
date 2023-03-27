import React, { useEffect,useState } from "react";
import Card from "../cards/Card";
import useOrderHook from "../../services/hooks/useOrderHook";
function index() {
  const [products,setProducts] = useState([])
  const [placeOrder] = useOrderHook()
  const ws = new WebSocket("ws://localhost:4000");
  useEffect(()=>{
    ws.onmessage = ({data})=>{
      if(products.length <= 0){
        setProducts((prev)=> [...prev,JSON.parse(data)])
      }
    }
  },[])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10 translate-y-10">
      {
        products.length > 0 ? products.map((p,i)=>{
          return <Card key={i} prodimage={p.thumbnail} prodtitle={p.title} placeorder={()=> placeOrder({productimage:p.thumbnail,title:p.title})}  />
        }) : "No Products there"
      }
      <Card />
    </div>
  );
}

export default index;
