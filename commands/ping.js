module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        if(message.member.roles.cache.has('931646934236667924')){
            message.channel.send("I toggled your ping role off. ");
            message.member.roles.remove('931646934236667924')
        } else{
            message.member.roles.add('931646934236667924')
            message.channel.send('I toggled your ping role on.');
        }
        
    }
}