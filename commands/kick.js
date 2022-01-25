module.exports = {
    name: 'kick',
    description: "this is a kicking command",
    async execute(message, args, Discord){            
        const member = message.mentions.users.first();        
        const reason = args.splice(1 , args.length ).join(' ')
        
        
        if(member){memberTarget =message.guild.members.cache.get(member.id);}
        
        if(!message.member.permissions.has("KICK_MEMBERS")){
            return message.channel.send("you don't have kicking permissions.")
        }

        
        if(memberTarget.permissions.has("KICK_MEMBERS")){
            return message.channel.send('you will have to manually kick that person.')          
        }
        

        



        const mod = message.author
        //if(!target){return message.reply('please mention a target for your ban.')}        
        if(!reason){return message.reply('please add a reason to your kick.')}
        
      
        //memberTarget.send('banmessage');
        try{   
            let kick = await memberTarget.send(`you have been kicked from heehaws hillbillys by ${mod.tag} for ${reason}`);
             memberTarget.kick()
        }catch{return memberTarget.kick()}
    

        
     
        
        
        
        
        const kick_embed = new Discord.MessageEmbed() 
        .setColor('#990000')
        .setTitle('kick ⛔')
        .addFields(
            { name: 'kicking moderator', value: mod },
            { name: 'target', value: `${memberTarget}` },
            { name: 'reason', value: `${reason}`}
            );
        message.guild.channels.cache.find(c => c.name == "hillbillylogs").send(kick_embed);
        
        }
            
        
        
        }
