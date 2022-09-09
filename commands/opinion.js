const Discord = require('discord.js');
const canvacord = require ('canvacord');


module.exports={
    name:'opinion',
    description:'opinion lmao',
    category: 'Imagery',
    usage:'a$opinion <person> <opinion>',
    async execute(Client, message, args){
        let opi = message.content.split(/\s+/g).slice(1).join(" ");
        let user = message.mentions.users.first();
        if (!opi) {
            return message.channel.send('You must provide a opinion!');
        }
        if (message.mentions.users.size < 1){
            let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
            let image = await canvacord.Canvas.opinion(avatar, opi);
            let attachment = new Discord.MessageAttachment(image, "trashed.png");
        
             return message.channel.send(attachment)
        }
        
        if(message.mentions.users.size >= 1){
            let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
            let image = await canvacord.Canvas.opinion(avatar, opi);
            let attachment = new Discord.MessageAttachment(image, "trashed.png");
        
             return message.channel.send(attachment);
        }
        
    }
}