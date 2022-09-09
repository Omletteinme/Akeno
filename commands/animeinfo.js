const Discord = require("discord.js");
const malScraper = require('mal-scraper');
const { execute } = require("./roast");

module.exports = {
  name: "animeinfo",
  category: "Fun",
description: "Get info about an anime",
usage: "a$animeinfo <anime>",
 async execute(client, message, args){
//command
const search = `${args}`;
if(!search)
return message.channel.send('**Please mention the anime**');

malScraper.getInfoFromName(search)
  .then((data) => {
  const malEmbed = new Discord.MessageEmbed()
    .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
    .setThumbnail(data.picture)
    .setColor('#ffc1cc') //I personally use bubblegum pink!
    .addField('English Title', data.englishTitle, true)
    .addField('Japanese Title', data.japaneseTitle, true)
    .addField('Type', data.type, true)
    .addField('Episodes', data.episodes, true)
    .addField('Rating', data.rating, true)
    .addField('Aired', data.aired, true)
    .addField('Score', data.score, true)
    .addField('Score Stats', data.scoreStats, true)
    .addField('Link', data.url);

    message.channel.send(malEmbed);

  })
}
};