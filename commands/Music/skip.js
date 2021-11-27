const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('skip')
    .setDescription('讓機器人跳過當前歌曲');

module.exports = { data };