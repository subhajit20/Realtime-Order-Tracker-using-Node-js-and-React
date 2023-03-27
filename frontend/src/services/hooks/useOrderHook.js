import React from 'react'

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
  return [placeOrder]
}

export default useOrderHook