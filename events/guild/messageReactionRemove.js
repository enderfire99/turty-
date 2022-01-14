const reactionRoleModels = require('../../models/ReactionRoleSchema')

module.exports = async (turty, Discord, reaction, user) =>
{
    if (reaction.message.guild.members.cache.get(user.bot)) return;

    const pete = reaction.message.guild.members.cache.get(user.id);

    const name_emoji  = reaction.emoji.name;

    //Colores
    if (reaction.message.id === '768981885510352976')
    {
        if (reaction.message.guild.members.cache.get(user.bot)) return;

        const pete = reaction.message.guild.members.cache.get(user.id);

        const name_emoji  = reaction.emoji.name;

        //para nada mas emojis que tengan un unicode ya creado, para eso tipear \:nombre_emoji: en disc
        switch (name_emoji)
        {
            case '🟡': 
                pete.roles.remove('768978803598426134');
                break;

            case '🟠': 
                pete.roles.remove('768978884027744286');
                break;

            case '🔴': 
                pete.roles.remove('768979201440088065');
                break;

            case '🌹': 
                pete.roles.remove('768979480076222495');
                break;

            case '🟣': 
                pete.roles.remove('768979050060185630');
                break;

            case '🔵': 
                pete.roles.remove('768664959357419540');
                break;

            case '🌊': 
                pete.roles.remove('768979908675239998');
                break;

            case '⚫': 
                pete.roles.remove('768980008009072663');
                break;

            case '🟢': 
                pete.roles.remove('768988448744013934');
                break;

            case '⬜': 
                pete.roles.remove('768979786592157767');
                break;

        }
    }

    //roles adicionales
    if (reaction.message.id === '865797626636664852')
    {
        if (reaction.message.guild.members.cache.get(user.bot)) return;

        const pete = reaction.message.guild.members.cache.get(user.id);

        const name_emoji  = reaction.emoji.name;

        //para nada mas emojis que tengan un unicode ya creado, para eso tipear \:nombre_emoji: en disc
        switch (name_emoji)
        {
            case 'LOL':
                pete.roles.remove('783439304524693514');
                break;

            case 'lofimusic':
                pete.roles.remove('783439342650654771');
                break;

            case 'Genshinicon':
                pete.roles.remove('789159347694993459');
                break;

            case 'bochiwaifu':
                pete.roles.remove('772654571439915069');
                break;
        }
    }

    //reaction roles 
    guild_id = reaction.message.guild.id;
    channel_id = reaction.message.channel.id;
    message_id = reaction.message.id;
    reaction_name = reaction.emoji.name;

    console.log(`guild: ${guild_id} | channel: ${channel_id} | message: ${message_id} | emoji_name: ${reaction_name}`);

    const reactionRole = await reactionRoleModels.findDeleteRole(guild_id, channel_id, message_id, reaction_name);

    if (reactionRole.length > 0){
        const usuario = reaction.message.guild.members.cache.get(user.id);

        for(i = 0; i < reactionRole.length; i++){
            usuario.roles.remove(`${reactionRole[i].role}`)
        }
    }
}