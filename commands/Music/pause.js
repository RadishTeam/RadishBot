const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('pause')
    .setDescription('讓機器人暫停當前音樂');

module.exports = { data };