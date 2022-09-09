const Discord = require('discord.js');
const { RandomPHUB } = require('discord-phub');
const nsfw = new RandomPHUB(unique = true);
const superagent = require('superagent')
const { EmbedBuilder } = require('discord.js');


module.exports={
    name:'thigh',
    description:'NSFW thigh cmd',
    category:'NSFW',
    usage:'a$thigh',
    async execute(Client, message, args){
        var errMessage = "This Channel Isnt NSFW!";

        if (!message.channel.nsfw) {
           message.react('💢');
           return message.reply(errMessage)
        }
        
       else{ 
         const superagent = require("superagent");
         const { body } = await superagent
      .get('https://nekobot.xyz/api/image?type=thigh');
      const embed  = new Discord.MessageEmbed()
      .setColor(0x00A2E8)
      .setFooter('😏 thigh')
      .setImage(body.message);
      
      message.channel.send({embed})
       
         }
       }
       
    
    
   }
    