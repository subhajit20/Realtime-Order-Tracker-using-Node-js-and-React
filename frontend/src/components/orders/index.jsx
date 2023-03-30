import React, { useEffect,useState } from 'react'
import Card from '../cards/Card'
import { useSelector,useDispatch } from 'react-redux';
import useOrderHook from '../../services/hooks/useOrderHook';

function index() {
  const {cancelOrder,getIndiVidualOrder} = useOrderHook()
  const {connectionReducer} = useSelector((state)=> state);

    function getMyOrder(id){
      getIndiVidualOrder(id)
    }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10 translate-y-20">
      {
        connectionReducer.allOrders.length > 0 ? connectionReducer.allOrders.map((o,i)=>{
          return <Card key={i} prodimage={o.productimage} placeorder={()=> cancelOrder(o.orderid)} btnname={"Cancel Order"} viewOrder={()=> getMyOrder(o.orderid)} option={true}   />
        }) : "No Orders are there..."
      }
    </div>
  )
}

export default index