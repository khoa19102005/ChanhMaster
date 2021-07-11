//import the Discord Library
const Discord = require("discord.js");
const colors = require("colors");
//create a new Client
const client = new Discord.Client({
  fetchAllMembers: false,
  restTimeOffset: 0,
  disableMentions: "all",
  messageCacheMaxSize: 10,
  messageEditHistoryMaxSize: 10,
  restWsBridgetimeout: 100,
  disableEveryone: true,
  shards: "auto",
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
//import the config.json file
const token = process.env.DISCORD_TOK;
//import our databasing system
const Enmap = require("enmap");
//create all 3 different databases for each application system
client.settings = new Enmap({
  name: "settings",
  dataDir: "./dbs/1"
});
client.settings2 = new Enmap({
  name: "settings",
  dataDir: "./dbs/2"
});
client.settings3 = new Enmap({
  name: "settings",
  dataDir: "./dbs/3"
});
client.jointocreatemap = new Enmap({
  name: "settings",
  dataDir: "./dbs/jointocreatemap"
}); //for the temp channels
//LOAD EACH MODULE FOR CMDS AND APPLIES,
require(`./modules/cmds`)(client);
require(`./modules/jointocreate`)(client);
//login to the BOT
const prefix = "!";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
});

client.login(token);
