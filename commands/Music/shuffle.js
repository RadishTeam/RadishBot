const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('shuffle')
    .setDescription('讓機器人打亂歌曲列表');

module.exports = { data };