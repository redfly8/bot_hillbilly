module.exports = {
    name: 'magic8',
    description: "sends a random magic 8 sentence.",
    execute(message, args){
        if(!args[1]){
            return message.channel.send('please add a question and try again.')
        }
        var possAnswers = new Array("yes", "no", "maybe", "right now", "well, most definately not.", "hmmm, let me think...", "outlook is good.", "very doubtful", "kinda unsure tbh", "sure, go ahead")
        message.channel.send(possAnswers[Math.floor(Math.random()*10)])
      
    }

    
}