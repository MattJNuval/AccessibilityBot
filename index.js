const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NjczMDQ5NzEyMDAxMDI0MDQw.XjYheA.AjV5KGn0zZXviRvYLLYH3ZrIhfY';

var isJoined = false;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.author == client.user) {
        return;
    } 

    msg.channel.send(msg.author + 'Said: ' + msg, { 
        tts: true,
    });

});

client.login(token);