const Discord = require('discord.js');
module.exports={
    name:'bird',
    description:'Shows a bird',
    category:'Imagery',
    usage:'a$bird',
    async execute(Client, message, args) {
        const superagent = require("superagent");
      const { body } = await superagent
      .get('https://some-random-api.ml/animal/bird');
      const embed  = new Discord.MessageEmbed()
      .setColor(0x00A2E8)
      .setDescription(body.fact)
      .setImage(body.image);
      
      message.channel.send({embed})
    }
};