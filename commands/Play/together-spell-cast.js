const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('together-spell-cast')
    .setDescription('和朋友一起在語音頻道玩SpellCast遊戲');

module.exports = { data };
