const express = require("express");
const path = require("path");
const { WebSocketServer } = require("ws");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname + "/public")));
let conns = [];
const ws = new WebSocketServer({
    port: 4000,
});

ws.on("connection", (ws) => {
    ws.send("Hello");

    ws.on("close", () => {
        ws.send("Buy");
    });
});

app.get("/", (req, res) => {
    res.sendFile("./index.html");
});
app.listen(PORT, () =>
    console.log(`Server is running at http://localhost:${PORT}`)
);