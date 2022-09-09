const Discord = require("discord.js");
const { execute } = require("./roast");
const { EmbedBuilder } = require('discord.js');

module.exports = {
name: "userinfo",
aliases: "whois",
category: "Info",
description: "Get information about a user",
usage: "a$userinfo <user>",
async execute(client, message, args){
//command

{
const user = message.mentions.users.first();
if(!user)
    return message.reply('Please mention the user who you want info about.');

var playing = ("[ " + user.presence.activities + " ]")

const whothefuq = new EmbedBuilder()
      .setTitle("User Info:")
      .addField("Full Username", `${user.tag}`)
      .addField("ID", user.id)
      .addField("Playing",playing, true)
      .addField("Status", `${user.presence.status}`, true)
      .addField("Joined Discord At", user.createdAt)
      .setColor("RANDOM")
      .setTimestamp()
      .setThumbnail(user.avatarURL())  
  message.channel.send(whothefuq)

};
}
   


};