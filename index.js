const { Client } = require("discord.js-selfbot-v13");
const client = new Client();

const triggers = ["wallet", "staking", "complain"];
const reply = "GO 👇 for this ✅\ndiscord.gg/yourlink";

client.on("ready", () => {
    console.log(✅ Logged in as ${client.user.tag});
});

client.on("messageCreate", async (message) => {
    if (message.author.id === client.user.id) return;

    if (triggers.some(word => message.content.toLowerCase().includes(word))) {
        message.channel.send(reply);
    }
});

client.login(process.env.TOKEN);
