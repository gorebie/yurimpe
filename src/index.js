require("dotenv").config()
const {Client, GatewayIntentBits, Events } = require('discord.js');


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    ],
});

client.on("debug", (v) => console.log(v))

client.once(Events.ClientReady, c => {
    console.log(`Logged in as