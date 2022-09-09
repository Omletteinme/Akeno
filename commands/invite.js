const Discord = require('discord.js');

module.exports={
  name:'invite',
  description:'Invite the bot',
  category: 'Info',
  usage:'a$invite',
  async execute(Client, message, args){
    const embed = new Discord.MessageEmbed()
    .setColor('ffe6e6')
    .setTitle('Invite the bot')
    .setDescription('https://discord.com/api/oauth2/authorize?client_id=1004359184516657172&permissions=8&scope=bot')
    .setThumbnail('https://cdn.discordapp.com/avatars/1004359184516657172/d1d03d991b7170651f0177699a21c954.webp?size=4096');
    message.channel.send(embed);
  }
}