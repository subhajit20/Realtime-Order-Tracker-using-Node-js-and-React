const express = require("express");
const route = express.Router();
const {placeOrder,getOrders,cancelOrder,getOrdersById,changeOrderStatus} = require("../controller/Order.controller")

route.post("/placeorder",placeOrder);
route.post("/getallorders",getOrders);
route.post("/cancel",cancelOrder);
route.post("/getaorder",getOrdersById);
route.post("/changestat",changeOrderStatus);

module.exports = route