const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('together-letter-tile')
    .setDescription('和朋友一起在語音頻道玩Letter Tile遊戲');

module.exports = { data };
