const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('help')
    .setDescription('機器人會傳送指令列表');

module.exports = { data };
