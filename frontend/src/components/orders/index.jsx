import React, { useEffect,useState } from 'react'
import Card from '../cards/Card'
import { useSelector,useDispatch } from 'react-redux';

function index() {
  const {connectionReducer} = useSelector((state)=> state);
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(connectionReducer.allOrders)
  },[connectionReducer.allOrders])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10 translate-y-20">
      {
        connectionReducer.allOrders.length > 0 ? connectionReducer.allOrders.map((o,i)=>{
          return <Card key={i} prodimage={o.productimage} btnname={"View Orders"}/>
        }) : ""
      }
    </div>
  )
}

export default index