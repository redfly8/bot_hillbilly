module.exports = {
    name: 'rules',
    description: "discord rules.",
    execute(message, args, Discord){
        if(message.member.roles.cache.has('927932616919883887')) {
             const newEmbed = new Discord.MessageEmbed()
       .setColor('#304281')
       .setTitle('Rules')
       .addFields(
           {name: 'Rule 1', value: "Use of obscene, pornographical, racist, etc. things in your profile is forbidden."},
           {name: 'Rule 2', value: "Being friendly is very important to us. We are here to have fun. (so no insults, etc.)"},
           {name: 'Rule 3', value: "Any kind of pestering is forbidden (earrape, spam, channel hopping etc.)"},
           {name: 'Rule 4', value: "Recording in voice channels is forbidden."},
           {name: 'Rule 5', value: "Advertisement is forbidden in any way, shape or form. (this includes DMs and your profile!)"},
           {name: 'Rule 6', value: "Please respect the chain of command (don't ping @Owner for everything, @Moderator or @Discord admin can help with discord issues, for troll reporting, please ping @FS admin"},
           {name: 'Rule 7', value: "NOTE: Admins don't allways have to link a punishment directly to one of these rules, so just use your common sense. If you don't try to get banned, you probably won't get banned. If you think that a ban isn't fair, feel free to DM redfly#5924. Do NOT dm heehaw (owner) for that. Have fun 🙂"}

        

       )
       .setImage('http://www.quickmeme.com/img/b2/b22a4196aab7ccf3bf30057a0c526c0f2f20d5ff93f7947ecd5d8c1ee9848282.jpg')
       .setFooter('redfly-1/13/2022')

       message.channel.send(newEmbed)
        }else{message.channel.send("you haven't got the permissions to use this command.")}
    }
        
            
        
      

    
}
