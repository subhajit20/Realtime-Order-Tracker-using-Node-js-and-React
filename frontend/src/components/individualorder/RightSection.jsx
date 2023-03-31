import React from 'react'
import Card from '../cards/Card';
import { useSelector } from 'react-redux'

function RightSection() {
    const {connectionReducer} = useSelector((state)=> state);
  return (
    <div>
        {
            connectionReducer.individualOrder.length > 0 ? connectionReducer.individualOrder.map((order,i)=>{
                return <Card key={i} title={order.title} prodimage={order.productimage} option={false} />
            }) : ""
        }
    </div>
  )
}

export default RightSection