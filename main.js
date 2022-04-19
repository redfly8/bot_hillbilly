
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });


const config = require('./config.json')

const prefix = config.prefix;
const TOKEN = config.token;

const fs = require('fs');
const { CLIENT_RENEG_WINDOW } = require('tls');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('bot_online');
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');
    guildMember.roles.add(welcomeRole)
    //guildMember.guild.channels.cache.get('931649159021330502').send('channel_welcome_msg') 
    guildMember.send('welcome on heehaws hillbillys. Make sure to read the rules and have fun =) ')
});

client.on('message', message => {
    if (message.author.bot) { return }
    if (message.channel.id == '928033403868172299') {
        if (!message.content.startsWith(prefix)) { return }


        const args_ban = message.content.slice(prefix.length).split('/');
        if (args_ban.length < 3) { return message.channel.send("syntax: ?server/user/reason") }
        let admin = message.author;

        let ban_embed = new Discord.MessageEmbed()
            .setColor('#990000')
            .setTitle('ban ⛔')
            .addFields(
                { name: 'admin', value: admin },
                { name: 'server', value: args_ban[0] },
                { name: 'user', value: args_ban[1] },
                { name: 'reason', value: args_ban[2] },

            );
        message.delete();
        message.channel.send(ban_embed)


    }
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
        //} else if (command == 'youtube') {
        //client.commands.get('youtube').execute(message, args);
        //} else if (command == 'pkick') {
        // client.commands.get('pkick').execute(message, args);
        //} else if (command == 'command') {
        //client.commands.get('command').execute(message, args, Discord);
        //} else if (command == 'dm') {
        //client.commands.get('dm').execute(message, args, Discord);
        //} else if (command == 'clear') {
        //client.commands.get('clear').execute(message, args);
    } else if (command == 'kick') {
        client.commands.get('kick').execute(message, args, Discord);
    } else if (command == 'ban') {
        client.commands.get('ban').execute(message, args, Discord);
    } else if (command == 'mute') {
        client.commands.get('mute').execute(message, args, Discord);
    } else if (command == 'unmute') {
        client.commands.get('unmute').execute(message, args, Discord);
        //} else if (command == 'reactionping' ){
        //client.commands.get('reactionping').execute(message, args, Discord, client);
    } else if (command == 'help') {
        client.commands.get('help').execute(message, args, Discord);
    } else if (command == 'magic8') {
        client.commands.get('magic8').execute(message, args);
    } else if (command == 'vote') {
        client.commands.get('vote').execute(message, args, Discord);
    }
})




client.login(TOKEN)
//client.login(process.env.BOT_TOKEN);