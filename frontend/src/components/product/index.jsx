import React, { useEffect } from "react";
import Card from "../cards/Card";
import useOrderHook from "../../services/hooks/useOrderHook";
import Orders from '../orders'
import { useSelector,useDispatch } from "react-redux";

function index() {
  const [placeOrder] = useOrderHook();
  const {connectionReducer} = useSelector((state)=> state);
  const dispatch = useDispatch()


  useEffect(()=>{
    if(connectionReducer.ws !== undefined){
      connectionReducer.ws.onmessage = ({data})=>{
        const {route} = JSON.parse(data)
        if(route === "/products"){
          const {allprods} = JSON.parse(data);
          console.log(allprods)
          dispatch({type:"GET_ALL_PRODUCTS",payload:allprods});
        }if(route === "/orders"){
          const {allorders} = JSON.parse(data)
          console.log(allorders)
          dispatch({type:"GET_ALL_ORDERS",payload:allorders});
        }
        
      }
    }
  },[connectionReducer.ws])


  return (
    <div className="h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10 translate-y-20">
      {
        connectionReducer.allProducts.length > 0 ? connectionReducer.allProducts.map((p,i)=>{
          return <Card key={i} prodimage={p.thumbnail} prodtitle={p.title} placeorder={()=> placeOrder({productimage:p.thumbnail,title:p.title})} btnname={"Buy"} /> 
        }) : ""
      }
    </div>
    <div className="h-[20rem]"></div>
      <Orders/>
    </div>
  );
}

export default index;
