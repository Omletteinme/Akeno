const Discord = require('discord.js');
const { RandomPHUB } = require('discord-phub');
const nsfw = new RandomPHUB(unique = true);
const superagent = require('superagent')
const { EmbedBuilder } = require('discord.js');



module.exports={
    name:'pgif',
    description:'NSFW porn gif cmd',
    category:'NSFW',
    usage:'a$pgif',
    async execute(Client, message, args){
        var errMessage = "This Channel Isnt NSFW!";

        if (!message.channel.nsfw) {
           message.react('💢');
           return message.reply(errMessage)
        }
        
       else{ 
         const superagent = require("superagent");
         const { body } = await superagent
      .get('https://nekobot.xyz/api/image?type=pgif');
      const embed  = new Discord.MessageEmbed()
      .setColor(0x00A2E8)
      .setFooter('😏 porn gif')
      .setImage(body.message);
      
      message.channel.send({embed})
       
         }
       }
       
    
    
   }
    