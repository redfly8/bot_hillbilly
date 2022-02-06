const channels = []

module.exports = {
    name: 'vote',
    description: "this is a voting command.",
    async execute(message, args, Discord){
        
        let argssave = [...args]
       
        const name = args.splice(1, args.length ).join('-')
        
       
        if(args[0] == 'init'){
            if(!message.member.permissions.has("MANAGE_CHANNELS")){return message.reply("For this command you need to be able to manage channels.")}
            message.channel.send('initalizing voting channel');
            
           
            await( message.guild.channels.create(name, ));
                {message.guild.channels.cache.find(c => c.name == name).send("welcome to the new voting channel. Check ?help to see how to use this.")}
                let current_channel = message.guild.channels.cache.find(c => c.name == name);
                let channelid = current_channel.id
          
               
                
                channels.push(channelid);
                


        }else if(args[0] == 'add'){
            let x = channels.indexOf(message.channel.id);
            if(x == -1){return message.channel.send ("I can only do that in voting channels.")}
            
            if(!args[1]){"please add content you want to vote about."}
            const content = argssave.splice(1, argssave.length ).join(' ') 
            message.delete();
            
            const voting_embed = new Discord.MessageEmbed() 
                .setColor('#009900')
                .setTitle('vote ⁉️')
                .addFields(
                { name: `${message.author.tag} wants to add`, value: `${content}`} 
                );
                const yesemoji = '✅';
                const noemoji = '❌';
                let embedsend = await message.channel.send(voting_embed);
                embedsend.react(yesemoji);
                embedsend.react(noemoji);
           
            
            
         
           

        }else if(args[0] == 'delete'){  
            if(!message.member.permissions.has("MANAGE_CHANNELS")){return message.reply("For this command you need to be able to manage channels.")}          
            let x = channels.indexOf(message.channel.id);
            if(x == -1){return message.channel.send ("I can only delete bot initialized voting channels...")}
            var removed = channels.splice(x,1);
            
            message.channel.delete();

        }

        
    }
}