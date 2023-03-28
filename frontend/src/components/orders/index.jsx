import React, { useEffect,useState } from 'react'
import Card from '../cards/Card'

function index() {
  const [orders,setOrders] = useState([]);
  const ws = new WebSocket("ws://localhost:4000/orders");
    useEffect(()=>{
      setOrders([])
        ws.onmessage = ({data})=>{
          const route = JSON.parse(data).route;
          if(route === "/orders"){
              const allord = JSON.parse(data).allorders;
              console.log(allord)
              setOrders([])
              setOrders([...allord])
            }
          
        }
    },[])
    // useEffect(()=>{
    //   console.log(orders[0])
    // },[orders])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10 translate-y-10">
      {
        orders.length > 0 ? orders.map((o,i)=>{
                  return <Card key={i} prodimage={o.productimage} prodtitle={o.title} btnname={"View Order"} />
        }) : ""
      }
    </div>
  )
}

export default index