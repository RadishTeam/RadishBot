const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('queue')
    .setDescription('讓機器人顯示目前音樂歌單');

module.exports = { data };