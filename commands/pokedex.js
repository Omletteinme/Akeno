const Discord = require('discord.js');
const superagent = require('superagent');
const { execute } = require('./hack');
const { EmbedBuilder } = require('discord.js');

module.exports={
    name:'pokedex',
    description:'Search pokemon',
    category:'Fun',
    usage:'a$pokedex <pokemon>',
    async execute(Client, message, args) {
        const poke = args[0];
        if (poke===undefined) {
            message.channel.send(`**Please mention the pokemon**`); 
            return;
        }
        const fetch = require("node-fetch");
        try {
            fetch(`https://some-random-api.ml/pokedex?pokemon=${poke}`).then((res)=>{
                return res.json()
            }).then ((data)=>{
                if (data.name===undefined){
                    message.reply("**Could not find that pokemon.**");
                    return;
                }
                let stats = "";
                for (let [key, value] of Object.entries(data.stats)) {
                  stats += `${key}: ${value}\n`;
                }
                const pokemon = new Discord.MessageEmbed()
                    .setColor("DARK_RED")
                    .setTitle(data.name.toUpperCase())
                    .setAuthor(`Akeno Pokedex`, Client.user.displayAvatarURL())
                    .addFields(
                        { name: "Name", value: data.name, inline: true},
                        { name: "Type" , value: data.type.map(el=>el).join(", "), inline: true},
                        { name: "Abilities", value: data.abilities.map(el=>el).join(", "), inline: true},
                        { name: "Height", value: `${data.height}`, inline: true},
                        { name: "Weight", value: data.weight},
                        { name: "Evolution", value: data.family.evolutionLine.length>0?data.family.evolutionLine.map(el=>el).join("→"):"no evolution", inline: true},
                        { name: "Stats", value: stats, inline: false}
                    )
                	.setTimestamp()
                    .setDescription(data.description)
                    .setThumbnail(`http://i.some-random-api.ml/pokemon/${poke}.gif`);
                message.channel.send(pokemon);
            })
        }
        catch (err){
                message.channel.send("**Something went wrong**");
        }
    
    }
}