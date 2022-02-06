module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args, Discord){

        const admincmds = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Admin-help')
        .addFields(
            {name:'mute' , value:'mutes a person. Syntax: ?mute [user] [reason]'},
            {name:'unmute' , value:'manually unmutes a person. Syntax: ?unmute [user] '},
            {name:'ban' , value:'bans a person. Syntax: ?ban [user] [reason]'},
            {name:'kick' , value: "kicks a member. Syntax: ?kick [user] [reason] "},
            {name:'clear' , value:'clears a set amount of messages. Syntax: ?clear [amount] note: you can only delete messages that are max. 14 days old.'},
            {name:'vote' , value: "add (see members help), init and delete. \n -init: makes a new dedicated voting channel. Syntax: ?vote init[name you want your channel to be] \n -delete deletes a dedicated voting channel. If you don't need a votingchannel anymore, please use this and don't just delete the channel. Syntax: [do this in the votingchannel you want to delete] ?vote delete "}
            
        )

        const membercmds = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('member-help')
        .addFields(
            {name: 'magic8' , value: 'sends a totally not random answer. Syntax: ?magic8 [question]'},
            {name:'ping' , value:'toggles your ping role on or off.'},
            {name:'vote add' , value:'adds a voting entry. This only works in dedicated voting channels. Syntax: ?vote add [whatever you want, a description and a link to modhub for example]'}
        )
        const help_1 = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('help')
        .addFields(
            {name: 'help' , value: 'to use the help command, type ?help [admin] or [member] according to what you are looking for. Note that for admin help you need basic admin flags.'}
        )





        if(!args[0]){
            return message.reply(help_1)

        }else if(args[0] == 'admin'){
            if(message.member.permissions.has("KICK_MEMBERS")){
                message.channel.send(admincmds)
            }else return message.reply('for this command you need the kick members flag.') 
        }else if(args[0] == 'member'){
            message.channel.send(membercmds)
        }
    }
    
}
