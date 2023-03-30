const Order = require("../model/Order.model")
async function getAllOrders(ws){
    let allorders = await Order.find();
        if(allorders.length > 0){
            ws.send(JSON.stringify({
                route:"/orders",
                allorders:allorders
            }))
    
            return true;
        }else{
            ws.send(JSON.stringify({
                route:"/orders",
                allorders:[]
            }))
    
            return false
        }
}

async function getOrderbyId(ws,id){
        let allorders = await Order.find({orderid:id});
        if(allorders.length > 0){
            ws.send(JSON.stringify({
                route:"/individualorder",
                allorders:allorders
            }))
    
            return true;
        }else{
            ws.send(JSON.stringify({
                route:"/individualorder",
                allorders:[]
            }))
    
            return false
        }
}

module.exports = {
    getAllOrders,
    getOrderbyId
}