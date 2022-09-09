const Discord = require('discord.js');
const fs = require('fs');



const Client = new Discord.Client();
Client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


const prefix = 'a$';



  for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    Client.commands.set(command.name, command)
}

  var used1 = false;
var version = '1.0.0';

Client.on('ready', () => {
    console.log('This Client is online! ' + version);
    Client.user.setStatus('online').catch(console.error);
    Client.user.setActivity("a$you are so cute<3")
});



Client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.Client) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(!Client.commands.has(command)) return;
    try{
        Client.commands.get(command).execute(Client, message, args, commandFiles, Discord);
        
    }catch(error){
        console.error(error);
        message.reply('**BUMP!**, there was a error executing that command.')
    }

Client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send("hey cuties <3, my prefix:a$. Do a$help for more info...")
})


    

    


});



Client.login('MTAwNDM1OTE4NDUxNjY1NzE3Mg.GHQYSe.4ZVhXbI8YqxqLEYnIcNa9svwCEQkbYNwbYnh74');
