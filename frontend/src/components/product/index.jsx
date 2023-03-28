import React, { useCallback,useEffect,useState } from "react";
import Card from "../cards/Card";
import useOrderHook from "../../services/hooks/useOrderHook";
import Orders from '../orders'

function index() {
  const [products,setProducts] = useState([])
  const [placeOrder] = useOrderHook()
  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:4000");
    ws.onmessage = ({data})=>{
      const route = JSON.parse(data).route;
      if(route === "/products"){
        const prods = JSON.parse(data).allprods
        setProducts((prev)=> [...prev,prods])
      }
    }

    ws.onclose = ()=>{
      
    }
  },[])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10 translate-y-10">
      {
        products.length > 0 ? products.map((p,i)=>{
          return <Card key={i} prodimage={p.thumbnail} prodtitle={p.title} placeorder={()=> placeOrder({productimage:p.thumbnail,title:p.title})} btnname={"Buy"} />
        }) : "No Products there"
      }

      <Orders />
    </div>
  );
}

export default index;
