const giveMeAJoke = require('discord-jokes');

module.exports={
    name:'joke',
    description:'Tells a joke',
    category: 'Fun',
    usage:'a$joke',
    async execute(Client, message, args){
        giveMeAJoke.getRandomDadJoke(function(joke){
            message.reply(joke);
        })
    
    }
}