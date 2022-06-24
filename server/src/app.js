require("dotenv").config();

const { PORT } = process.env;

const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const tmiWrapper = require("./twitch");

const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

io.on("connection", (socket) => {
  tmiWrapper(socket);
});

server.listen(PORT || 3001, () => {
  console.log(`Server is running on port ${PORT}`);
});
