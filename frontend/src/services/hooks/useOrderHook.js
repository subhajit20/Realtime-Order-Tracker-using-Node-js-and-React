import React,{useCallback} from 'react'

function useOrderHook() {
    async function placeOrder(details){
            console.log(details)
        try{
            const res = await fetch("http://localhost:3000/api/placeorder",{
                method:"POST",
                headers:{
                    'content-type':"application/json"
                },
                body:JSON.stringify(details)
            });
            const data = await res.json();
            console.log(data)
        }catch(e){
            console.log(e)
        }
    }

    async function cancelOrder(orderid){
        try{
            const res = await fetch("http://localhost:3000/api/cancel",{
                method:"POST",
                headers:{
                    'content-type':"application/json",
                },
                body:JSON.stringify({
                    orderid:orderid
                })
            });
            const data = await res.json();
            console.log(data)
        }catch(e){
            console.log(e)
        }
    }

    async function getIndiVidualOrder(orderid){
        try{
            const res = await fetch("http://localhost:3000/api/getaorder",{
                method:"POST",
                headers:{
                    'content-type':"application/json",
                },
                body:JSON.stringify({
                    orderid:orderid
                })
            });
            const data = await res.json();
            console.log(data)
        }catch(e){
            console.log(e)
        }
    }

  return {placeOrder,cancelOrder,getIndiVidualOrder}
}

export default useOrderHook