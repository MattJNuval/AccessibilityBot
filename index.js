const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NjczMDQ5NzEyMDAxMDI0MDQw.XjZAzA.Oc65zys1Q2q2HEcqi1zuFwbC_Mc';

var isJoined = false;


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('guildMemberAdd', function (member) {
    isJoined = true;
});

client.on('typingStart', function (channel, user) {
    channel.send(user + " has started typing", {
        tts: true,
    }).then(msg => { msg.delete(3000) });
});

client.on('typingStop', function (channel, user) {
    channel.send(user + " has stopped typing", {
        tts: true,
    }).then(msg => { msg.delete(3000) });
});

client.on('message', msg => {
    if(msg.author == client.user) {
        return;
    } 

    if (isJoined == true) {
        isJoined = false;
        msg.channel.send(msg.author +' just joined the server!', {
            tts: true,
        }).then(msg => { msg.delete(3000) });
        return; 
    }

    msg.channel.send(msg.author + 'Said: ' + msg, {
        tts: true,
    }).then(msg => { msg.delete(3000) });
    

});

client.login(token);