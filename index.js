const Discord = require('discord.js');

const new_recruit = '729592470358327326';
const guild_member = '729587029410709536';

const bot = new Discord.Client();

bot.on('guildMemberAdd', (guildMember) => {
    guildMember.roles.add(new_recruit);
 });

bot.on('message', (message) => {

    if (message.content == '!accept') {
        message.member.roles.remove(new_recruit);
        message.member.roles.add(guild_member);
    }
    
    if (message.channel.id ==  '729591310759231528') {
        message.delete()
    }
});

bot.login('NzI5NjIyMTE1NjYxMzgxNjQy.XwLnow.K0RmeCDw367vosXDxIYYbLg-v74');

//'729592470358327326' new recruit
//'729587029410709536' guild member
