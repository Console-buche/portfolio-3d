const path = require("path");

const folderPath = path.join(__dirname, "..", ".env");
require("dotenv").config({
  path: folderPath
});

const { PORT } = process.env;

const port = PORT || 3001;

const express = require("express");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const tmiWrapper = require("./twitch");

const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

io.on("connection", (socket) => {
  tmiWrapper(socket);
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
