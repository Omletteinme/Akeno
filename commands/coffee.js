const Discord = require('discord.js');
const superagent = require('superagent');

module.exports={
    name:'coffee',
    description:'Random coffee image',
    category:'Imagery',
    usage:'a$coffee',
    async execute(Client, message, args) {
        const superagent = require("superagent");
      const { body } = await superagent
      .get('https://coffee.alexflipnote.dev/random.json');
      const embed  = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Coffee")
      .setImage(body.file)
      .setDescription(`Random Coffee`)
      
      message.channel.send({embed})
    }
}