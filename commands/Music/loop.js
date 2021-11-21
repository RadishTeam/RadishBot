const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('loop')
    .setDescription('讓機器人開始或停止循環撥放音樂');

module.exports = { data };