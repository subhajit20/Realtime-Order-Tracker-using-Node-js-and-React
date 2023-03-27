const Order = require("../model/Order.model");

function placeOrder(req,res){
    try{
        const neworder = new Order(req.body);
        neworder.save()

        res.status(200).json({
            msg:"Order is successfully placed!!"
        })
    }catch(e){
        res.status(500).json({
            msg:"Something went wrong"
        })
    }
}

async function getOrders(req,res){
    let allorders = []
    try{
        allorders = await Order.find();
        if(allorders.lenth > 0){
            res.status(200).json({
                status:true,
                orders:allorders
            })
        }else{
            res.status(400).json({
                status:false,
                orders:[]
            })
        }
    }catch(e){
        res.status(400).json({
            status:false,
            msg:"Something went wrong..."
        })
    }
}

async function giveOrders(ws){
    let i = 0;
    try{
        let allorders = await Order.find();
        if(allorders.length > 0){
            ws.send(allorders.toString())
            let id = setInterval(()=>{
                if(i >= allorders.length){
                    clearInterval(id);
                    return;
                }else{
                    ws.send(JSON.stringify(allorders[i]))
                    i++;
                }
            },300)
        }else{
            ws.send("No orders")
        }
    }catch(e){
        ws.send("No orders")
    }
}

async function getOrdersById(ws,id){
    let i = 0;
    try{
        let allorders = await Order.find({orderid:id});
        if(allorders.length > 0){
            ws.send(allorders.toString())
            let id = setInterval(()=>{
                if(i >= allorders.length){
                    clearInterval(id);
                    return;
                }else{
                    ws.send(JSON.stringify(allorders[i]))
                    i++;
                }
            },300)
        }else{
            ws.send("No orders")
        }
    }catch(e){
        ws.send("No orders")
    }
}

module.exports = {
    placeOrder,
    getOrders,
    giveOrders
}