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


ws.on("connection", (ws,req) => {
    if(req.url === '/'){
        sendProductData(ws);

    ws.on('message',(data)=>{

    })
    ws.on("close", () => {
        ws.send("Buy");
    });
    }
});

ws.on("connection", (ws,req) => {
    if(req.url === '/orders'){
        giveOrders(ws);
    }
});

ws.on("connection", (ws,req) => {
    if(req.url === '/vieworeder/:orderid'){
        ws.send(req.params.id)
    }
});



app.use("/api",OrderRoute)

app.listen(PORT, () =>
    console.log(`Server is running at http://localhost:${PORT}`)
);