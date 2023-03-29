require("dotenv").config()
const express = require("express");
const path = require("path");
var cors = require('cors')
const fs = require("fs");
const { WebSocketServer } = require("ws");
const sendProductData = require("./lib/Stremer");
const {giveOrders} = require("./controller/Order.controller")
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Db is connected")
    })
    .catch((e)=>{
        console.log(e)
    })
/**
 * Importing Order Route
 */
const OrderRoute = require("./routes/Order.route")

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors({
    origin:"*",
    methods:["GET","POST","PUT","DELETE"]
}))


app.use(express.static(path.join(__dirname + "/public")));
let conns = [];
const ws = new WebSocketServer({
    port: 4000,
});


let clients = [];
console.log("Before",clients.length)
ws.on("connection", (ws,req) => {
    clients.push(ws)
    console.log("After",clients.length)
    if(req.url === '/'){
        // ws.on("message",(data)=>{
        //     const {event} = JSON.parse(data);
        //     console.log(event)
        //     if(event === "getproducts"){
        //     }else if(event === "getorders"){
        //     }
        // })
        sendProductData(clients[0]);
        giveOrders(clients[0]);
    }

    ws.on('close',()=>{
        clients.pop(ws)
    })
});


function getWS(req,res,next){
    req.ws = clients[0];
    next();
}

app.use(getWS)
app.use("/api",OrderRoute)


app.listen(PORT, () =>
    console.log(`Server is running at http://localhost:${PORT}`)
);