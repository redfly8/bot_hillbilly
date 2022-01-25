module.exports = {
    name: 'unmute',
    description: "this is an unmuting command",
    execute(message, args, Discord){

        if(!message.member.permissions.has("KICK_MEMBERS")){
            return message.channel.send("you don't have kicking/(un) muting permissions.")
        }
        

        const mod = message.author

        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            
            const unmute_embed = new Discord.MessageEmbed() 
                .setColor('#990000')
                .setTitle('unmute (manual) 🔊')
                .addFields(
                    { name: 'unmuting moderator', value: mod },
                    { name: 'target', value: `${target}` }                   
                );
            message.guild.channels.cache.find(c => c.name == "hillbillylogs").send(unmute_embed);
        

        } else {
            message.channel.send('user_not_found')
        }
    }

}