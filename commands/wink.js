const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');
module.exports={
    name:'wink',
    description:'Wink at someone',
    category:'Imagery',
    usage:'a$wink <someone>',
    async execute(Client, message, args) {
        let user = message.mentions.users.first();
        if (message.mentions.users.size < 1) return message.reply('You must mention someone to wink at them.');
        else{
            const superagent = require("superagent");
            const { body } = await superagent
            .get('https://some-random-api.ml/animu/wink');
            const embed  = new Discord.MessageEmbed()
            .setColor(0x00A2E8)
            .setDescription(`${message.author.username} winked at ${user.username} 😉`)
            .setImage(body.link);
            
            message.channel.send({embed});
        }
       
    }
};