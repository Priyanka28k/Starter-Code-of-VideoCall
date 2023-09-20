const express = require("express");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");

const io = new Server(); // socket server
const app = express();

app.use(bodyParser.json());

io.on("connection", (socket) => {

    
});

app.listen(3000, () => {
  console.log(`Http server running at PORT 3000`);
});

io.listen(3001);
