const { Client } = require('discord.js');
const ms = require('ms')
module.exports = {
    name: 'mute',
    description: "this is a muting command",
    execute(message, args, Discord) {
        
            

        if(message.member.permissions.has("KICK_MEMBERS")){

        
        const target = message.mentions.users.first();
        const mod = message.author


        


        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
            


            let memberTarget = message.guild.members.cache.get(target.id);
            if (!args[1]) {
                message.channel.send('please specify a timespan for your mute.')
                return
            }
            if (!args[2]) {
                message.channel.send('please add a reason.')
                return
            }

            let time = args[1]
            
            



            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);

            }, ms(args[1]));
            
            
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                //message.guild.channels.cache.find(c => c.name == "adminchannel").send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))} reason being ${args[2]}`);
            try{
                    
                        const reason = args.splice(2 , args.length ).join(' ')
                        
    
                        const newEmbed = new Discord.MessageEmbed()               
                        .setColor('#990000')
                        .setTitle('mute 🔇')
                        .addFields(
                            { name: 'muting moderator', value: mod },
                            { name: 'target', value: `<@${memberTarget.user.id}>` },
                            { name: 'reason', value:  reason},
                            { name: 'length', value: `${ms(ms(args[1]))}`}
                        )
                    //.setImage('https://www.computerhope.com/jargon/m/mute.jpg')
                    message.guild.channels.cache.find(c => c.name == "hillbillylogs").send(newEmbed)
                  
                  
                 
                }catch{
                    return message.channel.send('something went wrong... did you use the right syntax?')
                }
       
        
          
        } else {
            message.channel.send('user_not_found')
        }
    } else message.channel.send('you dont seem to have muting permissions...')
    }

}