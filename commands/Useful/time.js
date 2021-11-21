const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('time')
    .setDescription('機器人會告訴您現在的台灣時間 (GMT+8)');

module.exports = { data };