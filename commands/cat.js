const Discord = require('discord.js');
module.exports={
    name:'cat',
    description:'Shows a cat',
    category:'Imagery',
    usage:'a$cat',
    async execute(Client, message, args) {
        const superagent = require("superagent");
      const { body } = await superagent
      .get('https://some-random-api.ml/animal/cat');
      const embed  = new Discord.MessageEmbed()
      .setColor(0x00A2E8)
      .setDescription(body.fact)
      .setImage(body.image);
      
      message.channel.send({embed})
    }
};