const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
    .setName('leave')
    .setDescription('讓機器人離開您的語音頻道');

module.exports = { data };