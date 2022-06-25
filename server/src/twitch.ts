import { Socket } from 'socket.io';
import { Client } from 'tmi.js';

export default (socket: Socket) => {
  const { TWITCH_CHANNEL } = process.env;
  if (!TWITCH_CHANNEL) {
    return;
  }
  const client = new Client({
    channels: [TWITCH_CHANNEL]
  });

  client.connect();
  client.on('message', (_, tags, message) => {
    console.log(tags);
    socket.emit('new-message', {
      username: tags['display-name'],
      color: tags.color,
      isSub: tags.subscriber,
      message
    });
  });
};
