const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('together-awkword')
    .setDescription('和朋友一起在語音頻道玩Awkword遊戲');

module.exports = { data };
