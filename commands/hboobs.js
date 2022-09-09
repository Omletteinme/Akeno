const Discord = require('discord.js');
const { RandomPHUB } = require('discord-phub');
const nsfw = new RandomPHUB(unique = true);
const superagent = require('superagent')



module.exports={
    name:'hboobs',
    description:'NSFW hentai boobs cmd',
    category:'NSFW',
    usage:`a$hboobs`,
    async execute(Client, message, args){
        var errMessage = "This Channel Isnt NSFW!";

        if (!message.channel.nsfw) {
           message.react('💢');
           return message.reply(errMessage)
        }
        
       else{ 
         const superagent = require("superagent");
         const { body } = await superagent
      .get('https://nekobot.xyz/api/image?type=hboobs');
      const embed  = new Discord.MessageEmbed()
      .setColor(0x00A2E8)
      .setFooter('😏 hentai boobs')
      .setImage(body.message);
      
      message.channel.send({embed})
       
         }
       }
       
    
    
   }
    