const Discord = require('discord.js');
const superagent = require('superagent');
const { execute } = require('./hack');
const { EmbedBuilder } = require('discord.js');

module.exports={
    name:'waifu',
    description:'Random waifu',
    category:'Imagery',
    usage:'a$waifu',
    async execute(Client, message, args) {
        const superagent = require("superagent");
      const { body } = await superagent
      .get('https://api.waifu.im/random/');
      const embed  = new Discord.MessageEmbed()
      .setColor(body.images[0].dominant_color)
      .setFooter('Your Waifu')
      .setImage(body.images[0].url);
      
      message.channel.send({embed})
    }
}