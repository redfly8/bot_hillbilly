module.exports = {
    name: 'ban',
    description: "this is a banning command",
    async execute(message, args, Discord){            
        const member = message.mentions.users.first();
        if(member){memberTarget =message.guild.members.cache.get(member.id);}
        const reason = args.splice(1, args.length ).join(' ')
        const mod = message.author
        //if(!target){return message.reply('please mention a target for your ban.')}        
        if(!reason){return message.reply('please add a reason to your ban.')}
        //safety
        
        if(!message.member.permissions.has("BAN_MEMBERS")){
            return message.channel.send("you don't have banning permissions.")
        }
        
        if(memberTarget.permissions.has("KICK_MEMBERS")){
            return message.channel.send('you will have to manually ban that person.')          
        }
        
      
        //memberTarget.send('banmessage');
        try{   
            let ban = await memberTarget.send(`you have been banned from heehaws hillbillys by ${mod} for ${reason}`);
             memberTarget.ban()
        }catch{return  memberTarget.ban()}
    

        
     
      
        
        
        
        const ban_embed = new Discord.MessageEmbed() 
        .setColor('#990000')
        .setTitle('ban ⛔')
        .addFields(
            { name: 'banning moderator', value: mod },
            { name: 'target', value: `${memberTarget}` },
            { name: 'reason', value:  reason}
            );
        message.guild.channels.cache.find(c => c.name == "hillbillylogs").send(ban_embed);
        
        }
            
        
        
        }

