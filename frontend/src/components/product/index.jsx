import React, { useEffect,useState } from "react";
import Card from "../cards/Card";
function index() {
  const [products,setProducts] = useState([])
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
          return <Card key={i} prodimage={p.thumbnail} prodtitle={p.title} />
        }) : ""
      }
      <Card />
    </div>
  );
}

export default index;
