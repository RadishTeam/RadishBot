const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('join')
    .setDescription('讓機器人加入您的語音頻道');

module.exports = { data };