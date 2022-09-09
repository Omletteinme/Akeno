const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');
module.exports={
  name:'serverinfo',
  description:'Current server info',
  category: 'Info',
  usage:'a$serverinfo',
  async execute(Client, message, args){
    const embed = new Discord.MessageEmbed()

      .setTitle("Server Info:")
      .setColor("#08f26e")
      .setThumbnail(message.guild.iconURL())
      .addFields(
        { name: "Server Name", value: message.guild.name, inline: true},
        { name: "Server Owner", value: message.guild.owner, inline: true},
        { name: "Server Description", value: message.guild.description, inline: true},
        { name: "Server Region", value: message.guild.region, inline: true},
        { name: "Server Language", value: message.guild.preferredLocale, inline: true},
        { name: "MFA-Level", value: message.guild.mfalevel, inline: true},
        { name: "Creation Date", value: message.guild.createdAt},
        { name: "Member Count", value: message.guild.memberCount, inline: true},
        { name: "Channel Count", value: message.guild.channels.cache.size, inline: true},
        { name: "Roles Count", value: message.guild.roles.cache.size, inline: true},
        { name: "No. of Boosts", value: message.guild.premiumSubscriptionCount, inline: true},
        { name: "Boost Level", value: message.guild.premiumTier, inline: true},
        { name: "Vanity-URL", value: message.guild.vanityURLCode, inline: true},

      )
      
      
      
      
      


      message.channel.send(embed)
  }
}