const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const answer = [
    "8D",
    "8=D",
    "8==D",
    "8===D",
    "8====D",
    "8=====D",
    "8======D",
    "8=======D",
    "8========D",
    "8=========D",
    "8==========D",
    "8===========D",
    "8============D",
    "8=============D",
    "8==============D",
    "8===============D",
    "8================D"
]


module.exports ={
    
            name: 'pp',
            description: 'What is your pp size',
            usage:'a$pp',
            category: 'Fun',
    

        async execute(Client, message, args) {
        let user = message.mentions.users.first();

        if (!user) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`${message.author.username}\'s pp size`)
            .setDescription(answer[Math.round(Math.random() * (answer.length - 1))])
            .setColor('#646770')
            .setTimestamp();
            message.channel.send(embed);
        }

        else{
            const embed = new Discord.MessageEmbed()
            .setTitle(`${user.username}\'s pp size`)
            .setDescription(answer[Math.round(Math.random() * (answer.length - 1))])
            .setColor('#646770')
            .setTimestamp();
        return message.channel.send(embed);
        }
            
            

    }
}