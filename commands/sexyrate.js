const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');
module.exports={
  name:'sexyrate',
  description:'Rate a user\'s sexy-ness',
  category: 'Fun',
  usage:'a$sexyrate <person>',
  async execute(Client, message, args){
    const sexyrate = Math.floor(Math.random() * 100)
    let user = message.mentions.users.first();
        if (message.mentions.users.size < 1){
            const embed = new Discord.MessageEmbed()
            .addField(":heart_decoration: Sexy Rate :heart_decoration: ", "I rate you a " + sexyrate + " out of 100 on the sexy scale")
            .setImage(message.author.displayAvatarURL)
       message.channel.send({embed})
        }
        if(message.mentions.users.size >= 1){
            const embed = new Discord.MessageEmbed()
            .addField(":heart_decoration: Sexy Rate :heart_decoration: ", `I rate ${user.username} a ` + sexyrate + " out of 100 on the sexy scale")
            .setImage(user.displayAvatarURL)
       message.channel.send({embed})
        }
    
  }
}