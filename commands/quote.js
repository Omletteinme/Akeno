const Discord = require('discord.js');
const superagent = require('superagent');
const { EmbedBuilder } = require('discord.js');

module.exports={
    name:'quote',
    description:'Random quote',
    category:'Fun',
    usage:'a$quote',
    async execute(Client, message, args) {
        const superagent = require("superagent");
      const { body } = await superagent
      .get('https://api.quotable.io/random');
      const embed  = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Quote")
      .setDescription(body.content)
      .setFooter(body.author)
      
      message.channel.send({embed})
    }
}