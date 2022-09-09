const Discord = require('discord.js');
const canvacord = require ('canvacord');


module.exports={
    name:'gay',
    description:'gay lmao',
    category: 'Imagery',
    usage:'a$gay',
    async execute(Client, message, args){
        let user = message.mentions.users.first();
        if (message.mentions.users.size < 1){
            let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
            let image = await canvacord.Canvas.rainbow(avatar);
            let attachment = new Discord.MessageAttachment(image, "gayed.gif");
        
             return message.channel.send(attachment)
        }
        
        if(message.mentions.users.size >= 1){
            let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
            let image = await canvacord.Canvas.gay(avatar);
            let attachment = new Discord.MessageAttachment(image, "gayed.gif");
        
             return message.channel.send(attachment);
        }
        
    }
}