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
ws.on("connection", (ws,req) => {
    clients.push(ws)

    console.log(clients.length)
    if(req.url === '/'){
        sendProductData(ws);
        
        ws.on('message',(data)=>{

        })
        ws.on("close", () => {
            ws.send("Buy");
        });
    }else if(req.url === '/orders'){
        giveOrders(ws);
    }

    ws.on('close',()=>{
        ws.send("okk")
    })
});


// ws.on("connection", (ws,req) => {
//     if(req.url === '/vieworeder/:orderid'){
//         ws.send(req.params.id)
//     }
// });

function getWS(req,res,next){
    req.ws = clients[0];
    next();
}

app.use(getWS)
app.use("/api",OrderRoute)


app.listen(PORT, () =>
    console.log(`Server is running at http://localhost:${PORT}`)
);