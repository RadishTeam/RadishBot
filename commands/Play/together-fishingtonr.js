const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('together-fishingtonr')
    .setDescription('和朋友一起在語音頻道玩Fishington遊戲');

module.exports = { data };
