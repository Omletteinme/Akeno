const Discord = require('discord.js');
const canvacord = require ('canvacord');


module.exports={
    name:'spank',
    description:'spank someone',
    category: 'Imagery',
    usage:'a$spank <person>',
    async execute(Client, message, args){
        let user = message.mentions.users.first();
        if (message.mentions.users.size < 1){
             return message.channel.send("You need to **mention** someone to spank them")
        }
        
        if(message.mentions.users.size >= 1){
            let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
            let you = message.author.displayAvatarURL({dynamic:false, format:'png'});
            let image = await canvacord.Canvas.spank(you,avatar);
            let attachment = new Discord.MessageAttachment(image, "spanked.gif");
        
             return message.channel.send(attachment);
        }
        
    }
}