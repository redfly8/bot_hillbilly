module.exports = {
    name: 'clear',
    description: "this is a ping command!",
    async execute(message, args){
        if(!message.member.permissions.has("MANAGE_MESSAGES")){
            return message.channel.send("you don't have message managing permissions.")
        }
      
            if(!args[0]) return message.reply('add the amount of messages you want to delete.')
            if(isNaN(args[0])) return message.reply('aour argument has to be a number.')
            if(args[0] > 100) return message.reply('for performance reasons you can only delete 100 messages at a time.')
            if(args[0] < 1) return message.reply('how do you want me to delete that number of messages??? ;-)')
            var delnum = args[0] + 1
            
            try{
                await message.channel.messages.fetch({limit: delnum}).then(messages => {
                    message.channel.bulkDelete(messages)});
                        
                    
          

                }catch{
                
            
        

         

        }
        

    }
}