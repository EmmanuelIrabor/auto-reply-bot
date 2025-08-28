const { Client } = require('discord.js-selfbot-v13')

const client = new Client({
    checkupdate: false
});

Client.on('ready', async () =>{
    console.log('Client is ready !')
});

client.on('messageCreate' , async(message)=>{
    if (message.content.toLowerCase () === "test"){
        message.reply("Test worked!")
    }
});

client.login(process.env.TOKEN);

const { File } = require("formdata-node");
global.File = File;
