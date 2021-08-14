const Discord = require('discord.js');

const Client = new Discord.Client;

const prefix = "+"

Client.on('ready', () => {
    console.log('bot opérationnel') 
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type = "dm") return;

    //!ping
    if(message.content = "ping"){
        message.channel.send("pong");
    }
    
    if(message.content = prefix + "stat"){
         message.channel.send("**" + message.author.username + "** qui a pour identifient : __" + message.author.id + "__a posté un message");
    } 
    else if(message.content.startWith( prefix + "kick")){
        let mention = message.mentions.members.first();

        if(mention = undefined){
            message.reply("Membre introuvable ou mal mentionné.")
        }
        else {
            if(mention.kickable){
                mention.kick();
                message.channel.send(mention.displayName + " a été kick avec succès !");
            }
            else {
                message.reply("Impossible de kick ce membre !")
            }
        }
    } 
    }
);

Client.login("ODc1OTE0MDA2MzE2MDc3MDg3.YRccfA.d_zq9QpMUpbsVo7u2dlStVranAA");