// index.js
const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Minimal Express server to keep Railway happy
app.get("/", (req, res) => {
  res.send("Discord Auto-Reply Service is running ✅");
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

// Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Define keywords and replies
const autoReplies = {
  "price": "Our pricing details can be found on the website.",
  "contact": "You can reach our support team at support@example.com.",
  "demo": "We’d be glad to set up a demo for you! Please DM us your email."
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const msg = message.content.toLowerCase();
  for (let keyword in autoReplies) {
    if (msg.includes(keyword)) {
      message.reply(autoReplies[keyword]);
      break;
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
