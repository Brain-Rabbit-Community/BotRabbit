"use strict";
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var dotenv = require("dotenv");
dotenv.config();
var client = new discord_js_1.Client();
console.log(process.env.BOT_TOKEN);
var prefix = '!';
client.on("message", function (message) {
    if (message.author.bot)
        return;
    if (!message.content.startsWith(prefix))
        return;
    var commandBody = message.content.slice(prefix.length);
    var args = commandBody.split(' ');
    var command = args.shift().toLowerCase();
});
client.login(process.env.BOT_TOKEN);
