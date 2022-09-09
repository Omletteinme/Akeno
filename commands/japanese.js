const Discord = require('discord.js');
const translate = require('translate-google');
const { execute } = require('./roast');

module.exports={
    name: 'japanese', 
    category:'Fun',
    usage: 'a$japanese <text>', 
    aliases: [],
    description:'Translate any language to japanese',

    async execute(Client, message, args){
        const transObj = args.join(" ");
        if(!transObj){
            message.channel.send("**Please mention the text**")
        }
        translate(transObj, {to: 'ja'}).then(res => {
            var embed = new Discord.MessageEmbed()
            .setTitle(res)
            .setDescription(transObj)
            .setColor("#FFC0CB");
            message.channel.send(embed);
        }).catch(err => {
            message.reply(err);
        })
    }
}