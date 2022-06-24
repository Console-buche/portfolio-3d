const tmi = require("tmi.js");

const { TWITCH_USERNAME } = process.env;

module.exports = (socket) => {
  const client = new tmi.Client({
    channels: [TWITCH_USERNAME],
  });

  client.connect();
  client.on("message", (channel, tags, message, self) => {
    socket.emit("new-message", {
      username: tags.username,
      message,
    });
  });
};
