const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg =require('index.json');
const prefix =('/');

bot.on('ready'.function () {
    console.log("Je suis pret a étre utiliser");
    bot.user.setActivity('rien').catch(console.error);
    
});
bot.on('message'.msg => {
    if (msg.content ==="bonjour") {
        msg.reply("COUCOU")
    }
    
});

bot.login(cfg.token)

