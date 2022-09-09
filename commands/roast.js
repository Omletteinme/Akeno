const Discord = require('discord.js');
const insulter = require('insult');
const { EmbedBuilder } = require('discord.js');


module.exports={
    name:'roast',
    description:'Roast Someone',
    category: 'Fun',
    usage:'a$roast <person>',
    async execute(Client, message, args){
        let user = message.mentions.users.first();
        if (message.mentions.users === message.author) return message.reply('It\'s okay bro... it\'s okay, you dont need to roast yourself');
        if (message.mentions.users.size < 1) return message.reply('You must mention someone to roast them.');
        const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`${user.username}, ${insulter.Insult()}`)
        message.channel.send(embed).then().catch(console.error);
        
    }
}