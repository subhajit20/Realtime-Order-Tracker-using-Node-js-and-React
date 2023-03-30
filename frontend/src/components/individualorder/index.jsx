import React from 'react'
import Card from '../cards/Card'
import { useSelector } from 'react-redux'

function index() {
    const {connectionReducer} = useSelector((state)=> state);
  return (
    <div className='translate-y-20'>
        {
            connectionReducer.individualOrder.length > 0 ? connectionReducer.individualOrder.map((order,i)=>{
                return <Card key={i} prodimage={order.productimage} option={false} />
            }) : ""
        }
    </div>
  )
}

export default index