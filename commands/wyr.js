const Discord = require('discord.js');
const superagent = require('superagent');
const { EmbedBuilder } = require('discord.js');
module.exports={
    name:'wyr',
    description:'Random wyr',
    category:'Fun',
    usage:'a$wyr',
    async execute(Client, message, args) {
        const superagent = require("superagent");
      const { body } = await superagent
      .get('https://would-you-rather-api.abaanshanid.repl.co/');
      const embed  = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Would You Rather")
      .setDescription(body.data)
      .setFooter('Random WYR')
      
      message.channel.send({embed})
    }
}