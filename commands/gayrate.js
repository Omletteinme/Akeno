const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');
module.exports={
  name:'gayrate',
  description:'Rate a user\'s sexy-ness',
  category: 'Fun',
  usage:'a$gayrate <person>',
  async execute(Client, message, args){
    const gayrate = Math.floor(Math.random() * 100)
    let user = message.mentions.users.first();
        if (message.mentions.users.size < 1){
            const embed = new Discord.MessageEmbed()
            .addField(":rainbow_flag: Gay Rate Rate :rainbow_flag: ", `You are ${gayrate}% gay.`)
            .setImage(message.author.displayAvatarURL)
       message.channel.send({embed})
        }
        if(message.mentions.users.size >= 1){
            const embed = new Discord.MessageEmbed()
            .addField(":rainbow_flag: Sexy Rate :rainbow_flag: ", `${user.username} is ${gayrate}% gay`)
            .setImage(user.displayAvatarURL)
       message.channel.send({embed})
        }
    
  }
}