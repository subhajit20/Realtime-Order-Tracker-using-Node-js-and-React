const express = require("express");
const route = express.Router();
const {placeOrder,getOrders} = require("../controller/Order.controller")

route.post("/placeorder",placeOrder);
route.post("/getallorders",getOrders);

module.exports = route