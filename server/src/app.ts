import { join } from 'path';
import { config } from 'dotenv';
import express, { static as Static } from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import tmiWrapper from './twitch';

const folderPath = join(__dirname, '..', '.env');
config({
  path: folderPath
});
const { PORT } = process.env;

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

const publicPath = join(__dirname, '..', 'public');
app.use(Static(publicPath));

io.on('connection', (socket) => {
  tmiWrapper(socket);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
