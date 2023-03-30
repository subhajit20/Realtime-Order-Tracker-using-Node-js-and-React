const Order = require("../model/Order.model");
const {getAllOrders,getOrderbyId} = require("../lib/Orders.lib")

async function giveOrders(ws,action){
    if(action.type === "ALL"){
        getAllOrders(ws);
    }else if(action.type === "INDIVIDUAL"){
        getOrderbyId(ws,action.id)
    }
}

/**
 * Placeorder controller for placing order
 * @param {*} req 
 * @param {*} res 
 */
async function placeOrder(req,res){
    try{
        const neworder = new Order(req.body);
        neworder.save();
        await giveOrders(req.ws,{type:"ALL"});
        res.status(200).json({
            msg:"Order is successfully placed!!"
        })
    }catch(e){
        res.status(500).json({
            msg:"Something went wrong"
        })
    }
}

async function cancelOrder(req,res){
    try{
        const {orderid} = req.body;
        console.log(orderid)
        const isOrder = await Order.find({orderid:orderid})
        console.log(isOrder)
        if(isOrder.length > 0){
            const isDeleted = await Order.deleteOne({orderid:orderid});
            console.log(isDeleted)
            if(isDeleted.acknowledged === true){
                await giveOrders(req.ws,{type:"ALL"});
                res.status(200).json({
                    msg:"Order has been deleted..."
                })
            }else{
                res.status(401).json({
                    msg:"Orderid is not valid..."
                })
            }
        }else{
            res.status(400).json({
                msg:"Orderid is not valid..."
            })
        }
    }catch(e){
        console.log(e)
        res.status(500).json({
            msg:"Something went wrong..."
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



async function getOrdersById(req,res){
    const {orderid} = req.body;
    try{
        let allorders = await Order.find({orderid:orderid});
        if(allorders.length > 0){
            await giveOrders(req.ws,{type:"INDIVIDUAL",id:allorders[0].orderid});
            
            res.status(200).json({
                msg:"You have got your your order"
            })
        }else{
            res.status(400).json({
                msg:"Order is not valid"
            })
        }
    }catch(e){
        res.status(500).json({
            msg:"Something went wrong"
        })
    }
}

module.exports = {
    placeOrder,
    getOrders,
    giveOrders,
    cancelOrder,
    getOrdersById
}