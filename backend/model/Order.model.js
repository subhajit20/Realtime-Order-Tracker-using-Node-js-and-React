const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');


const orderSchema = new mongoose.Schema({
    orderid:{
        type:String,
        default:()=>{
            return uuidv4()
        }
    },
    title:{
        type:String,
        required:true
    },
    productimage:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Placed","Packed","Shipped","Out for Delivery","Delivered"],
        default:"Placed"
    },
    date:{
        type:String,
        default:`Ordered Date :: ${new Date().toLocaleDateString()}`
    },
    time:{
        type:String,
        default:`Ordered Time :: ${new Date().toLocaleTimeString()}`
    }
})

const Order = new mongoose.model("Order",orderSchema);

module.exports = Order