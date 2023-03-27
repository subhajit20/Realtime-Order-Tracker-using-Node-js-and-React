import React, { useEffect } from 'react'

function index() {
    useEffect(()=>{
        const ws = new WebSocket("ws://localhost:4000/orders");
        ws.onmessage = ({data})=>{
            console.log(data)
        }
    },[])
  return (
    <div className='translate-y-20'>This is order page</div>
  )
}

export default index