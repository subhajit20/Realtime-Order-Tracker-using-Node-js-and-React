import React ,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';

function StatusChecker() {
    const [bar,setBar] = useState({
        height:"",
        color:"",
        checked:false
    });
    const {connectionReducer} = useSelector((state)=> state);
    const {individualOrder} = connectionReducer;

    useEffect(()=>{
        if(individualOrder.length > 0){
            switch(individualOrder[0].status){
                case "Placed":
                    setBar({height:"h-[4rem]",color:"bg-yellow-500"})
                    break;
                case "Packed":
                    setBar({height:"h-[8rem]",color:"bg-yellow-600"})
                    break;
                case "Shipped":
                    setBar({height:"h-[12rem]",color:"bg-yellow-600"})
                    break;
                case "Out for Delivery":
                    setBar({height:"h-[16rem]",color:"bg-green-400"})
                    break;
                case "Delivered":
                    setBar({height:"h-[20rem]",color:"bg-green-600",checked:true})
                    break;
            }
        }
        console.log(individualOrder[0])
    },[individualOrder])
  return (
    <div className='grid grid-cols-2 transition-all duration-300 justify-items-center'>
        <div className='h-[20.4rem]  w-4  border-black border-2 grid grid-cols-1 justify-items-center transition-all duration-300'>
            <div className={`${bar.height} w-2 ${bar.color} transition-all duration-300`}>
            </div>
        </div>
        <div>
            <div className='translate-y-10'>
               Order Placed
            </div>
            <div className='translate-y-20'>
                Order Packed
            </div>
            <div className='translate-y-32'>
                Order Shipped
            </div>
            <div className='translate-y-40'>
                Order Out for Delivery
            </div>
            <div className='translate-y-[13rem]'>
                Order Delivered
            </div>
        </div>
        <div className='col-span-2 translate-y-10 text-green-600 text-2xl'>
            {bar.checked ? <h1 className="text-center">Congrats! <br /> Yout got your order in hand!!</h1> : "" }
        </div>
    </div>
  )
}

export default StatusChecker