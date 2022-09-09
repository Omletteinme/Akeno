const Discord = require('discord.js');
const weather = require('weather-js');

// Episode 13 ->

module.exports = {
    name: 'weather',
    category:'Fun',
    usage:'a$weather <place>',
    description: "Used to get the weather of a place",
    execute(Client, message, args) {
  
      const city = args[0]
  
      weather.find({search: args.join(" "), degreeType: "C"}, function(error, result){
  
        if (error) return message.channel.send(error)
        if (!city) return message.channel.send("Please mention the location")
  
        if (result === undefined || result.length === 0) return message.channel.send("You didn't specify a valid location")
  
        let current = result[0].current
        let location = result[0].location
  
        const embed = new Discord.MessageEmbed()
        .setTitle(`Showing the Weather Info for ${current.observationpoint}`)
        .setDescription(current.skytext)
        .setThumbnail(current.imageUrl)
        .setColor("#00ff00")
        .setTimestamp()
        .addField("Temperature: ", current.temperature + "*C", true)
        .addField("Wind Speed: ", current.winddisplay, true)
        .addField("Humidity: ", `${current.humidity}%`, true)
        .addField("Timezone: ", `UTC${location.timezone}`, true)
        .setFooter("Weather Command")
  
        message.channel.send(embed)
  
      })
  
    }
  }