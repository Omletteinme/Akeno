const Discord = require('discord.js');
const superagent = require('superagent');

module.exports={
    name:'animequote',
    description:'Random animequote',
    usage:'a$animequote',
    category:'Fun',
    async execute(Client, message, args) {

        const superagent = require("superagent");
      const { body } = await superagent
      .get('https://animechan.vercel.app/api/random');
      const embed  = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Anime: ${body.anime}`)
      .setDescription(body.quote)
      .setFooter(body.character);
      
      message.channel.send({embed})
    }
}