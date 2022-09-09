const Discord = require('discord.js');
const { execute } = require('./invite');

module.exports={
    name:'av',
    description:'Displays user avatar',
    usage:'a$av',
    categorry:'Info',
    async execute(Client, message, args){
        let user = message.mentions.users.first();
        if(!user){
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.username}\'s avatar`)
            .setImage(message.author.displayAvatarURL());
            message.channel.send(embed);
        }
        else{
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${user.username}\'s avatar`)
            .setImage(user.displayAvatarURL());
            message.channel.send(embed);
        }
        
    }
}